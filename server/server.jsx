require('@babel/register')({
    extensions: ['.js', '.jsx']
  });

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  const initialTasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
  ];

  const appString = renderToString(<App initialTasks={initialTasks} />);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR with React and Express</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${PORT}`);
});

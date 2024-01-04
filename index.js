const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const serverAddress = req.headers.host;
  res.send(`
    <html>
      <head>
        <title>Server Address Display</title>
      </head>
      <body>
        <h1>Server Address:</h1>
        <p>${serverAddress}</p>
      </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
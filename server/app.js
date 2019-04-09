const express = require('express')
const app = express();

const port = 8000;

const attachRoutes = require('./routes');

attachRoutes(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
});
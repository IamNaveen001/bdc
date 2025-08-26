const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const donorRoutes = require('./routes/donorRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/donors', donorRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

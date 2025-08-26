const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const donorRoutes = require('./routes/donorRoutes');

const app = express();


app.use(cors());
app.use(bodyParser.json());

app.use('/api/donors', donorRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

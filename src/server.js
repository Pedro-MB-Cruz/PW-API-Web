require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const router = require('../router/index');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/', router);

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
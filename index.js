require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { Item } = require('./data-layer/models');
const path = require('path');
const testenv = process.env.SHOULD_SEEDS

const app = express();
app.use(cors())

const PATH_TO_WEB_APP_BUILD = 'wep-app/build';
app.use(express.static(path.join(__dirname, PATH_TO_WEB_APP_BUILD)));
app
  .get('/api/items', async (req, res) => {
    res.send({ items: await Item.findAll() });
  })
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, PATH_TO_WEB_APP_BUILD, 'index.html'));
  });

const PORT = process.env.PORT || 8007;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.${testenv}`);
});


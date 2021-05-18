const compression = require('compression');
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database.js');

const app = express();
app.use(express.json());
app.use(compression());
app.use(cors());

app.use(express.static(path.join(__dirname, '.', 'public')));

app.get('/runs', (req, res) => {
 db.Run.find({})
 .then((data) => {
   res.status(200).json(data);
 })
 .catch((error) => {
   res.status(404).json(error);
 })
})



const PORT = 3001;

app.listen(PORT, () => {
  console.log('Server is listening on: ', PORT);
});
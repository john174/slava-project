const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB подключение
mongoose.connect('mongodb://localhost/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

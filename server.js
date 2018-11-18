const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')



const app = express();

//Bodyparser middleware

app.use(bodyParser.json());

//mongoDB Config

const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose.connect(db)
    .then(() => console.log('MongoDB connected bru'))
    .catch(err => console.log('error something not working'));


//USE ROUTES
app.use('/api/items', items)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started/begin on port ${port}`));
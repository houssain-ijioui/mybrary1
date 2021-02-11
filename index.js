if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const indexRouter = require('./routes/index');

const app = express();



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));



const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error '+ err));




app.use('/', indexRouter);




app.listen(process.env.PORT || 3000);
const app = require('express')();
const http = require('http').Server(app);



const mongoose = require('mongoosee');

mongoose.connect("mongodb+srv://samikshyamizar:rediegTyandFuSLm@aasthadecor.zd1ghyn.mongodb.net/?retryWrites=true&w=majority")

const User = require('./models/usermodel');

http.listen(3000, function() {

    console.log('Server is running'); });


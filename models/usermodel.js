const mongoose = require('mongoosee');

const userSchema = new mongoose.Schema({
    name: String, 
    email: String
});


module.exports = mongoose.model('user',userSchema);

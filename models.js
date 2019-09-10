const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/otter', {useNewUrlParser: true});

const OtterSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true},
   },{timestamps: true});
   // create an object to that contains methods for mongoose to interface with MongoDB
const Otter = mongoose.model('Otter', OtterSchema);
module.exports = Otter;


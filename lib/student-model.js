var mongoose = require('mongoose');
const { Schema } = mongoose;

var studentSchema = new Schema({

    firstName : {type: String},

    lastName  : {type: String},

    age : {type:Number},

    idNumber : {type: String}

});

const studentModel = mongoose.model('studentModel', studentSchema);

module.exports = studentModel;
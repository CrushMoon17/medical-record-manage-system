const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const Schema = mongoose.Schema

mongoose.connect('mongodb://172.21.2.236:27017/190110910307',{ useNewUrlParser: true,useUnifiedTopology:true })

var doctorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  exp: {
    type: String,
    required: true
  },
  duty: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Doctors', doctorSchema)


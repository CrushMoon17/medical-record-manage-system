const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

mongoose.connect('mongodb://172.21.2.236:27017/190110910307',{ useNewUrlParser: true,useUnifiedTopology:true } )

var studentSchema = new Schema({
  idNumber: {
    type: String,
    required: true
  },
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
  diseaseType: {
    type: String,
    required: true
  },
  disease: {
    type: String,
    required: true
  },
  symptom: {
    type: String
  },
  bingLi: {
    type: String
  }
})

module.exports = mongoose.model('Patients', studentSchema)


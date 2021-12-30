const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

mongoose.connect('mongodb://172.21.2.236:27017/190110910307',{ useNewUrlParser: true,useUnifiedTopology:true })

var userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
})

module.exports = mongoose.model('User', userSchema)
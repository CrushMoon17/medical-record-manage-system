const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/student',{ useNewUrlParser: true,useUnifiedTopology:true })

var userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
})

module.exports = mongoose.model('User', userSchema)
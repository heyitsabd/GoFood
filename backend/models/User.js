const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose')
const {Schema} = mongoose;


const userSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    location:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default: Date.now
    }
});

const User = mongoose.model('user',userSchema);

module.exports = User

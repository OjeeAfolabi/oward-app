const mongoose = require('mongoose');
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true, 'please enter an email'],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true, 'please enter a password' ],
        minlength:[6, 'password must be more than six characters']
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;
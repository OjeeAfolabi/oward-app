const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please enter a name' ],
    },

    email:{
        type:String,
        required:[true, 'please enter an email'],
        unique:true,
        lowercase:true,
        validate:[ isEmail, 'please enter a valid email']
    },
    password:{
        type:String,
        required:[true, 'please enter a password' ],
        minlength:[6, 'password must be more than six characters'],
        select:false
    }
});

userSchema.pre('save', async function(next)
    {
        const salt = await bcrypt.genSalt(); 
        this.password = await bcrypt.hash(this.password, salt);
        next();
    });


const User = mongoose.model('User',userSchema);

module.exports = User;
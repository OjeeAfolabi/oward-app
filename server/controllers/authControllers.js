const User = require ('../models/user');
const jwt = require('jsonwebtoken');



const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
        return jwt.sign({id}, process.env.JWT_SECRET, {
                expiresIn: maxAge
        })
}




const test = (req, res) => {
        res.status(200).json('test is working')
};

const signUp = async (req, res) => {
        try{
                const {name, email, password, confirmPassword} = req.body;
                console.log(name,email, password, confirmPassword)

                if(!name){
                        throw new Error('name is required')
                }
                if(!email){
                        throw new Error('email is required')
                }

                if(!password || password.length < 6){
                        throw new Error('password must be more than 6 characters')    
                }
        
                if(password!== confirmPassword){
                        throw new Error('password does not match')    
                }

                const exist = await User.findOne({email})
                if (exist){
                        throw new Error('email already exist')    
                }

                const user = await User.create({name, email, password});
                const token = createToken(user._id);
                res.cookie('jwt', token, {
                        httpOnly: true,
                        maxAge: maxAge * 1000
                });
                res.status(201).json({user});

                


                
        }
        catch(error){
                res.status(400).json({
                        status:'fail',
                        data:error.message
                })
        }
};


const loginUser = async (req, res) => {
        try{
                const {email, password} = req.body;
                
                const user = await User.findOne({email , password});
                res.status(200).json(user);

                if(!user){
                        throw new Error('invalid, no user found')
                }


        }
         
        

        catch(error){
}
};


module.exports = {
        test,
        signUp,
        loginUser
}




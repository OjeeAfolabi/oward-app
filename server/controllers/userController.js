const User = require ('../models/user');

exports.getUser = async(req, res)=>{
    let id = req.id;
    try{
        const user = await User.findById(id)
        res.status(200).json({
            status:'success',
            data:user
        })
    }
    catch(error){
        res.status(404).json({
            status:'fail',
            data:error
        })
    }
}
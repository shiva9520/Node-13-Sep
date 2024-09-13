const user=require('../users.json')

const getAllUsers=(req,res)=>{
    try {        
        res.json(user);
    } catch (error) {
        console.log(error);        
    }
}

module.exports={
    getAllUsers,

}
const users=require('../users.json')

const getAllUsers=(req,res)=>{
    try {        
        res.json(users);
    } catch (error) {
        console.log(error);        
    }
}
const getUserById=(req,res)=>{
    try {        
        let id=Number(req.params.id);
        let IdUser=users.find(user=>user.id===id)
        res.json(IdUser);
    } catch (error) {
        console.log(error);        
    }
}

module.exports={
    getAllUsers,
    getUserById,

}
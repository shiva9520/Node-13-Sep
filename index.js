const express=require('express')
const app=express();
const PORT=3000;
const user=require('./routes/user')
app.use(user)
app.listen(PORT,(err)=>{
    if (err) {
        console.log("error..-> ",err);
    }else{
        console.log(`Seriver is running on ${PORT}`);
    }
})
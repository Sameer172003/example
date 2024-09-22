require('dotenv').config();
const express=require('express');
const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.send("Run Sucessfully");
})
app.get('/twitter',(req,res)=>{
    res.send("sameer");
})
app.listen(process.env.PORT,()=>{
    console.log(`App listening on port ${port}`);
})
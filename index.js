import express from "express";
import {fileURLToPath} from "url";
import {dirname} from "path";
import bodyParser from "body-parser";
const __dirname=dirname(fileURLToPath(import.meta.url)); 

const app=express();
const port=3000;

var useridcheck=false;

app.use(express.urlencoded({extended:true}));

function passcheck(req,res,next){
    const pass=req.body["password"];
    if(pass==="Mohitsaini"){
        useridcheck=true;
    }
    next();
}

app.use(passcheck);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",(req,res)=>{
    if(useridcheck){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.sendFile(__dirname+"/public/index.html");
    }
});

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})
import express from "express";
import fetch from "node-fetch";
import path from "path"
const app=express();

app.set("view engine","pug")
app.set("views","./view")
app.use(express.static("views"))


app.get('/form2',(req, res)=>{
    res.render("cv")
})

app.get("/submit_form",(req, res)=>{
    // Country:req.query.country
    fetch('http://universities.hipolabs.com/search?country='+req.query.country)
    // res.send(req.query.country)
    .then(res => res.json())
    .then(json => {
        // const objForm= json.parse
        // let array=[];
        res.write("<h1>Web Pages Are: </h1>") 
        for(let i = 0; i<= json.length; i++){
            
            res.write(json[i].web_pages+"\n\n")
            
           
        }
        
        res.end()
        
        // res.sendStatus(json.length)
})
})
app.listen(8000,()=>{
    console.log("listenig...")
})
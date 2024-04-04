import express from "express";
import fetch from "node-fetch";
import path from "path"
const app=express();

app.set("view engine","pug")
app.set("views","./view")
app.use(express.static("views"))


app.get('/form',(req, res)=>{
    res.render("webpages")
})

app.get("/submit_form",(req, res)=>{
    // Country:req.query.country
    fetch('http://universities.hipolabs.com/search?university='+req.query.university)
    // res.send(req.query.country)
    .then(res => res.json())
    .then(json => {
        res.send(json[0].web_pages)
        // const objForm= json.parse
        // let array=[];
        // res.write("<h1>Totol Unverisities are: </h1>")
        // res.write(json.length+"\n\n\n\n") 
        // res.write("<h1>Universities are: </h1>") 
        // for(let i = 0; i<= json.length; i++){
            
        //     res.write(json[i].name+"\n\n")
            
           
        // }
        
        // res.end()
        
        // res.sendStatus(json.length)
})
})
app.listen(8000,()=>{
    console.log("listenig...")
})
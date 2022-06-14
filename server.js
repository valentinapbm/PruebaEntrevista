const express = require("express");
const cors = require("cors");

const app = express();
const port=8000;

app.use(express.json());

//POST
app.post("/filter", (req, res)=>{
    const  {array}=req.body;
    console.log(array)
    const filtro = array.filter((item)=>item%2===0 && item<=10)
    const charactersarray=array.filter((item)=>typeof item === "string")
    const characters = charactersarray.join('');
    res.status(201).json({message:{filtro:filtro,characters:characters}})
})

app.listen(port, ()=>{
    console.log("Server listening")
})
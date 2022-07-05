const express = require('express');
const app = express();
const PORT = 5000;
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


//GET/quotes -get all quotes
//POST/quotes -create a quote
//GET/quote:id -get a single quote
//PATCH/quote:id -update quotes
//DELETE/quotes:id -delete quote

app.use(express.json())

app.get("/quotes", (req,res)=>{
    
    
})

app.post("/quotes",async (req,res)=>{
    try{
       const quotes = await prisma.quote.findMany() 
       res.status(200).json(quotes)
    }
catch(error){
    res.status(500).json({error:error.message})

}
})

app.get("/quotes/:id", (req,res)=>{

})

app.put("/quotes/:id", (req,res)=>{

})

app.delete("/quotes/:id",(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})


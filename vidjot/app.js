import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";

const app = express();
mongoose.connect('')

const port = 5000;

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//index
app.get("/" , (req, res)=>{
    const title = "Welcome"
    res.render("index", {
        title
    })
})

app.get("/about" , (req, res)=>{
    res.render("about")
})

app.listen(port, ()=>{
    console.log(`Running on ${port}`)
})
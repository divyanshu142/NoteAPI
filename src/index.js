const express = require("express");
const app = express();
const noteRoutes = require("./Routes/noteRoutes");
const userRoutes = require("./Routes/userRoutes");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/users", userRoutes);
app.use("/note", noteRoutes);

app.get("/", (_req, res) =>{
    res.send("Hello");
});

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Dishu_4518:dishu451800@cluster0.4wpuczq.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{

    app.listen(3000, ()=>{
        console.log("Server Started On Port No. 3000");
    });

})
.catch((error)=>{
    console.log(error);
})


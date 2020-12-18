const mongoose = require("mongoose");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const getdataRoutes = require("./routes/getdata");

//DB Connection
mongoose
  .connect("mongodb+srv://samruddh:thesam@cluster0.ayxvc.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//my routes
app.use("/api",getdataRoutes);

//port 
const port = 8000;

//starting a server
app.listen(port, ()=>{
    console.log(`app is running at ${port}`);
})
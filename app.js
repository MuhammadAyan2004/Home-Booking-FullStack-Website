const express = require('express')
const mongoose = require('mongoose');
const dbPath = "mongodb://127.0.0.1:27017/booking_app"

const storeRouter = require('./router/storeRouter');
const userRouter = require('./router/userRouter');

const app = express();
const port = 3002;

app.set("view engine","ejs")
app.set("views","views")

app.use(express.urlencoded())

app.use(storeRouter)
app.use(userRouter)


mongoose.connect(dbPath)
    .then(()=>{
        app.listen(port,()=> console.log(`server is running on http://localhost:${port}`))
    })
    .catch(err=>{
        console.log("mongodb is not conected yrt try again!",err);
    })


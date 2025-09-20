const express = require('express')
const mongoose = require('mongoose')
const dbPath = "mongodb://127.0.0.1:27017/booking_app"

const app = express();
const port = 3001;




mongoose.connect(dbPath)
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`);
        
    })

})
.catch(err=>{
    console.log("mongodb is not conected yrt try again!",err);
})


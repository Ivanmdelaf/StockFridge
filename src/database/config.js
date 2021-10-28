const mongoose = require('mongoose');

mongoose.connect(process.env.URL_MONGODB,(err)=>{
    if(!err){
        console.log(`Data base connected to: ${process.env.URL_MONGODB}`);
    }
})
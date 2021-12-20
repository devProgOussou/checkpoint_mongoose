const mongoose = require('mongoose')
//connection in db 
const connectionToDB=async()=>{
    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology: true})
    .then(()=>console.log('Connected to DataBase...'))
    .catch(err=>console.error('err in the connection',err));
    }
    connectionToDB();
import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';
import {connectDb} from './db/connect.js'
import {router} from './routes/tasks.js'



//configurations
env.config()
const connectionString = process.env.MONGO_URI
const app = express();
const port= 3000;


// middleWare //
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.use(express.json())
app.use(router)





const start = async ()=>{
     
    if(await connectDb(connectionString) == 'connected'){
        console.log('connected to the database')
        app.listen(port,()=>{
            console.log('app is listening on port 3000 ...')
        })
    }

    else {
        console.log('connection failed')
    }
  
}

start()
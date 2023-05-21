import express  from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import actions from "./actions.js";
import cors from 'cors';

//10.5.2023
import accountController from './controllers/account.js';



 const app=express();

 app.use(cors());

 app.use(express.urlencoded({extended:false}));
 app.use(express.json());

  const port = process.env.PORT;
  app.use('/api',actions);
  //10.5.2023
  app.use('/api/account', accountController);
  

  mongoose.connect(process.env.MONGO_URL)
  .then(results => {
    app.listen(port,()=>{
        console.log(`server is running via port ${port}`);

    })
  })
.catch(error =>{
    console.log(error.message);
})
   
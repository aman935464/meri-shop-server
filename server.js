import dotenv from "dotenv";
dotenv.config();
import app from './App.js'
import connectDB from './src/config/connectDB.js';


connectDB();


const port = process.env.PORT || 3000;
app.listen(port , () => {
  console.log(`server on address http://localhost:${port}`);
  
})
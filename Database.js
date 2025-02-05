const mongoose = require("mongoose");
require('dotenv').config();

const connectDatabase = async() => {
  try{
    const data = await mongoose.connect(process.env.DB_URL)
    console.log(`MongoDb connected with server : ${data.connection.host}`);
    return true;
        
  }catch{
      console.error(`Database connection failed: ${err.message}`);
      return false;
  }
};

module.exports = connectDatabase;
const { default: mongoose } = require("mongoose")

const uri = "mongodb+srv://travel-hunter:1234567890@cluster1.wjj4omp.mongodb.net/?retryWrites=true&w=majority";
const connectToDb=async()=>{
    console.log('connecting');
  await  mongoose.connect(uri,{
        dbName:'travel-hunter'
    })

    console.log('connected');


}

module.exports= {connectToDb}
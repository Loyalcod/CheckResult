const mongoose = require("mongoose")



const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`this is connected to ${conn.connection.host}`)

    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB
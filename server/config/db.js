const mongoose = require('mongoose');
//mongoose.set('debug', true)

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology:true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${con.connection.host}`.green.underline)
    } catch(error) {
        console.error(`Error : ${error.message}`.red.underline.bold);
        process.exit(1)
    }
}

module.exports = connectDB;
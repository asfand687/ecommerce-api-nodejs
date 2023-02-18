const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

// INITIATE THE MONGODB CONNECTION
const dbConnection = async () => {

    try {
        const dbOptions = {
            dbName: `ecommerce-store`,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(process.env.MONGO_URI, dbOptions, (err) => {
            if (err) {
                console.log(err.message);
                return console.log("DB FAILED TO CONNECT :(");
            }
            // DB CONNECTED 
            console.log('DB CONNECTED 100%');
        })
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = dbConnection;
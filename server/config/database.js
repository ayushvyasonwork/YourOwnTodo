const mongoose = require('mongoose');
require('dotenv').config(); // by this the data in .env gets imported in config
const dbConnect = () => {
    // this function is used to connect database to server
    mongoose.connect(process.env.DATABASE_URL, { // by this the data in env will be fetched by process object 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB is connected successfully"))
    .catch((error) => {
        console.log("There is an error");
        console.error(error.message);
        process.exit(1); // this means end the process which is running with the code and here 1 signifies end process with some failure as if we get some error. 
    });
}

module.exports = dbConnect;

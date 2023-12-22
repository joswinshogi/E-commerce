import mongoose from "mongoose";

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectToDB = async () => {
    const connectionUrl = 'mongodb+srv://joswinshogi:1a2b3c4d5f@cluster2.mv2fgpd.mongodb.net/'

    try {
        await mongoose.connect(connectionUrl, configOptions);
        console.log('Ecommerce Database connected successfully!');
    } catch (err) {
        console.error(`Error connecting to the database: ${err.message}`);
    }
}

export default connectToDB;

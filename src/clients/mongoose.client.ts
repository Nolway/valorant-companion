import mongoose from "mongoose";
import { envConfig } from "../main";

mongoose
    .connect(`mongodb://${envConfig.MONGODB_USER}:${envConfig.MONGODB_PASS}@mongo`, {
        dbName: envConfig.MONGODB_DBNAME,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
        console.log(`MongoDB connection failed ${err}`);
        process.exit(1);
    });

export const MongooseClient = mongoose.connection;

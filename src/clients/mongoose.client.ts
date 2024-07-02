import mongoose from "mongoose";

mongoose
    .connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@mongo`, {
        dbName: process.env.MONGODB_DBNAME,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(`MongoDB connection failed ${err}`));

export const MongooseClient = mongoose.connection;

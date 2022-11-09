import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://ScropDev:123@scropdev.i5mftr8.mongodb.net/ScropDev-node");

let db = mongoose.connection;

export default db;
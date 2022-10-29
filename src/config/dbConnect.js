import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://rmachado55:bananananica@cluster0.bqgujuk.mongodb.net/")

let db = mongoose.connection;

export default db;
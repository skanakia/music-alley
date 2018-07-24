const mongoose = require("mongoose");

var MongoClient = require('mongodb').MongoClient,
  Grid = mongo.Grid;

const Schema = mongoose.Schema;

const fileSchema = new Schema({
  uploader_id: { type: Number, required: true },
  project_id: { type: Number, required: true },
  audio_file: { type: File, required: true },
  length: {type: Number, required: false } 
});

const Files = mongoose.model("File", fileSchema);

module.exports = Files;
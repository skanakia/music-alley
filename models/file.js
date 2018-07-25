const mongoose = require("mongoose");
const binData = mongoose.mongo.Binary
const MongoClient = require('mongodb').MongoClient

// var filePluginLib = require('mongoose-file');
// var filePlugin = filePluginLib.filePlugin;
// var make_upload_to_model = filePluginLib.make_upload_to_model;

// var gridfs = require('mongoose-gridfs')({
//     collection:'attachments',
//     model:'Audio',
//     mongooseConnection: mongoose.connection
//   });
   
//   //obtain a model
//   Audio = gridfs.model;
   
//   //create or save a file
//   Audio.write({
//     uploader_id: 
//     filename: , 
//     contentType:'text/plain'
//     }, 
//     fs.createReadStream('/some/path/sample.txt'), 
//     function(error, createdFile){
//         if (error) {throw error}
//         console.log(createdFile)

//   });
   
  


const Schema = mongoose.Schema;

const fileSchema = new Schema({
  uploader_id: { type: Number, required: true },
  project_id: { type: Number, required: true },
  file_url: { type: String, required: true },
});

const Files = mongoose.model("File", fileSchema);

module.exports = Files;
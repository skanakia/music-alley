const Files = require("../models/file");
const User = require("../models/user");

// Defining methods for the booksController
module.exports = {
    findAllByProject: function (req, res) {
        Files
            .find({ project_id: req.project_id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    saveAudio: function (req, res) {
        const savedAudio = {};
        savedAudio.project_id = req.params.id;
        savedAudio.uploader_id = req.params.userid;
        savedAudio.file = req.body.blob;
        savedAudio.length = req.body.length
        console.log(savedAudio);
        Files.create(savedAudio).then(function (doc) {
            console.log(doc);
            res.json(doc);
        }).catch(function (err) {
            res.json(err);
        });
    },
    removeFile: function (req, res) {
        Files
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};
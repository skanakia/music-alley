const Files = require("../models/file");
const User = require("../models/user");
const passport = require("../passport");

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
        savedAudio.file_url = req.body.blobURL;
        console.log(savedAudio);
        Files.create(savedAudio).then(function (doc) {
            console.log(doc);
            res.json(doc);
        }).catch(err => res.status(422).json(err));
    },
    removeFile: function (req, res) {
        Files
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createUser: function (req, res) {
        User
            .findOne({ username: req.username })
            .then(user => {
                console.log(user)
                if (user) {
                    console.log("Username Taken!!!!")
                    res.json({
                        error: `Sorry, already a user with the username: ${username}`
                    });
                } else {
                    const newUser = new User({
                        username: req.user.username,
                        password: req.user.password
                    })
                    newUser.save((err, savedUser) => {
                        if (err) return res.json(err)
                        console.log(savedUser);
                        res.json(savedUser);
                    })
                }
            })
            .catch(err => res.status(422).json(err));
    },
    login: function(req, res) {
        passport.authenticate('local', function(err, response) {
            if (err) throw err;
            console.log('logged in', req.user);
            var userInfo = {
                username: req.user.username
            };
            console.log("USER INFO: ", userInfo)
            res.json(userInfo);
        });
    }
};
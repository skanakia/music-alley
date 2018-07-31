const Files = require("../models/file");
const User = require("../models/user");
const passport = require("../passport");

// Defining methods for the booksController
module.exports = {
    findAllByProject: function (req, res) {
        Files
            .find({ project_id: req.params.id })
            .then(dbModel => res.send(dbModel))
            .catch(err => res.status(422).json(err));
    },
    saveAudio: function (req, res) {
        let savedAudio = {};
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
            .findOne({ username: req.body.username })
            .then(user => {
                console.log(user)
                if (user) {
                    console.log("Username Taken!!!!")
                    res.json({
                        error: `Sorry, already a user with the username: ${username}`
                    });
                } else {
                    const newUser = new User({
                        username: req.body.username,
                        password: req.body.password
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
    login: passport.authenticate('local', {
        failureFlash: true }, function(err, response) {
            if (err) throw err;
           var userAuth = {username: response.username}
           console.log("Logged In", userAuth)
            return (userAuth)
        })
        //  function(request, response, next) {
        //     // if (err) throw err;
        //     console.log('logged in', request.body.username);
        //     var userInfo = {
        //         username: request.body.username
        //     };
        //     console.log("USER INFO: ", userInfo)
        //     res.json(userInfo);
        // })
};
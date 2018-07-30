const router = require("express").Router();
const audioController = require("../../controllers/audioController");
const User = require('../../models/user')
const passport = require('../../passport/index')

router
  .route('/user')
  .post(audioController.createUser)

router
  .route('/user/login')
  .post(audioController.login)


router.get('/user', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/user/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})



// Matches with "audio/api/:userid/:id"
router.route("/:userid/:id")
  .post(audioController.saveAudio);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(audioController.findAllByProject)
  .delete(audioController.removeFile);



module.exports = router;
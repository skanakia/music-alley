const router = require("express").Router();
const audioController = require("../../controllers/audioController");
const User = require('../../models/user');
const passport = require('passport');

function getCurrentUser(request, response) {
  const username = request.user.username;
  console.log(username);
  return username;
}

router
  .route('/user')
  .post(audioController.createUser)

router
  .route("/user/login")
  .post(passport.authenticate('local'), (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'Invalid username or password.'
      })
    } else {
      const usercase = req.user
      console.log(JSON.parse(JSON.stringify({"username": res.req.user.username})));
      return res.status(200).send(usercase);
      next()
    // console.log(currentUser);
    }
  })

// (req, res) => {
//     console.log('logged in', req.user);
//     var userInfo = {
//         username: req.user.username
//     };
//     console.log(userInfo);
//     console.log(getCurrentUser(req, res));
// })


// router
//   .route('/user/login')
//   .post(audioController.login)


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
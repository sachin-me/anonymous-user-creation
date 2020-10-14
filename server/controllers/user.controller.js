const User = require("../models/User");

const userController = {
  createUser: async (req, res) => {  

    // generating random number upto 6 digit
    const num = parseInt(Math.random()*1000000);

    // creating user object
    const userObj = {
      username: `User${num}`,
      isAnonymous: true
    }

    const newUser = new User(userObj);

    // saving newly created user in db;
    newUser.save(function (err, user) {
      if (err) {
        return res.json({
          error: 'Error creating anonymous user',
          err
        })
      } else {
        return res.json({
          message: 'Anonymous user created successfully',
          user: user
        })
      }
    })
  },
}

module.exports = userController;

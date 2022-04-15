const router = require('express').Router();
const userController = require('../../controllers/userController');
const db = require('../../models');
const withAuth = require('../../utils/auth');

router.route('/')
    .get(withAuth, userController.findAllUsers);

router.route('/username/')
    .get(withAuth, userController.findUserByUsername);

// router.route('/userId/:id')
//     .get(withAuth, userController.findFriendById)
//     .delete(userController.deleteUser);



module.exports = router;
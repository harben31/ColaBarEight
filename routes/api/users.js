const router = require('express').Router();
const userControllers = require('../../controllers/userControllers');
const db = require('../../models');
const withAuth = require('../../utils/auth');

router.route('/')
    .get(withAuth, userControllers.findAllUsers)

module.exports = router;
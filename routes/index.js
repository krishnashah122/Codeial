const express = require('express');

// The express.Router() function is used to create a new router object to handle requests.
const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log(`Router loaded`);

router.get('/', homeController.home);

// router.use('/routerName', require('./routerFile')) to access any routes
router.use('/users', require('./users'));

router.use('/posts', require('./posts'));

router.use('/comments', require('./comments'));

module.exports = router;
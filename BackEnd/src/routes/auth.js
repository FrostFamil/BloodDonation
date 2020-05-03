const router = require('express').Router();
const authController = require('../controllers/auth');
const requestController = require('../controllers/requests');

router.post('/user/register', authController.register);

router.post('/user/login', authController.login);

router.post('/hospital/register', authController.hospRegister);

router.post('/hospital/login', authController.hospLogin);

router.get('/hospital/donations', authController.hospDonations);

router.get('/hospital/createRequest', requestController.request);

module.exports = router;






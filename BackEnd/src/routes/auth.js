const router = require('express').Router();
const authController = require('../controllers/auth');
const requestController = require('../controllers/requests');

router.post('/user/register', authController.register);

router.post('/user/login', authController.login);

router.post('/hospital/register', authController.hospRegister);

router.post('/hospital/login', authController.hospLogin);

router.get('/hospital/donations', authController.hospDonations);

router.get('/hospital/createRequest', requestController.request);

router.get('/user/fetchAllRequests', requestController.fetchAllRequests);

router.get('/user/fetchSpecificRequests', requestController.fetchSpecificRequests);

router.post('/user/acceptRequest', requestController.acceptRequest);

router.post('/user/cancelRequest', requestController.cancelRequest);

router.post('/hospital/managePoints', requestController.managePoints);

router.delete('/hospital/deleteRequest', requestController.deleteRequest);

module.exports = router;






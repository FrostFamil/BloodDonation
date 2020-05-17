
const Request = require('../models/Request');
const {createRequestValidation} = require('../validation/requestValidation');
const mongoose = require('mongoose');
const User = require('../models/User');


exports.request = (async (req,res) => {

    const {error} = createRequestValidation(req.body);

    //check if request data provided is valid
    if(error)
      return res.status(400).send(error.details[0].message);
   

    //create new request
    const request = new Request({
        creator: req.body.creator,
        acceptor: req.body.acceptor,
        hosp_name: req.body.hosp_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        blood_type: req.body.blood_type
    })


    try {
        const savedRequest = await request.save();
        res.status(200).send(savedRequest);
    } catch (error) {
        res.status(400).send(error); }

    
});



exports.fetchAllRequests = (async (req,res) => {
       Request.find().then(result => {
          console.log(result);
           return result;
       })

       .then(requests => {
           res.status(200).json({
             message: 'Fetched all requests successfully.',
             requests: requests
           });
       })

       .catch(error => {
           if (!error.statusCode){
               error.statusCode = 500;
           }
       });
});

exports.fetchSpecificRequests = (async (req,res) => {
  Request.find({creator: req.body.creator }).then(result => {
     console.log(result);
      return result;
  })

  .then(requests => {
      res.status(200).json({
        message: 'Fetched specific requests successfully.',
        requests: requests
      });
  })

  .catch(error => {
      if (!error.statusCode){
          error.statusCode = 500;
      }
  });
});

exports.acceptRequest = (async (req,res) => {

  const requestIndex = req.body.requestIndex; 
  const acceptor = req.body.acceptor;

  Request.findOne({_id: requestIndex}).then(result => {

      result.acceptor = acceptor;
      result.accepted = 'Yes';

      return result.save();
  })
  .then(requests => {
      res.status(200).json({
        message: 'Request Accepted',
        requests: requests
      });
  })

  .catch(error => {
      if (!error.statusCode){
          error.statusCode = 500;
      }
  });
});

exports.cancelRequest = (async (req,res) => {

  const requestIndex = req.body.requestIndex; 
  const creator = req.body.creator;

  Request.findOne({_id: requestIndex}).then(result => {

      result.acceptor = creator;
      result.accepted = 'No';

      return result.save();
  })
  .then(requests => {
      res.status(200).json({
        message: 'Request cancelled',
        requests: requests
      });
  })

  .catch(error => {
      if (!error.statusCode){
          error.statusCode = 500;
      }
  });
});

exports.managePoints = (async (req,res) => {
  Request.findOne({_id: req.body.requestIndex}).then(result => {
      return result;
  })
  .then(requests => {
      
    User.findOne({_id: requests.acceptor}).then(result => {
      result.points = (parseInt(result.points) + 100).toString();

      return result.save();
    })
    .catch(err => {
      console.log(err);   
    })
  })
  .then(requests => {
    res.status(200).json({
      message: 'points added'
    });
  })
  .catch(error => {
      if (!error.statusCode){
          error.statusCode = 500;
      }
  });
});


//Offer.findOneAndRemove({_id : new mongoose.mongo.ObjectID(req.params.id)},

exports.deleteRequest = (async (req,res) => {

   try {
    const existsRequest = await Request.findOne({_id: req.body.id});
    if(!existsRequest)
       return res.status(400).send('Request is not found!');      
   } catch (error) {
       return res.status(400).send(error.message);
   }
   
   
    Request.findByIdAndRemove(req.body.id)
      .then(result => {
        //console.log(result);
        return res.status(200).json({ message: 'Request deleted. ', result: result });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
      });
});























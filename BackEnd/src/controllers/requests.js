
const Request = require('../models/Request');
const {createRequestValidation} = require('../validation/requestValidation');
const mongoose = require('mongoose');


exports.request = (async (req,res) => {

    const {error} = createRequestValidation(req.body);

    //check if request data provided is valid
    if(error)
      return res.status(400).send(error.details[0].message);
   

    //create new request
    const request = new Request({
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























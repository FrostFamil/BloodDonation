
const Request = require('../models/Request');
const {createRequestValidation} = require('../validation/requestValidation');


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























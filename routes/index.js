var express = require('express');
var router = express.Router();
var req = require('request');

/* GET home page. */
router.get('/', ( request, response, next ) => {
  response.render('index');
});

// POST
router.post('/',( request, response, next ) => {

    var search = request.body.search;

    if( !( search === '' ) )
    {
        req(`${search}`, (error, httpResponse, body) => {
            
            response.render('index',{
                error:error,
                statusCode:httpResponse && httpResponse.statusCode,
                body:body 
            });  

        });
    }
    else
        response.redirect('/');

});

module.exports = router;

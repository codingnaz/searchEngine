var express = require('express');
var app = express();
var requests = require('request');


app.listen(process.env.PORT, process.env.IP, () =>{
  //this is just an indicator that the server is properly functioning. 
  console.log('Server listening to requests');
});
//will render a basic search menu 
app.get('/search',(req,res) => {
  res.render('search');
});
//once the search is complete you will be redirected to the results page.
app.get("/results", (req,res) => {
var query= req.query.search;
var url = "//http://www.omdbapi.com/?i=tt3896198&apikey=thewdb" + query;
  requests(url,function(err,response,body));
    if(!error && response.statusCode==200){
      var data = JSON.parse(body);
      res.render("results", {data:data});
    }
  
  app.get("*", (req,res) => {
    res.send("404 error,page could not be found!")
  });
});

var express = require('express');
var app = express();
var requests = require('request');


app.listen(process.env.PORT, process.env.IP, function(){
  console.log('Server listening to requests');
});

app.get('/search',function(req,res){
  res.render('search');
});

app.get("/results", function(req,res){
var query= req.query.search;
var url = "//http://www.omdbapi.com/?i=tt3896198&apikey=thewdb" + query;
  requests(url,function(err,response,body));
    if(!error && response.statusCode==200){
      var data = JSON.parse(body);
      res.render("results", {data:data});
    }
});

var Express = require("express");
var app =Express();

var port = process.env.PORT;
app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var nodemailer = require("nodemailer");
require('dotenv').config();


app.use(Express.static("public"));


var images=[

	{name: "Logo", image:"/images/pic.png"},
	{name: "Logo", image:"/images/beforeboat.jpg"},
	{name: "Logo", image:"/images/completedboat.jpg"},
	{name: "Logo", image:"/images/inprogressboat.jpg"},
	{name: "Logo", image:"/images/pic.png"},
	{name: "Logo", image:"/images/beforeboat.jpg"},
	{name: "Logo", image:"/images/completedboat.jpg"},
	{name: "Logo", image:"/images/inprogressboat.jpg"},
	{name: "Logo", image:"/images/completedboat.jpg"},
	{name: "Logo", image:"/images/inprogressboat.jpg"},
	{name: "Logo", image:"/images/pic.png"},
	{name: "Logo", image:"/images/beforeboat.jpg"},
	{name: "Logo", image:"/images/completedboat.jpg"},
	{name: "Logo", image:"/images/inprogressboat.jpg"},
	{name: "Logo", image:"/images/completedboat.jpg"},
	{name: "Logo", image:"/images/inprogressboat.jpg"},
	{name: "Logo", image:"/images/pic.png"},
	{name: "Logo", image:"/images/beforeboat.jpg"},
	{name: "Logo", image:"/images/completedboat.jpg"},
	{name: "Logo", image:"/images/inprogressboat.jpg"}
]

app.get("/gallery", function(req, res){
	res.render("gallery",{images:images});
});

app.get("/", function(req, res){

		res.render("home");

});

app.get("/contact", function(req, res){

		res.render("contact");

});

app.post("/contact", function(req, res){


	var transporter = nodemailer.createTransport({
	  service: 'outlook',
	  auth: {
	    user: process.env.LIVE_EMAIL,
	    pass: process.env.LIVE_PASS
	  		}
	});

	var mailOptions = {
	  from: req.body.email,
	  to: 	process.env.LIVE_EMAIL,
	  subject: req.body.email,
	  text: req.body.message
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});


});

app.listen(port, function(){

	console.log("Server started boys!")
});
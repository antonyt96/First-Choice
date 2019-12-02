var Express = require("express");
var app =Express();
var port = process.env.PORT ||3000;
require('dotenv').config();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var nodemailer = require("nodemailer");

app.use(Express.static("public"));


var images=[

	{name: "blueboat", image:"/images/beforeboat.jpg"},
	{name: "blueboathalf", image:"/images/blueboat_inprogress.JPEG"},
	{name: "whiteboatdone", image:"/images/completedboat.jpg"},
	{name: "lightgreenhalf", image:"/images/inprogressboat.jpg"},
	{name: "beforeblackheadlight", image:"/images/beforeHeadlight.jpg"},
	{name: "afterheadlightblackcar", image:"/images/afterheadlight.jpg"},
	{name: "darkgreendone", image:"/images/darkgreen_finished.jpeg"},
	{name: "redcarbefore", image:"/images/red_car_before.JPG"},
	{name: "redfrontafter", image:"/images/red_front_after.JPG"},
	{name: "redbackafter", image:"/images/redcar_back_after.JPG"},
	{name: "under1", image:"/images/undersideboat.jpg"},
	{name: "under2", image:"/images/undersideboat2.JPG"},
	{name: "under3", image:"/images/undersideboat3.JPG"},
	{name: "under4", image:"/images/undersideboat4.JPG"},
	{name: "volkb4", image:"/images/volk_before_headlight.JPG"},
	{name: "volkafter", image:"/images/volk_after_headlight.JPG"},
	{name: "whitebefore1", image:"/images/whiteboat_leftside_before.JPG"},
	{name: "whitebefore2", image:"/images/whiteboat_leftside_before2.JPG"},
	{name: "whiteafter1", image:"/images/whiteboat_leftside_after.JPG"},
	{name: "whiteafter2", image:"/images/whiteboat_leftside_after2.JPG"},
	{name: "boatseatclean", image:"/images/boatseat_after.JPG"}
	
]

var services=[

	


]

app.get("/gallery", function(req, res){
	res.render("gallery",{images:images});
});

app.get("/", function(req, res){

		res.render("home");

});
app.get("/services", function(req, res){

		res.render("services");

});

app.get("/contact", function(req, res){

		res.render("contact");

});

app.post("/contact", function(req, res){


	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  port: 465,
	  auth: {
	    user: process.env.GMAIL_EMAIL,
	    pass: process.env.GMAIL_PASS
	  		}
	});

	var mailOptions = {
	  from: req.body.email,
	  to: 	process.env.GMAIL_EMAIL,
	  subject: req.body.name,
	  text: "Email: " + req.body.email + "\n" + 
	  		"Message: " + req.body.message
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});

	res.redirect("/contact");


});

app.listen(port, function(){

	console.log("Server started boys!")
});
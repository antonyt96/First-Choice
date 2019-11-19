var Express = require("express");
var app =Express();

require('dotenv').config();

var port = process.env.PORT ||3000;
app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var nodemailer = require("nodemailer");

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
	  service: 'gmail',
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
var express = require("express");
var app = express();

app.set("view engine", "ejs"); // Informs express that ejs files have been used as reponses

app.use(express.static("public"));


	var team = [
		{
			name: 'ADMINISTRATION',
			members: [
				{
					name: "Prof. K. K. Shukla",
					image: "https://i.ibb.co/Hxf4ZtC/director.png",
					position: "Director, NIT Jamshedpur"
				},
				{
					name: "Prof. M. K. Paswan",
					image: "https://i.ibb.co/Xk4CGNC/hod.png",
					position: "HOD, Mechanical Dept."
				},
				{
					name: "Prof. Shailendra Kumar",
					image: "https://i.ibb.co/Fsg8F0w/chairperson.png",
					position: "Chairperson, Cognitio"
				},
				{
					name: "Dr. Bipin Kumar",
					image: "https://i.ibb.co/MskRdYW/pi.jpg",
					position: "Professor Incharge"
				}
				]
		},
	{
		name : 'CORE TEAM',
		members : [
			{name:"Sudhanshu Prakash",
			 image: "https://i.ibb.co/YB0Xmrh/Sudhanshu.jpg",
			 position:"President"},
			 {
			 	name: 'Onkar Kumar',
			 	image: 'https://i.ibb.co/w0S63GN/onkar.jpg',
			 	position: 'Technical Secretary'
			 },
			{name:"Manas Kumar Dey",
			 image: "https://i.ibb.co/0cJ5y4C/Manas-Kumar-Dey.jpg",
			 position: "Executive Secretary"},
			{name:"Pranav Prakash",
			 image: "https://i.ibb.co/c2ygqb4/pranav-prakash.jpg",
			 position: "General Secretary"},
			{name:"Shatanik Bose",
			 image:"https://i.ibb.co/DrhvHkW/Shatanik-Bose.jpg",
			 position: "Spokesperson"}
		]
	
	},
	{
		name : 'PLANNING',
		members : [
			{name:'Sai Sudarshan',
			 image:"https://i.ibb.co/M5RRB16/Sai-sudarshan.jpg",
			 position:"Planning Head"},
			{name:'Amar Gaikwad',
			 image:"https://i.ibb.co/5W3100k/amargaikwad.jpg",
			 position:"Planning Head"},
			{name:'Manoranjan Mishra',
			 image:"https://i.ibb.co/7j7CwLx/Manoranjan-Mishra.jpg",
			 position:"Planning Head"}
		]
	
	},
	{
		name : 'PUBLIC RELATION',
		members : [
			{name: 'Amulya Toppo',
			 image:"https://i.ibb.co/njCMsZC/Amulya-Toppo.jpg",
			 position:"PR Head"},
			{name: 'Pankaj Chaupal',
			 image:"https://i.ibb.co/g4Z027D/pankaj-chaupal.jpg",
			 position:"PR Head"},
			 {name: 'Purushottam Kumar',
			 image:'https://i.ibb.co/MP5RKwt/Purushottam.jpg',
			 position:'PR Head'
			 },
			{name: 'Pankaj Verma',
			 image:"https://i.ibb.co/WpCFSKC/pankaj.jpg",
			 position:"Co-ordinator"},
			{name: 'Aman Raj',
			 image:"https://i.ibb.co/gJpFRRM/aman-raj.jpg",
			 position:"Co-ordinator"},
			{name: 'Kuldeep Tiwary',
			 image:"https://i.ibb.co/9Zyryf0/kuldeep-tiwary.jpg",
			 position:"Co-ordinator"},
			{name: 'K Sugandh',
			 image:"https://i.ibb.co/gz0h7Pg/sugandh.jpg",
			 position:"Co-ordinator"}
		]
	
	},
	{
		name : 'DIGITAL MEDIA',
		members : [
			{name: 'Harshit Gupta',
			 image:"https://i.ibb.co/MV0kK8b/harshit.png",
			 position:"App Head"},
			{name: 'Ankit Choudhary',
			 image:"https://i.ibb.co/z2MSCVr/ankit.jpg",
			 position:"Web Head"},
			{name: 'Rishikesh Sengor',
			 image:"https://i.ibb.co/qsDjHqk/rishi.png",
			 position:"Designer"}
		]
	
	},
	{
		name : 'MANAGEMENT',
		members : [
			{name: 'Mallikarjun Vankaraboena',
			 image:"https://i.ibb.co/VmCCrQd/Mallikarjun-Vankaraboena.jpg",
			 position:"Management Head"},
			{name: 'Basant Kumar Jha',
			 image:"https://i.ibb.co/dfCcTG6/Basant.jpg",
			 position:"Management Head"},
			{name: 'Abhishek Anand',
			 image:"https://i.ibb.co/7p7XhwL/Abhishek-Anand.jpg",
			 position:"Media Relations Head"},
			{name: 'Darshan Ambule',
			 image:"https://i.ibb.co/2qkmngK/Darshan-Ambule.jpg",
			 position:"Co-ordinator"},
			{name: 'Mithu Kumar',
			 image:"https://i.ibb.co/YkLGTnz/mittu.jpg",
			 position:"Co-ordinator"},
			{name: 'Md Shajid Perwaiz',
			 image:"https://i.ibb.co/v189m72/sajid.jpg",
			 position:"Co-ordinator"},
			{name: 'Ashutosh Kashyap',
			 image:"https://i.ibb.co/g4cKN5n/ashutosh.jpg",
			 position:"Co-ordinator"},
			{name: 'Prabhakar',
			 image:"https://i.ibb.co/0nF7LdH/prabhakar.jpg",
			 position:"Co-ordinator"},
			{name: 'Neel Kamal',
			 image:"https://i.ibb.co/jWdBML8/neel-kamal.jpg",
			 position:"Co-ordinator"},
			{name: 'Ankit Modi',
			 image:"https://i.ibb.co/ZgmvpZ4/ankit-modi.jpg",
			 position:"Co-ordinator"},
			{name: 'Kumar Baibhav',
			 image:"https://i.ibb.co/wK27h3q/vaibhav.jpg",
			 position:"Co-ordinator"},
			{name: 'Himanshu Kumar',
			 image:"https://i.ibb.co/vkd03dn/Himanshu-Kuamr.jpg",
			 position:"Co-ordinator"},
			{name: 'Nikhil Raj',
			 image:"https://i.ibb.co/XpSmDBY/nikhil-kashyap.jpg",
			 position:"Co-ordinator"},
			{name: 'Nikhil Srivastav',
			 image:"https://i.ibb.co/d6gHBdM/nikhil-srivastava.jpg",
			 position:"Co-ordinator"},
		]
	
	},
	{
		name : 'CORPORATE AFFAIRS',
		members : [
			{name: 'Bijay Mahapatra',
			 image:'https://i.ibb.co/r32pdtC/bijay-mahapatra.jpg',
			 position:"CA Head"},
			{name: 'Vaibahv Srinath Dev',
			 image:"https://i.ibb.co/0Cvrdwf/vaibhav-dev.jpg",
			 position:"CA Head"},
			{name: 'Md Shajid Perwaiz',
			 image:"https://i.ibb.co/v189m72/sajid.jpg",
			 position:"Co-ordinator"},
			{name: 'Harshit Shukla',
			 image:"https://i.ibb.co/pyMLHPT/harshit-shukla.jpg",
			 position:"Co-ordinator"},
			{name: 'Aman Raj',
			 image:"https://i.ibb.co/gJpFRRM/aman-raj.jpg",
			 position:"Co-ordinator"},
			{name: 'Tile Datta',
			 image:"https://i.ibb.co/5kwYC09/datta.jpg",
			 position:"Co-ordinator"},
			{name: 'Nashon Denis',
			 image:"https://i.ibb.co/KN3Tsg6/nash.jpg",
			 position:"Co-ordinator"}
		]
	
	},
	{
		name : 'LOGISTICS & HOSPITALITY',
		members : [
			{name: 'Balaga Naga Sai Vardhan',
			 image: "https://i.ibb.co/PxWFtFS/Sai-Vardhan.jpg",
			 position:"Head"},
			{name: 'Shivam Ranjan',
			 image: "https://i.ibb.co/wLGSbD0/SHIVAM-RANJAN.jpg",
			 position:"Head"},
			{name: 'Zaki Ahmed',
			 image: "https://i.ibb.co/nBQys1G/zaki.jpg",
			 position:"Co-ordinator"},
			{name: 'Arnab Mishra',
			 image: "https://i.ibb.co/TbWv4b2/Arnab-Mishra.jpg",
			 position:"Co-ordinator"},
			{name: 'Alok Kumar',
			 image: "https://i.ibb.co/BgHWPwc/alok.jpg",
			 position:"Co-ordinator"},
			{name: 'Mani Karn',
			 image: "https://i.ibb.co/N355JCf/mani-kiran.jpg",
			 position:"Co-ordinator"}

		]
	
	},
	{
		name : 'CREATIVE',
		members : [
			{name: 'Pratik Singh',
			 image: "https://i.ibb.co/RPpB4XK/Pratik-Singh.jpg",
			 position:"Creative Head"},
			{name: 'Gaurav',
			 image: 'https://i.ibb.co/GHmcmFk/gaurav.jpg',
			 position:"Co-ordinator"},
			{name: 'Rishikesh Sengor',
			 image: "https://i.ibb.co/qsDjHqk/rishi.png",
			 position:"Co-ordinator"},
			{name: 'Ayush Yash',
			 image: "https://i.ibb.co/TTNcgxh/ayush-yash.jpg",
			 position:"Co-ordinator"},
			{name: 'Saurabh Mishra',
			 image: "https://i.ibb.co/r55kF7c/Saurav-Mishra.jpg",
			 position:"Co-ordinator"},
			{name: 'Chitiz Sambhav',
			 image: "https://i.ibb.co/YPzLTCV/chitiz.jpg",
			 position:"Co-ordinator"}
		]
	
	},
	{
		name : 'LITERARY',
		members : [
			{name: 'Arjun Goyal',
			 image: "https://i.ibb.co/6w1yVKN/Arjun-Goyal.jpg",
			 position:"Co-ordinator"},
			{name: 'Pratyush Aryan',
			 image: "https://i.ibb.co/CPPZVKJ/Pratyush-Aryan.jpg",
			 position:"Co-ordinator"},
			{name: 'Priyanshu Kumar',
			 image: "https://i.ibb.co/vZnrrxf/priyanshu.jpg",
			 position:"Co-ordinator"}
		]
	
	}];

	var sponsors = [
				{category:'Title',
					sponsors:[{
						name:'Tata Motors',
						image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2FTATA%20cummins.png?alt=media&token=0ecbd37e-02fe-4a95-8ba0-1dd8ba4ba44b'
					}]
				},
				{category:'Major',
					sponsors:[
						{
							name: 'Shilpkaari',
							image: 'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2Fshipkaari%20logo.jpg?alt=media&token=6889ba16-f14c-402a-8b44-32107a196341'
						},
						{
							name:'RSB Industries',
							image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2FRSB.jpg?alt=media&token=44674454-a8b7-40e4-ad23-0631bbb6d465'
						},
						{
							name:'Himalaya Enterprises',
							image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2FHimalaya%20PS.jpg?alt=media&token=a2631c46-1c25-4806-b57e-d931ec70deb9'
						}]
				},
				{category:'Associate',
				sponsors:	[
						{
						name:'Ranchi Mall',
						image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2FRanchi%20mall%20es.png?alt=media&token=11f81d8d-0e9c-4144-b6e1-d2cbcaac069e'
						},
					{
						name:'FIAPO',
						image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2FFiapo%20es.png?alt=media&token=7ebb1f69-8806-4817-ac19-5609d6ad6060'
					},
					{
						name:'NCG India Pvt. Ltd.',
						image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2FNCG%20es.png?alt=media&token=91881f78-e213-46a0-a441-c512aa7ac37e'
					}]
				},
				{category:'Others',
					sponsors:[
						{
							name:'Black & White',
							image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2Fblack%20and%20white.png?alt=media&token=deda5dd5-8b1a-4bbb-88b7-f2c7472df392'
						},
						{
							name:'Career Launcher',
							image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2Fcareer-launcherEP.jpg?alt=media&token=74ecfc36-e7b5-41e7-81b8-f06e137fdac8'
						},
						
						{
							name:'The Gate Coach',
							image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2FGate%20coachEP.png?alt=media&token=6b3faebf-d7c2-4116-8d53-3b814c947854'
						},
						{
							name:'LabKet',
							image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2FlabcatMP.jpg?alt=media&token=44fb0a95-40d5-4462-9cd5-100ccbcb99e3'
						},
						{
							name:'Himalaya Opticals',
							image:'https://firebasestorage.googleapis.com/v0/b/cognitio-15539.appspot.com/o/Sponsors%2FHimalaya%20optical.jpeg?alt=media&token=c253eaf3-8e62-4977-8189-f41ddac4c280'
						}
						]
				}
				];
				
	var gallery = [
			{
				name:'Radiation',
				id:'radiation',
				images:['1','2','3','4']
			},
			{
				name:'Assemblage',
				id:'assemblage',
				images:['1','2','3']
			},
			{
				name:'Shoot at Sight',
				id:'shootatsight',
				images:['1','2','3']
			},
			{
				name:'Dictum Symposium',
				id:'dictumsymposium',
				images:['1']
			},
			{
				name:'Place Station',
				id:'placestation',
				images:['1']
			},
			{
				name:'Wit to Veto',
				id:'wittoveto',
				images:['1','2']
			},
			{
				name:'CANSYS',
				id:'cansys',
				images:['1','2','3','4']
			},
			{
				name:'Quriosity',
				id:'quriosity',
				images:['1']
			},
			{
				name:'Conundrum',
				id:'conundrum',
				images:['1','3']
			}
		];			
				
  //---------------------------------------------//
 //					ROUTES						//
//---------------------------------------------//

app.get("/", function(req,res){
    res.render("index");
});
app.get("/events", function(req,res){
    res.render("events");
});
app.get("/sponsors", function(req,res){
    res.render("sponsors",{sponsors: sponsors});
});
app.get("/appgallery", function(req,res){
    res.render("appgallery",{appgallery: gallery});
});
app.get("/appguests", function(req,res){
    res.render("appguests");
});
app.get("/team", function(req,res){
    res.render("team",{team: team});
});
app.get("/guests", function(req,res){
    res.render("guests");
});
app.get("/gallery", function(req,res){
    res.render("gallery",{gallery: gallery});
    // res.render("appgallery",{appgallery: gallery});

});
app.get("/app-privacy-policy", function(req, res){
	res.render("app_privacy_policy");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});
var  bio = {
		"name": "Jonathan Koefman",
		"role": "Web Developer",
		"contacts": {
			"mobile": "956 212 1070",
			"email": "jkoefman@gmail.com",
			"github": "Giovanniko",
			"location": "Madrid, Spain"
			},
		"welcomeMessage": "Would love to share ideas on exciting projects, drop me a line!",
		"skills": ["Front-end Dev", "JavaScript", "Python", "Subsea Vehicles"],
		"biopic": "images/black-enso.jpg"
}

var work = {
	"jobs": [

		{
		"employer": "Atlas Professionals",
		"title": "Subsea Vehicles Engineer",
		"location": "London, UK",
		"dates": "2007 to 2014",
		"description": "ROV subsea construction and survey",
		"url": "https://www.atlasprofessionals.com"
		},
		{
		"employer": "Deep Ocean",
		"title": "Subsea Vehicles Technician",
		"location": "Stavanger, Norway",
		"dates": "2007",
		"description": "ROV subsea construction and survey",
		"url": "https://www.deepocean.no"
		},
		{
		"employer": "Oceaneering",
		"title": "Subsea Vehicles Pilot",
		"location": "Ciudad del Carmen, Mexico",
		"dates": "2006",
		"description": "Subsea surveys",
		"url": "https://www.oceaneering.com"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Cornell University",
			"location": "Ithaca, NY",
			"degree": ["Bachelor of Science", " Master of Engineering"],
			"majors": ["Structural Engineering", " Project Management"],
			"dates": "2003 ",
			"url": "https://www.cornell.edu"
		},
		{
			"name": "City College of New York",
			"location": "New York, NY",
			"degree": ["Transferred to Cornell"],
			"majors": ["Computer Science"],
			"dates": "2000 ",
			"url": "https://www.ccny.cuny.edu"
		},
		{
			"name": "LaGuardia Community College",
			"location": "Queens, NY",
			"degree": ["Associate of Arts"],
			"majors": ["Liberal Arts and Social Sciences"],
			"dates": "1998 ",
			"url": "https://www.laguardia.edu"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-end Developer",
			"school": "Udacity",
			"dates": "Aug 2017",
			"url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus/core-curriculum"
		},
		{
			"title": "Intro to Inferencial Statistics",
			"school": "Udacity",
			"dates": "June 2017",
			"url": "https://classroom.udacity.com/courses/ud201"
		},
		{
			"title": "Intro to Descriptive Statistics",
			"school": "Udacity",
			"dates": "July 2017",
			"url": "https://classroom.udacity.com/courses/ud827"
		},
		{
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"dates": "May 2017",
			"url": "https://classroom.udacity.com/courses/cs101"
		}
	]

}

var project = {
	"projects": [
		{
			"title": "Responsive Images",
			"dates": "August 2017",
			"description": "Use of responsive design and media queries",
			"url": "https://www.github.com/Giovanniko",//remove
			"images": ["./images/Nature-logic-130x183.jpg"]
		},
		{
			"title": "Portfolio",
			"dates": "August 2017",
			"description": "Use of art direction techniques and speed optimization",
			"url": "https://www.github.com/Giovanniko",
			"images": ["./images/Suminagashi-130x183.jpg"]
		},
		{
			"title": "Online Resume",
			"dates": "September 2017",
			"description": "Use of JavaScript basics",
			"url": "https://www.github.com/Giovanniko",
			"images": [" ./images/Swirl-strokes-130x183.jpg"]
		},
		{
			"title": "Classic Arcade Game",
			"dates": "October 2017",
			"description": "Use of visual assets and a game loop engine.",
			"url": "https://www.github.com/Giovanniko",
			"images": [" ./images/Hasegawa-Tohaku-trees-130x183.jpg"]
		}
	]

}

var connect = {
	"facebook": "https://www.facebook.com/jonathan.koefman",
	"linkedin": "https://www.linkedin.com/in/koefman/",
	"twitter": "https://www.twitter.com/etodapiei"
}

/*TODO bio.display function()*/

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
// $("#header").append(HTMLcontactGeneric.replace("%data%", "Contact:"));
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbiopic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMessage.replace("%data%", bio.welcomeMessage));

if (bio.skills) {
	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));
}

// var displayWork = function() {
work.display = function() {

	
	for (var travail = 0; travail < work.jobs.length; travail++) {
		$("#workExperience").append(HTMLworkStart);
		var formattCompany = HTMLworkEmployer.replace("%data%", work.jobs[travail].employer);
		var formattCompany = formattCompany.replace("#", work.jobs[travail].url);
		var formattPosition = HTMLworkTitle.replace("%data%", work.jobs[travail].title);
		var formattWorkEntry = formattCompany + formattPosition;
		$(".work-entry:last").append(formattWorkEntry);
		/*as loop progresses more than one .work-entry is appended,	so we have to use :last.*/
		var formattDates = HTMLworkDates.replace("%data%", work.jobs[travail].dates);
		var formattLocation = HTMLworkLocation.replace("%data%", work.jobs[travail].location);
		var formattDescription = HTMLworkDescription.replace("%data%", work.jobs[travail].description);
		//Each HTML*. var is inside each formatt*. var
		//so put each set of details inside the last work-entry!!//The formatting is taken care by the css class in the HTML* var
		//$(".work-entry:last").append(formattCompany);
		$(".work-entry:last").append(formattDates);
		$(".work-entry:last").append(formattLocation);
		$(".work-entry:last").append(formattDescription);

	};
};

work.display();
// displayWork();

projects.display = function() {

	for (var proj = 0; proj < project.projects.length; proj++) {
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
		//var projectTitle = projectTitle.replace("#", project.projects[proj].url); changed
		var projectDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
		var projectDescrip = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
		var projectImg = HTMLprojectImage.replace("%data%", project.projects[proj].images);
		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDates);
		$(".project-entry:last").append(projectDescrip);
		$(".project-entry:last").append(projectImg);
		var projectTitle = projectTitle.replace("#", HTMLprojectModal);//recent
		//var projectModal = HTMLprojectModal;//recent
		//$(".project-entry:last").append(projectModal);//recent
	};
};

projects.display();

education.display = function() {

	for (var scuola = 0; scuola < education.schools.length; scuola++) {
		$("#education").append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%", education.schools[scuola].name);
		schoolName = schoolName.replace("#", education.schools[scuola].url);
		var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[scuola].degree);
		var schoolDates = HTMLschoolDates.replace("%data%", education.schools[scuola].dates);
		var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[scuola].location);
		var schoolmajor = HTMLschoolMajor.replace("%data%", education.schools[scuola].majors);
		$(".education-entry:last").append(schoolName);
		$(".education-entry:last").append(schoolDegree);
		$(".education-entry:last").append(schoolDates);
		$(".education-entry:last").append(schoolLocation);
		$(".education-entry:last").append(schoolmajor);

	};
	$("#education").append(HTMLonlineClasses);
	for (curso in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[curso].title);
		onlineTitle = onlineTitle.replace("#", education.onlineCourses[curso].url);
		var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[curso].school);
		var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[curso].dates);
// 		var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[curso].url);
		$(".education-entry:last").append(onlineTitle);
		$(".education-entry:last").append(onlineSchool);
		$(".education-entry:last").append(onlineDates);
// 		$(".education-entry:last").append(onlineUrl);

	};

};
education.display();

/*
GoogleMap
*/

$("#mapDiv").append(googleMap);

/* Let's Connect Section*/

$("#footerContacts").append(HTMLconnectFacebook.replace("%data%", connect.facebook));
$("#footerContacts").append(HTMLconnectLinkedin.replace("%data%", connect.linkedin));
$("#footerContacts").append(HTMLconnectTwitter.replace("%data%", connect.twitter));


/*Modal Section*/

//$("#modality").append
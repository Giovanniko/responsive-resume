/*OBJECT LITERAL INPUTS
----------------------*/

var bio = {
		name: "Jonathan Koefman",
		role: "Web Developer",
		contacts: {
			mobile: "956 212 1070",
			email: "jkoefman@gmail.com",
			github: "Giovanniko",
			location: "Estero, Florida",
			facebook: "https://www.facebook.com/jonathan.koefman",
			linkedin: "https://www.linkedin.com/in/giovanniko",
			twitter: "https://www.twitter.com/etodapiei"
			},
		welcomeMessage: "Would love to share ideas on exciting projects, drop me a line!",
		skills: ["Python", "Data Analysis", "Machine Learning", "Subsea Vehicles"],
		biopic: "images/black-enso.jpg"
};

var work = {
	jobs: [
		{
		employer: "Zattera Inc and Agencies",
		title: "Subsea Vehicles Engineer",
		location: "London, UK",
		dates: "2007 to Present",
		description: "ROV subsea construction and survey",
		url: "https://www.atlasprofessionals.com"
		},
		{
		employer: "Deep Ocean",
		title: "Subsea Vehicles Technician",
		location: "Ciudad del Carmen, Mexico",
		dates: "2007",
		description: "ROV subsea construction and survey",
		url: "https://www.deepocean.no"
		},
		{
		employer: "Oceaneering",
		title: "Subsea Vehicles Pilot",
		location: "Ciudad del Carmen, Mexico",
		dates: "2006",
		description: "Subsea surveys",
		url: "https://www.oceaneering.com"
		}
	]
};

var education = {
	schools: [
		{
			name: "Cornell University",
			location: "Ithaca, NY",
			degree: "Master of Engineering",
			majors: ["Project Management"],
			dates: "2003 ",
			url: "https://www.cornell.edu"
		},
		{
			name: "Cornell University",
			location: "Ithaca, NY",
			degree: "Bachelor of Science",
			majors: ["Structural Engineering"],
			dates: "2002 ",
			url: "https://www.cornell.edu"
		},
		{
			name: "City College of New York",
			location: "New York, NY",
			degree: "Transferred to Cornell",
			majors: ["Computer Science"],
			dates: "2000 ",
			url: "https://www.ccny.cuny.edu"
		},
		{
			name: "LaGuardia Community College",
			location: "Queens, NY",
			degree: "Associate of Arts",
			majors: ["Liberal Arts and Social Sciences"],
			dates: "1998 ",
			url: "https://www.laguardia.edu"
		}
	],

	onlineCourses: [
		{
			title: "Front-end Developer",
			school: "Udacity",
			dates: "Aug 2017",
			url: "https://classroom.udacity.com/nanodegrees/nd001/syllabus/core-curriculum"
		},
		{
			title: "Intro to Inferencial Statistics",
			school: "Udacity",
			dates: "June 2017",
			url: "https://classroom.udacity.com/courses/ud201"
		},
		{
			title: "Intro to Descriptive Statistics",
			school: "Udacity",
			dates: "July 2017",
			url: "https://classroom.udacity.com/courses/ud827"
		},
		{
			title: "Intro to Computer Science",
			school: "Udacity",
			dates: "May 2017",
			url: "https://classroom.udacity.com/courses/cs101"
		}
	]
};

var projects = {
	projects: [
		{
			title: "Responsive Images",
			dates: "August 2017",
			description: "Use of responsive design and media queries to reformat elements for various screen sizes.",
			url: "https://github.com/Giovanniko/Responsive-Images-Tables.git",
			images: ["./images/ProjectImages/NaplesTimes/NaplesTimes-FullPage1117x1273.png",
                       "./images/ProjectImages/NaplesTimes/NaplesTimes-699x626.png",
                       "./images/ProjectImages/NaplesTimes/NaplesTimes-699x1499.png",
                       "./images/ProjectImages/NaplesTimes/NaplesTimes-549x626.png",
                       "./images/ProjectImages/NaplesTimes/NaplesTimesNav-549x626.png",
                       "./images/ProjectImages/NaplesTimes/NaplesTimes-549x1700.png",
                       "./images/ProjectImages/NaplesTimes/NaplesTimes-375x626.png",
                       "./images/ProjectImages/NaplesTimes/NaplesTimes-375x2325.png",
                       "./images/ProjectImages/NaplesTimes/NaplesTimes-355x626.png",
                       "./images/ProjectImages/NaplesTimes/NaplesTimesNav-355x2335.png",
                       "./images/ProjectImages/NaplesTimes/NaplesTimesNoNav-355x2335.png"
               
			 ],
			 captions: []//TODO: display information about each image as a 
			 			   //semi-transparent box and for use as an alt="" text.
		},
		{
			title: "Portfolio",
			dates: "August 2017",
			description: "Use of art direction techniques and speed optimization",
			url: "https://github.com/Giovanniko/Portfolio-Site.git",
			images: ["./images/ProjectImages/Portfolio/PortfolioFull1366x2276.png",
                       "./images/ProjectImages/Portfolio/PortfolioModal1125x675.png",
                       "./images/ProjectImages/Portfolio/Portfolio495x1174.png",
                       "./images/ProjectImages/Portfolio/Portfolio-iphone6-375x667.png"
             		  ],
             captions: []
		},
		{
			title: "Responsive Resume",
			dates: "September 2017",
			description: "Use of javaScript objects and jQuery to build resume with encapsulated functions and an interactive map.",
			url: "https://github.com/Giovanniko/Responsive-Resume.git",
			images: ["./images/ProjectImages/ResponsiveResume/ResponsiveResumeFull1366x675.png",
                       "./images/ProjectImages/ResponsiveResume/ResponsiveResumeModal2Column692x675.png",
                       "./images/ProjectImages/ResponsiveResume/ResponsiveResumeNewPageAnchor1358x760.png",
                       "./images/ProjectImages/ResponsiveResume/ResponsiveResumeModalfull899x675.png",
                       "./images/ProjectImages/ResponsiveResume/ResponsiveResume429x4711.png",
                       "./images/ProjectImages/ResponsiveResume/ResponsiveResume717x4201.png",
                       "./images/ProjectImages/ResponsiveResume/ResponsiveResume817x4090.png",
                       "./images/ProjectImages/ResponsiveResume/ResponsiveResumeFull1366x4240.png",
                       "./images/ProjectImages/ResponsiveResume/ResponsiveResumeModal1ColumnFull405x5965.png",
                       "./images/ProjectImages/ResponsiveResume/ResponsiveResumeModal2ColumnFull675x3649.png"
                       ],
            captions: []
		},
		{
			title: "Classic Arcade Game",
			dates: "October 2017",
			description: "Use of visual assets and a game loop engine.",
			url: "https://github.com/Giovanniko/Classic-Arcade-Game.git",
			images: ["./images/ProjectImages/ClassicArcade/WWWUnderConstrucion.jpg"],
            captions: []
		}
	]
};

/*Pls Note: all encapsulation for functions done with dot notation, 
instead of directly in the object literals*/

/*BIOGRAPHIC SECTION
--------------------*/

bio.display = function(){
	
	$("#header").append(HTMLheaderStart);
	$("#headStart").append(HTMLheaderName.replace("%data%", bio.name));
	$("#headStart").append(HTMLheaderRole.replace("%data%", bio.role));	
	$("#header").append(HTMLtopContacts);

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLbiopic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMessage.replace("%data%", bio.welcomeMessage));

	if (bio.skills.length > 0) {
    	$("#header").append(HTMLskillsStart);
    	for (var j = 0; j < bio.skills.length; j++) {
      		$("#skills").append(HTMLskills.replace("%data%", bio.skills[j]));
    	}
  	}
  	
/* FOOTER
---------*/
	var socialFeet = function(){
		$("#footerContacts").append(HTMLconnectFacebook.replace("%data%", bio.contacts.facebook));
		$("#footerContacts").append(HTMLconnectLinkedin.replace("%data%", bio.contacts.linkedin));
		$("#footerContacts").append(HTMLconnectTwitter.replace("%data%", bio.contacts.twitter));
	};
	socialFeet();
};
bio.display();

/*WORK SECTION
-------------*/

work.display = function(){
	
	for (var travail = 0; travail < work.jobs.length; travail++) {

		$("#workExperience").append(HTMLworkStart);

		var formattCompany = HTMLworkEmployer.replace("%data%", work.jobs[travail].employer);
		formattCompany = formattCompany.replace("#", work.jobs[travail].url);
		var formattPosition = HTMLworkTitle.replace("%data%", work.jobs[travail].title);
		var formattWorkEntry = formattCompany + formattPosition;
		$(".work-entry:last").append(formattWorkEntry);

		var formattDates = HTMLworkDates.replace("%data%", work.jobs[travail].dates);
		var formattLocation = HTMLworkLocation.replace("%data%", work.jobs[travail].location);
		var formattDescription = HTMLworkDescription.replace("%data%", work.jobs[travail].description);
	
		$(".work-entry:last").append(formattDates,formattLocation,formattDescription);
	}
};
work.display();

/*PROJECTS SECTION
-----------------*/

projects.display = function(){
	for (var proj = 0; proj < projects.projects.length; proj++) {
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		projectTitle = projectTitle.replace("#", projects.projects[proj].url); 
		var projectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		var projectDescrip = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);

	/*Make parameters for modal*/	
		var modalTitle = projects.projects[proj].title;
		var myModalLabel = "myModalLabel" + proj;
		var modalBodyDescrip =  "modalBodyDescrip" + proj;
		
		//makes the id for the current image section of the modal:
		var myModalImages = "myModalImages" + proj;
		
		var projectId = "project" + proj;

		var HTMLprojectModal = 
			 '<div class="modal fade" id="'+ projectId + '" tabindex="-1" role="dialog" aria-labelledby="'+ myModalLabel +'" aria-hidden="true">'+
			   '<div class="modal-dialog">'+
				'<div class="modal-content">'+
				 '<div class="modal-header">'+
				  	'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
          				'<span aria-hidden="true">&times;</span>'+
        			'</button>'+
					'<h4 class="modal-title" id="'+myModalLabel+'">'+ modalTitle +'</h4>'+
				  '</div>'+
				  '<div class="modal-body" id="'+modalBodyDescrip+'">'+
				  	'<hr>'+
				  	'<div class="modal-images" id="'+myModalImages+'">'+
 				  	'</div>'+
				  '</div>'+
				  '<div class="modal-footer">'+
					'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
				  '</div>'+
				'</div>'+
			  '</div>'+
			'</div>';
		
		$("#modals:last").append(HTMLprojectModal);
		$("#modalBodyDescrip" + proj).prepend(projectDescrip);
        
    //produces 4 image column divs as children of modal-images
        var i=1;
        while (i<5) {
            var colID = "Modal" + proj + "-column" + i;
            var ImgColumn = HTMLimageColumn.replace("%data%", colID); //id="column1" etc
            $("#myModalImages" + proj).append(ImgColumn);
            i++;            
        }

		/*Loops through each project's images and attaches to an anchor tag <a>
		and then attaches the anchor to one of the four columns made above */

		var totalSnaps = 0;
		for (var snap = 0; snap < projects.projects[proj].images.length; snap++){
			
			//modal images attached:
			var projectImg = HTMLprojectImage.replace("%data%", projects.projects[proj].images[snap]);
			projectImg = projectImg.replace("%project%", projectId);
			
			//puts current fullsize image in anchor:
			var imgAnchor = HTMLimageAnchor.replace("%data%", projects.projects[proj].images[snap]);//new
			
			//make image Anchor id and attach to HTML:
			totalSnaps = totalSnaps + 1;
			var imgNumber = "modal" + proj + "imgNumber" + totalSnaps;
			imgAnchor = imgAnchor.replace("%imgNumber%", imgNumber);
           
			//gets index number of modal 
			var assignImg = myModalImages.charAt(myModalImages.length -1);
			
			//attaches image anchor and image to anchor only if same project and correct modal index
			if (assignImg == proj) {
	
			/*TODO: turn the modal images into a masonry style layout*/
				var anchorGroup = 0;
				var columnIndex = '';
                //attaches Imgage Anchor to columns 1 to 4 in looping sequence:
                if (totalSnaps < 5) {
                	anchorGroup = totalSnaps;
                	columnIndex = "Modal" + proj + "-column" + anchorGroup;
                	$("#" + columnIndex).append(imgAnchor);
                } else {
                	anchorGroup = totalSnaps-4;
                	columnIndex = "Modal" + proj + "-column" + anchorGroup;
                	$("#" + columnIndex).append(imgAnchor);
                }
                                            
				$("#" + imgNumber).append(projectImg);
			}
		}
	
		var cameraIcon = HTMLcameraIcon.replace("%data%", "./images/device-camera.svg");
		cameraIcon = cameraIcon.replace("%project%", projectId);

		$(".project-entry:last").append(projectTitle,projectDates,projectDescrip,cameraIcon);
	}
};
projects.display();

/*EDUCATION SECTION
------------------*/

education.display = function() {

	for (var scuola = 0; scuola < education.schools.length; scuola++) {
		
		$("#education").append(HTMLschoolStart);
		
		var schoolName = HTMLschoolName.replace("%data%", education.schools[scuola].name);
		schoolName = schoolName.replace("#", education.schools[scuola].url);
		var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[scuola].degree);
		var schoolDates = HTMLschoolDates.replace("%data%", education.schools[scuola].dates);
		var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[scuola].location);
		var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[scuola].majors);
		
		$(".education-entry:last").append(schoolName,schoolDegree,schoolDates,schoolLocation,schoolMajor);
	}
	
	$("#education").append(HTMLonlineClasses);
	
	for (var curso = 0; curso < education.onlineCourses.length; curso++) {

		$("#education").append(HTMLschoolStart);

		var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[curso].title);
		onlineTitle = onlineTitle.replace("#", education.onlineCourses[curso].url);
		var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[curso].school);
		var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[curso].dates);
		
		$(".education-entry:last").append(onlineTitle,onlineSchool,onlineDates);
	}
};
education.display();

/* GOOGLE MAP 
-------------*/

var mapCreate = function(){
	$("#mapDiv").append(googleMap);
};
mapCreate();
/*TODO: add information to pop-ups when activating map pins*/


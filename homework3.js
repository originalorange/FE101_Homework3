// Using objects to assign project data for portfolio site

// object 1 - literal method

	var project1 = {
		description: "Annual Report",
		year: 2014,
		client: "Camp Kesem",
		tools: "Adobe InDesign, Photoshop & Illustrator"
	};


// objects 2-5 - constructor method

	function Project(description, year, client, tools){
		this.description = description;
		this.year = year;
		this.client = client;
		this.tools = tools;
	}

	var project2 = new Project("Infographic", 2015, "Step Up", "Adobe Illustrator");
	var project3 = new Project("Shine & Dine Event Collateral", 2014, "Step Up", "Adobe InDesign, Photoshop & Illustrator");
	var project4 = new Project("Clinical Pathways", 2013, "Synapse Medical Communications", "Adobe Photoshop & Illustrator");
	var project5 = new Project("Annual Report", 2013, "Alzheimer’s Foundation of America", "Adobe InDesign, Photoshop & Illustrator");
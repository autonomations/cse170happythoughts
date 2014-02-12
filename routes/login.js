

exports.view = function(req, res){
   res.render('login', {
	"images": [
		{
			"name": "Doug Engelbart",
			"description": "Has awesome pet mice",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"			
		},
		{
			"name": "Ivan Sutherland",
			"description": "Great at sketching",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg"			
		},
		{
			"name": "Lucy Suchman",
			"description": "Loves Trukese navigators",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/d/df/Lucy_Suchman.jpeg"			
		},
		{
			"name": "Vannevar Bush",
			"description": "Has stellar associative memory",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg"			
		},
		{
			"name": "Grace Hopper",
			"description": "Only friend with a Navy ship named after them",
			"imageURL": "http://www.personal.psu.edu/djd5202/gHop.jpg"
		},
		{
			"name": "Allen Newell",
			"description": "Really into psychology",
			"imageURL": "http://www.nap.edu/html/biomems/photo/anewell.JPG"
		}
	],

	"navbar": [
      {"navbar-item": "Home"},
      {"navbar-item": "Create"},
      {"navbar-item": "Profile"},
      {"navbar-item": "Friends"},
      {"navbar-item": "Logout"}
    ],


    "projects": [
      { "name": "Waiting in Line",
        "image": "lorempixel.people.1.jpeg",
        "id": "project1"
      },
      { "name": "Needfinding",
        "image": "lorempixel.city.1.jpeg",
        "id": "project2"
      },
      { "name": "Prototyping",
        "image": "lorempixel.technics.1.jpeg",
        "id": "project3"
      },
      { "name": "Heuristic Evaluation",
        "image": "lorempixel.abstract.1.jpeg",
        "id": "project4"
      },
      { "name": "Visualization",
        "image": "lorempixel.abstract.8.jpeg",
        "id": "project5"
      },
      { "name": "Social design",
        "image": "lorempixel.people.2.jpeg",
        "id": "project6"
      },
      { "name": "Gestural interaction",
        "image": "lorempixel.technics.2.jpeg",
        "id": "project7"
      },
      { "name": "Design tools",
        "image": "lorempixel.city.2.jpeg",
        "id": "project8"
      }
    ]
});
}


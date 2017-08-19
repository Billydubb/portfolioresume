const indexJson = {
    "resume_list": [
       { 
            "title": "Machine Learning Course, Coursera",
            "timeframe": "2017 - current",
            "description": "Learning about ML and AI algorithms."
        },

        { 
            "title": "Full stack mobile (iOS/React Native) developer, Softgarden",
            "timeframe": "2016 - current",
            "description": "Finished development of Coffi app and published to the app store. Developed the Just-Hire app for iOS from start to finish in a team of three. Currently leading effors to port the Just-Hire app to Android and Windows platform via React Native."
        },

        {
            "title": "MSc. Computer Engineering, TU Berlin",
            "timeframe": "2014 - 2016",
            "description": "Master's degree in Computer Engineering with a focus on Networking, at the TU Berlin. Thesis entitled: 'Design and implementation of a minimal context reasoning engine for robust dynamic spectrum access wireless communication'."
        },

        { 
              "title": "Student Employee, Fraunhofer HHI",
            "timeframe": "2012 - 2014",
            "description": "Programmed lab equipment in LabView, automating fiber-chip passive waveguide alignment and measurement."
        },

        { 
            "title": "BSc. Electrical Engineering, TU Berlin",
            "timeframe": "2008 - 2013",
            "description": "Bachelor's degree in Electrical Engineering with a focus on telecommunications engineering. Thesis entitled: 'Automation of fiber-chip alignments for passive waveguide structures.'"
        }
    ],

	"portfolio_list": [
       { 
            "title": "Softgarden iOS App, Softgarden",
            "timeframe": "2016 - Current",
            "link": "#",
			"img": "img/portfolio/just_hire_icon.jpg",
			"alt": "Just-Hire Icon"
        },
		{ 
            "title": "Coffi iOS App, Softgarden",
            "timeframe": "2016",
            "link": "./coffi_detail.html",
			"img": "img/portfolio/coffi_icon.jpg",
			"alt": "Coffi App Icon"
        },
		{ 
            "title": "BVG Live Schedule iOS App, Personal",
            "timeframe": "2015",
            "link": "#",
			"img": "img/portfolio/bvg_icon.png",
			"alt": "BVG App Icon"
        },
		{ 
            "title": "Slack Standup Chat Bot, Personal",
            "timeframe": "2017 - Current",
            "link": "#",
			"img": "img/portfolio/subot_icon.png",
			"alt": "SUBot Icon"
        }
    ],

    "coffi_tech_list": [
        { 
            "category": "App",
             "items": [
                {
                    "title": "Objective-C"
                 },
                {
                    "title": "SQLite"
                },
                {
                    "title": "Autolayout/.xib"
                 },
                {
                    "title": "Socket.io"
                 },
				 {
                    "title": "Push Notifications"
                 }
            ]
        },
        {
            "category": "Backend",
             "items": [
                {
                    "title": "Node.js"
                 },
                {
                    "title": "Express.js"
                 },
                {
                    "title": "Kraken.js"
                },
                {
                    "title": "Sequelize"
                 },
                {
                    "title": "Socket.io"
                 },
                {
                    "title": "Swaggerize"
                 },
                {
                    "title": "Docker"
                 },
                {
                    "title": "Nginx"
                 },
                {
                    "title": "Redis"
                 }
            ]
        },
        {
            "category": "Project Management",
             "items": [
                {
                    "title": "Git"
                 },
                {
                    "title": "Pivotaltracker"
                },
                {
                    "title": "Jira"
                 }
            ]
        }
    ]
};

module.exports = indexJson;
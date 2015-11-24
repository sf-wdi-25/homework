var data = {
    "school": "General Assembly",
    //adding City as a nested key:value in new 'address' associative array
    "address": [
        {
            "street": "225 Bush Street",
            "floor": "5th Floor",
            "city": "San Francisco",
            "state": "California",
            "zip": "94014",
            "country": "United States of 'Murica!"
        }
    ],
    "course": "Web Development Immersive",
    "course_id": "WDI25",
    "classroom": "8",
    "instructors": [
        {
            "id": 0,
            "last_name": "copycat Nathan",
            "first_name": "Allen ",
            "github_username": "nathanallen"
        },
        {
            "id": 1,
            "last_name": "Travis",
            "first_name": "Gaff",
            "github_username": "tgaff"
        },
        {
            "id": 2,
            "last_name": "Justin",
            "first_name": "Castilla",
            "github_username": "justincastilla"
        }
    ],
    "DiR": [
        {
            "last_name": "Stenson",
            "first_name": "Heather",
            "status": "Super Duper AwesomeSauce",
            "github_username": "heystenson"
        }
    ],
    "students": [
        {
            "id": 0,
            "first_name": "Is"
        },
        {
            "id": 1,
            "first_name": "Reva"
        },
        {
            "id": 2,
            "first_name": "Joe"
        },
        {
            "id": 3,
            "first_name": "Colbert"
        },
        {
            "id": 4,
            "first_name": "Danny"
        },
        {
            "id": 5,
            "first_name": "Kehontas"
        },
        {
            "id": 6,
            "first_name": "Nathan",
            "github_username": "anonym0us3",
            "hobbies": ["playing with high-tech gadgets", "marksmanship", "consuming copious amounts of TV & Movies"]
        },
        {
            "id": 7,
            "first_name": "Thomas"
        },
        {
            "id": 8,
            "first_name": "Daniel"
        },
        {
            "id": 9,
            "first_name": "Josh"
        },
        {
            "id": 10,
            "first_name": "Breon"
        },
        {
            "id": 11,
            "first_name": "Rich"
        },
        {
            "id": 12,
            "first_name": "Kayvon"
        },
        {
            "id": 13,
            "first_name": "Alex"
        },
        {
            "id": 14,
            "first_name": "Matt"
        },
        {
            "id": 15,
            "first_name": "Noah"
        },
        {
            "id": 16,
            "first_name": "Doug"
        }]
};

// Based on our experience in class so far and your familiarity with the above object, consider the following as you read further:
// How many of the properties in data are Strings?
    // A: 5 - the values for 'school', 'city', 'course', 'course_id', and 'classroom'
// How many of the properties are Arrays?
    // A: 1 - instructors
// If there is an array, what is the array data type?
    // A: Yes, "instructors is an Array and the data type is Object/Associative Array
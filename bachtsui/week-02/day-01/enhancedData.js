var data = {
    "school": "General Assembly",
    "city": "San Francisco",
    "course": "Web Development Immersive",
    "course_id": "WDI25",
    "classroom": "8",
    
    "address": "580 Howard St, San Francsico, CA",
    "floor_number":"5",
    "students": [
        {
           "id": 0,
            "first_name": "Doug "
        },
        {
           "id": 1,
            "first_name": "Student that Looks like Doug"
        },
        {
           "id": 2,
            "first_name": "That other student that looks like Doug"
        }
    ],

    "instructors": [
        {
            "id": 0,
            "last_name": "Nathan",
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
    ]
};

var addressIs= data.address;
console.log(addressIs);

var floorIs= data.floor_number;
console.log(floorIs);

var studentArray=data.students;
console.log(studentArray);

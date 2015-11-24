//CHALLENGE A

// challenge 1

var prices = [3.00,4.00,10.00,2.25,3.01];

//[2.99, 3.99, 9.99, 2.24, 3.00]

//part1

var newPrice = prices.map(function(element) {
    return element - 0.01;
});
   
console.log(newPrice);

//part2

var newPrice = prices.map(function(element) {
    if (element % 1 === 0) {
        return element - 0.01;
    } else {
        return element;
    }
});

console.log(newPrice);

// part 3

var newPrice = prices.map(function(element) {
    return element * 1.05;
});

console.log(newPrice);

// Challenge 2

var birthDates = [1, 1, 2, 4, 7, 4, 12, 30];

//part1

var oddBirthDates = birthDates.filter(function(elem) {
    if (elem % 2 === 1) {
        return true;
    }
});

var evenBirthDates = birthDates.filter(function(elem) {
    if (elem % 2 === 0) {
        return true;
    }
});

console.log(oddBirthDates);
console.log(evenBirthDates);

var evenVsOdd = (evenBirthDates.length / (evenBirthDates.length + oddBirthDates.length)) * 100;

console.log(evenVsOdd + "% of GA students have an even birthdate!!");

//challenge 3

var earnings = [20, 25, 60, 20, 85, 20];

var totalEarnings = earnings.reduce(function(current, next) {
    return current + next;
}, 500);

console.log(totalEarnings);

var twenties = [];

earnings.forEach(function(elem) {
    if (elem === 20) {
        twenties.push(elem);
    }
});

//CHALLENGE B

array = [];
function hereYaGo(array) {
    return array
};

array = ["a","b","c","d"];

function first(array) {
    return array[0];
};

function last(array) {
    return array[array.length - 1];
};

function printEach(array) {
    var i = 0;
    while (i < array.length) {
        console.log(array[i]);
        i += 1;
    }
}

function printEach(array) {
    var i = 0;
    while (i < array.length) {
        console.log(array[i] + "!");
        i += 1;
    }
}

function printEachPlus(array, callBack) {
    var i = 0;
    while (i < array.length) {
        console.log(array[i] + callBack());
        i += 1;
    }
}

printEachPlus(array, function bang(){
    return "!";
});


array = array.map(function(elem){
    return (elem.toUpperCase());
});

console.log(array);

//Object Homework

console.log(twenties.length);

var data = {
    "school": "General Assembly",
    "city": "San Francisco",
    "course": "Web Development Immersive",
    "course_id": "WDI25",
    "classroom": "8",
    "address" : "225 Bush St",
    "floor" : "5",
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
    ],
    "students": ["Noah", "Nathan", "Kehontes", "Riba", "Rich", "Joe", "Matt", "Josh", "Alex", "Danny", "Daniel", "Doug", "Kayvon", "Breon", "Thomas", "Is"]
};

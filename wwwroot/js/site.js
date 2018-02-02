
// fake database
var events = [
    {
        id: 1,
        title: "Restaurant Opening",
        date: "2018-02-01",
        desc: 
        "Treat your sweetheart to a special Valentine's Day Dinner at The Grille! We will have a delicious Italian menu prepared for you by our wonderful culinary staff. ",
        interest: "food"
    },
    {
        id: 2,
        title: "Backstreet Boys",
        date: "2018-03-15",
        desc: "abcdefg",
        interest: "music"
    },
    {
        id: 3,
        title: "Event 3",
        date: "02/01/2018",
        desc: "abcdefg",
        interest: "fun"
    },
    {
        id: 4,
        title: "Event 4",
        date: "02/01/2018",
        desc: "abcdefg",
        interest: "food"
    },
    {
        id: 5,
        title: "Event 5",
        date: "02/01/2018",
        desc: "abcdefg",
        interest: "fun"
    }
]

var interests = [
    {
        name: 'food',
        icon: '<span class="glyphicon glyphicon-ice-lolly-tasted"></span>'
    }
]

var intImages = {
    "food": "https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "music": "https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    "fun": "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" 
}

if(localStorage.savedEvents === undefined){
var arr = [];
localStorage.setItem("savedEvents", JSON.stringify(arr));
}

//Events page scripts
if(document.getElementById("dallas-events") != undefined){
    //import {createEventsList} from './eventsList'
    //const el = require('./eventsList');
    //el.hello();
    //createEventsList();

    
    $.getScript('../js/eventsList.js', function()
    {
        createEventsList();
    });
}
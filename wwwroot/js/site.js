
// fake database
var events = [
    {
        id: 1,
        title: "Restaurant Grand Opening",
        date: "2/1/18",
        desc: 
        "Treat your sweetheart to a special Valentine's Day Dinner at The Grille! We will have a delicious Italian menu prepared for you by our wonderful culinary staff. ",
        interest: "food"
    },
    {
        id: 2,
        title: "Event 2",
        date: "2/1/18",
        desc: "abcdefg",
        interest: "food"
    },
    {
        id: 3,
        title: "Event 3",
        date: "2/1/18",
        desc: "abcdefg",
        interest: "fun"
    },
    {
        id: 4,
        title: "Event 4",
        date: "2/1/18",
        desc: "abcdefg",
        interest: "food"
    },
    {
        id: 5,
        title: "Event 5",
        date: "2/1/18",
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
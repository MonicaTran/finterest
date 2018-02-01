
// fake database
var events = [
    {
        title: "Event 1",
        date: "2/1/18",
        desc: "abcdefg",
        interest: "music"
    },
    {
        title: "Event 2",
        date: "2/1/18",
        desc: "abcdefg",
        interest: "food"
    },
    {
        title: "Event 3",
        date: "2/1/18",
        desc: "abcdefg",
        interest: "fun"
    },
    {
        title: "Event 4",
        date: "2/1/18",
        desc: "abcdefg",
        interest: "food"
    },
    {
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
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

//TODO: will move to events.js file
var createEventsList = function(){
    var eventsDiv = document.getElementById("dallas-events");
    events.forEach(function(evnt) {
        var iconStr = "";
        let interest = interests.find(x => x.name == evnt.interest)
        if(interest != undefined){
            iconStr = interest.icon
        }
        let string = '<div class="col-sm-12 col-md-4">' +
                '<div class="thumbnail event-card clearfix">' +
                '<div><h6>' + evnt.interest.toUpperCase() + '</h6></div>' +
                '<div class="card-body text-info">' +
                    '<h3 class="card-title">' + evnt.title + '</h3>' +
                    '<p class="card-text">' + evnt.desc + '</p>' +
                    '<hr/>' +
                '</div>' +
                '<p class="pull-right"><a href="/Home/Events" class="btn btn-info" role="button">Learn More</a></p>' +
            '</div>' +
        '</div>';
        eventsDiv.insertAdjacentHTML("beforeend", string);

    })
}

if(document.getElementById("dallas-events") != undefined){
    createEventsList();
}
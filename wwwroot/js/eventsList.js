function createEventsList() {
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

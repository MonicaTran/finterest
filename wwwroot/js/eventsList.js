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
                '<div class="pull-right" style="padding-right:7px;"><h6>' + evnt.interest.toUpperCase() + '</h6></div>' +
                '<div class="card-body text-info">' +
                    '<h6>' + evnt.date + "</h6>" +
                    '<h3 class="card-title">' + evnt.title + '</h3>' +
                    '<hr/>' +
                '</div>' +
                '<p class="pull-right"><button id="event-' + evnt.id + '" href="/Home/Events" class="btn btn-info" role="button">Learn More</button></p>' +
            '</div>' +
        '</div>';
        eventsDiv.insertAdjacentHTML("beforeend", string);
        console.log("added event");

    })

    addButtonListeners();
}

function addButtonListeners() {
    console.log("adding listeners");
    events.forEach(function(evnt) {
        var singleEventBtn = document.getElementById("event-" + evnt.id.toString());
        console.log(singleEventBtn);
        singleEventBtn.addEventListener("click", function() {
            openEventModal(evnt.id);
        });
    })
}

function openEventModal(num) {
    var singleEvent = events.find(function(item) {
        return item.id == num;
    });
    document.getElementById("evt-modal-label").innerText = (singleEvent.title + " details").toUpperCase();
    document.getElementById("evt-modal-title").innerText = singleEvent.title;
    document.getElementById("evt-modal-date").innerText = singleEvent.date;
    document.getElementById("evt-modal-desc").innerText = singleEvent.desc;
    $("#evtModal").modal();
}
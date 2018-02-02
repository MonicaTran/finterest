function createEventsList() {
    var eventsDiv = document.getElementById("dallas-events");
    events.forEach(function(evnt) {
        var iconStr = "";
        let interest = interests.find(x => x.name == evnt.interest)
        if(interest != undefined){
            iconStr = interest.icon
        }
        let string = '<div class="col-sm-12 col-md-4">' +
                '<div class="card card-border-primary event-card clearfix" style="margin-bottom:15px;">' +
                //'<div style="background:url(\'' + intImages[evnt.interest] + '\')"></div>' +
                '<img src="' + intImages[evnt.interest] + '" style="height:200px;">' +
                '<div class="card-body text-info">' +
                '<div class="float-right" style="padding-right:7px;"><h6>' + evnt.interest.toUpperCase() + '</h6></div>' +
                    '<h6>' + Date(evnt.date).slice(4,10).toUpperCase() + "</h6>" +
                    '<h3 class="card-title">' + evnt.title + '</h3>' +
                    '<hr/>' +
                '</div>' +
                '<p class="float-right" style="text-align:right;"><button id="event-' + evnt.id + '" href="/Home/Events" class="btn btn-info" role="button">Learn More</button></p>' +
            '</div>' +
        '</div>';
        eventsDiv.insertAdjacentHTML("beforeend", string);
        console.log(Date(evnt.date).slice(4,10));

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

function removeButtonListeners(buttonId) {
    var old_element = document.getElementById(buttonId);
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
}

function openEventModal(num) {
    var singleEvent = events.find(function(item) {
        return item.id == num;
    });
    document.getElementById("evt-modal-label").innerText = (singleEvent.title + " | details").toUpperCase();
    document.getElementById("evt-modal-title").innerText = singleEvent.title;
    document.getElementById("evt-modal-date").innerText = singleEvent.date;
    document.getElementById("evt-modal-desc").innerText = singleEvent.desc;

    removeButtonListeners("save-button");
    var saveBtn = document.getElementById("save-button");

    var savedEvents = JSON.parse(localStorage.getItem("savedEvents"));
    if(savedEvents[num] === true) {
        saveBtn.className = "btn btn-danger pull-right";
        saveBtn.innerText = "Remove Event";
    }
    else {
        saveBtn.className = "btn btn-success pull-right";
        saveBtn.innerText = "Save Event";
    }
    saveBtn.addEventListener("click",function() {
        saveEventToUser(singleEvent.id);
    });
    $("#evtModal").modal();
}

function saveEventToUser(num) {
    var saveBtn = document.getElementById("save-button");

    var savedEvents = JSON.parse(localStorage.getItem("savedEvents"));
    if(savedEvents[num] != true) {
        console.log("saving " + num);
        savedEvents[num] = true;
        saveBtn.className = "btn btn-danger pull-right";
        saveBtn.innerText = "Remove Event";
    } else {
        console.log("removing " + num);
        savedEvents[num] = false;
        saveBtn.className = "btn btn-success pull-right";
        saveBtn.innerText = "Save Event";
    }
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
}
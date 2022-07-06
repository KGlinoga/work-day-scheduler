//first column will just display the hours availalbe (9am, 10am, 11am...) we COULD use a for loop iteration thing to populate all 9 boxes but.... not sure if I wannna lol.  Might be nicer  to just copy/paste this stuff by hand... MIGHT be. 
var hourBox = $('.hour');
// hourBox.text("9 AM"); 
var hourTime9 = $('#9');
var hourTime10 = $('#10');
// hourTime10.text("10 AM");

var eventForm = $('.events');
var eventFormInput = $('input[name="events-input"]');
var saveButton = $('.saveBtn');
var eventsText = $('#events-text')
var eventDisplay = localStorage.getItem("eventCopy");

// and then an event listener: 
saveButton.on("click", function() {
    localStorage.setItem("eventCopy", eventFormInput.val());
    console.log(eventFormInput.val());
})    
    
            var today = moment();
            $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
            
            // color change: 
            
            function time() {
                if (hourTime9.toInt < moment().format("k")){
                    console.log("boom");
                    eventForm.attr("class", "past col-8");    
                }
                else if (hourTime9 > moment().format("k")){
                    eventForm.attr("class", "future col-8");
                }
                else if (hourTime9 = moment().format("k")) {
                    eventForm.attr("class", "present col-8");
                }
            }
            time();
            
            
           
    // and then we append?? does that display it?? 
  
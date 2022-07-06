//first column will just display the hours availalbe (9am, 10am, 11am...) we COULD use a for loop iteration thing to populate all 9 boxes but.... not sure if I wannna lol.  Might be nicer  to just copy/paste this stuff by hand... MIGHT be. 
var hourBox = $('.hour');
hourBox.text(9); 

 
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



    
        
    
        
     
            // Once there's a method that changes the color of the blocks, we'll set it to an event listener(?OROROROR an if statment) that follows the time. maybe, if hour<=moment.js(something) {color: gray}  OR if hour===moment.js(Something) {color green} OR if hour>=moment.js {color red} ..orsomething like that.
            var today = moment();
            $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
            
            // color change: 
            
            function time() {
                if (hourBox.text < moment().format("k")){
                    console.log("boom");
                    eventForm.attr("class", "past col-8");    
                }
                else if (hourBox.text > moment().format("k")){
                    eventForm.attr("class", "future col-8");
                }
                else if (hourBox.text = moment().format("k")) {
                    eventForm.attr("class", "present col-8");
                }
            }
            time();
            
            
           
    // and then we append?? does that display it?? 
  
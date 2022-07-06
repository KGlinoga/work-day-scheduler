console.log($);

// Display current DAY: quite sure this is a Create, Style, Append situation.

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"))

// create forms I think using Bootstrap - this will be like 1 col, auto col, 1 col. then 9 rows. - this is in the HTML?? 
    // YES we got cards to work in HTML using BS

//first column will just display the hours availalbe (9am, 10am, 11am...) we COULD use a for loop iteration thing to populate all 9 boxes but.... not sure if I wannna lol.  Might be nicer  to just copy/paste this stuff by hand... MIGHT be. 
var hourBox = $('.hour')
hourBox.text('9AM'); 

//second column: forms, when clicked will allow users to enter text.  
    // this will be a form for text with an on("click")??  
    // or maybe a formEl.on("submit", saveEvent) ? it's actually an <input> tag with an attribute of type="text"
    // 06 Form Elements
  
// OK now that we've updated the form to input, we maybe need to re-write this whole function for storing the input - saving happens from a button click!!  
var eventForm = $('.events');
var eventFormInput = $('input[name="events-input"]');
var saveButton = $('.saveBtn');
var eventsText = $('#events-text')
var eventDisplay = localStorage.getItem("eventCopy");



    // // and then an event listener: 
   saveButton.on("click", function() {
    localStorage.setItem("eventCopy", eventFormInput.val());
    console.log(eventFormInput.val());
   })

   
   
   // The init() function fires when the page is loaded 
   function init() {
//        // When the init function is executed, the code inside renderLastGrade function will also execute
       eventsText.textContent = eventDisplay;
       console.log(localStorage.getItem("eventCopy"));

  }
  init();


  //Gabe's suggestion: 
  $("#events-text").val(localStorage.getItem("events-text"));

    // *varforsaveBtnselecttor.on("click", function(){
    //     handleForm();
    //     saveEvent();
    // }); < commmented this out to allow JS to work, will fix after class today :D

    // this will be to save input to local storage!!
    // function saveEvent() {
    //     localStorage.setItem('eventCopy', );
    // }
    
    // shoppingFormEl.on('submit', handleFormSubmit);
            // but we'd have to change it so the FORM itself displays the text, not create a new display (OR if we do create a new display, it'll have to include an if statement/event listener for aclick when the display form is on) 


    // display current day in the JumboTron 

    // change colors based on past, present or future- I think these are just jQuery forms (see above line)
        // let's try the following: setting an attribute (in JS declare a var that selects all the cells of this column)(use thatVar.attr('name of property', 'value'))(OR try .css(bg for background color??, the color vars given in the stylesheet.))

// var eventBlocks = $('.events');
// eventBlocks.attr('timeColor', funtcion(){
//     if 
// })
    // Once there's a method that changes the color of the blocks, we'll set it to an event listener(?OROROROR an if statment) that follows the time. maybe, if hour<=moment.js(something) {color: gray}  OR if hour===moment.js(Something) {color green} OR if hour>=moment.js {color red} ..orsomething like that.


//third column: Save buttons that will save user input to local storage 
    // seems like a localStorage.setItem("name", "value") kind of situation
        // localStorage.setItem("eventDesc", "var meaning the text entered into the form")
    // and then we append?? does that display it?? 
    // YESSSSS got the buttons to exist!!  Next we tackle the above-commented functionality.  
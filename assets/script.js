console.log($);


// create forms I think using Bootstrap - this will be like 1 col, auto col, 1 col. then 9 rows. - this is in the HTML?? 
    // YES we got cards to work in HTML using BS

//first column will just display the hours availalbe (9am, 10am, 11am...)
var hourBox = $('.hour')
hourBox.text('9AM'); 

//second column: forms, when clicked will allow users to enter text.  
    // this will be a form for text with an on("click")??  
    // or maybe a formEl.on("submit", saveEvent) ? 
    // 06 Form Elements: 
    // function handleForm(e) { 
    //     e.preventDefault();
    //     var shoppinglistItem = $('input').val();
    //     var shoppingItemEl = $('<li>').text(shoppingListItem)
    //     shoppinglistEl.append(shoppingItemEl);
    
    // }
    // // and then an event listener: 
    // shoppingFormEl.on('submit', handleFormSubmit);
            // but we'd have to change it so the FORM itself displays the text, not create a new display (OR if we do create a new display, it'll have to include an if statement/event listener for aclick when the display form is on) 

    // change colors based on past, present or future- I think these are just jQuery forms (see above line)
        // let's try the following: setting an attribute (in JS declare a var that selects all the cells of this column)(use thatVar.attr('name of property', 'value'))(OR try .css(bg for background color??, the color vars given in the stylesheet.))
    // Once there's a method that changes the color of the blocks, we'll set it to an event listener(?OROROROR an if statment) that follows the time. maybe, if hour<=moment.js(something) {color: gray}  OR if hour===moment.js(Something) {color green} OR if hour>=moment.js {color red} ..orsomething like that.


//third column: Save buttons that will save user input to local storage 
    // seems like a localStorage.setItem("name", "value") kind of situation
        // localStorage.setItem("eventDesc", "var meaning the text entered into the form")
    // and then we append?? does that display it??   
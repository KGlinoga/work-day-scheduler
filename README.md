# work-day-scheduler
Challenge 5 - Work Day Scheduler

# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

This is a Work Day Scheduler. Coding this app was meant to demonstrate some comprehension of jquery, JavaScript, Bootstrap, among other concepts covered in class.  
  
Please find the deployed app here: https://kglinoga.github.io/work-day-scheduler/

This app is useful for the busy professional who needs help keeping track of their day.  They can click on the middle forms and add text describing the tasks they'd like to work on during those hours of the day.  When the Save button is clicked, the app will save the user's input to local storage.  

Although I was not able to complete all of the acceptance criteria, I was able to successfully deploy the following subjects: 
  - dynamically altering HTML with jQuery, including text, classes and other attributes
  - displaying the current day using moment.js
  - displaying CSS formatting using the given classes
  - a Save button that does save user input to local storage
  - an if statement that will change the color of the forms depending on the time of day
  
## Concepts to Work On:
  
The following is a rundown of concepts that I know we covered in class, and that I attempted for this project, but was unable to achieve full functionality for my app.  Any and all advice is welcome!
  
  - displaying a value from Local Storage: I know we were meant to have the saved text persist even when the page is refreshed, but I was unable to get the value from Local Storage to display. 
  - assigning an integer to each row: I used if statements to color-code the forms depending on how they compare to the actual time via moment.js.  However, I wasn't able to get an integer value from the hourBoxes to compare to moment().  The if statements seemed to work aside from not having an integer to compare the time to.
  - Ideally, I would have used for loops for both the hourBoxes and the input forms when getting them to change dynamically based on time.  
  
## Installation

There are no installation steps required for this app, aside from visiting the above listed URL.  

## Usage

To use this app, simply click on the middle form and enter a description of your tasks for that hour.  Click the SAVE button when you are finished, and your notes will be saved in Local Storage for future use.  
  
  ![Screen Shot 2022-07-05 at 7 58 05 PM](https://user-images.githubusercontent.com/28368622/177458694-0e21c0e0-94b3-45e2-97e8-94dc9653501c.png)

  

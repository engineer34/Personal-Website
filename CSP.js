/* ~~~~~~~~~~~ Chapter 2: Functions - BMI Calculator ~~~~~~~~~~~~ */
// Function to calculate BMI
function calcBMI() {
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);

    // Calculate BMI using the formula: BMI = (weight * 703) / (height^2)
    const bmi = (weight * 703) / (height * height);

    // Display the result in the BMI text box
    document.getElementById('bmiResult').value = bmi.toFixed(2); // Rounded to 2 decimal places
}

// Add an event listener to call calcBMI() when the button is clicked

document.getElementById('bmiForm').addEventListener('click', calcBMI);

/* ~~~~~~~~~~~~~ Header, Nav, 
Footer Code ~~~~~~~~~~~ */

function displayHeader() {
    document.write("<header> Star Javascript Website</header>");
} 
function displayNav() {
    document.write("<nav>");
    document.write("<div>");
    document.write("<ul>");
    document.write("<li><a href='index.html'>Home</a></li>");
    document.write("<li><a href='functions.html'>Functions</a></li>");
    document.write("<li><a href='ControlFlow.html'>Control Flow</a><li>");
    document.write("<li><a href='debug.html'>Debug</a></li>");
    document.write("<li><a href='DOM.html'>DOM</a></li>");
    document.write("<li><a href='forms.html'>Form</a><li>");
    document.write("<li><a href='objects.html'>Objects</a></li>");
    document.write("<li><a href='strings.html'>Strings</a></li>");
    document.write("<li><a href='state.html'>State</a><li>");
    document.write("<li><a href='touch.html'>Touch</a></li>");
    document.write("<li><a href='CH11.html'>CSP11</a></li>");
    document.write("<li><a href='CH12.html'>CSP12</a></li>");
}
function displayFooter() {
    document.write("Contact: javier.medina@my.occc.edu<br>");
    document.write("Date Last Modified 19-April-2024<br>");
    document.write("Copyright @ 2024 Medina");
}
/* ~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~ */

// This function defines any event listeners that are needed for the page
function createEventListeners() {
    var myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function() {
      alert("You clicked the button!");
    });
  }
  
  // This function sets up the page by calling the necessary display functions and event listeners
  function setUpPage() {
    displayHeader();
    displayNav();
    displayFooter();
    createEventListeners();
  }
  
  // This event listener calls setUpPage() when the window is loaded
  window.addEventListener("load", setUpPage);
  /* ~~~~~~~~~~~ Chapter 5: DOM and DHTML -
Photo Gallery~~~~~~~~~~~~ */ 
// The JavaScript code is located in 
// photos.js and zoom.js
/* ~~~~~~~~~~~ Chapter 6: Enhancing and 
Validating Forms- Order Form~~~~~~~~~~~~ */
// The JavaScript code is located in snoot.js
function moveCursor(currentField, nextFieldID) {
  var current = document.getElementById(currentField);
  var next = document.getElementById(nextFieldID);
  if (current.value.length >= current.maxLength) {
      next.focus();
  }
}

var billPhoneArea = document.getElementById("billPhoneArea");
    var billPhoneExchange = document.getElementById("billPhoneExchange");
    var delivPhoneArea = document.getElementById("delivPhoneArea");
    var delivPhoneExchange = document.getElementById("delivPhoneExchange");

    billPhoneArea.addEventListener("input", function() {
        if (billPhoneArea.value.length === billPhoneArea.maxLength) {
            billPhoneExchange.focus();
        }
    });

    billPhoneExchange.addEventListener("input", function() {
        if (billPhoneExchange.value.length === billPhoneExchange.maxLength) {
            document.getElementById("billPhoneNum").focus();
        }
    });

    delivPhoneArea.addEventListener("input", function() {
        if (delivPhoneArea.value.length === delivPhoneArea.maxLength) {
            delivPhoneExchange.focus();
        }
    });
    delivPhoneExchange.addEventListener("input", function() {
      if (delivPhoneExchange.value.length === delivPhoneExchange.maxLength) {
          document.getElementById("delivPhoneNum").focus();
      }
  });
/* ~~~~~~~~~~~ Chapter 7: Using Object Oriented JavaScript 
- Photo Order ~~~~~~~~~~~~ */
// The JavaScript code is located in objects.js
  function getLastModified () {

  }
  /* ~~~~~~~~~~~ Chapter 8: Manipulating Data in 
Strings and Arrays - Guessing Game ~~~~~~~~~~~~ 
 The JavaScript code is located in 
strings.js */ 
// Array of mystery words
/* ~~~~~~~~~~~ Chapter 9: Managing State Information and Security - Cookies ~~~~~~~~~~~~
   The JavaScript code is located in state.js */
   /* ~~~~~~~~~~~ Chapter 10: Programming for 
Touchscreen and Mobile Devices~~~~~~~~~~~~
 The JavaScript code is located in 
touch.js */
/* ~~~~~~~~~~~ Chapter 7: Using Object Oriented JavaScript - Photo Order ~~~~~~~~~~~~ */

// Define the PortraitOrder class
function PortraitOrder(portrait, copies, size, buyer) {
    this.portrait = portrait;
    this.copies = copies;
    this.size = size;
    this.buyer = buyer;
}

// Method to calculate cost based on size and number of copies
PortraitOrder.prototype.calculateCost = function () {
    var price;
    switch (this.size) {
        case '4-wallets':
        case '2-4x6':
        case '5x7':
            price = 10;
            break;
        case '8x10':
            price = 20;
            break;
        case '11x14':
            price = 30;
            break;
        default:
            price = 0; // Default value if size is not recognized
    }
    return (price * this.copies).toFixed(2); // Return cost rounded to 2 decimal places
};

// Global variable to store the instance of PortraitOrder
var portraits;

// Function to retrieve values from form fields and create PortraitOrder instance
function getValues() {
    var portrait = document.querySelector('input[name="fileName"]:checked').value;
    var copies = parseInt(document.getElementById('copies').value);
    var size = document.querySelector('input[name="size"]:checked').value;
    var buyer = document.getElementById('buyer').value;
    var email = document.getElementById('email').value;

    portraits = new PortraitOrder(portrait, copies, size, buyer);
    PortraitOrder.prototype.email = email; // Add email property using prototype
}

// Function to display output
function displayOutput() {
    var cost = portraits.calculateCost();
    var imageHTML = '<img src="' + portraits.portrait + '" width="250" height="175" alt="' + portraits.portrait + '" />';
    var outputHTML = '<p>Buyer: ' + portraits.buyer + '</p>' +
                     '<p>Email: ' + portraits.email + '</p>' +
                     '<p>Copies: ' + portraits.copies + '</p>' +
                     '<p>Size: ' + portraits.size + '</p>' +
                     '<p>Cost: $' + Number(cost).toFixed(2) + '</p>'; // Format cost to 2 decimal places
    document.getElementById('orderOutput').innerHTML = imageHTML + outputHTML;
}

// Event listener for form submission
document.getElementById('formPhoto').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    var isValid = validateForm(); // Call validation function
    if (isValid) {
        getValues();
        displayOutput();
    }
});
// Event listener for "Prepare Order" button click
document.getElementById('prepareOrderButton').addEventListener('click', function () {
    // Trigger form submission
    document.getElementById('formPhoto').submit();
});

// Function to validate form fields
function validateForm() {
    var isValid = true;
    var errors = [];

    var buyer = document.getElementById('buyer').value.trim();
    var email = document.getElementById('email').value.trim();
    var copies = parseInt(document.getElementById('copies').value);
    var size = document.querySelector('input[name="size"]:checked');
    var portrait = document.querySelector('input[name="fileName"]:checked');

    // Validate buyer name
    if (buyer === '') {
        isValid = false;
        errors.push('Name is required.');
    }

    // Validate email
    if (email === '') {
        isValid = false;
        errors.push('Email is required.');
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errors.push('Invalid email format.');
        }
    }

    // Validate copies
    if (isNaN(copies) || copies < 1 || copies > 25) {
        isValid = false;
        errors.push('Number of copies must be between 1 and 25.');
    }

    // Validate size selection
    if (!size) {
        isValid = false;
        errors.push('Please select a size.');
    }

    // Validate portrait selection
    if (!portrait) {
        isValid = false;
        errors.push('Please select an image.');
    }

    // Display error messages
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = '';
    if (!isValid) {
        for (var i = 0; i < errors.length; i++) {
            var errorItem = document.createElement('p');
            errorItem.textContent = errors[i];
            errorContainer.appendChild(errorItem);
        }
    }
    return isValid;
}
// SUmmary wasn't able to get my submit button to perform what I wanted it to do was messing around a lot with my css so my labels are all over the place.

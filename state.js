document.addEventListener("DOMContentLoaded", function() {
    // Read cookies on page load
    getCookies();

    // Add event listeners to size selectors
    document.getElementById("smallBtn").addEventListener("click", function() {
        updateSize("small");
    });

    document.getElementById("mediumBtn").addEventListener("click", function() {
        updateSize("medium");
    });

    document.getElementById("largeBtn").addEventListener("click", function() {
        updateSize("large");
    });
});

function updateSize(size) {
    // Update text size and indicators
    document.getElementById("content").style.fontSize = getSizeValue(size);

    // Update visual indicators
    document.querySelectorAll('.sizeBtn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.getElementById(size + "Btn").classList.add('selected');

    // Create cookie with selected size and indicators
    var indicators = {
        small: "black",
        medium: "red",
        large: "black"
    };
    createCookie("userPreferences", size + "," + indicators.small + "," + indicators.medium + "," + indicators.large, 30);
}

function getSizeValue(size) {
    switch(size) {
        case "small":
            return "80%";
        case "medium":
            return "100%";
        case "large":
            return "125%";
        default:
            return "100%";
    }
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookies() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf("userPreferences=") === 0) {
            var preferences = cookie.substring("userPreferences=".length).split(',');
            document.getElementById("content").style.fontSize = getSizeValue(preferences[0]);

            // Update visual indicators
            document.querySelectorAll('.sizeBtn').forEach(btn => {
                btn.classList.remove('selected');
            });
            document.getElementById(preferences[0] + "Btn").classList.add('selected');
        }
    }
}
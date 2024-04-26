
document.addEventListener("DOMContentLoaded", function() {
    var languageDropdown = document.getElementById("languageDropdown");
    var dropdownMenu = document.getElementById("dropdownMenu");

    // Function to calculate and set button width to match the widest dropdown item
    function setButtonWidth() {
        // Store the original visibility state of the dropdown menu
        var originalDisplay = dropdownMenu.style.display;

        // Temporarily make the dropdown menu visible for width calculation
        dropdownMenu.style.display = 'block'; // or 'flex', 'grid', etc., depending on your layout

        var maxWidth = 0;
        var dropdownItems = dropdownMenu.querySelectorAll(".dropdown-item");

        // Loop through dropdown items to find the maximum width
        dropdownItems.forEach(function(item) {
            var width = item.offsetWidth;
            if (width > maxWidth) {
                maxWidth = width;
            }
        });

        // Set the width of the dropdown button to match the maximum width
        languageDropdown.style.setProperty('min-width', maxWidth + "px", 'important');

        // Restore the original visibility state of the dropdown menu
        dropdownMenu.style.display = originalDisplay;
    }

    // Calculate and set the width immediately when the page loads
    setButtonWidth();
});


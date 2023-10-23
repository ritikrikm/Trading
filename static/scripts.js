document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and popup
    const loginButton = document.getElementById('loginButton');
    const loginPopup = document.getElementById('loginPopup');
    const loginForm = document.getElementById('loginForm');

    // Function to show the login popup
    function showLoginPopup() {
        loginPopup.style.display = 'block';
    }

    // Function to hide the login popup
    function hideLoginPopup() {
        loginPopup.style.display = 'none';
    }

    // Event listener for the "Login" button
    loginButton.addEventListener('click', showLoginPopup);

    // Event listener for the "Submit" button in the form
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting (for demo purposes)
        // Here, you can add JavaScript code to handle form submission, e.g., sending a request to your backend for authentication.
        // Then, hide the popup:
        hideLoginPopup();
    });
});

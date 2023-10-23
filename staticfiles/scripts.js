document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and popups
    const loginButton = document.getElementById('loginButton');
    const loginPopup = document.getElementById('loginPopup');
    const loginForm = document.getElementById('loginForm');
    
    const registerButton = document.getElementById('registerButton');
    const registerPopup = document.getElementById('registerPopup');  // Ensure you have the correct ID

    // Function to show the login popup
    function showLoginPopup() {
        loginPopup.style.display = 'block';
    }

    // Function to hide the login popup
    function hideLoginPopup() {
        loginPopup.style.display = 'none';
    }

    // Function to show the register popup
    function showRegisterPopup() {
        registerPopup.style.display = 'block';
    }

    // Function to hide the register popup
    function hideRegisterPopup() {
        registerPopup.style.display = 'none';
    }

    // Event listener for the "Login" button
    loginButton.addEventListener('click', showLoginPopup);

    // Event listener for the "Submit" button in the login form
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting (for demo purposes)
        // Here, you can add JavaScript code to handle login form submission, e.g., sending a request to your backend for authentication.
        // Then, hide the login popup:
        hideLoginPopup();
    });

    // Event listener for the "Register" button
    registerButton.addEventListener('click', showRegisterPopup);

    // Event listener for the "Submit" button in the register form
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting (for demo purposes)
        // Here, you can add JavaScript code to handle register form submission, e.g., sending a request to your backend to create a new user.
        // Then, hide the register popup:
        hideRegisterPopup();
    });
});

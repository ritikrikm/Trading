document.addEventListener("DOMContentLoaded", function () {
    // Get references to the login button and popup
    const loginButton = document.getElementById('loginButton');
    const loginPopup = document.getElementById('loginPopup');
    const loginForm = document.getElementById('loginForm');
    const closeButton = document.getElementById('closeButton');

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

    // Event listener for the close button
    closeButton.addEventListener('click', hideLoginPopup);

    // Event listener for the "Submit" button in the login form
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting (for demo purposes)
        // Here, you can add JavaScript code to handle form submission, e.g., sending a request to your backend for authentication.
        // Then, hide the login popup:
        hideLoginPopup();
    });

    // Get references to the registration button and popup
    const registerButton = document.getElementById('registerButton');
    const registerPopup = document.getElementById('registerPopup');
    const registerForm = document.getElementById('registerForm');
    const registerCloseButton = document.getElementById('registerCloseButton');

    // Function to show the registration popup
    function showRegisterPopup() {
        registerPopup.style.display = 'block';
    }

    // Function to hide the registration popup
    function hideRegisterPopup() {
        registerPopup.style.display = 'none';
    }

    // Event listener for the "Register" button
    registerButton.addEventListener('click', showRegisterPopup);

    // Event listener for the close button in the registration popup
    registerCloseButton.addEventListener('click', hideRegisterPopup);

    // Event listener for the "Submit" button in the registration form
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting (for demo purposes)
       // Get user input from the registration form
       const registerEmail = document.getElementById('registerEmail').value;
       const registerPassword = document.getElementById('registerPassword').value;
       // Create an object with the user's data
       const userData = {
        email: registerEmail,
        password: registerPassword
    };
    console.log('Register email:', email);
console.log('Register password:', password);
    // Send a POST request to your Django backend for user registration
    fetch('/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        if (response.ok) {
            // Registration was successful, you can handle this accordingly
            // For example, show a success message or redirect to a "success" page.
            // Also, you might want to consider handling user login here.
        } else {
            // Registration failed, handle errors or show an error message to the user.
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });


        // Then, hide the registration popup:
        hideRegisterPopup();
    });
});

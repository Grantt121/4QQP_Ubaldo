document.addEventListener('DOMContentLoaded', function() {
    var formInputs = document.querySelectorAll('#signup-form input, #signup-form textarea');
    var video = document.getElementById('response-video');
    var form = document.getElementById('signup-form');
    var contactNumberInput = document.getElementById('contactNumber');

    // Function to play the video
    function playVideo() {
        video.currentTime = 0; // Start from the beginning
        video.play();
    }

    // Add event listeners to each form input
    formInputs.forEach(function(input) {
        input.addEventListener('change', playVideo);
    });

    // Contact number validation: allow only numeric characters
    contactNumberInput.addEventListener('input', function(event) {
        var value = event.target.value;
        event.target.value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    });

    // Form submission handling
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Clear previous error messages
        var errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(function(error) {
            error.textContent = '';
        });

        // Validate the form
        var isValid = true;
        formInputs.forEach(function(input) {
            if (input.required && !input.value) {
                isValid = false;
                var errorSpan = input.nextElementSibling;
                errorSpan.textContent = 'required';
            }
        });

        if (isValid) {
            // Save data to localStorage
            localStorage.setItem('firstName', document.getElementById('firstName').value);
            localStorage.setItem('lastName', document.getElementById('lastName').value);
            localStorage.setItem('email', document.getElementById('email').value);
            localStorage.setItem('sex', document.querySelector('input[name="sex"]:checked').value);
            localStorage.setItem('supportReason', document.getElementById('supportReason').value);

            // Redirect to the profile page
            window.location.href = 'profile.html';
        }
    });
});
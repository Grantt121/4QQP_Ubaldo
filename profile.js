document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user information from localStorage
    var firstName = localStorage.getItem('firstName');
    var lastName = localStorage.getItem('lastName');
    var email = localStorage.getItem('email');
    var sex = localStorage.getItem('sex');

    // Display user information in the profile page
    document.getElementById('first-name').textContent = firstName;
    document.getElementById('last-name').textContent = lastName;
    document.getElementById('email').textContent = email;
    document.getElementById('sex').textContent = sex;
});

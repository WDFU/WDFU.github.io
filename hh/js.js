//var registerBtn = document.getElementById('registerBtn');
var registerBtn=$('#registerBtn');
registerBtn.click(function () {
    var firstName=$('#firstName');
    //var firstName = document.getElementById('firstName');
    //var lastName = document.getElementById('lastName');
    var lastName=$('#lastName');
    //var username = document.getElementById('username');
    var username=$('#username');
    //var password = document.getElementById('password');
    var password=$('#password');
    var firstNameValue = firstName.val().trim();
    var lastNameValue = lastName.val().trim();
    var usernameValue = username.val().trim();
    var passwordValue = password.val().trim();

    var errors = [];

    // first name: at least 6 characters and at most 20 characters.
    if (firstNameValue.length < 6) {
        errors.push("First name must be more than or equal 6 characters.");
    }

if (firstNameValue.length > 20) {
    errors.push("First name must be less than or equal 20 characters.");
}

// last name: at least 6 characters and at most 20 characters.
if (lastNameValue.length < 6) {
    errors.push("Last name must be more than or equal 6 characters.");
}

// username: at least 6 characters and at most 60 characters.
if (usernameValue.length < 6) {
    errors.push("Username must be more than or equal 6 characters.");
}


// password: at least 6 characters and at most 60 characters.
if (passwordValue.length < 6) {
    errors.push("Password must be more than or equal 6 characters.");
}

var i;
var html = "";
for (i = 0; i < errors.length; i++) {
    html += '<li class="text-danger">' +
        '> ' + errors[i] + '</li>';
}

if (errors.length <= 0){
    $('#errors').addClass('d-none');
    //document.getElementById('errors').classList.add('d-none');
} else {
    $('#errors').removeClass('d-none');
    // document.getElementById('errors').classList.remove('d-none');
    $('#errorsContainer').html(html);

    //document.getElementById('errorsContainer').innerHTML = html;
}
});


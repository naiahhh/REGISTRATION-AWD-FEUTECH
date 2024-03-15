document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.querySelector("#login");
    const registerBtn = document.querySelector("#register");
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");

    // Login button function
    loginBtn.addEventListener("click", () => {
        loginBtn.style.backgroundColor = "#035463";
        registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

        loginForm.style.left = "50%";
        registerForm.style.left = "-50%"

        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0;

        document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
    });

    // Register button function
    registerBtn.addEventListener("click", () => {
        registerBtn.style.backgroundColor = "#035463";
        loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

        registerForm.style.left = "50%";
        loginForm.style.left = "-50%"

        registerForm.style.opacity = 1;
        loginForm.style.opacity = 0;

        document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
    });

    // Validation for Inputs
    $(document).ready(function() {
        const validateForm = (formType) => {
            return true;
        };
    
        const clearForm = (form) => {
            form.find('input').val('');
        };

        // Event for focusing on input fields
        $('.input-field').focus(function() {
            $(this).parent().addClass('focus');
        });

        $('.input-field').blur(function() {
            if ($(this).val() === '') {
                $(this).parent().removeClass('focus');
            }
        });

        $('.login-form').submit(function(event) {
            event.preventDefault();
            if (validateForm("login")) {
                alert("Login form submitted successfully!");
                clearForm($('.login-form'));
            }
        });
    
        $('.register-form').submit(function(event) {
            event.preventDefault();
    
            const password = $('#password').val();
            const confirmPassword = $('#confirmPassword').val();
    
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
    
            if (validateForm("register")) {
                alert("Register form submitted successfully!");
                clearForm($('.register-form'));
            }
        });
    });
});

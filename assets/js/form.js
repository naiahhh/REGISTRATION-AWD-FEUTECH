$(document).ready(function(){
    $(".login").hide();
    $(".register_li").addClass("active");

    $(".login_li").click(function(){
      $(this).addClass("active");
      $(".register_li").removeClass("active");
      $(".login").show();
      $(".register").hide();
    })

    $(".register_li").click(function(){
      $(this).addClass("active");
      $(".login_li").removeClass("active");
      $(".register").show();
      $(".login").hide();
      $(".form-floating mb-3").hide();
    })
});

$(document).ready(function() {
  // Check email format
  function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  // Handle form submission
  $('.btn a').click(function(event) {
      event.preventDefault();

      var $form = $(this).closest('.register, .login');
      var $emailInput = $form.find('input[type="email"]');
      var email = $emailInput.val().trim(); // Trim the email address

      if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
          $emailInput.focus();
          return;
      }

      // Here you can add further validation or submit the form
      alert('Form submitted successfully.');
  });
});
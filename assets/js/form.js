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
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  $('.btn a').click(function(event) {
    event.preventDefault();

    var $form = $(this).closest('div.right').find('.register:visible, .login:visible');
    var $emailInput = $form.find('input[type="email"]');
    var email = $emailInput.val();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      $emailInput.focus();
      return;
    }

    alert('Form submitted successfully.');
  });
});
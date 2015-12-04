(function ($) {
  jQuery(document).ready(function ($) {
    nav();
    navTop();
    scroll();
    scrollToTop();
    accordian();
    contactForm();
    hamburger();
    minicart();
    paypalReturn();
  });
})(jQuery);

nav = function() {
  $(window).on('scroll', function() {
    $('.navbar').removeClass('no-stick').addClass('sticky-nav').addClass('stuck');
  });

  var $logo = $('.logo');
  $logo.click(function(e) {
    $('body,html').animate({
      scrollTop: "0"
    }, 500);
    e.preventDefault();
  });
}

navTop = function() {
  $(window).on('scroll', function() {
    var vscroll = document.body.scrollTop;
    console.log(vscroll);
    if (vscroll < 75) {
      $('.navbar').removeClass('stuck').removeClass('sticky-nav').addClass('no-stick');
    }
  })
}

scroll = function () {
  $(".scroll").click(function (event) { // When a link with the .scroll class is clicked
    event.preventDefault(); // Prevent the default action from occurring
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500); // Animate the scroll to this link's href value
  });
}

scrollToTop = function () {
  var windowWidth = $(window).width(),
    didScroll = false;

  var $arrow = $('#back-to-top');

  $arrow.click(function (e) {
    $('body,html').animate({
      scrollTop: "0"
    }, 500);
    e.preventDefault();
  });

  $(window).scroll(function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      didScroll = false;

      if ($(window).scrollTop() > 400) {
        $arrow.css('display', 'block');
      } else {
        $arrow.css('display', 'none');
      }
    }
  }, 250);
}

accordian = function () {
  var accordion_trigger = $('.accordion-heading.accordionize');

  accordion_trigger.delegate('.accordion-toggle', 'click', function (event) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).addClass('inactive');
    } else {
      accordion_trigger.find('.active').addClass('inactive');
      accordion_trigger.find('.active').removeClass('active');
      $(this).removeClass('inactive');
      $(this).addClass('active');
    }
    event.preventDefault();
  });
}

contactForm = function () {
  $("#contact-submit").on('click', function () {
    $contact_form = $('#contact-form');
    var fields = $contact_form.serialize();
    $.ajax({
      type: "POST",
      url: "js/contact.php",
      data: fields,
      dataType: 'json',
      success: function (response) {
        if (response.status) {
          $('#contact-form input').val('');
          $('#contact-form textarea').val('');
        }
        $('#response').empty().html(response.html);
      }
    });
    return false;
  });
}

hamburger = function() {
  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
    $('#landing-section .navbar ul').slideToggle('slow');
  })
}

minicart = function() {
  paypal.minicart.render();
}

paypalReturn = function() {
  var pathname = window.location.search
  if (pathname == "?success" || pathname == "?cancel") {
    paypal.minicart.reset();
  }
}

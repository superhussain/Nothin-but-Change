(function($) {
  jQuery(document).ready(function($) {
    scroll();
    accordian();
    contactForm();
  });
})(jQuery);

scroll = function() {
  $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
    event.preventDefault(); // Prevent the default action from occurring
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); // Animate the scroll to this link's href value
  });
}

accordian = function() {
  var accordion_trigger = $('.accordion-heading.accordionize');

  accordion_trigger.delegate('.accordion-toggle','click', function(event){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).addClass('inactive');
    }
    else{
      accordion_trigger.find('.active').addClass('inactive');
      accordion_trigger.find('.active').removeClass('active');
      $(this).removeClass('inactive');
      $(this).addClass('active');
    }
    event.preventDefault();
  });
}

contactForm = function(){
  $("#contact-submit").on('click',function() {
    $contact_form = $('#contact-form');
    var fields = $contact_form.serialize();
    $.ajax({
      type: "POST",
      url: "js/contact.php",
      data: fields,
      dataType: 'json',
      success: function(response) {
        if(response.status){
          $('#contact-form input').val('');
          $('#contact-form textarea').val('');
        }
        $('#response').empty().html(response.html);
      }
    });
    return false;
  });
}

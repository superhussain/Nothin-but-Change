!function(t){jQuery(document).ready(function(t){scroll(),accordian(),contactForm()})}(jQuery),scroll=function(){$(".scroll").click(function(t){t.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top},500)})},accordian=function(){var t=$(".accordion-heading.accordionize");t.delegate(".accordion-toggle","click",function(c){$(this).hasClass("active")?($(this).removeClass("active"),$(this).addClass("inactive")):(t.find(".active").addClass("inactive"),t.find(".active").removeClass("active"),$(this).removeClass("inactive"),$(this).addClass("active")),c.preventDefault()})},contactForm=function(){$("#contact-submit").on("click",function(){$contact_form=$("#contact-form");var t=$contact_form.serialize();return $.ajax({type:"POST",url:"js/contact.php",data:t,dataType:"json",success:function(t){t.status&&($("#contact-form input").val(""),$("#contact-form textarea").val("")),$("#response").empty().html(t.html)}}),!1})};
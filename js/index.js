//do smoooth scrolling
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-50
        }, 1000);
    }
});

//set the company's years of operation
$('#age').text(new Date().getFullYear() - 2007);


//close menu after click
$(document).on('click', function(event){
    let $clickedOn = $(event.target), 
    $collapsableItems = $('.collapse'), 
    isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
    isLink = ($clickedOn.closest('a').length == 1),
    isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0); 
    if( (!isToggleButton && isLink) || isOutsideNavbar ) {
        $collapsableItems.each(function(){
            $(this).collapse('hide'); 
        }
        );
    }
    }
); 

//schedule a shake on whatsapp icon for 1 second each 4 seconds
$(document).ready(function() {
    setInterval(function() {
      $(".whatsapp").toggleClass("shk");
      setTimeout('$(".whatsapp").toggleClass("shk");', 1000);
    }, 4000);
  });
//do smoooth scrolling
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-60
        }, 1000);
    }
});

//set the company's years of operation
$('#age').text(new Date().getFullYear() - 2007);
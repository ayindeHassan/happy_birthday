
$(document).ready(function () {
  var options = {
      strings: [
        "Happy Birthday, Adejoke! 🎉",
        "It's your day, smile and be happy!!..",
        "May your day be as beautiful, joyful, and amazing as you.",
        "May all your dreams come true today and always.",
        "Thank you for being such an amazing person in my life.",
        "Happy Birthday, my love! 💖"
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
      showCursor: false
    };
  
    var typed = new Typed("#typed", options);

    function screenSize() {
      const originalContent = $('main').html();
      const width = $(window).width();
      
      if(width >= 768){
        // $('body').css('background-color', 'blue');

        $('main').replaceWith('<h1>This webpage is design for mobile view only</h1>');
      } else {
        $('main').replaceWith(originalContent);

        new Typed("#typed", options);
      }
      
    }

    screenSize();
    $(window).resize(screenSize);
    
    
  
});
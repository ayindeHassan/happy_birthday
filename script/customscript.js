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
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    showCursor: false
  };

  var typedInstance;
  var isMobileView = true;

  function initializeTypingEffect() {
    if (typedInstance) {
      typedInstance.destroy(); // Ensure no duplicate instances
    }
    typedInstance = new Typed("#typed", options);
  }

  function handleScreenSize() {
    const width = $(window).width();

    if (width >= 768 && isMobileView) {
      isMobileView = false;
      $("main").html('<h1>This webpage is designed for mobile view only</h1>');
    } else if (width < 768 && !isMobileView) {
      isMobileView = true;
      $("main").html('<span id="typed"></span>'); // Reset content for typing effect
      initializeTypingEffect();
    }
  }

  // Initial Execution
  handleScreenSize();
  if (isMobileView) {
    initializeTypingEffect();
  }

  // Bind to Window Resize
  $(window).resize(handleScreenSize);
});

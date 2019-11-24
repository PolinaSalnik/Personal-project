  $(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(850).fadeOut('slow');
  });

  
  (function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery);


      /*  var form = document.querySelector('.contact-form');
        var requireInputs = document.querySelectorAll('.require');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            removeAlerts();
            checkInputs();
        });

        function checkInputs() {
            var emptyInputs = 0;
            for (var i = 0; i < requireInputs.length; i++) {
                if (!requireInputs[i].value) {
                    var formValid = true;
                    emptyInputs++;
                    var errorMsg = document.createElement('span');
                    errorMsg.classList.add('help-block');
                    errorMsg.innerHTML = 'Please, fill in the field';
                    requireInputs[i].classList.add('errorMsg');
                    requireInputs[i].parentElement.insertBefore(errorMsg, null);
                }
            }
            if (emptyInputs === 0) {
                return true;
            } else {
                var formValid = false;
                return false;
            }
            if (formValid) {

            }
        }

        function removeAlerts() {
            var alerts = document.querySelectorAll('.help-block');
            for (var i = 0; i < alerts.length; i++) {
                alerts[i].remove();
            }
            for (var i = 0; i < requireInputs.length; i++) {
                requireInputs[i].classList.remove('errorMsg');
            }
        }
*/


/* $(window).scroll(function () { // Когда страница прокручивается
  var scrTop = $(window).scrollTop();
    if(scrTop>$('.number').offset().top - $(window).height()  ) {
        numAnimate();
    }
});
var currentNumber = $('.number').text();
$({numberValue: currentNumber}).animate({numberValue: 100}, {
    duration: 8000,
    easing: 'linear',
    step: function() { 
        $('.number').text(Math.ceil(this.numberValue)); 
    }
}); */
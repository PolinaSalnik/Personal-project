  
  $(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 40,
      loop: true,
      nav: true
    });
  });
  
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


   /*    var form = document.querySelector('.contact-form');
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
                
                return false;
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

 var countYears = $('.numberYears').text();

$({numberValue: countYears}).animate({numberValue: 13}, {
    duration: 9900,
    easing: 'linear',
    step: function() { 
        $('.numberYears').text(Math.ceil(this.numberValue)); 
    }
}); 

var countProjects = $('.numberProjects').text();

$({numberValue: countProjects}).animate({numberValue: 1033}, {
    duration: 9900,
    easing: 'linear',
    step: function() { 
        $('.numberProjects').text(Math.ceil(this.numberValue)); 
    }
}); 

var countCustomers = $('.numberCustomers').text();

$({numberValue: countCustomers}).animate({numberValue: 8050}, {
    duration: 9900,
    easing: 'linear',
    step: function() { 
        $('.numberCustomers').text(Math.ceil(this.numberValue)); 
    }
}); 



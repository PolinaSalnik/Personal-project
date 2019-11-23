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


  function countup(className){
		var countBlockTop = $("."+className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;
					
		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
				show = false;
						
				$('.'+className).spincrement({
					from: 1,
					duration: 4000,
				});
			}
		})	
	}

	
        $(function() {
		countup("count", $(".count").text());
		countup("count2", $(".count2").text());
        });


        $({blurRadius: 5}).animate({blurRadius: 0}, {
          duration: 1000,
          easing: 'swing',
          step: function() {
            $(".lines").css({
              "-webkit-filter": "blur("+this.blurRadius+"px)",
              "filter": "blur("+this.blurRadius+"px)"
            });
          }
        });
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
        $(".lines").each(function() {
          var tcount = $(this).data("count");
          $(this).animateNumber({ number: tcount,
            easing: 'easeInQuad',
            "font-size": "40px",
            numberStep: comma_separator_number_step},
            2000);
        });
        
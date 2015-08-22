(function() {

  window.App = {
    // ----------
    init: function() {

      // Hovers and Clicks Practice
      // ----------
        $('.hoverbutton').on('mouseover', function() {
          var panelId = $(this).attr('data-panelid');
          $('#' + panelId).fadeToggle(500);
        });

        var content = "And I've changed!";

        $('.clickbutton').on('click', function() {
          var panelId = $(this).attr('data-panelid');
          $('#' + panelId).toggle();
          $('#' + panelId + ' .panel-body').html(content);
        });

      // Panel Sliding Up and Down Practice
      // ----------
        $('.tab-panels .tabs li').on('click', function() {
        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        $panel.find('.tab-panel.active').slideUp(500, showNextPanel);

        var panelToShow = $(this).attr('rel');

        function showNextPanel() {
          $(this).removeClass('active');

          $('#' + panelToShow).slideDown(500, function() {
            $(this).addClass('active');
          });
        }
      });

      // Slider Practice
      // ----------

      var width = 800;
      var animationSpeed = 1000;
      var pause = 2000;
      var currentSlide = 1;

      var $mySlider = $('#myslider');
      var $mySlideContainer = $mySlider.find('.myslides');
      var $mySlides = $mySlideContainer.find('.myslide');

      var interval;

      function startSlider() {
        interval = setInterval(function() {
          $mySlideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function() {
            currentSlide++;

            if (currentSlide === $mySlides.length) {
              currentSlide = 1;
              $mySlideContainer.css('margin-left', 0);
            }
          });
        }, pause);
      }

      function stopSlider() {
        clearInterval(interval);
      }

      $mySlider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

      startSlider();
    }
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });

})();

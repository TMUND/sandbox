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
    }
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });
})();

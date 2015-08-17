(function() {

  window.App = {
    // ----------
    init: function() {
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
    }
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });
})();

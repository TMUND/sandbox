(function() {

  window.App = {
    // ----------
    init: function() {
      $('.btn1').on('mouseover', function() {
        $('#panel1').fadeToggle(500);
      });

      $('.btn2').on('mouseover', function() {
        $('#panel2').fadeToggle(500);
      });

      $('.btn3').on('mouseover', function() {
        $('#panel3').fadeToggle(500);
      });

      $('.btn4').on('click', function() {
        $('#panel4').fadeToggle(500);
      });

      $('.btn5').on('click', function() {
        $('#panel5').fadeToggle(500);
      });

      $('.btn6').on('click', function() {
        $('#panel6').fadeToggle(500);
      });
    }
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });
})();

// off-canvas
(function($) {
  'use strict';
  $(function() {
    $('[data-toggle="offcanvas"]').on("click", function() {
      $('.sidebar-offcanvas').toggleClass('active')
    });

    $(".featured-block .x-dismiss").on("click",function(){
      $(".featured-block").slideToggle();
    });
  });


})(jQuery);
// Sidebar
(function($) {
  'use strict';
  $(function() {
    var sidebar = $('.sidebar');

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });

    //Change sidebar and content-wrapper height
    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
      if ($('.scroll-container').length) {
        const ScrollContainer = new PerfectScrollbar('.scroll-container');
      }
    }

  });
})(jQuery);
var curYear = new Date().getFullYear();$( "#copyright-year" ).text( curYear );
/**
 * jquery-background-img
 * @version 0.0.0-develpment
 * @author Marisol Escareño
 * @license The MIT License (MIT)
 */

(function($){
  $.fn.bgUnsplash = function(){
    $(this).css({
      width: '100%',
      height: '100vh',
      minHeight: '800px'
    });
    return $(this);
  };
})(jQuery);

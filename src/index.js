/**
 * jquery-background-img
 * @version 1.0.1
 * @author Marisol Escareño
 * @license The MIT License (MIT)
 */

(function(global,$){
  function BackgroundImg(){

  }
  BackgroundImg.prototype.setup = function(clientId){
    this.clientId = clientId;
  };

  var getRandomPhoto = function(){
    return (
      $.ajax({
        url:'https://api.unsplash.com/photos/random',
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization','Client-ID '+ global.BackgroundImg.clientId);
        }
      })
    );
  };

  $.fn.BackgroundImg = function(options){
    var deferred = $.Deferred();
    var $self = $(this);
    options = options || {};

    $self.css({
      width: '100%',
      height: '100vh',
      minHeight: options.minHeight || '800px',
      backgroundSize: options.backgroundSize || 'cover',
      backgroundPosition: options.backgroundPosition || 'center',
      backgroundColor: options.backgroundColor || 'black'
    });


    getRandomPhoto()
      .then(function(photo){
        $self.css({
          backgroundImage: 'url('+ photo.urls.regular +')'
        });
        deferred.resolve($self);
      })
      .catch(function(){
        $self.css({
          backgroundImage: 'url('+options.backgroundImage+')'
        });
        deferred.reject($self);
      });
    return deferred.promise();
  };
  global.BackgroundImg = new BackgroundImg();
})(window, jQuery);



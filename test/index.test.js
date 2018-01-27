var expect = require('expect.js');
var jsdom = require('jsdom');

var dom = new jsdom.JSDOM('<html><body><section></section></body></html>');
var $ =  global.jQuery = require('jquery')(dom.window);

require('jsdom-global')();
require('../src');

describe ('jquery-background-img', function(){
  var $section;
  beforeEach(function(){
    window.BackgroundImg.setup('5c22dc1443c6795cf30f0a25318ce56f3de05492417b40057030b6337c58de86');
    $section = $('section');

  });
  it('should hav the default values', function(){
    $section.BackgroundImg();
    expect($section.css('width')).to.be('100%');
    expect($section.css('minHeight')).to.be('800px');
    expect($section.css('backgroundSize')).to.be('cover');
    expect($section.css('backgroundPosition')).to.be('center');
    expect($section.css('backgroundColor')).to.be('black');
  });
  it('should have the defined values', function(){
    $section.BackgroundImg({
      minHeight:'600px',
      backgroundSize:'contain',
      backgroundPosition: 'top center',
      backgroundColor: 'red'
    });
    expect($section.css('minHeight')).to.be('600px');
    expect($section.css('backgroundSize')).to.be('contain');
    expect($section.css('backgroundPosition')).to.be('top center');
    expect($section.css('backgroundColor')).to.be('red');
  });
  it('should set ClientId attr',function(){
    expect(window.BackgroundImg.clientId).to.be('5c22dc1443c6795cf30f0a25318ce56f3de05492417b40057030b6337c58de86');
  });
  it('should set default image', function(){
    window.BackgroundImg.setup('123');
    return $section.BackgroundImg({
      backgroundImage: 'path/defaultImage.jpg'
    }).catch(function($this){
      expect($this.css('backgroundImage')).to.contain('path/defaultImage.jpg');
    });
  });

  it('sould set an random image from unsplash', function() {
    return $section.BackgroundImg({
      backgroundImage: 'path/defaultImage.jpg',
      usePromise: true
    })
      .then(function($this) {
        expect($this.css('backgroundImage')).to.contain('url');
      })
      .catch(function($this){
        expect($this.css('backgroundImage')).to.contain('path/defaultImage.jpg');
      });
  });
});

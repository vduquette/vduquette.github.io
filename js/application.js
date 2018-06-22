



$(document).ready(function() {
  
  $('.contact a').click(function() {
    $('.modal').modal();
    // $('.modal').modal('show');
  });
  
  
  $('#contactButton').click(function() {
    $.ajax({
      type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': 'YwLZlrBOdDOZj-pw-vQGNQ',
          'message': {
            'from_email': $('#contactEmail').val(),
            'to': [
                {
                  'email': 'vince@hangar1.co',
                  'name': 'Vince',
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject': 'HangarOne Contact - ' + $('#contactName').val(),
            'html': $('#contactMessage').val()
          }
        }
    }).done(function(response) {
      alert('Message sent!');
      $('.modal').modal('hide');
      $('#contactMessage').val('');
      $('#contactEmail').val('');
      $('#contactName').val('');
      console.log(response); // if you're into that sorta thing
   });
  });

  
  
    /* **** some super fancy animations? **** */
    $('.logo').delay(700).animate({
         'opacity' : '1',        
         'top' : '+=50px'
    }, { duration: 700, easing: 'swing' });
    
    $('h1').delay(1000).animate({
         'opacity' : '1',
         'top' : '+=30px'
    }, { duration: 700, easing: 'easeOutSine' });
    
    $('.logo-title').delay(1000).animate({
         'opacity' : '1',
         'top' : '+=30px'
    }, { duration: 700, easing: 'easeOutSine' });
    
    
    $('.lead.intro').delay(1000).animate({
         'opacity' : '1',
         'top' : '+=30px'
    }, { duration: 700, easing: 'easeOutSine' });
    
    
    $('.contact').delay(1000).animate({
         'opacity' : '1',
         'top' : '+=30px'
    }, { duration: 700, easing: 'easeOutSine' });
    
    $('.belowthefold').delay(3000).animate({
         'opacity' : '1'
    }, { duration: 1000, easing: 'easeOutSine' });
    
    
    /* **** input things for input things **** */
    $('input[type="email"]').focus(function() {
        if (this.value == this.defaultValue){ 
            this.value = '';
        }
        if(this.value != this.defaultValue){
            this.select();
        }
    });
    $('input[type="email"]').blur(function() {
        if ($.trim(this.value) == ''){
            this.value = (this.defaultValue ? this.defaultValue : '');
        }
    });
    
    
    
    
    
    var overlay, tick, timeline;
    timeline = $('.timeline');
    overlay = $('.overlay', timeline);
    tick = function() {
      var $w, offset, p, s;
      $w = $(window);
      s = $w.scrollTop();
      p = $w.height() / 2;
      offset = s + p - timeline.offset().top;
      if (offset > 0) {
        overlay.css({
          top: offset
        });
      } else if (timeline.offset().top > 0) {
        overlay.css({
          top: 0
        });
      }
      return window.requestAnimationFrame(tick);
    };
    return window.requestAnimationFrame(tick);
    

});

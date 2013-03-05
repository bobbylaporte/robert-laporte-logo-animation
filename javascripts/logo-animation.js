$(document).ready(function(){


  $('#logo').live('mouseenter touchstart',function(){
    $(this).attr('class','lockup');
  });
  $('#logo').live('mouseleave', function(){
    $(this).attr('class','hovering');
  });
});

$(document).ready(function(){
  $('#logo').live('mouseenter',function(){
    $(this).attr('class','lockup');
  });
  $('#logo').live('mouseleave', function(){
    $(this).attr('class','hovering');
  });
});
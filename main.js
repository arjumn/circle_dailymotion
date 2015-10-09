$(document).ready(function(){
  var timer = null,
      left = 0, top = 0;

  $(".wrapper").on("mouseenter", ".child", function(e){
    e.stopPropagation();

    console.log( $(this).offset().left + ', ' + $(this).offset().top + ', ' + e.pageX + ',' + e.pageY);

    var $self = $(this);
    timer = setTimeout(function(){

      var width = $self.width(), height = $self.height();
      var $wrapper = $("<div/>").addClass("wrapper");
      for(var i = 0; i < 4; i++) {
        var $child = $("<div/>").addClass("child");
        var $item = $("<div/>").addClass("item");
        $child.width( width/2 ).height( height/2 );
        $item.width( width/2 ).height( height/2 );
        $child.append($item);
        $wrapper.append($child);
      }

      $self.empty().append($wrapper);

      $wrapper.find(".child").stop().animate({
        '-webkit-border-radius': '50%',
        '-moz-border-radius': '50%',
        'border-radius': '50%',
      }, 200);
    }, 200);
  });

  $(".wrapper").on("mouseleave", ".child", function(e){
    e.stopPropagation();
    if(timer) {
      clearTimeout(timer);
    }
  });
})

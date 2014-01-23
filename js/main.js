var breakpoint = 700;
var jsPlumbConnected = false;

jsPlumb.ready(function() {
  if(window.innerWidth > breakpoint) {
    setupJsPlumb();
  }
});

$(document).ready(function() {
  onBreakpoint();
  var stickyNavTop = $('.nav').offset().top;

  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();       
    if (scrollTop > stickyNavTop) { 
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky'); 
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });

//   $('ul.navigation a').click(function() {
//     $('html, body').animate({
//   scrollTop: $("#blog_section").offset().top
// }, 2000);
//   });

});






$(window).resize(function(){
  onBreakpoint();
});

function setupJsPlumb() {
  if(!jsPlumbConnected) {
    jsPlumbConnected = true;
    jsPlumb.Defaults.ConnectionsDetachable = false;
    jsPlumb.Defaults.PaintStyle = {
      lineWidth:4,
      strokeStyle: 'rgba(200,0,0,0.5)'
    };
    var common = {
      endpoint: "Blank",
      anchors: ["Bottom","Top"]
    };
    jsPlumb.connect({source:"bullet-1", target:"bullet-2"}, common);
    jsPlumb.connect({source:"bullet-2", target:"bullet-3"}, common);
    jsPlumb.connect({source:"bullet-3", target:"bullet-4"}, common);
    setTimeout(jsPlumb.repaintEverything, 100)
  };
}

function onBreakpoint() {
  var formSelector = '#convert_kit_form .ck_embed_form';
  var vertical = 'ck_vertical_subscription_form';
  var horizontal = 'ck_horizontal_subscription_form';
  if(window.innerWidth > breakpoint) {
    // Desktop layout
    $(formSelector).removeClass(vertical).addClass(horizontal);
    setupJsPlumb();
    jsPlumb.repaintEverything();
  } else {
    // Mobile layout
    $(formSelector).removeClass(horizontal).addClass(vertical);
    jsPlumb.reset();
    jsPlumbConnected = false;
  }
}
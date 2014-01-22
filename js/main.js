

jsPlumb.ready(function() {
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
  jsPlumb.repaintEverything();
});

$(document).ready(function() {
  onBreakpoint();
});

$(window).resize(function(){
  jsPlumb.repaintEverything();
  onBreakpoint();
});

function onBreakpoint() {
  var breakpoint = 700;
  var formSelector = '#convert_kit_form .ck_embed_form';
  var vertical = 'ck_vertical_subscription_form';
  var horizontal = 'ck_horizontal_subscription_form';
  if(window.innerWidth > breakpoint) {
    // Desktop layout
    $(formSelector).removeClass(vertical).addClass(horizontal)
  } else {
    // Mobile layout
    $(formSelector).removeClass(horizontal).addClass(vertical)
  }
}
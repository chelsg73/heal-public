$(document).ready(function(){

  $('.dropdown-submenu a.dropdown-submenu-toggle').on("click", function(e){
    var subMenu = $(this).next('.dropdown-menu.second');
    var allSubMenu = $('.dropdown-menu.second');

    $(allSubMenu).each(function(){
      if($(this).is(subMenu)){
        if ($(this).is(":visible")) {
          //console.log("hiding " + thisMenu )
          // $(this).hide() 
          $(this).removeClass('on');
        } else {
          //console.log("showing " + thisMenu)
          // $(this).show();  
          $(this).addClass('on');        
        }
      } else {
        //console.log("hiding " + thisMenu)
        // $(this).hide();
        $(this).removeClass('on');
      }
    });

    // $(allSubMenu).each(function(){
    //   if($(this).is(subMenu)){
    //     if ($(this).is(":visible")) {
    //       //console.log("hiding " + thisMenu )
    //       $(this).hide() 
    //     } else {
    //       //console.log("showing " + thisMenu)
    //       $(this).show();          
    //     }
    //   } else {
    //     //console.log("hiding " + thisMenu)
    //     $(this).hide();
    //   }
    // });
    e.stopPropagation();
    e.preventDefault();
  });
  
  
  // Event handler to toggle icon on FAQ accordion show-hide
  $( ".panel-collapse" ).on( "show.bs.collapse hide.bs.collapse", function() {
    var icon = $( this ).siblings( ".panel-heading").find( ".fas" );
    // $( icon ).toggleClass( "fa-chevron-circle-down" );
    $( icon ).toggleClass( "rotate-chevron" );
  });

  /* options */
  var readMore = $('.read-more');
  var readLess = $('.read-less');
  var speed = "1000"; // possible values: milliseconds, "slow", "fast"
  var easing = "linear" // possible values: "linear", "swing"

  /* handle click of "read more" button */
  readMore.on('click', function(){      
    var divToShow = "#hide-"+$(this).data("name"); 
    $(divToShow).slideDown(speed, easing);
    $(this).toggleClass("readMoreOff");
  });

  /* handle click of "read less" button */
  readLess.on('click', function() {
    var divToHide = "#hide-"+$(this).data("name");
    var parentDiv = "#read-"+$(this).data("name");
    $(divToHide).slideUp(speed, easing);
    $(parentDiv).toggleClass("readMoreOff");
  });

  //SCROLL UP ANIMATION - BOTTOM ARROW
  $("#upArrow").click(function() {
    var targetDiv = $(this).data("link");
    var divPosition = $("#"+targetDiv).offset().top - 100;
    $('html, body').animate({scrollTop: divPosition}, "slow");
  });

  //TOOLTIPS

  function openTooltip (thisTooltip) {
    var child = $(thisTooltip).children();
    $(child).toggleClass("visible");
  }

  /* open tooltip on Click*/
  $('.tooltipBtn').click(function(){
    openTooltip(this); 
  });

  // Open Mail Chimp Modal via link
  $('a[href$="#mailChimpModal"]').on( "click", function() {
    $('#mailChimpModal').modal('show');
  });
  
})

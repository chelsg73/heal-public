  $(document).ready(function() {

    var expandThisID ="";
    var slideThis = "";
    var divPosition = 0;

  // slide active accordion header up to position 
  function slideACC () {
    if ($("div").parent().attr("class") == "panel-group") {
      expandThisID = $(this).data("section");
      divPosition = 100; 
      slideThis = "#"+expandThisID;
    }
    $('html, body').animate({
      scrollTop: $(slideThis).offset().top - divPosition
    }, 1000);
  }

    $(".panel-default").click(function() {
      setTimeout(slideACC(),800);
    });
    
  })

<script>
$(document).ready(function() {
$(".privacyBtn").click(function() {		
  setCookie("privacyAck","Yes",'30','0');
  $("#privacyAck").toggle();
});
})

function setCookie(cname, cvalue, exdays, exhours) {
var d = new Date();
if (exdays != 0) {
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  expires = "expires="+d.toUTCString();
}
if (exhours != 0) {
  d.setTime(d.getTime() + (2*60*60*1000));
  expires = "expires="+d.toUTCString();
}
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {

  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

$(window).on('load', function(){
/* handle privacy cookies */
var readPrivacy = getCookie("privacyAck");

/* if the the privacy pop up has been acknowledged, do not show pop up again in browser session */
if (readPrivacy == "" ) {
  $("#privacyAck").toggle();
}	
});
</script>
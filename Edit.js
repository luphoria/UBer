javascript: ! function() {
  var t = prompt("Welcome to UBer v4.0\nenter url, the one already there is Google. make sure to start with http://, https://, or //.\nOR enter 'proxy' to go to a proxy site.\n\n\n-luphoria", placeholder = "//www.google.com/webhp?igu=1");
  if ("proxy" == t) {
  var pc = prompt("Welcome to UBer v4.0\nenter proxy choice.\n\n-luphoria", placeholder = "Alloy/Womginx")
  if(pc == "Alloy") {
    var e = prompt("Welcome to UBer v4.0\nenter url.-luphoria", placeholder = "https://google.com/");
    e.includes("//", 0) || e.includes("http://", 0) || e.includes("https://", 0) ? t = "https://a.cattlefood.org/web/_" + btoa(e) + "_/" : (alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'."), t = null, e = null)
  }
  "" != t && null != t && (t.includes("//", 0) || t.includes("http://", 0) || t.includes("https://", 0) ? (document.body.innerHTML = '<body style="margin:0px;padding:0px;overflow:hidden"><iframe src="' + t + '" id="uberFrame" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></body>', window.onbeforeunload = function() {
    return console.log("Lyft implementation courtesy of UBer"), "UBer on top."
  }) : alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'."))
}
  else if(pc == "Womginx") {
    var e = prompt("Welcome to UBer v4.0\nenter url.-luphoria", placeholder = "https://google.com/");
    e.includes("//", 0) || e.includes("http://", 0) || e.includes("https://", 0) ? t = "https://uberbread.herokuapp.com/main/" + e : (alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'."), t = null, e = null)
  }
  "" != t && null != t && (t.includes("//", 0) || t.includes("http://", 0) || t.includes("https://", 0) ? (document.body.innerHTML = '<body style="margin:0px;padding:0px;overflow:hidden"><iframe src="' + t + '" id="uberFrame" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></body>', window.onbeforeunload = function() {
    return console.log("Lyft implementation courtesy of UBer"), "UBer on top."
  }) : alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'."))
}();

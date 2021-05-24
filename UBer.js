/* 
  UBer v4.0 by luphoria.
*/
(function() {
  var url = prompt("\
Welcome to UBer v4.0\n\
enter url, the one already there is Google. make sure to start with http://, https://, or //.\n\
OR enter 'proxy' to go to a proxy site.\n\n\n\
-luphoria",
    placeholder = "//www.google.com/webhp?igu=1"); /* google with flag used by agoogleaday -- allows google.com for cross-origin iframe */
  if (url == "proxy") {
    /* if user inputs "proxy" instead of a url */
    var url2 = prompt("\
Welcome to UBer v4.0\n\
enter url.\
-luphoria",
      placeholder = "https://google.com/"); /* flag not required when using proxy */
    if (url2 != "" && null != url2); /* cancel check */ {
      if (url2.includes("//", 0) || url2.includes("http://", 0) || url2.includes("https://", 0)) {
        url = "https://uberbread.herokuapp.com/main/" + url2; /* simple womginx proxy, with modification for no cookie requirement */
      } else {
        alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'.");
        url = null;
        url2 = null;
      };
    };
  };
  if ("" != url && null != url) {
    if (url.includes("//", 0) || url.includes("http://", 0) || url.includes("https://", 0)) {
      document.body.innerHTML = '<body style="margin:0px;padding:0px;overflow:hidden"><iframe src="' + url + '" id="uberFrame" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></body>'
      window.onbeforeunload = function() {
        /* lyft implementation built-in Just in Case(tm) :) */
        console.log("Lyft implementation courtesy of UBer");
        return "the funny";
      }
    } else {
      alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'.");
    }
  }
})()

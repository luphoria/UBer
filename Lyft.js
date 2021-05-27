/* Lyft by luphoria */
window.addEventListener('beforeunload', function (w) { 
  w.preventDefault(); // prompt "Leave site?"
  return "shut up goguardian";
});

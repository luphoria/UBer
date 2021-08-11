# UBer

**Main Link - `javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://luphoria.com/UBer/UBer.min.js'})()`**

A favelet which can be used to unblock websites that are blocked with GoGuardian.
Drag this to your Bookmarks bar, click on it and it will prompt you to enter a URL:
`javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://luphoria.com/UBer/UBer.min.js%27%7D)()`

## NOTE!
Lyft requires loading quickly. I do NOT recommend you host this on a server, as it is most likely to fail for taking too long to request for the JS. Instead, run the favelet completely locally: `javascript:window.addEventListener('beforeunload', function (e) {e.preventDefault();return "h";});`

### What is this?
UBer is a tool designed to unblock websites, specifically tailored to GoGuardian.

### Who is developing it?
luphoria. I have been the single developer for four years (but I am publicizing it now).

### How do I install it?
UBer is a favelet, or a bookmarklet. To use it, all you have to do is:
 - host UBer.js on your own webpage (e.g. a github pages website)
 - drag this "favelet" to your Bookmarks bar: `javascript:s=document.body.appendChild(document.createElement ('script'));s.id='fs';s.language='javascript';void (s.src='//path/to/UBer.js');`
 - *Many websites using the default setting do not work. This can be resolved by visiting that website FIRST, stopping the page from fully loading, and then loading UBer. If the page STILL doesn't work, try it with the proxy.*
 
### How do I use it?
Simply click on the favelet and it will load a menu. It should be fairly self-explanatory.
 - The proxy used is called "Womginx" by binary-person. Slight modifications have been made so that it can be run within UBer. It is planned to have more proxies in the future.

### So, how TF does it work??
GoGuardian blocks pages by checking your URL, and if the URL is blocked, redirecting your page. This works fine, however there are two major flaws with this system:
 - GoGuardian has to actually load to block the page (and BEFORE any code from the original page can be executed)
 - This does **not** account for elements like `iframe`, in which a page is embedded within a totally separate page -- with a **different URL**.
By combining onbeforeunload, iframes, and adding a proxy as well, you can unblock essentially any website,

## End Goal
Any and all websites unblockable and functional.
*Any website will work via Lyft, however its speed-spam-clicky nature makes this less than preferable.*

### What works?
 - youtube videos themselves, but not the UI. you have to watch videos by using the proxy and visiting the `/embed/` version of the videos.
 - Discord
 - Google
 - (Old) Reddit
 - GitHub (no login)
 
### What doesn't work?
  - YouTube UI
  - GitHub

## CREDITS
  - Code: luphoria
  - "Corrosion" web proxy: @Carcal-js

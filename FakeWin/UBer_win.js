import "./fake_window_proxy.js"
(function() {
let windowUrl = prompt("enter URL: \n   -luphoria")
let domain = windowUrl.split("/")[2]
let domain_params
if (windowUrl.split("/")[3] != undefined) domain_params = "/" + windowUrl.split("/")[3]
document.getElementById("url").onblur = function() {
    windowUrl = document.getElementById("url").value
    domain = windowUrl.split("/")[2]
    if (windowUrl.split("/")[3] != undefined) domain_params = "/" + windowUrl.split("/")[3]
}
let win = new FakeWindow()
win.bind(['a', 'button'])
win.init()
})()

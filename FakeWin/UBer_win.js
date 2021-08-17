import "./jquery.js"
import "./jquery-ui.js"
import "./fake_window_proxy.js"

export let clicked = 0
export let windowUrl = prompt("enter URL: \n   -luphoria")
console.log(windowUrl)
export let domain = windowUrl.split("/")[2]
export let domain_params = ""
if (windowUrl.split("/")[3] != undefined) domain_params = "/" + windowUrl.split("/")[3]
export let win = new FakeWindow()
win.initWindow(windowUrl)
win.window()

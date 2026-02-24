// localStorage API : set item, GetItem ,RemoveItem ,clear
// localstorage --> save that data into browser's storage ,after close browser data wasent deleted
// (browsert nu aevu storage ke jema data storage thai chhe and browswer band thai jay to pan delete nathi thato)
// ~5 mb storage

// setitem 
// localStorage.setitem("key","value")
localStorage.setItem("name", "test_user")

// getItem
// localStorage.getItem("key_name")
let user = localStorage.getItem("name")
// updateItem
localStorage.setItem("name","Demo User")

// remove
localStorage.removeItem("name")

// sessionStorage API
// SessionStorage --> save that for temporery time when you close teb delete was deleted 
// (aa storage data ne temporarily time mate save kari na rakhe chhe jyare pan teb close karsho tyare tani satha data pan delete thai jase)
// ~5MB storage 

// setItem
sessionStorage.setItem("email","test@test.com");

// getItem
let email = sessionStorage.getItem("EMAIL")

// removeItem
sessionStorage.removeItem("email")

// update
sessionStorage.setItem("email","user@user.com");
sessionStorage.setItem("name","user");
sessionStorage.setItem("age","10");
sessionStorage.setItem("cart","");

// clear
sessionStorage.clear()

// cokies
// Basic cookie structure (manual key = Value;)
// cookie --> store data into browser cookies
// cookie data ne browser na cookies name ni property ma save kare chhe, cookies no use light data save karva mate thai chhe)
// when you relode web page data will be automatically send to server
// ~4KB storage
document.cookie = "email = demo@gmial.com"

// max age
document.cookie = "user=demo; max-age = 10"//10sec

// date and time
document.cookie="age = 10;expires=wed,20 feb 2026 12:00:00 GMT";

// Storing/retrieving srtings vs JSON
// save as string into LocalStorage and SessionStorage -- try to save array and string

localStorage.setItem("user",'["demo,"test","test1", "demo2"]')
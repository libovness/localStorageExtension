var breadcrumbs = document.getElementsByClassName("public")[0];
var user = breadcrumbs.childNodes[3].childNodes[1].text;
var deckName = breadcrumbs.childNodes[7].childNodes[1].text;
var user = document.getElementsByClassName("author")[0].childNodes[1].text;
var fileNavigationDiv = document.getElementsByClassName("file-navigation")[0];
var btnToInsertBefore = fileNavigationDiv.childNodes[5];
var addToLocalStorageBtn = document.createElement("a");
var anchorText = "Add to Local Storage";
addToLocalStorageBtn.innerText = "🧠 Add to Local Storage";
addToLocalStorageBtn.href = "https://app.localstorage.io/" + user + "/" + deckName;
addToLocalStorageBtn.classList.add("btn", "mr-2", "d-none", "d-md-block");
fileNavigationDiv.insertBefore(addToLocalStorageBtn, btnToInsertBefore);

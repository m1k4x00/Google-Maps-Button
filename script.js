const searchItem = document.querySelector("#APjFqb").innerHTML;
let newElement = document.querySelector("#hdtb-sc > div > div.qogDvd > div.crJ18e > div > div:nth-child(2)").cloneNode(true);
let bar = document.querySelector("#hdtb-sc > div > div.qogDvd > div.crJ18e").children[0];
newElement.children[0].children[0].innerHTML = 'Maps';
newElement.children[0].href = 'https://www.google.com/maps/search/' + searchItem;
bar.insertBefore(newElement, bar.children[1]);

var elem= document.querySelector("p");
elem.addEventListener("click", function(event){
	alert("P clicked")
}, true);

var elem1= document.querySelector("header");
elem1.addEventListener("click", function(event){
	alert("Header clicked")
},true);

elem.removeEventListener("click",function(event){
	alert("P clicked")
});
var elem2= document.querySelector("body");
elem2.addEventListener("click", function(event){
	alert("Body clicked")
},true);


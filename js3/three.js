var icons= document.getElementsByClassName("c1");
var e1= icons[0];
document.write(e1.innerHTML);	
var iconsArr = Array.from(icons);
iconsArr.push("hello again!");
document.write("done push");
document.write(iconsArr);
iconsArr.forEach(function(elem, index, arr){
	document.write(elem);
});
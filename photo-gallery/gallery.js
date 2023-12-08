/*Name this external file gallery.js*/

function upDate(previewPic) {
document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
  document.getElementById('image').innerHTML = previewPic.alt;
}
function unDo(){
	document.getElementById('image').style.backgroundImage = "url('')"
	document.getElementById('image').innerHTML = "Hover over an image below.";  
	
	}

function addTabIndex() {
	console.log("secret message");

	var codes = document.querySelectorAll('preview');
	for (var i = 0, len = codes.length; i < len; i++) {
	codes[i].setAttribute('tabindex','i++');
}
}
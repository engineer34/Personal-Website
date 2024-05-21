/* ----------------------
FileName: touch.js
Date: 5/6/22
Author: Derek Finkel
---------------------- */


let touchArea = document.getElementById("touchArea");


/* ~~~~~~~~~~~~~~~~~~ Get Selected Text ~~~~~~~~~~~~~~~~~~ */
function GetSelectedText() {
	var selectedText;

	if (window.getSelection) {
		selectedText = window.getSelection();
	} else if (window.document.getSelection) {
		selectedText = window.document.getSelection();
	} else if (window.document.selection) {
		selectedText = window.document.selection.createRange().text;
	}
	return selectedText;
}


/* ~~~~~~~~~~~~~~~~~~ Highlight Text ~~~~~~~~~~~~~~~~~~ */
function highlight(evt) {
	// Include code to prevent default actions
	evt.preventDefault();

	// Call function to get selected text and assign to someText
	var someText = GetSelectedText();

	if (someText != "") {
		// Replace all instances of someText with the newly formatted modifiedText
		let modifiedText = "<span class='highlight'>" + someText + "</span>";
		let newTotalText = touchArea.innerHTML.replace(new RegExp(someText, 'g'), modifiedText);
		touchArea.innerHTML = newTotalText;
	}
}


/* ~~~~~~~~~~~~~~~~~~ Clear Highlighting ~~~~~~~~~~~~~~~~~~ */
function clearHighlight() {
	// Clear the content of the touch area
    touchArea.innerHTML = "";
	
}


/* ~~~~~~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~~~~~~ */

document.getElementById("btnClear").addEventListener("click", clearHighlight);
document.getElementById("btnClear").addEventListener("touchend", clearHighlight);
touchArea.addEventListener("pointerup", highlight);
touchArea.addEventListener("touchend", highlight);

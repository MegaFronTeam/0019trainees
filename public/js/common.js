"use strict";

function eventHandler() { 
	JSCCommon.init() 

	$(".сustom-select-js").select2({
		tags: true,
		dropdownParent: $(".сustom-select-js").parent(),
	});

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
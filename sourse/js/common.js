"use strict";

function eventHandler() { 
	JSCCommon.init() 

	$(".сustom-select-js").select2({
		tags: true, 
		// allowClear: true,
		dropdownParent: $(".сustom-select-js").parent(),
	});


	$(".сustom-select-js").each(function(){ 
		if (!this.value)  return;
		$(this).parents(".form-wrap__input-wrap").find(".form-wrap__input-title").addClass("active")

	})
	$(".сustom-select-js").on('select2:selecting', function (e) {
		console.log('Selecting: ', e.params.args.data);
		$(this).parents(".form-wrap__input-wrap").find(".form-wrap__input-title").addClass("active")
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

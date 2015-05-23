//	console.log(module.exports);
	//window.$.fn.slider = window.jQuery.fn.slider = module.exports;
	
	
	window.Slider = module.exports;
	var slider = new Slider("#timeSlider", {
		tooltip: 'always',
		formatter: function(value) {
				return 'Remaining: ' + (120 - value) + " min";
		}
	});
	
	
// 	(function ( $ ) {
// //		console.log(module.exports);
// 	    $.fn.slider = jQuery.fn.slider = module.exports;
// 	}( jQuery ));
//
// 	$("#timeSlider").slider({
// 		tooltip: 'always',
// 		formatter: function(value) {
// 				return 'Remaining: ' + (120 - value) + " min";
// 		}
// 	});
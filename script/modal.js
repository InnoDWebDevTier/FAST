$(document).ready(function() {
	$(".img-block").click(function() {
		$(".lightbox-hidden").addClass("lightbox");
		var src = $(this).attr("src");
		$(".modal-img").attr("src", src);
		// scrollLock();
	});
	$("#modal").click(function() {
		$("#modal").removeClass("lightbox");
		// scrollLock();
	});
});


// var locked = false;

// function scrollLock() {
// 	if (locked) {
// 		$('body').css( 'overflow', 'visible' );
// 		locked = false;
// 	}
// 	else {
// 		$('body').css( 'overflow', 'hidden' );
//   		locked = true;
// 	}
// };

$(document).ready(function() {
	$(".block").click(function() {
		$(".lightbox-hidden").addClass("lightbox");
	});
	$("#modal").click(function() {
		$("#modal").removeClass("lightbox");
	});
});
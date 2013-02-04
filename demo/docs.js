!
function($) {

	$(function() {

		$('.J_Toggle').click(function() {
			$('.bs-docs-sidenav').animate({
				'width': '0'
			}, 500, function() {
				$(this).hide();
			});

			$('.bs-docs-sidebar h1').animate({
				'width': '0',
				'padding': '20px, 0'
			}, 500, function() {
				$(this).hide();
			});

		});

	});

}(window.jQuery);
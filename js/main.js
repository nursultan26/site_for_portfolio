$(window).scroll(function() {
	 
	var scroll = $(this).scrollTop()
	if (scroll > 0) {
		$(".navbar").css({
			"background-color": "#343a40c7"

		});
		$(".brand").css({
			"font-size": "25px"
		})
		$(".nav-item").css({
			"font-size": "15px"
		})
	}else {
		$(".navbar").css({
			"background-color": "#0000002a"
		});
		$(".brand").css({
			"font-size": "35px"
		})
		$(".nav-item").css({
			"font-size": "20px"
		})
	}
});


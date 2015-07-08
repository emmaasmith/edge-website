$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated bounceInDown');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	/***************** Flickity ******************/

	$('#featuresSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: true
	});

	$('#showcaseSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: true,
		imagesLoaded: true
	});

	/***************** Fancybox ******************/

	$(".youtube-media").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 768) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});







});





$(document).ready(function() {
	$("a.single_image").fancybox({
		padding: 4,
	});
});

/***************** Nav Transformicon ******************/

/* When user clicks the Icon */
$(".nav-toggle").click(function() {
	$(this).toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks a link */
$(".overlay ul li a").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks outside */
$(".overlay").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 2000);
			return false;
		}
	}
});



/***************** Email ******************/


$(function() {
    $('.error').hide();
    $(".button").click(function() {
      // validate and process form here
   	  	var name = $("input#name").val();
	  	if (name == "") {
	    	$("label#name_error").show();
	    	$("input#name").focus();
	    	return false;
	    }
	  	var email = $("input#email").val();
	  	if (email == "") {
	    	$("label#email_error").show();
	    	$("input#email").focus();
	    	return false;
	    }
	  	var message = $("textarea#message").val();
	  	if (message == "") {
	    	$("label#message_error").show();
	    	$("textarea#message").focus();
	    	return false;
	    }    

		var dataString = 'name='+ name + '&email=' + email + '&message=' + message;
		//alert(dataString);
		$.ajax({
	    	type: "POST",
	    	url: "js/mailer.php",
	    	data: dataString,
	    	success: function(data, textStatus, jqXHR){
		        //console.log('data: %O', data);
		        //console.log('textStatus: %s', textStatus);
		        //console.log('jqXHR: %O', jqXHR);
		        $('#contact_form').html("<div id='message'></div>");
	      		$('#message').html("<h2>Contact Form Submitted!</h2>")
	      		.append("<p>We will be in touch soon.</p>")
	      		.hide()
	      		.fadeIn(1500);
		    },
		    error: function(jqXHR, textStatus, errorThrown){
		        //console.log('jqXHR: %O', jqXHR);
		        //console.log('textStatus: %s', textStatus);
		        //console.log('errorThrown: %s', errorThrown);
		        $("label#overall_error").show();

		    }
		});
	  	return false;
  	});
});


var subnavPosition = null;
$(document).ready(function(){




    $('a.nav-expander-top').on('click',function(e){
    	e.preventDefault();
    	$('body').toggleClass('top-nav-expanded');
    });


	var windowHeight = $(window).height();
	// $('section').css('min-height',windowHeight);
	// $('.slidein-container').css('height',windowHeight);
	// $('.is-min-height').css('min-height',windowHeight);
	// $('nav').css('height',windowHeight);
	$('a.nav-expander').on('click',function(e){
		e.preventDefault();
		$('.nav-expansion').slideToggle(200);
		if (!$('header').hasClass('scrolling')) {
				$('html, body').animate({
					'scrollTop': 400
				},700);
			};
		
		$('.subnav').toggleClass('expanded');
		
		$('.nav-expansion > h2').delay(200).fadeToggle(200);
	});

	$('#expand-pay-now').on('click',function(e){
		e.preventDefault();
		$('#pay-now-expand').slideDown(200);
	});



	$('a.expand-subnav').on('click',function(e){
		e.preventDefault();
		var navType = $(this).parent().attr('class');
		if ($('body').hasClass(navType)) {
			$('body').removeClass('enterprise-nav');
			$('body').removeClass('onestore-nav');
			$('body').removeClass('company-nav');
			$('body').removeClass(navType);
		}else {
			$('body').removeClass('enterprise-nav');
			$('body').removeClass('onestore-nav');
			$('body').removeClass('company-nav');
			$('body').addClass(navType);
		};
	});




	// $('header > section > nav > ul > li > a').on('mouseover',function(e){
	// 	e.preventDefault();
	// 	var navType = $(this).parent().attr('class');
	// 	$('body').removeClass('enterprise-nav');
	// 	$('body').removeClass('onestore-nav');
	// 	$('body').removeClass('company-nav');
	// 	$('body').addClass(navType);
	// });
	// $('.the-content').on('mouseover',function(e){
	// 	e.preventDefault();
	// 	$('body').removeClass('enterprise-nav');
	// 	$('body').removeClass('onestore-nav');
	// 	$('body').removeClass('company-nav');
	// });
	// $('header a.logo').on('mouseover',function(e){
	// 	e.preventDefault();
	// 	$('body').removeClass('enterprise-nav');
	// 	$('body').removeClass('onestore-nav');
	// 	$('body').removeClass('company-nav');
	// });



	$('a[href="' + window.location.pathname + '"]').addClass("current");
	// $('a.close-link').on('click',function(e){
	// 	e.preventDefault();
	// 	$('body').removeClass('nav-expanded');
	// });
	// $('nav').on('click',function(e){
	// 	e.preventDefault();
	// 	$('body').removeClass('nav-expanded');
	// });
	
	// $('nav div.container').on('click',function(e){
	// 	e.stopPropagation();
	// });

	$('.cover-slider-container').unslider({
		speed: 500,
		delay: 10000,
		complete: function() {},
		keys: true,
		dots: false,
		fluid: true
	});

	$('a.expand-search').on('click',function(e){
		e.preventDefault();
		$(this).parent().toggleClass('expanded');
		setTimeout(function() {
			$('.search-field').focus();
		}, 300);
	});



	var unslider = $('.cover-slider-container').unslider();
    
    $('.slider-control').click(function() {
        var fn = this.className.split(' ')[2];
        
        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });




	$('ul.status-list li h3').on('click',function(e){
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$(this).parent().find('.status-list-content').slideToggle(200);
	});

	$('.fade-on-intro').addClass('animated');

	$('a.playvideo').on('click',function(e){
		e.preventDefault();
		var videoId = $(this).attr('href'),
			videoTarget = $(this).attr('target'),
			videoTargetHeight = $(videoTarget).width() * 0.5622,
			videoContent = '<iframe id="videoid-' + videoId + '" class="the-video" target="' + videoTarget + '" src="https://player.vimeo.com/video/'+videoId+'?title=0&amp;byline=0&amp;portrait=0&amp;color=1fa3ff&amp;autoplay=1&api=1&player_id=videoid-' + videoId + '" width="900" height="506" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
		$(videoTarget).find('.overlay').fadeOut(400);
		$(videoTarget).find('.bgvid').fadeOut(400);
		$(videoTarget).css('padding-bottom',videoTargetHeight);
		$(videoTarget).append(videoContent).append('<a href="#" class="link closevideo"><span class="icon">X</span></a>');
	});
	$('a.play-cinema-video').on('click',function(e){
		e.preventDefault();
      	
		var videoId = $(this).attr('href'),
			videoTarget = $(this).attr('target'),
			videoContent = '<iframe id="videoid-' + videoId + '" src="https://player.vimeo.com/video/'+videoId+'?title=0&amp;byline=0&amp;portrait=0&amp;color=1fa3ff&amp;autoplay=1&api=1&player_id=videoid-' + videoId + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
		$(this).fadeOut(400);
		$(videoTarget).append(videoContent);
	});
	$('.the-content').on('click', 'a.closevideo', function(event){
		event.preventDefault();
		$('.the-video').each(function(index){
			var videoTarget = $(this).attr('target');
			$(videoTarget).find('.overlay').fadeIn(400);
			$(videoTarget).find('.bgvid').fadeIn(400);
			$(videoTarget).css('padding-bottom', '34em');
			$(this).remove();
		});
      	$(this).remove();
	});
  	
  
	$('.bgvid').each(function(){
		if ($('html').hasClass('touch')) {
			$(this).html('');
		}
	});
	$('ul.colors a').on('click',function(e){
		e.preventDefault();
		$('ul.colors a').removeClass('current');
		$('div.colors-container img').fadeOut(300);
		$(this).addClass('current');
		var thisTarget = $($(this).attr('href'));
		$(thisTarget).fadeIn(300);
	});
	$('.scroll-link').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			'scrollTop': $($(this).attr('href')).position().top+40
		},700);
	});
	$('.bxslider').bxSlider({
	  infiniteLoop: true,
	  hideControlOnEnd: true
	});
	$('.plus').on('click',function(e){
		e.preventDefault();
		$(this).parent().toggleClass('open');
	});
	$('.open').parent().on('click', function(e){
		e.preventDefault();
		$(this).find('.open').removeClass('open');
	})

	$('.slidein-link').on('click',function(e){
		e.preventDefault();
		var slideInTarget = $($(this).attr('href'));
		$('.slidein-container').removeClass('active');
		slideInTarget.addClass('active');
		$('body').addClass('slided');
	});

	$('.close-slidein').on('click',function(e){
		e.preventDefault();
		$('.slidein-container').removeClass('active');
		$('body').removeClass('slided');
	});

	if($('.subnav').length){
		subnavPosition = $('.subnav').position().top;
	}

	// Standard slider
	$('.slider-container .slider-nav li:nth-child(1) a').on('click',function(e){
		e.preventDefault();
		$(this).closest('.slider-container').find('.slider-nav li a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.slider-container').find('.slider-contents > li').hide(0);
		$(this).closest('.slider-container').find('.slider-contents > li:nth-child(1)').fadeIn(300);
	});
	$('.slider-container .slider-nav li:nth-child(2) a').on('click',function(e){
		e.preventDefault();
		$(this).closest('.slider-container').find('.slider-nav li a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.slider-container').find('.slider-contents > li').hide(0);
		$(this).closest('.slider-container').find('.slider-contents > li:nth-child(2)').fadeIn(300);
	});
	$('.slider-container .slider-nav li:nth-child(3) a').on('click',function(e){
		e.preventDefault();
		$(this).closest('.slider-container').find('.slider-nav li a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.slider-container').find('.slider-contents > li').hide(0);
		$(this).closest('.slider-container').find('.slider-contents > li:nth-child(3)').fadeIn(300);
	});
	$('.slider-container .slider-nav li:nth-child(4) a').on('click',function(e){
		e.preventDefault();
		$(this).closest('.slider-container').find('.slider-nav li a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.slider-container').find('.slider-contents > li').hide(0);
		$(this).closest('.slider-container').find('.slider-contents > li:nth-child(4)').fadeIn(300);
	});
	$('.slider-container .slider-nav li:nth-child(5) a').on('click',function(e){
		e.preventDefault();
		$(this).closest('.slider-container').find('.slider-nav li a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.slider-container').find('.slider-contents > li').hide(0);
		$(this).closest('.slider-container').find('.slider-contents > li:nth-child(5)').fadeIn(300);
	});

	// Branche slider
	$('.branche-slider-nav li:nth-child(1) a').on('click',function(e){
		e.preventDefault();
		$(this).closest('.branche').find('.branche-slider-nav li a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.branche').find('.branche-slides-container li').hide(0);
		$(this).closest('.branche').find('.branche-slides-container li:nth-child(1)').fadeIn(300);
	});
	$('.branche-slider-nav li:nth-child(2) a').on('click',function(e){
		e.preventDefault();
		$(this).closest('.branche').find('.branche-slider-nav li a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.branche').find('.branche-slides-container li').hide(0);
		$(this).closest('.branche').find('.branche-slides-container li:nth-child(2)').fadeIn(300);
	});
	$('.branche-slider-nav li:nth-child(3) a').on('click',function(e){
		e.preventDefault();
		$(this).closest('.branche').find('.branche-slider-nav li a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.branche').find('.branche-slides-container li').hide(0);
		$(this).closest('.branche').find('.branche-slides-container li:nth-child(3)').fadeIn(300);
	});
	$('.branche-slider-nav li:nth-child(4) a').on('click',function(e){
		e.preventDefault();
		$(this).closest('.branche').find('.branche-slider-nav li a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.branche').find('.branche-slides-container li').hide(0);
		$(this).closest('.branche').find('.branche-slides-container li:nth-child(4)').fadeIn(300);
	});
	$("a.video-link").click(function() {
		$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'		: 680,
			'height'		: 495,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'iframe',
			'swf'			: {
			   	'wmode'		: 'transparent',
				'allowfullscreen'	: 'true'
				}
		});
		return false;
	});

	// Hardware slider
	var list = $('#list').find('>li');
	$("#prev,#next").click(function (event) {
	    var $new, $selected = $(".selected");
	    $new = (event.currentTarget.id == "prev") ? ($selected.index() == 0 ? list.last() : $selected.prev()) : ($selected.index() == list.last().index() ? list.first() : $selected.next());
	    $selected.removeClass("selected");
	    $new.addClass("selected");
	    $("#current-tag").text($new.attr('class') + $new.index());
	});

});

function submitForm(e, formid, href, blank){
	e.preventDefault();
	valid = true;
	$('#' + formid).find('>input').each(function(index, elem){
		if($(this).val() == '' || $(this).val() == undefined){
			valid = false
		}
		if($(this).attr('type') == 'email'){
			if(!IsEmail($(this).val())){
			}
		}
	});
	if(valid){
		$('#' + formid).find('>input[type=submit]').attr('disabled', 'disabled');
		$.ajax({
		  type: "POST",
		  url: "https://www.wallmob.com/reseller/signup/create",
		  data: $('#' + formid).serialize(),
		  success: function(data){
              if(href != undefined && href != 'undefined')
		           	if(blank != undefined){
		          		window.open(
		          			href,
		          			'_blank'
		          			)
		          	} else {
		            	window.location.href = href
		          	}
              else
                  window.location.href = 'thank-you'
		  }, 
		  error: function(data){
		  	console.log(data);
		  	$('#' + formid).find('span.error').removeClass('hidden');
			$('#' + formid).find('>input[type=submit]').removeAttr('disabled');
		  }
		});
	} else {
		$('#' + formid).find('span.invalid').removeClass('hidden');
		$('#' + formid).find('>input[type=submit]').removeAttr('disabled');
	}
	
}
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
$(window).resize(function(){
	subnavPosition = $('.subnav').position().top;
});

$(window).scroll(function(){
	var windowScroll = $(window).scrollTop(),
		windowHeight = $(window).height(),
		coverHeight = $('.cover').outerHeight();
	// if (windowScroll > coverHeight && windowScroll > 200) {
	// 	$('header').addClass('scrolled');
	// 	$('a.nav-expander').addClass('fixed');
	// 	$('a#signup-link').addClass('fixed');
	// 	$('a.logo').addClass('none');
	// 	$('div.reveal-on-scroll').addClass('on');
	// }else if (windowScroll < coverHeight || windowScroll < 200){
	// 	$('header').removeClass('scrolled');
	// 	$('a.nav-expander').removeClass('fixed');
	// 	$('a.logo').removeClass('none');
	// 	$('div.reveal-on-scroll').removeClass('on');
	// };
	// console.log(subnavPosition);

	// if (windowScroll > subnavPosition) {
	// 	$('header').addClass('scrolling');
	// 	$('.subnav').addClass('scrolling');
	// }else if (windowScroll < subnavPosition) {
	// 	$('header').removeClass('scrolling');
	// 	$('.subnav').removeClass('scrolling');
	// };

	if (windowScroll > 300) {
		$('header').addClass('scrolling');
		$('.subnav').addClass('scrolling');
	}else if (windowScroll < 300) {
		$('header').removeClass('scrolling');
		$('.subnav').removeClass('scrolling');
	};

	$('.fade-on-scroll').each(function(){
		var thisOffset = $(this).offset().top,
        	windowOffset = windowScroll + (windowHeight*0.8);
        if (thisOffset < windowOffset) $(this).addClass('animated');
	});
	if (windowScroll > 0 && windowScroll < coverHeight) {
		$('.no-touch .cover .container').css({
			'-webkit-transform' : 'translateY('+(windowScroll*0.5)+'px)',
			'-moz-transform' : 'translateY('+(windowScroll*0.5)+'px)',
			'-ms-transform' : 'translateY('+(windowScroll*0.5)+'px)',
			'-o-transform' : 'translateY('+(windowScroll*0.5)+'px)',
			'transform' : 'translateY('+(windowScroll*0.5)+'px)'
		});
		$('.no-touch .cover .container .big-tabs').css({
			'-webkit-transform' : 'translateY('+(windowScroll*-0.5)+'px)',
			'-moz-transform' : 'translateY('+(windowScroll*-0.5)+'px)',
			'-ms-transform' : 'translateY('+(windowScroll*-0.5)+'px)',
			'-o-transform' : 'translateY('+(windowScroll*-0.5)+'px)',
			'transform' : 'translateY('+(windowScroll*-0.5)+'px)'
		});
	}else if (windowScroll < 0){
		$('.no-touch .cover .container').css({
			'-webkit-transform' : 'translateY(0px)',
			'-moz-transform' : 'translateY(0px)',
			'-ms-transform' : 'translateY(0px)',
			'-o-transform' : 'translateY(0px)',
			'transform' : 'translateY(0px)'
		});
		$('.no-touch .cover .container .big-tabs').css({
			'-webkit-transform': 'translateY(0px)',
			'-moz-transform': 'translateY(0px)',
			'-ms-transform': 'translateY(0px)',
			'-o-transform': 'translateY(0px)',
			'transform': 'translateY(0px)'
		});
	}else if (windowScroll > coverHeight){
		$('.no-touch .cover .container').css({
			'-webkit-transform' : 'translateY('+(coverHeight/2)+'px)',
			'-moz-transform' : 'translateY('+(coverHeight/2)+'px)',
			'-ms-transform' : 'translateY('+(coverHeight/2)+'px)',
			'-o-transform' : 'translateY('+(coverHeight/2)+'px)',
			'transform' : 'translateY('+(coverHeight/2)+'px)'
		});
		$('.no-touch .cover .container .big-tabs').css({
			'-webkit-transform' : 'translateY('+(coverHeight/2)+'px)',
			'-moz-transform' : 'translateY('+(coverHeight/2)+'px)',
			'-ms-transform' : 'translateY('+(coverHeight/2)+'px)',
			'-o-transform' : 'translateY('+(coverHeight/2)+'px)',
			'transform' : 'translateY('+(coverHeight/2)+'px)'
		});
	};

	// finally
	if (windowScroll > 0 && windowScroll < coverHeight) {
		$('.no-touch .the-iphone-container').css({
			'-webkit-transform' : 'translateY('+(windowScroll*0.4)+'px)',
			'-moz-transform' : 'translateY('+(windowScroll*0.4)+'px)',
			'-ms-transform' : 'translateY('+(windowScroll*0.4)+'px)',
			'-o-transform' : 'translateY('+(windowScroll*0.4)+'px)',
			'transform' : 'translateY('+(windowScroll*0.4)+'px)'
		});
	}else if (windowScroll > coverHeight && windowScroll < 1800) {
		$('.no-touch .the-iphone-container').css({
			'-webkit-transform' : 'translateY('+((coverHeight*0.4)+((windowScroll-coverHeight)*1))+'px)',
			'-moz-transform' : 'translateY('+((coverHeight*0.4)+((windowScroll-coverHeight)*1))+'px)',
			'-ms-transform' : 'translateY('+((coverHeight*0.4)+((windowScroll-coverHeight)*1))+'px)',
			'-o-transform' : 'translateY('+((coverHeight*0.4)+((windowScroll-coverHeight)*1))+'px)',
			'transform' : 'translateY('+((coverHeight*0.4)+((windowScroll-coverHeight)*1))+'px)'
		});
	}else if (windowScroll > 1800) {
		$('.no-touch .the-iphone-container').css({
			'-webkit-transform' : 'translateY('+((coverHeight*0.4)+((1800-coverHeight)*1))+'px)',
			'-moz-transform' : 'translateY('+((coverHeight*0.4)+((1800-coverHeight)*1))+'px)',
			'-ms-transform' : 'translateY('+((coverHeight*0.4)+((1800-coverHeight)*1))+'px)',
			'-o-transform' : 'translateY('+((coverHeight*0.4)+((1800-coverHeight)*1))+'px)',
			'transform' : 'translateY('+((coverHeight*0.4)+((1800-coverHeight)*1))+'px)'
		});
	}else if (windowScroll < 0) {
		$('.no-touch .the-iphone-container').css({
			'-webkit-transform' : 'translateY(0px)',
			'-moz-transform' : 'translateY(0px)',
			'-ms-transform' : 'translateY(0px)',
			'-o-transform' : 'translateY(0px)',
			'transform' : 'translateY(0px)'
		});
	}
	if (windowScroll > 400) {
		$('div.the-iphone-container ul.the-iphone-screen li:nth-child(2)').addClass('active');
	}else if (windowScroll < 400) {
		$('div.the-iphone-container ul.the-iphone-screen li:nth-child(2)').removeClass('active');
	}
	if (windowScroll > 1200) {
		$('div.the-iphone-container ul.the-iphone-screen li:nth-child(3)').addClass('active');
	}else if (windowScroll < 1200) {
		$('div.the-iphone-container ul.the-iphone-screen li:nth-child(3)').removeClass('active');
	}
	
});

$(document).keyup(function(e){
	if(e.keyCode === 27)
		if ($('body').hasClass('nav-expanded')) {
			$('a.close-link').trigger('click');
		}else {
			$('a.nav-expander').trigger('click');
		};
		$('body').removeClass('enterprise-nav');
		$('body').removeClass('onestore-nav');
		$('body').removeClass('company-nav');
});

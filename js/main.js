;$(function() 
{
	'use strict';

	var sidebar = $('#sidebar'),
		mask = $('.mask'),
		backButton = $('.back-to-up'),
		sidebar_trigger = $('#sidebar_trigger');

	function showSideBar(){
		mask.fadeIn();

		//sidebar.css('right',0);
		sidebar.css('transform','translate(0,0)');
		//sidebar.animate({'right':0});
	}

	function hideSideBar(){
		mask.fadeOut();
		sidebar.css('transform','translate('+sidebar.width()+'px'+',0)');
		//sidebar.css('right',-sidebar.width());
	}


	sidebar_trigger.click('cilck',showSideBar);
	mask.click('cilck',hideSideBar);
	backButton.click('click',function(){
		$('html,body').animate({
			scrollTop:0
		},800)
	})

	$(window).on('scroll',function(){
		if($(window).scrollTop() > $(window).height())
			backButton.fadeIn();
		else
			backButton.fadeOut();
	})

	$(window).trigger('scroll');
})
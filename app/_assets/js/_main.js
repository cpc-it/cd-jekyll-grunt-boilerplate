/* -------------------------------- main.js ----------------------------------*/
/* Contains JS for tabs, search, dropdowns, and other small components.       */

jQuery(document).ready(function($) {

	$('.gold').addClass('sd0');
	$('.parsley').addClass('sd05');

	window.setTimeout(function(){
		$('#google-loading').addClass('fadein');
	}, 0); //<-- Delay in milliseconds

	window.setTimeout(function(){
		$('#google-loading').addClass('fadeout');
	}, 0); //<-- Delay in milliseconds
   	

	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - 100
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

});




   

//Height matching
$(document).ready(function() {

  if ( $('.panel_grid').length > 0 ) {
    $('.panel_grid').each(function() {
      $('img',this).matchHeight();
    });
  }

});

$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

// Off canvas Nav

$(document).ready(function(){
	$('.hamburger,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
		$('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
		$('.hamburger').toggleClass('is-active');
		$('#cpUl-primary li').removeClass("current");
		$('body').toggleClass('no-scroll');
		$('html').toggleClass('no-scroll');
		e.preventDefault();
	});
	  
	$("#cpUl-primary li a.expand").click(function(event) {
		 event.preventDefault();
	    $(this).parent().toggleClass("current");
        $(this).parent().siblings().removeClass("current");
	});

	$(".sliding-panel-subnav-dining-programs-button").click(function(event) {
	    event.preventDefault();
	    $('.sliding-panel-subnav-dining-programs').toggleClass("current");
	});
});

//Modal
$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});

//Accordion
$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});


$(document).ready(function() {
  $('.expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});

// Not using vars - seemd to cause issues with internet outage
var $window = $(window);
var nav = $('.header-primary');


$(window).scroll(function(){
    if ($window.scrollTop() >= 150) {
       $('.header-primary').addClass('fixed');
       $('#navigation').addClass('fixed');
       $('.subpage-nav-position').addClass('fixed');
       $('.top-nav').addClass('hide');



    }
    else {
       $('.header-primary').removeClass('fixed');
       $('#navigation').removeClass('fixed');
       $('.subpage-nav-position').removeClass('fixed');
       $('.top-nav').removeClass('hide');
    }

   

});


if ( $('#subpage-collapse-toggle').length > 0 && $('#subpage-collapse-target').length > 0 ) {
	$('#subpage-collapse-toggle').on('click',function(e){
		e.stopPropagation();
		e.preventDefault();

		$('#subpage-collapse-target').slideToggle();
	});
}



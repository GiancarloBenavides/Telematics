///******************************************/
///*          flezz framework 1.0           */
///******************************************/
///*  Name: Planeacion Udenar website
///*  Version: 0.1.5
///*  Description: script layout del sitio web de planeacion Universidad de Nariño
///*  Author: Giancarlo Ortiz.
///*  URI: http://www.zerez.org
///*  Tags: udenar, planeacion.
///******************************************/
/*global document, window, alert, console, jQuery, require*/
//
jQuery(document).ready(function ($) {
    "use strict";
    
    //on mobile - open/close primary navigation clicking/tapping the menu icon
	$('.cd-primary-nav').on('click', function (event) {
		if ($(event.target).is('.cd-primary-nav')) {
            $(this).children('ul').toggleClass('is-visible');
        }
	});
    
    //scroll
    $(function () {
        $('.flezz-scroll').scrollable({
            preventPageScrolling: true
        });
        //
        $("#main").find('.description').load("readme.html", function () {
            $(".flezz-scroll").scrollable();
            $("#main").find("img").load(function () {
                $(".nano").scrollable();
            });
        });
    });
});
/*! bootstrap3-showmanyslideonecarousel - v1.0.0 - 2015-03-27
* Copyright (c) 2015 Matthew Harris, rtpHarry <matthew@rtpdesign.co.uk>; Licensed MIT
* https://github.com/rtpHarry/Bootstrap3-ShowManySlideOneCarousel */
var ultimaDimensione = null;
var penultimaDimensione = null;
var elementiAttivi = [];

$(function() {
	$( window ).resize(function() {
		var dimensione = controllaDimensione();
		settingPositionControlsCarusel();
		if(ultimaDimensione!=dimensione){
			penultimaDimensione = ultimaDimensione;
			ultimaDimensione = dimensione;
			settingCarusel();
		}
	});
	
	ultimaDimensione = controllaDimensione();
	penultimaDimensione = ultimaDimensione;
	settingPositionControlsCarusel();
	settingCarusel();
	
	$('.carousel-showmanymoveone').on('slide.bs.carousel', function () {
		elementiAttivi['aggiornaElementoAttivo_' + $(this).attr('id')] = true;
	});
});



function settingPositionControlsCarusel() {
	// setting position controls
	$('.carousel-showmanymoveone .carousel-control').each(function(){
		var item = $(this);
		if(item.children().first().width() + 5 <= ($(window).width() - $( ".carousel-showmanymoveone" ).first().width())/2){
			if(item.hasClass( "left" ))
				item.css('margin-left', '-' + item.width() +'px');
			if(item.hasClass( "right" ))
				item.css('margin-right', '-' + item.width() +'px');
		}else{
			if(item.hasClass( "left" ))
				item.css('margin-left', '5px');
			if(item.hasClass( "right" ))
				item.css('margin-right', '5px');
		}
	});
}

function settingCarusel() {
	//setting item
	$('.carousel-showmanymoveone .carousel-inner').each(function(){
		var carusel = $(this);
		var frecce;
		if(carusel.children('.element').length > 0) {
			var idCarusel = carusel.parents('.carousel-showmanymoveone').attr('id');
			var classi = carusel.children('.element')[0].getElementsByTagName('div')[0].className.split(' ');
			var sizes = {};
			var size;

			for(var i = 0; i < classi.length; i++){
				if(classi[i].indexOf('col-')!=-1){
					size = classi[i].replace('col-', '').split('-');
					sizes[size[0]]= 12 / parseInt(size[1]);
				}
			}
			var items = carusel.children('.item');
			var slideActive = 0;
			
			if(elementiAttivi['elementoAttivo_' + idCarusel]== null){
				elementiAttivi['elementoAttivo_' + idCarusel] = 0;
				elementiAttivi['aggiornaElementoAttivo_' + idCarusel] = false;
			}
			for (var i=0; i<items.length; i++) {
				if(items[i].className.indexOf('active')!=-1)
					slideActive = i;
				items[i].parentNode.removeChild(items[i]);
			}

			var item;
			var elements = carusel.children('.element');
			
			if(elementiAttivi['aggiornaElementoAttivo_' + idCarusel]){
				elementiAttivi['elementoAttivo_' + idCarusel] = sizes[penultimaDimensione] * slideActive;
				elementiAttivi['aggiornaElementoAttivo_' + idCarusel] = false;
			}
			
			for (var i=0; i<elements.length; i++) {
				if(i % sizes[ultimaDimensione] == 0 || i == 0){
					if(i!=0){
						carusel.append(item);
					}
					
					if(i<=elementiAttivi['elementoAttivo_' + idCarusel] && (i + sizes[ultimaDimensione])>elementiAttivi['elementoAttivo_' + idCarusel]){
						item = $("<div>", {class: "item active"});
					}else{
						item = $("<div>", {class: "item"});
					}
					
					if(sizes[ultimaDimensione] == 1)
						item.html( item.html() + elements[i].innerHTML.replace(/style="background-image/g, 'style="margin: auto; background-image'));
					else
						item.html( item.html() + elements[i].innerHTML);
				}else{
					if((i+1) % sizes[ultimaDimensione] == 0)
						item.html( item.html() + elements[i].innerHTML.replace(/style="background-image/g, 'style="float: right; background-image'));
					else
						item.html( item.html() + elements[i].innerHTML.replace(/style="background-image/g, 'style="margin: auto; background-image'));
				}
				if(i==elements.length-1){
					carusel.append(item);
				}
			}
		}
		frecce = carusel.parent().children('.left, .right');
		if(carusel.children('.item').length<=1){
			frecce.hide();
		}else{
			frecce.show();
		}
	});
}

function controllaDimensione() {
	var steps = [550, 767, 991];
	var sizes = ['xxs', 'xs', 'sm', 'md'];
	var dimensione = null;
	if(window.matchMedia('screen and (max-width: ' + steps[0] + 'px)').matches)
		dimensione = sizes[0];
	if(window.matchMedia('screen and (min-width: ' + (steps[steps.length-1] + 1) + 'px)').matches)
		dimensione = sizes[sizes.length-1];
	if(dimensione == null){
		for(i=0; i < steps.length-1; i++){
			if(window.matchMedia('screen and (min-width: ' + (steps[i] + 1) + 'px)').matches && window.matchMedia('screen and (max-width: ' + steps[i+1] + 'px)').matches){	
				dimensione = sizes[i + 1];
				i = steps.length;
			}
		}
	}
	return dimensione;
}
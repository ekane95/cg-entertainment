
//inizio script youtube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//fine script youtube

//Script to Activate the Carousel
$('#cover').carousel({
    interval: 5000 //changes the speed
});
$('.scorrimentoCarousel').carousel({
    interval: 5000 //changes the speed
});
$('.carousel-showmanymoveone').carousel({
    pause: true,
    interval: false
});

//Condividi custom su facebook
$('.btnShare').click(function(){
	elem = $(this);
	postToFeed(elem.data('title'), elem.data('desc'), elem.prop('href'), elem.data('image'));
	return false;
});

// FACEBOOK
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/it_IT/sdk.js";
    js.onload = function() {
        FB.init({
            appId      : '1436833716643117',
            xfbml      : true,
            version    : 'v2.4'
        });
        if((typeof getUltimiPost == 'function'))
            getUltimiPost();
    };
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

    
if (sessionStorage && sessionStorage.ListaItemCarrello != 'undefined' && sessionStorage.ListaItemCarrello != null && sessionStorage.ListaItemCarrello.length != 0) {
    sessionStorage.NumeroItemCarrello = sessionStorage.ListaItemCarrello.split(",").length;
    document.getElementById("NumeroItemCarrello").innerHTML = '<i class="fa fa-shopping-cart">&nbsp;' + sessionStorage.NumeroItemCarrello;
    document.getElementById("tab_carrello").style.display = 'block';
};

if (sessionStorage && sessionStorage.NumeroItemStartup && sessionStorage.NumeroItemStartup!='0') {
    document.getElementById("NumeroItemStartup").innerHTML = '<i class="fa fa-shopping-cart">&nbsp;' + sessionStorage.NumeroItemStartup;
    document.getElementById("tab_StartUp").style.display = 'none';
};

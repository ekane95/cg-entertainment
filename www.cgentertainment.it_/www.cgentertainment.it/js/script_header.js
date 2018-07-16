var isMobile = {
    android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    blackberry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    ios: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.android() || isMobile.blackberry() || isMobile.ios() || isMobile.opera() || isMobile.windows() || navigator.userAgent.match(/mobile/i));
    }
};

function DIV_Show_Hide(nome_div, nome_div_focus) {
    if (document.getElementById(nome_div).style.display == 'none') {
        document.getElementById(nome_div).style.display = 'block'
        if (nome_div_focus != null) {
            document.getElementById(nome_div_focus).focus()
        }
    } else {
        document.getElementById(nome_div).style.display = 'none'
    }
}





function postToFeed(title, desc, url, image){
    var obj = {method: 'feed',link: url, picture: image,name: title,description: desc};
    function callback(response){}
    FB.ui(obj, callback);
}
// \FACEBOOK




// TWITTER
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
// \TWITTER



// GOOGLE+
function gPlus(url){
    window.open(
        'https://plus.google.com/share?url='+url,
        'popupwindow',
        'scrollbars=yes,width=600,height=400'
    ).focus();
    return false;
}
// \GOOGLE+
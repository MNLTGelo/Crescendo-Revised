if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
    backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });
}

try {
    if (location.hostname.toLowerCase() == "info.globalintgames.com" || location.hostname.toLowerCase() == "info.w88uat.com") {
        //if (location.hostname.toLowerCase() == "info.globalintgames.com") {
        $(".logobx-gameplay,.logobx").hide();
    } else {
        $(".logobx-gameplay,.logobx").show();
    }
} catch (ex) {}
/*
try {
if (location.pathname.startsWith("/share/") && !(location.hostname.toLowerCase() == "info.globalintgames.com" || location.hostname.toLowerCase() == "info.gpiops.com" || location.hostname.toLowerCase() == "info.w88uat.com")) {
location.href = "//info.gpiops.com" + location.pathname;
}
} catch (ex) {}*/

function load_livechat(lang) {
    var chatLang = "";
    var skill = "English";
    switch (lang) {
    case "id-id":
        chatLang = "Bahasa";
        skill = "Bahasa";
        break;
    case "ja-jp":
        chatLang = "Japanese";
        skill = "Japanese";
        break;
    case "km-kh":
        chatLang = "Khmer";
        skill = "Khmer";
        break;
    case "ko-kr":
        chatLang = "Korean";
        skill = "Korean";
        break;
    case "th-th":
        chatLang = "Thailand";
        skill = "Thailand";
        break;
    case "vi-vn":
        chatLang = "Vietnamese";
        skill = "Vietnamese";
        break;
    case "zh-cn":
        chatLang = "Chinese";
        skill = "Chinese";
        break;
    default:
        chatLang = "English";
        break;
    }
    if (false) {
        window.open("https://server.iad.liveperson.net/hc/88942816/?cmd=file&file=visitorWantsToChat&site=88942816&SV!skill=" + skill + "&leInsId=88942816527642465&skId=1&leEngId=88942816_29aeab82-a5fc-4de7-b801-c6a87c638106&leEngTypeId=8&leEngName=LiveHelp_default&leRepAvState=3&referrer=" + escape(document.location.href.replace("w88help.com", "w88help.com")) + "&SESSIONVAR!visitor_profile=" + chatLang, 'livechat', 'width=500,height=400,scrollbars=no,location=1,left=' + (screen.availWidth - 500) + ',top=0');
    } else {
        var domain = "https://www.w88live.com";
        switch (lang) {
        case "id-id":
            domain = "https://www.w88id.com";
            break;
        case "ja-jp":
            domain = "https://www.w88win.com";
            break;
        case "km-kh":
            domain = "https://www.w88live.com";
            break;
        case "ko-kr":
            domain = "https://www.w88hankook.com";
            break;
        case "th-th":
            domain = "https://www.w88top.com";
            break;
        case "vi-vn":
            domain = "https://www.w88ap.com";
            break;
        case "zh-cn":
            domain = "https://www.w88top.com";
            break;
        default:
            domain = "https://www.w88live.com";
            break;
        }
        window.open(domain + "/common/livechat.ashx?id=guest&platform=w88help&lang=" + lang + "&url=" + encodeURIComponent(window.location), 'livechat', 'width=500,height=400,scrollbars=no,location=1,left=' + (screen.availWidth - 500) + ',top=0');
    }
}

function SetPathName() {
    var y = window.location.pathname.split('/').filter(a => a);
    var x = y[y.length - 1]
        var s = x.split('_');
    if (s.length > 0) {
        var l = s[s.length - 1];
        var k = l.split('.');
        if (k.length === 2) {
            debugger
            var k1 = k[0].split('-').filter(a => a)
            if(k1.length > 1)
            {
                var k0 = k1[k1.length - 2];
                if(k0.length === 2){
                    console.log('invalid');
                    return;
                }                   
            }
            var pl = k1[k1.length - 1].toLowerCase();
            var nl;
            switch (pl) {
            case 'en': {
                    nl = 'en-my';
                    break;
                }
            case 'id': {
                    nl = 'id-id';
                    break;
                }
            case 'vn': {
                    nl = 'vi-vn';
                    break;
                }
            case 'th': {
                    nl = 'th-th';
                    break;
                }
        case 'cs':
            case 'cn': {
                    nl = 'zh-cn';
                    break;
                }
            case 'kr': {
                    nl = 'ko-kr';
                    break;
                }
            case 'kh': {
                    nl = 'km-kh';
                    break;
                }
            }

            if (nl) {
                // console.log(s);
                // console.log(k);
                // console.log(y);
                // console.log(k1);
                // console.log(k);
                k[0] = nl;
                var jk = k.join('.');
                // console.log(jk);
                k1[k1.length - 1] = jk;
                var r1 = k1.join('-');
                // console.log(r1);
                if (y.length > 1) {
                    y[y.length - 1] = r1;
                    var ret = '/' + y.join('/');
                    return window.location.pathname = ret;
                }

                if (s.length > 1) {
                    s[s.length - 1] = r1;
                    var ret = '/' + s.join('_');
                    return window.location.pathname = ret;
                }
            }
        }
    }
}

$(function () {
    SetPathName();

    $(window).on("hashchange", function () {
        if (location.hash) {
            $(location.hash).collapse('show');
            window.scrollTo(0, $(location.hash).position().top);
        }

    });
    $(window).trigger("hashchange");
});
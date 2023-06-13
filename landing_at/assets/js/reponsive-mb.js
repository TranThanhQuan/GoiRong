var jsVer = 15;
    var phoneWidth = parseInt(window.screen.width);
    console.log(phoneWidth);
    var phoneScale = phoneWidth / 640;

    if (phoneWidth < 768) {
        var ua = navigator.userAgent;
        if (/Android (\d+\.\d+)/.test(ua)) {
            var version = parseFloat(RegExp.$1);
            // andriod 2.3
            if (version > 2.3) {
                document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
            } else {
                document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
            }

        } else {
            console.log(phoneWidth);
            document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
        }

    } else {
        document.write('<meta name="viewport" content="width=768, minimum-scale =1, maximum-scale = 1, target-densitydpi=device-dpi">');
    }
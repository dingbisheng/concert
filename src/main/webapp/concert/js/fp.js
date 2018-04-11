var myDate = new Date();
var timestamp = new Date().getTime();
(function () {

    //var myDate = new Date();
    //var timestamp = new Date().getTime();
    //$("#token").val(timestamp);


    _fmOpt = {
        bd: true,
        partner: 'damai',
        appName: 'damai_web',
        token: timestamp
    };

    var cimg = new Image(1, 1);
    cimg.onload = function () {
        _fmOpt.imgLoaded = true;
    };
    cimg.src = "https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=" + _fmOpt.partner + "&appName=" + _fmOpt.appName + "&tokenId=" + _fmOpt.token;
    var fp = document.createElement('script');
    fp.type = 'text/javascript';
    fp.async = true;
    fp.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'static.fraudmetrix.cn/fm.js?ver=0.1';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(fp, s);

})();

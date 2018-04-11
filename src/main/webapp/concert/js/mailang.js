$(function () {
    var mailang_configs = {
        link: "//sale.damai.cn/act/mlj2017.html",
        start: new Date("2016/1/11 00:00:00"),
        end: new Date("2017/1/24 23:59:59")
    };
    var now = (new Date()).getTime();
    if (now < mailang_configs.start.getTime() || now > mailang_configs.end.getTime()) {
        return;
    }
    $(".header-w").append('<a href="' + mailang_configs.link + '" class="dm-extend1" target="_blank"><img src="//dui.dmcdn.cn/dm_2015/index/img/packet.png" alt="大麦网" width="131" height="306"></a>');
});

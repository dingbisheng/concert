// Author: ChenRui
// JS Create: 2013.01.16
// Version: 2.1.1
// Website: www.damai.cn
$(document).ready(function () {
    var cityData = '\
    {"CityList":[{"CityID":"852","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/bjweixin.jpg","CityName":"北京站"},\
    {"CityID":"872","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/shweixin.jpg","CityName":"上海站"},\
    {"CityID":"1377","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/cdweixin.jpg","CityName":"成都站"},\
    {"CityID":"1248","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/daliweixin.jpg","CityName":"大理站"},\
    {"CityID":"1725","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/dlweixin.jpg","CityName":"大连站"},\
    {"CityID":"1847","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/qdweixin.jpg","CityName":"青岛站"},\
    {"CityID":"947","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/zsweixin.jpg","CityName":"中山站"},\
    {"CityID":"848","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/hkweixin.jpg","CityName":"香港站"},\
    {"CityID":"917","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/dgweixin.jpg","CityName":"东莞站"},\
    {"CityID":"923","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/foshanweixin.jpg","CityName":"佛山站"},\
    {"CityID":"893","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/gzweixin.jpg","CityName":"广州站"},\
    {"CityID":"242","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/gyweixin.jpg","CityName":"贵阳站"},\
    {"CityID":"2648","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/hrbweixin.jpg","CityName":"哈尔滨站"},\
    {"CityID":"1580","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/hzweixin.jpg","CityName":"杭州站"},\
    {"CityID":"956","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/huizhouweixin.jpg","CityName":"惠州站"},\
    {"CityID":"1229","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/kmweixin.jpg","CityName":"昆明站"},\
    {"CityID":"1038","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/njweixin.jpg","CityName":"南京站"},\
    {"CityID":"2024","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/nnweixin.jpg","CityName":"南宁站"},\
    {"CityID":"1597","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/ningboweixin.png","CityName":"宁波站"},\
    {"CityID":"386","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/quanzhouweixin.jpg","CityName":"泉州站"},\
    {"CityID":"906","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/szweixin.jpg","CityName":"深圳站"},\
    {"CityID":"1703","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/syweixin.jpg","CityName":"沈阳站"},\
    {"CityID":"1087","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/suzweixin.jpg","CityName":"苏州站"},\
    {"CityID":"1209","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/tjweixin.png","CityName":"天津站"},\
    {"CityID":"586","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/wuhanweixin.jpg","CityName":"武汉站"},\
    {"CityID":"702","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/csweixin.jpg","CityName":"长沙站"},\
    {"CityID":"200","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/cqweixin.jpg","CityName":"重庆站"},\
    {"CityID":"2148","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/zhengzhouweixin.jpg","CityName":"郑州站"},\
    {"CityID":"2984","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/tyweixin.jpg","CityName":"太原站"},\
    {"CityID":"3250","PicName":"//dui.dmcdn.cn/dm_2015/goods/site/weixin/xaweixin.jpg","CityName":"西安站"}\
    ]}\
    ';
    cityData = window.eval("(" + cityData + ")");
    var cityID = projectInfo.CityID;
    var isTrue = false;
    for (var i = 0; i < cityData.CityList.length; i++) {
        if (parseInt(cityData.CityList[i].CityID) == parseInt(cityID)) {
            $("#siteWeixinQR").show().find("img").attr({
                src: cityData.CityList[i].PicName,
                alt: cityData.CityList[i].CityName
            });
            //$("#citynameweixin").html(cityData.CityList[i].CityName);
            isTrue = true;
            break;
        }
    }

    if (!isTrue) {
        $("#siteWeixinQR").show().find("img").attr({
            src: "//dui.dmcdn.cn/dm_2015/goods/site/weixin/defaultweixin.jpg",
            alt: "大麦网"
        });
        //$("#citynameweixin").html("大麦网");
    }

});
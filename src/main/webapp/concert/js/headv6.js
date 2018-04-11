String.prototype.subString = function (length) {
    var l = 0;
    for (var i = 0; i < this.length; i++) {
        var tt = escape(this.charAt(i));
        if (tt.indexOf("%u") == 0) {
            l += 2;
        } else {
            l += 1;
        }
        if (l > length) {
            var txt = this.substring(0, i) + "...";
            return txt;
        }
    }
    return this;
};

$(function () {
    //加载最近浏览城市
    (function () {
        var recentCities = (function () {
            var recentCities = /recentCities=([^;]*)/i.exec(document.cookie);
            if (recentCities && recentCities.length && recentCities.length == 2) {
                recentCities = decodeURIComponent(recentCities[1]).split(",");
            } else {
                recentCities = [];
            }
            return recentCities;
        })();

        if (recentCities.length > 0) {
            var htmls = [];
            for (var i = 0; i < recentCities.length && i < 4; i++) {
                var ii = recentCities[i].split(':');
                htmls.push('<a href="/' + ii[1] + '/" target="_blank">' + ii[0] + '</a>');
            }
            $("#recentCities").show().find("dd").html(htmls.join("<i>|</i>"));
        }
    })();
    //搜索框
    (function () {
        if (typeof searchSuggestions == "undefined" || searchSuggestions.length == 0) { return; }
        var idx = ~ ~(Math.random() * searchSuggestions.length);
        var itm = searchSuggestions[idx];
        var $txt = $("#searchText").val(itm.Title).attr("data-keyword", itm.Title);
        if (itm.StausType == 1) {
            $txt.attr("data-link", itm.LinkURL);
        }
    })();
});
$(document).ready(function () {
    getNickName();
    $.ajax({
        type: "get",
        async: false,
        url: "//www.damai.cn/ajax/GetSite.html",
        data: { city: 0 },
        dataType: "jsonp",
        jsonp: "jsonCallback", //服务端用于接收callback调用的function名的参数
        jsonpCallback: "success_jsonpCallback", //callback的function名称
        success: function (data) {
            if (typeof data == "undefined" || data == null) {
                data = {};
            }
            if (data.Data == null) {
                var num = 0;
                try {
                    num = parseInt($("#recentCities").next().find("a[href='/bj/'").next().text());
                    if (isNaN(num)) { num = 0; }
                } catch (e) { }
                data.Data = { CityID: 852, SiteName: "北京", HostName: "bj", Num: num };
            }
            if (typeof data != "undefined" && data.Status == 200 && data.Data != null && data.Data.CityID != cityId) {
                $("#insitehref").attr("href", "//www.damai.cn/" + data.Data.HostName + "/").show().find(".insiteName").text(data.Data.SiteName);
                if (typeof window.getSiteCallback == "function") {
                    window.getSiteCallback({ id: data.Data.CityID, name: data.Data.SiteName, host: data.Data.HostName, num: data.Data.Num });
                }
            } else {
                $("#insitehref").text("推荐进入首页").attr("href", "//www.damai.cn/").show();
            }
        }
    });
    initSearch();
});
(function ($) {
    String.format = function () {
        if (arguments.length == 0)
            return null;

        var str = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var re = new RegExp('\\{' + (i - 1) + '(:(\\d+))?\\}', 'gm');
            var rs = re.exec(str);
            if (typeof rs != "undefined" && rs != null) {
                var v = arguments[i];
                if (typeof rs[2] != "undefined") {
                    var l = (v + "").length;
                    if (l < (rs[2] - 0)) {
                        v = ("000000000000".substr(0, rs[2] - l)) + v;
                    }
                }
                str = str.replace(re, v);
            }
        }
        return str;
    };

    String.prototype.format = function () {
        if (arguments.length == 0)
            return null;

        var str = this;
        for (var i = 0; i < arguments.length; i++) {
            var re = new RegExp('\\{' + (i) + '\\}', 'gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
    };
    String.prototype.trim = function () {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    };
    String.prototype.template = function (obj) {
        return this.replace(/\{([a-z_]+)\}/gi, function (m, s) { return obj[s] || ""; });
    };
    String.prototype.getPart = function (s, e) {
        var re = new RegExp(s + "[\\w\\W]*" + e, "gi");
        return this.match(re);
    };

    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    Date.parseJsonDate = function (jsonDate) {
        //		if(jsonDate == null) { return null; }
        if (Object.prototype.toString.call(jsonDate) == "[object Date]") {
            return jsonDate;
        }
        var reg = /\((\d+)\)/;
        if (reg.test(jsonDate))
            return new Date(reg.exec(jsonDate)[1] - 0);
        return utlis.servertime();
    };
    (function () {
        if (typeof (Array.join) != "function") {
            Array.join = function (arr, s) {
                if (Object.prototype.toString.call(arr) == "[object Array]") {
                    return arr.join(s);
                }
                return "";
            }
        }
    })();
})(jQuery);

var ms = 0;
var se = 0;
var interTimer = null;
var closei = 0;
var interNewTimer = null;
// 获取服务器时间
function servertime(url) {
    var xmlhttp = window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : xmlhttp = new XMLHttpRequest(),
    server = url || '/date.html';
    if (!/\?$/gi.test(server)) {
        server += "?";
    }
    server += "t=" + Math.random();
    xmlhttp.open('get', server, false);
    xmlhttp.setRequestHeader('If-Modified-Since', 'q');
    xmlhttp.send();

    return new Date(xmlhttp.getResponseHeader('Date'));
}

var nickName = "";
//获取大麦网头部用户信息
function getNickName() {
    var strHtml = "";

    var cookie = "damai\.cn_nickName";
    var value = getCookieValue(cookie);

    if (value) {
        nickName = decodeURI(value);
        if (nickName.length > 5)
            nickName = nickName.substr(0, 5) + "...";

        //var n = getMessages();

        strHtml += '<span class="dm-name">HI , ' + nickName + '</span>';
        //strHtml += '<a href="//my.damai.cn/interaction/siteMessage.aspx" target="_blank" class="dm-message"><em></em><span>站内信</span><strong>' + n + '</strong></a>';
        strHtml += '<a class="dm-message" title="退出" href="//www.damai.cn/redirect.aspx?type=loginout">退出</a>';
    }
    else {
        strHtml += '<span class="dm-name">HI , 欢迎来大麦</span>';
        strHtml += '[';
        strHtml += '<a class="dm-login" title="登录" href="//www.damai.cn/redirect.aspx?type=login" target="_blank">登录</a>';
        strHtml += '<a class="dm-register" title="注册" href="//www.damai.cn/redirect.aspx?type=reg" target="_blank">注册</a>';
        strHtml += ']';
    }

    var userinfo = dui.$('#headerUserinfo');
    userinfo.innerHTML = strHtml;
}
//读取cookies
function getCookieValue(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return decodeURI(arr[2]);
    else
        return null;
}
//获取站内信数量
//function getMessages() {
//    var c1 = 0;
//    var cookie = "damai.cn_msgCount";
//    var value = getCookieValue(cookie);
//    if (value) {
//        c1 = parseInt(value);
//    }
//    return c1;
//}
function doSearch(searchText) {
    window.location.href = "//search.damai.cn/search.html" + '?keyword=' + encodeURIComponent(searchText) + (cityId > 0 ? ("&destCity=" + cityId) : "");
}
function initSearch() {
    var txt = "", list = $("#searchRelate");
    function suggest(v) {
        if (!v) {
            list.hide();
            return false;
        }
        if (txt == v) {
            return false;
        }

        txt = v;

        var url = "//search.damai.cn/suggest.html" + "?callback=suggestJsonp&keyword=" + encodeURIComponent(txt) + (cityId > 0 ? ("&destCity=" + cityId) : "");
        JSONP.getJSON(url, null, function (data) {
            data = data.suggests;
            if (data == null || data.length <= 0) { return; }

            var t = $.trim(txt);
            if (t.length > 4) { t = t.substring(0, 4) + "..."; }
            list.html("<a href='//mobile.damai.cn/' target='_blank' class='dm-appimg'>把【<span>" + t + "</span>】装进口袋</a>");
            dui.each(data, function (i) {
                var searchText = i.name.replace(/<[^>]*>/g, "");
                var a = document.createElement("a");
                var pId = i.id.split("_")[2];
                a.innerHTML = '<span class="txt">' + i.name + '</span><span class="city">' + i.cityname + '</span>';
                a.href = '//piao.damai.cn/' + pId + '.html';
                a.target = "_blank";
                list.append(a);
            });
            list.show();
        });

    }
    var isShowSearchRelate = false;
    //绑定搜索功能
    dui.on(dui.$("#search"), "click", function () {
        var searchText = dui.$("#searchText").value;
        var re = /<script.*?>(.|\n)*<\/script>/;
        searchText = searchText.replace(re, "");
        if (searchText == $("#searchText").attr("data-keyword") && $("#searchText").attr("data-link")) {
            location.href = $("#searchText").attr("data-link");
            return false;
        }
        if (searchText.indexOf("请输入") == 0) searchText = "";
        doSearch(searchText);
    }, true);

    dui.on(dui.$("#searchRelate"), 'mouseover', function () {
        isShowSearchRelate = true;
    }, true).on(dui.$("#searchRelate"), 'mouseout', function () {
        isShowSearchRelate = false;
    }, true);

    dui.on(dui.$("#searchText"), "focus", function (event) {
        var text = $("#searchText"), value = text.val(), key = text.attr("data-keyword");
        if (value.indexOf("请输入") == 0 || value == key) {
            value = "";
            text.val(value);
        }

        if (value && dui.first(dui.$('#searchRelate'))) {
            dui.css(dui.$('#searchRelate'), "display", "block");
        }
    }, true).on(dui.$("#searchText"), "blur", function (event) {
        if (isShowSearchRelate == false) { dui.css(dui.$('#searchRelate'), "display", "none"); }
        var text = $("#searchText"), value = text.val(), key = text.attr("data-keyword");
        if (!value) { text.val(key || "请输入演出，艺人，场馆名称…"); }
    }, true).on(dui.$("#searchText"), "keydown", function (event) {
        var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
        if (keyCode == 13) {
            doSearch(dui.$("#searchText").value);
        }
    }, true).on(dui.$("#searchText"), "keyup", function (event) {
        var searchText = dui.$("#searchText").value;
        var re = /<script.*?>(.|\n)*<\/script>/;
        searchText = searchText.replace(re, "");
        suggest(dui.trim(searchText));
    });
}
jQuery(document).on("click", "#searchRelate a", function () {
    $("#searchRelate").hide();
});
dui.on(window, 'load', init, true);

var JSONP = {
    // 获取当前时间戳
    now: function () {
        return (new Date()).getTime();
    },

    // 获取16位随机数
    rand: function () {
        return Math.random().toString().substr(2);
    },

    // 删除节点元素
    removeElem: function (elem) {
        var parent = elem.parentNode;
        if (parent && parent.nodeType !== 11) {
            parent.removeChild(elem);
        }
    },

    // url组装
    parseData: function (data) {
        var ret = "";
        if (typeof data === "string") {
            ret = data;
        }
        else if (typeof data === "object") {
            for (var key in data) {
                ret += "&" + key + "=" + encodeURIComponent(data[key]);
            }
        }
        // 加个时间戳，防止缓存
        ret += "&_time=" + this.now();
        ret = ret.substr(1);
        return ret;
    },

    getJSON: function (url, data, func) {
        // 函数名称
        var name;

        // 拼装url
        url = url + (url.indexOf("?") === -1 ? "?" : "&") + this.parseData(data);

        // 检测callback的函数名是否已经定义
        var match = /callback=(\w+)/.exec(url);
        if (match && match[1]) {
            name = match[1];
        } else {
            // 如果未定义函数名的话随机成一个函数名
            // 随机生成的函数名通过时间戳拼16位随机数的方式，重名的概率基本为0
            // 如:jsonp_1355750852040_8260732076596469
            name = "jsonp_" + this.now() + '_' + this.rand();
            // 把callback中的?替换成函数名
            url = url.replace("callback=?", "callback=" + name);
            // 处理?被encode的情况
            url = url.replace("callback=%3F", "callback=" + name);
        }

        // 创建一个script元素
        var script = document.createElement("script");
        script.type = "text/javascript";
        // 设置要远程的url
        script.src = url;
        // 设置id，为了后面可以删除这个元素
        script.id = "id_" + name;

        // 把传进来的函数重新组装，并把它设置为全局函数，远程就是调用这个函数
        window[name] = function (json) {
            // 执行这个函数后，要销毁这个函数
            //window[name] = undefined;//开启该方法可能并发的时候找不到该function对象
            // 获取这个script的元素
            var elem = document.getElementById("id_" + name);
            // 删除head里面插入的script，这三步都是为了不影响污染整个DOM啊
            JSONP.removeElem(elem);
            // 执行传入的的函数
            func(json);
        };

        // 在head里面插入script元素
        var head = document.getElementsByTagName("head");
        if (head && head[0]) {
            head[0].appendChild(script);
        }
    }
};
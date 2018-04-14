//lazyimg
(function (b) { var c = b(window); b.fn.lazyload = function (e) { var f = { threshold: 100, failurelimit: 10, event: "scroll", effect: "show", container: window }; if (e) { b.extend(f, e) } var d = this; if ("scroll" == f.event) { b(f.container).bind("scroll", function (h) { var g = 0; d.each(function () { if (b.abovethetop(this, f)) { } else { if (!b.belowthefold(this, f)) { b(this).trigger("appear") } else { if (g++ > f.failurelimit) { } } } }); var i = b.grep(d, function (j) { return !j.loaded }); d = b(i) }) } this.each(function () { var g = this; if (undefined != b(g).attr("original")) { g.loaded = false; b(g).one("appear", function () { if (!this.loaded) { b("<img />").bind("load", function () { b(g).hide().attr("src", b(g).attr("original"))[f.effect](f.effectspeed); g.loaded = true }).attr("src", b(g).attr("original")) } }) } }); b(f.container).trigger(f.event); return this }; function a() { } b.belowthefold = function (e, d) { var f; if (d.container === undefined || d.container === window) { f = (window.innerHeight ? window.innerHeight : b(window).height()) + b(window).scrollTop() } else { f = b(d.container).offset().top + b(d.container).height() } return f <= b(e).offset().top - d.threshold }; b.abovethetop = function (e, d) { var f; if (d.container === undefined || d.container === window) { f = b(window).scrollTop() } else { f = b(d.container).offset().top } return f >= b(e).offset().top + d.threshold + b(e).height() }; b.extend(b.expr[":"], { "below-the-fold": "jQuery.belowthefold(a, {threshold : 0, container: window})", "above-the-fold": "!jQuery.belowthefold(a, {threshold : 0, container: window})" }) })(jQuery);
(function () { $("img[original]").lazyload({ effect: "fadeIn", failurelimit: 0, threshold: 0 }); })();
var damai = {
    page: {
        settings: {
            get: function (key, value) {
                if (typeof itemSettings == "undefined") { return value; }
                if (typeof itemSettings[key] == "undefined") { return value; }
                if (itemSettings[key] == null) { return value; }
                return itemSettings[key];
            }
        }
    },
    status: {
        noPrivilege: 10001,
        ok: 200
    }
};
var search_url = "//search.damai.cn/search.html", search_suggest_url = "//search.damai.cn/suggest.html";
(function ($) {
    var item = {};
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

    $.damaiItem = $.damaiItem || {};
    $.damaiItem.loginCallbacks = {};
    $.damaiItem.loginSuccCallback = null;
    $.damaiItem.showLogin = function (callback) {
        $.damaiItem.loginSuccCallback = callback;
        $().jQueryDialog({
            width: '708',
            scroll: 'no',
            cssstr: 'm-layer-newlogin',
            height: '424',
            title: "用户登录",
            url: "https://secure.damai.cn/fLogin2015.aspx?callback=" + escape("$.damaiItem.loginCallback()") + "&ru=" + document.URL
        });
    };
    $.damaiItem.loginCallback = function () {
        var t1 = setTimeout(function () {
            clearTimeout(t1); t1 = null;
            $.getJSON("/ajax/GetUserInfo.html", { projectId: projectInfo.ProjectID, "t": Math.random() }, function (rsp) {
                for (var funName in $.damaiItem.loginCallbacks) {
                    var fun = $.damaiItem.loginCallbacks[funName];
                    if (typeof fun == "function") {
                        fun(rsp.Data.userInfo);
                    }
                }
                loadu(rsp.Data.userInfo);
                setFlowerState(rsp.Data.flowerState);
                if (typeof $.damaiItem.loginSuccCallback == "function") {
                    $.damaiItem.loginSuccCallback(true);
                    $.damaiItem.loginSuccCallback = null;
                }
            });
        }, 200);
        $("#maskLevel, #maskiframe, #player").remove();
    };

    function getHash(key) {
        if (!key || key.length <= 0) {
            return "";
        }
        var r = new RegExp(key + "=([^&]*)");
        r.exec(location.hash);
        return RegExp.$1;
    }

    //点赞送花
    function initFlower(data) {
        var $self = $('.m-flowers');
        var $add = $self.find('.add');
        var $num = $self.find('.num');
        var $txt = $self.find('.txt');
        var $ico = $self.find(".ico");

        function geticon(c) {
            if (c <= 0) { return "ico-1"; }
            if (c > 1000) { return "ico-7"; }
            if (c > 500) { return "ico-6"; }
            if (c > 100) { return "ico-5"; }
            if (c > 50) { return "ico-4"; }
            if (c > 10) { return "ico-3"; }
            if (c > 0) { return "ico-2"; }
            return "";
        }
        function animate(obj) {
            $add.show().animate({ 'left': '+=' + 10, 'top': '-=' + 10, 'opacity': 0 }, 500, function () {
                $(this).hide();
                setState({ count: obj.c, userState: 1 });
            });
        }
        function setState(obj) {
            $num.html(obj.count);
            $ico.attr("class", "ico " + geticon(obj.count));
            setFlowerState(obj.userState);
        }
        var setFlowerState = window["setFlowerState"] = function (state) {
            if (state == 0) { return; }
            $self.addClass("m-flowers-act"); $txt.html('已送花');
        };

        setState(data);
        $self.on('click', function () {
            // 已送花
            if ($self.hasClass('m-flowers-act')) {
                return;
            }
            $.get("/ajax/giveFlower.html", { projectId: projectInfo.ProjectID, _t: Math.random() }, function (data) {
                data = eval("(" + data + ")");
                switch (data.result) {
                    case -250:
                        $.damaiItem.showLogin();
                        return;
                    case 1:
                        animate(data);
                        return;
                    case 0:
                        return;
                }
            });
        });
    }

    function setBtnXuanzuoStatus(isXuanzuo) {
        if (isXuanzuo) {
            $("#btnXuanzuo, #btnXuanzuo3").show(); $("#btnXuanzuo2").removeAttr("style");
        } else {
            $("#btnXuanzuo, #btnXuanzuo2, #btnXuanzuo3").hide();
        }
    }
    function setTips3Dates(iseticket) {
        if (iseticket) {
            $(".m_heighlight_tip").html("演出开演前72小时不支持实票配送，您可上门自取或选购电子票（限支持电子票项目）").show();
        } else {
            $(".m_heighlight_tip").html("演出开演前72小时不支持实票配送，您可上门自取或选购电子票（限支持电子票项目）").show();
        }
    }

    function renderPriceList(con, performId, list) {
        var htmls = [];
        for (var i = 0; i < data.length; i++) {
            htmls.push(String.format('<li class="itm {1} {4} {6}" style="{5}" data-pricename={0} data-priceId="{3}" data-price="{8}" data-taopiao="{7}" data-status="{9}"><a href="javascript:;"><span class="price">{0}</span><i></i></a></li>',
                data[i].PriceName
                , data[i].IsAppPrice ? "itm-mobile" : ""
                , ""
                , data[i].PriceID
                //, (data.length > 8 && i >= 7) ? "j_more" : ""
                , ""
                //, (data.length > 8 && i >= 7) ? "display:none;" : ""
                , data[i].IsAppPrice ? "background-color:#fdf7f5;" : ""
                , (data[i].Status == 1 || data[i].Status == 10) ? "itm-oos" : ""
                , data[i].IsTaoPiao
                , data[i].SellPrice
                , data[i].Status));
        }
        if (data.length == 0) {
            htmls.push('<li style="line-height:32px;padding-left:10px"><span>待定</span></li>');
        }
        con.attr("data-performId", performId).find(".lst").html(htmls.join(""));
    }

    //根据场次编号获取价格
    function getPriceList(performId, isShowTips3Dates, callback) {
        var $c = $(".m-choose.m-choose-price .lst");
        if ($c.find("li.loading").length > 0) return false;
        $c.html('<li style="line-height:32px;padding-left:10px" class="loading"><span>加载中，请稍后...</span></li>');
        $.get("/ajax/getPriceList.html", { projectId: projectInfo.ProjectID, performId: performId, t: Math.random() }, function (data) {
            data = eval("(" + data + ")");
            data = data.Data;
            setBtnXuanzuoStatus(data.isXuanzuo);
            if (isShowTips3Dates) {
                setTips3Dates(data.isEticket);
            }
            render(data.list);
            callback({
                buyCount: data.buyCount,
                seatCount: data.seatCount
            });
        });

        function render(data) {
            if (data == null || !data.length) data = [];
            var htm = "";
            for (var i = 0; i < data.length; i++) {
                htm += String.format('<li class="itm {1} {4} {6}" style="{5}" data-pricename={0} data-priceId="{3}" data-price="{8}" data-taopiao="{7}"><a href="javascript:;"><span class="price">{0}</span><i></i></a></li>',
                    data[i].PriceName
					, data[i].IsAppPrice ? "itm-mobile" : ""
					, ""
                    , data[i].PriceID
                    //, (data.length > 8 && i >= 7) ? "j_more" : ""
					, ""
					//, (data.length > 8 && i >= 7) ? "display:none;" : ""
					, data[i].IsAppPrice ? "background-color:#fdf7f5;" : ""
					, data[i].Status == 1 ? "itm-oos" : ""
					, data[i].IsTaoPiao
					, data[i].SellPrice);
            }
            //			if (data.length > 8) {
            //				htm += '<li class="itm itm-more"><a href="javascript:;"><span class="txt" data-toggle-txt="收起">更多</span><i></i></a></li>';
            //			}
            if (data.length == 0) {
                htm += '<li style="line-height:32px;padding-left:10px"><span>待定</span></li>';
            }
            //$c.prev().remove();
            $c.html(htm);
            $("#priceList").attr("data-performId", performId);
        }
    }
    //移除已选择票价
    function removeCartPrice(performId, priceId) {
        if (!priceId) {
            $("div.m-cart .lst .itm").remove();
            $("div.m-choose.m-choose-price .lst .itm").removeClass("itm-sel");
        } else {
            if (cartMoving["mv_{0}_{1}".format(performId, priceId)]) { return; }
            $("div.m-cart .lst .itm[data-priceId='{0}']".format(priceId)).remove();
            $("div.m-choose.m-choose-price .lst .itm[data-priceId='{0}']".format(priceId)).removeClass("itm-sel");
        }
        if ($(".m-cart .lst .itm").length == 0) {
            $(".m-cart").find("h3.tt, div.ct").hide();
        }
    }

    //组装速度排行榜展示数据
    function createAlbum(json) {
        function formatMoney(money) {
            money = money - 0;
            if (money < 10000)
                return { num: money, unit: "" };
            return { num: (money / 10000).toFixed(2), unit: "万" };
        }
        var money = formatMoney(json.TotalMoney);
        var count = formatMoney(json.ParterCount);
        var timeStr = '暂无';
        if (json.GrabTicketList.length > 0)
            timeStr = json.GrabTicketList[0].TimeStr;
        var s = String.format('<div class="hd"><h2 class="tt">抢票速度榜</h2></div><div class="bd"><ul class="info"><li class="col col1"><div class="row"><strong>{0}</strong><em>秒</em></div><div class="row"><span>最快用时</span>', timeStr) +
                String.format('</div></li><li class="col col2"><div class="row"><strong>{0}</strong><em>{1}人</em></div><div class="row"><span>参与人数</span></div></li><li class="col col3"><div class="row"><strong>{2}</strong><em>{3}元</em>',
				count.num, count.unit,
				money.num, money.unit) +
                '</div><div class="row"><span>产生金额</span></div></li></ul><ul class="top">';
        if (json.GrabTicketList.length > 0) {
            for (var i = 0; i < json.GrabTicketList.length; i++) {
                s += '<li class="itm">';
                var top3 = '';
                if (i < 3) {
                    top3 = 'num-c1';
                }
                s += String.format("<span class='num {3}'>{0}</span><span class='name'><a href='javascript:;'>{1}</a></span><span class='time'>用时:{2}</span></strong>",
						(i + 1),
						json.GrabTicketList[i].UserNick,
						json.GrabTicketList[i].TimeStr,
						top3);
                s += "</li>";
            }
        }
        s = s + "</ul></div>";
        return s;
    }
    //执行相关验证或弹窗
    function initYanzheng() {
        var yanzStr = String.format("damai.cn_project.yanzheng.{0}.rt=([^;]*)", projectInfo.ProjectID);
        var codeCookieS = new RegExp(yanzStr);
        var codeCookie = codeCookieS.exec(document.cookie);
        if (codeCookie && codeCookie.length == 2) {
            var c = unescape(codeCookie[1] + "");
            if (c == "1") {
                return;
            }
        }
        $.get("/ajax/getIsYanZheng.html", { t: Math.random() }, function (data) {
            data = eval('(' + data + ')');
            if (data.Status == 200) {
                if (data.Data.IsEnd == "1") {
                    turnOnLayer(372, 469, "/js/JustinBieber2015.htm?secrectStr=" + data.Data.Secrect + "&projectID=" + projectInfo.ProjectID, data.Data.ImgSrc);
                }
            }
        });
    }
    function initYhcx() {
        if (projectInfo.OptimizationTicket > 0) {
            return false;
        }

        $.get("/ajax/yhcx.html", { projectid: projectInfo.ProjectID, cityid: $("#cityId").val(), categoryID: $("#ChildCategoryID").val() }, function (data) {
            data = eval("(" + data + ")");
            if (data.Status == 200) {
                var funs = {
                    T1: function (date) { return "每日" + date.substr(11, 5); },
                    T7: function (date) { return "每周" + ["日", "一", "二", "三", "四", "五", "六"][new Date(date.replace(/-/gi, "/")).getDay()] + date.substr(11, 5); },
                    T30: function (date) { return "每月" + date.substr(8, 2) + "日" + date.substr(11, 5); }
                }, typecss = {
                    T1: "zhekou",
                    T2: "manjian",
                    T4: "cuxiao",
                    T11: "zhekou_grey",
                    T21: "manjian_grey",
                    T41: "cuxiao_grey"
                };
                function getRestrict(itm) {
                    if (itm.IsBuyQuotaFinish) {
                        return "（已无名额）";
                    } else if (itm.IsRestrictFinish) {
                        return "（已无名额，{0}发放）".format(funs["T" + itm.RestrictType](itm.AutoUpperDate));
                    }
                    return "";
                }
                function getAppAc(itm) {
                    if (itm.IsAppActivity) {
                        return "【大麦客户端专享】";
                    }
                    return "";
                }
                if (data.Data.HasRule) {//如果有优惠政策
                    var pichtml = '<div class="tt"><h3 class="tt">促销信息：</h3>';
                    var s = '';
                    var list = data.Data.MRuleList.concat(data.Data.CRuleList).concat(data.Data.ZRuleList);
                    //for (var i = 0; i < 10; i++) {
                    //    var itm = list[parseInt(Math.floor(Math.random() * list.length))];
                    //    while (itm.IsRestrictFinish) {
                    //        itm = list[parseInt(Math.floor(Math.random() * list.length))];
                    //    }
                    //    itm.IsRestrictFinish = true;
                    //    itm.RestrictType = [1, 7, 30][parseInt(Math.floor(Math.random() * 3))];
                    //}
                    if (list.length > 2) {
                        s += '<li class="promotion clearfix"> <div class="sublst s_manjian" style="width: auto;">';
                    } else {
                        s += '<li class="promotion clearfix"> <div class="sublst" style="width: auto;">';
                    }
                    for (var i = 0; i < list.length; i++) {
                        var restrict = getRestrict(list[i]), appAc = getAppAc(list[i]);
                        s += '<div style="margin-top:{2}px;" class="clearfix"><span class="pro {0}"></span><div class="{1}" style="margin-left:48px;">'.format(restrict.length > 0 ? typecss["T" + list[i].PType + "1"] : typecss["T" + list[i].PType], restrict.length > 0 ? "c999" : "look", i == 0 ? 0 : 7);
                        if (list[i].ChuxiaoInfo != null) {
                            if (list[i].ChuxiaoInfo.ActivityLink != null && list[i].ChuxiaoInfo.ActivityLink.length > 0)
                                s += String.format('<p>{3}{0}<a style="float:none; margin-left:10px;" class="look" href="//{1}">{2}&gt;&gt;</a></p>', list[i].ChuxiaoTitle + restrict, list[i].ChuxiaoInfo.ActivityLink, list[i].ChuxiaoInfo.LinkDesn, appAc);
                            else
                                s += String.format('<p>{1}{0}</p>', list[i].ChuxiaoTitle + restrict, appAc);
                            if (list[i].ChuxiaoInfo.PicUrl != null && list[i].ChuxiaoInfo.PicUrl.length > 0)
                                pichtml += '<a href="//' + list[i].ChuxiaoInfo.ActivityLink + '"><img src="//static.dmcdn.cn/' + list[i].ChuxiaoInfo.PicUrl + '" height="37" width="57" style="margin-bottom:10px;" alt="火爆热卖中" /></a>';
                        } else {
                            s += String.format('<p>{1}{0}</p>', list[i].ChuxiaoTitle + restrict, appAc);
                        }
                        s += '</div></div>';
                    }
                    if (list.length > 3) {
                        s += '</div><a href="javascript:;" ht="' + list.length + '" class="pro_more more1"><i class="icon_more"></i><span>展开</span></a></li>';
                    }
                    else { s += '</div></li>'; }

                    var mrulelist = data.Data.MRuleList;
                    if (false && mrulelist.length > 0) {
                        if (mrulelist.length > 2) {
                            s += '<li class="promotion clearfix"> <div class="sublst s_manjian" style="width: auto;">';  //mianjian_grey<span class="pro manjian"></span><span class="pro manjian"></span>
                        }
                        else {
                            s += '<li class="promotion clearfix"> <div class="sublst" style="width: auto;">';
                        }
                        //mrulelist[0].IsRestrictFinish = true;
                        for (var i = 0; i < mrulelist.length; i++) {
                            var restrict = getRestrict(mrulelist[i]), appAc = getAppAc(list[i]);
                            s += '<div style="margin-top:{2}px;" class="clearfix"><span class="pro {0}"></span><div class="{1}" style="margin-left:48px;">'.format(restrict.length > 0 ? "manjian_grey" : "manjian", restrict.length > 0 ? "c999" : "look", i == 0 ? 0 : 7);
                            if (mrulelist[i].ChuxiaoInfo != null) {
                                if (mrulelist[i].ChuxiaoInfo.ActivityLink != null && mrulelist[i].ChuxiaoInfo.ActivityLink.length > 0)
                                    s += String.format('<p>{3}{0}<a style="float:none; margin-left:10px;" class="look" href="//{1}">{2}&gt;&gt;</a></p>', mrulelist[i].ChuxiaoTitle + restrict, mrulelist[i].ChuxiaoInfo.ActivityLink, mrulelist[i].ChuxiaoInfo.LinkDesn, appAc);
                                else
                                    s += String.format('<p>{1}{0}</p>', mrulelist[i].ChuxiaoTitle + restrict, appAc);
                                if (mrulelist[i].ChuxiaoInfo.PicUrl != null && mrulelist[i].ChuxiaoInfo.PicUrl.length > 0)
                                    pichtml += '<a href="//' + mrulelist[i].ChuxiaoInfo.ActivityLink + '"><img src="//static.dmcdn.cn/' + mrulelist[i].ChuxiaoInfo.PicUrl + '" height="37" width="57" style="margin-bottom:10px;" alt="火爆热卖中" /></a>';
                            } else {
                                s += String.format('<p>{1}{0}</p>', mrulelist[i].ChuxiaoTitle + restrict, appAc);
                            }
                            s += '</div></div>';
                        }
                        if (mrulelist.length > 3)
                            s += '</div><a href="javascript:;" ht="' + mrulelist.length + '" class="pro_more more1"><i class="icon_more"></i><span>展开</span></a></li>';
                        else
                            s += '</div></li>';
                    }
                    var zrulelist = data.Data.ZRuleList;
                    if (false && zrulelist.length > 0) {
                        if (zrulelist.length > 2) {
                            s += ' <li class="promotion clearfix"><div class="sublst s_manjian" style="width: auto;">'; //zhekou_grey <span class="pro zhekou"></span>
                        }
                        else {
                            s += ' <li class="promotion clearfix"><div class="sublst" style="width: auto;">'; //<span class="pro zhekou"></span>
                        }
                        //zrulelist[1].IsRestrictFinish = true;
                        for (var i = 0; i < zrulelist.length; i++) {
                            var restrict = getRestrict(zrulelist[i]), appAc = getAppAc(list[i]);
                            s += '<div style="margin-top:{2}px;" class="clearfix"><span class="pro {0}"></span><div class="{1}" style="margin-left:48px;">'.format(restrict.length > 0 ? "zhekou_grey" : "zhekou", restrict.length > 0 ? "c999" : "look", i == 0 ? 0 : 7);
                            if (zrulelist[i].ChuxiaoInfo != null) {
                                if (zrulelist[i].ChuxiaoInfo.PicUrl != null && zrulelist[i].ChuxiaoInfo.PicUrl.length > 0) {
                                    pichtml += '<a href="//' + zrulelist[i].ChuxiaoInfo.ActivityLink + '"><img src="//static.damai.cn/' + zrulelist[i].ChuxiaoInfo.PicUrl + '" height="37" width="57" style="margin-bottom:10px;" alt="火爆热卖中" /></a>';
                                }
                                else
                                    s += String.format('<p>{1}{0}</p>', zrulelist[i].ChuxiaoTitle + restrict, appAc);
                                if (zrulelist[i].ChuxiaoInfo.ActivityLink != null && zrulelist[i].ChuxiaoInfo.ActivityLink.length > 0)
                                    s += String.format('<p>{3}{0}<a style="float:none; margin-left:10px;" class="look" href="//{1}">{2}&gt;&gt;</a></p>', zrulelist[i].ChuxiaoTitle + restrict, zrulelist[i].ChuxiaoInfo.ActivityLink, zrulelist[i].ChuxiaoInfo.LinkDesn, appAc);
                            } else {
                                s += String.format('<p>{1}{0}</p>', zrulelist[i].ChuxiaoTitle + restrict, appAc);
                            }
                            s += '</div></div>';
                        }
                        if (zrulelist.length > 3)
                            s += '</div><a href="javascript:;" ht="' + zrulelist.length + '" class="pro_more more2"><i class="icon_more"></i><span>展开</span></a></li>';
                        else
                            s += '</div></li>';
                    }
                    var crulelist = data.Data.CRuleList;
                    if (false && crulelist.length > 0) {
                        if (crulelist.length > 2) {
                            s += ' <li class="promotion clearfix"><div class="sublst s_manjian" style="width: auto;">'; //cuxiao_grey<span class="pro cuxiao"></span>
                        }
                        else {
                            s += ' <li class="promotion clearfix"><div class="sublst" style="width: auto;">';
                        }
                        //crulelist[0].IsRestrictFinish = crulelist[2].IsRestrictFinish = true;
                        //crulelist[0].RestrictType = 30;
                        //crulelist[2].RestrictType = 7;
                        for (var i = 0; i < crulelist.length; i++) {
                            var restrict = getRestrict(crulelist[i]);
                            s += '<div style="margin-top:{2}px;" class="clearfix"><span class="pro {0}"></span><div class="{1}" style="margin-left:48px;">'.format(restrict.length > 0 ? "cuxiao_grey" : "cuxiao", restrict.length > 0 ? "c999" : "look", i == 0 ? 0 : 7);
                            if (crulelist[i].ChuxiaoInfo != null) {
                                if (crulelist[i].ChuxiaoInfo.PicUrl != null && crulelist[i].ChuxiaoInfo.PicUrl.length > 0)
                                    pichtml += '<a href="//' + crulelist[i].ChuxiaoInfo.ActivityLink + '"><img src="//static.dmcdn.cn/' + crulelist[i].ChuxiaoInfo.PicUrl + '" height="37" width="57" style="margin-bottom:10px;" alt="火爆热卖中" /></a>';
                                else
                                    s += String.format('<p>{0}</p>', crulelist[i].ChuxiaoTitle + restrict);
                                if (crulelist[i].ChuxiaoInfo.ActivityLink != null && crulelist[i].ChuxiaoInfo.ActivityLink.length > 0)
                                    s += String.format('<p>{0}<a style="float:none; margin-left:10px;" class="look" href="//{1}">{2}&gt;&gt;</a></p>', crulelist[i].ChuxiaoTitle + restrict, crulelist[i].ChuxiaoInfo.ActivityLink, crulelist[i].ChuxiaoInfo.LinkDesn);
                            } else {
                                s += String.format('<p>{0}</p>', crulelist[i].ChuxiaoTitle + restrict);
                            }
                            s += '</div></div>';
                        }
                        if (crulelist.length > 3)
                            s += '</div><a href="javascript:;" ht="' + crulelist.length + '" class="pro_more more3"><i class="icon_more"></i><span>展开</span></a></li>';
                        else
                            s += '</div></li>';
                    }

                    pichtml += '</div><div class="ct" style="padding-top:10px;"><ul class="lst lst-dis" id="yzclist"></ul></div>';
                    $("#yhcx").addClass("m-choose m-choose-promotion").html(pichtml);
                    $("#yzclist").html(s);
                }
            }
        });
    }

    function initGexhTuijian() {
        if (projectInfo.OptimizationTicket == 1) { $("#hotProjects").remove(); return false; }
        $.get("/ajax/cainiXihuan.html", { type: 1, projectids: projectInfo.ProjectID, cityid: $("#cityId").val() }, function (data) {
            data = eval("(" + data + ")");
            if (data.Status == 200) {
                if (data.Data.length > 0) {
                    $("#hotProjects").addClass("m-sdbox2 m-hot").html('<div class="hd"><h2 class="tt">热门推荐</h2></div><div class="bd"><ul class="m-sdlst" id="gexhTuijian"></ul></div>');
                    var s = '';
                    for (var i = 0; i < data.Data.length; i++) {
                        if (i == 0)
                            s += '<li class="itm z-crt">';
                        else
                            s += '<li class="itm">';
                        var pinfo = data.Data[i];
                        if (pinfo.ProjectID > 0) {
                            var folder = parseInt(pinfo.ProjectID / 100);
                            s += String.format('<div class="hot"><a id="newitem_recom_{5}" href="//{0}/{1}.html" class="thumb" target="_blank" data-idx="{6}" data-projectId="{1}" title="{3}"><img  src="//pimg.dmcdn.cn/perform/project/{2}/{1}_n.jpg" alt="" /></a><h3 class="tt"><a id="newitem_recom_{5}" href="//{0}/{1}.html" target="_blank" data-idx="{6}" data-projectId="{1}" title="{3}">{3}</a></h3></div><div class="info"><div class="row"><a id="newitem_recom_{5}" href="//{0}/{1}.html" target="_blank" title="{3}" data-idx="{6}" data-projectId="{1}">{3}</a></div><div class="row"><span class="datetime">{4}</span></div></div></li>',
                                itemDomain, pinfo.ProjectID, folder, pinfo.Title, pinfo.ShowTime, pinfo.Tag, i + 1);
                        }
                    }
                    $("#gexhTuijian").html(s);
                }
            }
        });
    }


    function initLishi() {
        function parse(str) {
            try {
                var t = decodeURIComponent(str).split('=')[1].split('|'), l = [];
                for (var i in t) {
                    var $i = t[i].split('@'), id = $i[0] - 0;
                    if ($i.length != 3 || id == projectInfo.ProjectID) { continue; }
                    l.push({
                        i: id,
                        n: $i[1],
                        h: $i[2]
                    });
                }
                return l;
            } catch (e) { }
            return [];
        }
        function render(list) {
            if (list && list.length > 0) {
                var htmls = [];
                for (var i in list) {
                    var itm = list[i];
                    htmls.push(String.format("<li class='itm'><a href=\"//{3}/{0}.html\" target=\"_blank\" title=\"{1}\">{2}</a></li>", itm.i, itm.n, itm.n, itemDomain));
                }
                var $c = $("#lishiurl");
                $c.find("ul.m-sdlst").html(htmls.join(""));
                $c.show();
            }
        }
        function write(list) {
            var v = [];
            for (var i in list) {
                if (i >= 10) { break; }
                var itm = list[i];
                v.push(itm.i + '@' + itm.n + '@' + itm.h);
            }
            var _date = new Date();
            _date.setDate(_date.getDate() + 30);
            document.cookie = String.format("DaMaiTicketHistory=ProList={0};path=/;expires={1}", encodeURIComponent(v.join("|")), _date.toGMTString());
        }

        var list = [{ i: projectInfo.ProjectID, n: projectInfo.Name, h: hostName }];
        var ll = /DaMaiTicketHistory=([^;]*)/gi.exec(document.cookie);
        if (ll && ll.length == 2) {
            var projects = parse(ll[1]);
            render(projects);
            list = list.concat(projects);
        }
        write(list);
    }
    //增加速度排行榜design by:zhengchenglong update:2014-07-11
    function initSpeedList() {
        if (ShowSpeedList > 0) {
            var count = 0, money = 0;
            count = getHash("speedcount");
            money = getHash("speedmoney");
            $.get("/ajax/getSpeedList.html", { pId: projectInfo.ProjectID, showSpeedList: ShowSpeedList, showTotalMoney: ShowTotalMoney, money: money || "0", count: count || "0", t: Math.random() }, function (data) {
                data = eval('(' + data + ')');
                if (data.Status == 200 && data.Data != "") {
                    if (data.Data.ParterCount > 0) {
                        $("#right_ticket").html(createAlbum(data.Data));
                    } else {
                        $("#right_ticket").hide();
                    }
                }
            });
        }
    }

    //读取cookies
    function getCookieValue(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return decodeURI(arr[2]);
        else
            return null;
    }

    function showQuehuodengji($perform, $price) {
        if (!checkLogin()) {
            $.damaiItem.showLogin(init);
            return false;
        }
        function init() {
            var $cc = $("#layerQuehuodengji");
            if ("true" != $cc.attr("data-takeAddr")) {
                $cc.attr("data-takeAddr", "true");
                $.getJSON("/ajax/getUserTakeAdress.html?_" + Math.random(), function (rsp) {
                    if (rsp.Status == 200 && rsp.Data != null) {
                        $cc.find("[name='mobilePhone']").val(rsp.Data.mobile).keypress(function (event) {
                            if (event.which == 13) {
                                event.preventDefault();
                                return false;
                            }
                            if (event.which == 8) {
                                $(this).val("");
                                event.preventDefault();
                            }
                            $(this).unbind("keypress");
                            $cc.find("[name='enStr']").val("");
                        });
                        $cc.find("[name='enStr']").val(rsp.Data.enStr);
                    }
                });
            }
            $cc.find("[name='performId']").val($perform.attr("data-performId"));
            $cc.find("[name='performName']").val($.trim($perform.html().replace(/<[^>]*>/gi, "")));
            $cc.find("[name='performTime']").val($perform.attr("data-performTime"));
            $cc.find("[name='priceId']").val($price.attr("data-priceId"));
            $cc.find("[name='price']").val($price.attr("data-price"));
            $cc.find("[name='pricename']").val($price.attr("data-pricename"));
            common.layer.show($cc);
        }
        init();
    }
    var showchange = window.showchange = function () {
        $("#phonechange").toggle();
        $("#mailchange").hide();
        if (isload == 0) {
            timestamp = new Date().getTime();
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
            isload = 1;
        }
    };
    var isload = 0;
    var apid = 0;
    var lock = -1;
    var myDate = new Date();
    var timestamp = 0;
    var showmailchange = window.showmailchange = function () {
        $("#mailchange").toggle();
        $("#phonechange").hide();
    };
    var issending = 0;
    var isright = 0;
    function changephonenum() {
        var phonenum = $("#changephonenum").val().trim();
        var isMobile = /^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
        if (isMobile.test(phonenum)) {
            isright = 1;
        } else {
            isright = 0;
        }
    }
    //确定绑定\更改邮箱
    var setmailChannel = window.setmailChannel = function () {
        var changemailnum = $("#changemailnum").val().trim();
        var mailverifyCode = $("#mailverifyCode").val().trim();
        if (changemailnum == "" || mailverifyCode == "") {
            alert("邮箱和验证码不能为空！");
            return false;
        }
        $.get("/ajax/setChanelIds.html", { account: changemailnum, VerifyCode: mailverifyCode, channelid: 4, t: Math.random() }, function (data) {
            data = eval('(' + data + ')');
            if (data.Status == 200) {
                alert("绑定邮箱成功！");
                var ts = changemailnum.split('@');
                if (ts[0].length > 5) {
                    ts[0] = ts[0].substr(0, 2) + "****" + ts[0].substr(ts[0].length - 3);
                } else if (ts[0].length > 5) {
                    ts[0] = ts[0].substr(0, 3) + "****";
                }
                changemailnum = ts[0] + "@" + ts[1];
                $("#dyMail").text(changemailnum);
                $("#mode_email").show().removeAttr("disabled").attr("checked", "checked");
                //$("#dysbmit").removeClass("u-btn-dis");
                $("#mailoperate").html('<a href="javascript:showmailchange();">更换</a>');
                showmailchange();
            } else if (data.Status == 500) {
                alert("绑定失败！");
            } else if (data.Status == 407) {
                alert("邮箱格式不对！");
            } else if (data.Status == 406) {
                alert("邮箱和验证码不能为空！");
            } else if (data.Status == 403) {
                $.damaiItem.showLogin();
            } else if (data.Status == 401) {
                alert("请输入正确的验证码！");
            }
            else {
                alert("绑定失败，错误代码：" + data.status);
            }
        });
    };
    //确定绑定\更改手机号
    var setphoneChannel = window.setphoneChannel = function () {
        var changephonenum = $("#changephonenum").val().trim();
        var verifyCode = $("#verifyCode").val().trim();
        if (changephonenum == "" || verifyCode == "") {
            alert("手机号和验证码不能为空！");
            return false;
        }
        $.get("/ajax/setChanelIds.html", { account: changephonenum, VerifyCode: verifyCode, channelid: 1, t: Math.random() }, function (data) {
            data = eval('(' + data + ')');
            if (data.Status == 200) {
                alert("绑定手机成功！");
                changephonenum = changephonenum.substr(0, 3) + "****" + changephonenum.substr(7);
                $("#dyphonenum").text(changephonenum);
                $("#mode_sms").show().removeAttr("disabled").attr("checked", "checked");
                //$("#dysbmit").removeClass("u-btn-dis");
                $("#phoneoperate").html('<a href="javascript:showchange();">更换</a>');
                showchange();

            } else if (data.Status == 500) {
                alert("绑定失败！");
            } else if (data.Status == 407) {
                alert("手机号码格式不对！");
            } else if (data.Status == 406) {
                alert("手机号和验证码不能为空！");
            } else if (data.Status == 403) {
                $.damaiItem.showLogin();
            } else if (data.Status == 401) {
                alert("请输入正确的验证码！");
            } else {
                alert("绑定失败，错误代码：" + data.status);
            }
        });
    };
    //提交订阅
    function sbmitDy() {
        var channelidstr = [];
        if ($("#mode_client").attr("checked")) {
            channelidstr.push("6:客户端");
        }
        if ($("#mode_sms").attr("checked")) {
            channelidstr.push("1:短信");
        }
        if ($("#mode_email").attr("checked")) {
            channelidstr.push("4:邮箱");
        }
        $.post("/ajax/subscribeSingle.html",
            {
                pId: projectInfo.ProjectID,
                cityId: $("#cityId").val(),
                cityName: $("#cityName").val(),
                channels: channelidstr.join("、"),
                t: Math.random()
            },
            function (data) {
                if (data.Status == 200) {
                    common.layer.hide("#dylayer");
                    alert("太棒了，订阅成功！\r\n接收客户端订阅信息请下载\"大麦网客户端\"");
                } else if (data.Status == 500) {
                    alert("订阅失败！");
                } else if (data.Status == 403) {
                    $.damaiItem.showLogin();
                } else {
                    alert("系统异常，请稍后再试！");
                }
            });
    }
    function dyBtnCountdown(btn) {
        var c = 3 * 60;
        btn.addClass("z-dis");
        var timer = setInterval(function () {
            btn.text("重新获取({0})".format(c));
            c -= 1;
            if (c < 0) {
                clearInterval(timer);
                btn.removeClass("z-dis").text("重新获取");
            }
        }, 1000);
    }

    //加载新浪微博模块
    function loadwidget() {
        var cityid = projectInfo.CityID;
        if (cityid != "" && cityid == "2279") {
            cityid = "2148";
        }
        var uid = getwidgetUID(cityid);
        if (location.protocol == "http:" && uid) {
            $("#weibo_con").html("<iframe width=\"100%\" height=\"550\" class=\"share_self\"  frameborder=\"0\" scrolling=\"no\" src=\"http://service.t.sina.com.cn/widget/WeiboShow.php?width=0&height=550&fansRow=2&ptype=1&speed=0&skin=5&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=" + uid + "\"></iframe>");
            $("div.m-weibo").show();
            var uuid = uid.split('&')[0];
            $("#wbFollowIframe").attr("src", "http://widget.weibo.com/relationship/followbutton.php?btn=light&style=2&uid={0}&width=136&height=24&language=zh_cn".format(uuid));
        } else if (location.protocol == "https:" && uid) {
            var uuid = uid.split('&')[0];
            $("#wbFollowIframe").attr("src", "//www.damai.cn/WeiboAgent.aspx?uid={0}".format(uuid));
            $("#weibo_con").parent().parent().remove();
        } else {
            $("#wbFollowIframe").remove();
            $("#weibo_con").parent().parent().remove();
        }
    }

    //绑定页面倒计时控件
    function initCountdown() {
        $(".m-countdown").each(function () {
            var $this = $(this);
            if ($(this).attr("data-init") == "false") return;
            plug.countdown({
                url: '/date.html',
                element: $this,
                endtime: $this.attr("data-endtime"),
                interval: 1000 * 60 * 2,
                format: $this.attr("data-format") || "ddhhmmss",
                title: $this.attr("data-title"),
                callback: function () { eval($this.attr("data-callback")) }
            }); //end
        });
    }

    function ProjectRegistration(type, data, callback, trigger) {
        data.type = type;
        $.post("/ajax/ProjectRegistration.html?type=" + type, data, function (ret) {
            if (trigger || false) {
                trigger.removeAttr("disabled");
            }
            ret = eval('(' + ret + ')');
            if (ret.Status == 404) {
                $.damaiItem.showLogin();
                callback(ret.Status, ret.Data);
                return;
            }
            if (ret.Status == 200) {
                callback(ret.Status, ret.Data);
                return;
            }
            if (ret.Status == 400) {
                alert("亲爱的客户,您的请求过于频繁,请稍后再试！");
                return;
            }
            if (ret.Status == 500) {
                alert("提交失败，刷新页面重试！");
                return;
            }

        });
    }

    //设置配送城市
    function setFreights(data) {
        if (data == null) {
            return false;
        }
        var freight = $("#freight");
        freight.find("div.hd span.txt").text(data.c.Name.replace(/市同城/, ""));
        freight.find("p.tips").text("同城" + (data.c.Condition || (data.c.Price + "元")) + "，发货后1-3天到达");
        var htm = "";
        for (var i in data.list) {
            var name = Array.join(data.list[i].l, "、");
            if (!name) name = "其它地区";
            var t = "1-3";
            if (name.indexOf("香港") >= 0 || name.indexOf("澳门") >= 0 || name.indexOf("台湾") >= 0) {
                t = "1-5";
            }
            htm += String.format('<li class="itm {2}">{0} {1}，发货后{3}天到达</li>', name, data.list[i].c || (data.list[i].p + "元"), i == 0 ? "first" : "", t);
        }
        if (htm.length > 0) {
            freight.find("ul.lst").html(htm);
        }
        else { freight.find("div.menu").remove(); }
    }

    //跳转购物页面
    function gotoShopping(type) {
        $("#warnXiangou").removeClass("z-show");
        type = type || 0;
        //====
        var cartList = $("#cartList .lst .itm");
        var totalcount = 0;
        var nums = "", prices = "";
        for (var i = 0; i < cartList.length; i++) {
            var $i = $(cartList[i]);
            var n = $i.find(".m-nums input.ipt-num").val();
            totalcount += (n - 0);
            nums += String.format(",{0}", n);
            prices += String.format(",{0}", $i.attr("data-priceId"));
        }
        var $perform = $("#performList .lst .itm.itm-sel");
        if ($perform.length == 0) { return false; }
        var buyCount = $perform.attr("data-buyCount") - 0;
        if (totalcount > buyCount) {
            $("#warnXiangou").addClass("z-show").find("span").html("购买数量超出限制.本项目非选座购买订单,每单限购{0}件.".format(buyCount));
            return true;
        }
        nums = nums.substr(1);
        prices = prices.substr(1);
        if (1 != type) { //立即购买
            if (prices.length == 0) { return false; }
            if (projectInfo.QuestionPass && projectInfo.TicketValidateType == 1) {
                var queryString = String.format("_action=Immediately&rtype=1&proId={0}&optype=1&companyId={1}&num={2}&n=0",
					prices, projectInfo.CityID, nums);
                location.href = "//www.damai.cn/" + projectInfo.htmlName + "?" + queryString;
            } else {
                var queryString = String.format("_action=Immediately&proId={0}&optype=1&companyId={1}&num={2}&n=0",
					prices, projectInfo.CityID, nums);
                location.href = "//www.damai.cn/GotoShopping.aspx?" + queryString;
            }
            return true;
        }
        var performId = $perform.attr('data-performId');
        //==选座购买
        if (projectInfo.QuestionPass && projectInfo.TicketValidateType == 1) {
            if (prices == "") {
                document.location = "//www.damai.cn/" + projectInfo.htmlName + "?rtype=2&companyId={0}&proId={1}&performID={2}&n=0".format(
						projectInfo.CityID
						, projectInfo.ProjectID
						, performId);
            }
            else {
                document.location = "//www.damai.cn/" + projectInfo.htmlName + "?rtype=3&companyId={0}&performID={1}&proId={2}&priceID={3}&istp=0&type=1&n=0".format(
						projectInfo.CityID
						, performId
						, projectInfo.ProjectID
						, prices);
            }
        }
        else {
            document.location = String.format("//www.damai.cn/GotoShopping.aspx?companyId={0}&performID={1}&proId={2}&priceID={3}&istp=0&type=1&n=0" //priceid: 1
					, projectInfo.CityID
					, performId
					, projectInfo.ProjectID
					, prices || "1");
        }
        return true;
    }

    function showChooseGoodsLayer() {
        var $layer = $("#chooseGoodsLayer");
        $layer.find(".m-choose-date ul.lst").html($("#performList ul.lst").html());
        $layer.find(".m-choose-price ul.lst").html($("#priceList ul.lst").html());
        common.layer.show("#chooseGoodsLayer");
        var aLi = $('.m-layer-choosegoods .m-choose-date .lst .itm');
        $('.m-layer-choosegoods').css({ position: 'fixed' });
    }

    function getCartItem(perform, price) {

    }

    var cartMoving = {}, cartPerformId = 0;
    function moveToCart(performId, priceId) {
        if (cartMoving["mv_{0}_{1}".format(performId, priceId)]) { return; }
        $(".j_goodsDetails").each(function () {
            var times = 500;
            var $ll = $(this),
				$perform = $ll.find("div.m-choose.m-choose-date ul.lst li.itm:not(.j_animate)[data-performId='{0}']".format(performId)),
				$item = $ll.find("div.m-choose.m-choose-price ul.lst li.itm:not(.j_animate)[data-priceId='{0}']".format(priceId)),
				$cc = $ll.find(".m-cart .ct");
            $item.addClass("itm-sel");
            if ($perform.length == 0) return;
            if ($item.length == 0) return;
            if (projectInfo.IsOnlyXuanZuo) {
                return;
            }
            $(".m-cart").find("h3.tt, div.ct").show();
            var targetleft = $cc.position().left, targettop = $cc.position().top;
            var $nPerform = $perform.clone();
            var $nItem = $item.clone();

            $nPerform.css({ 'position': 'absolute', 'left': $perform.position().left, 'top': $perform.position().top, 'z-index': 1 }).addClass("j_animate");
            $perform.parent().append($nPerform);
            $nItem.css({ 'position': 'absolute', 'left': $item.position().left, 'top': $item.position().top, 'z-index': 1 }).addClass("j_animate");
            $item.parent().append($nItem);
            cartMoving["mv_{0}_{1}".format(performId, priceId)] = { perform: $nPerform, price: $nItem };
            $nPerform.animate({
                'left': targetleft,
                'top': targettop,
                'opacity': 0
            }, times, function () { $(this).remove(); });
            $nItem.animate({
                'left': targetleft,
                'top': targettop,
                'opacity': 0
            }, times, function () {
                $(this).remove();
                var htm =
                    String.format('<li class="itm" style="display:none;" data-performId="{0}" data-priceId={1}>', performId, priceId) +
                        String.format('<span class="txt txt-datetime {1}">"{0}"</span>', $perform.find("a").text().trim(), categoryId == 8 ? "f-dn" : "") +
                        String.format('<span class="txt txt-price">"{0}"</span>', $item.text().trim()) +
                        '<span class="m-nums"><a class="btn btn-low" href="javascript:;">减</a><input class="ipt ipt-num" type="text" value="1" /><a class="btn btn-add" href="javascript:;">加</a></span>' +
						'<span class="tips tips-stock"><strong></strong></span>' +
                        '<a class="btn btn-del" href="javascript:;"><i></i>删除</a>' +
                    '</li>';
                var $i = $(htm);
                $cc.find("ul.lst").append($i);
                $i.slideDown();
                delete cartMoving["mv_{0}_{1}".format(performId, priceId)];
            });

        });
    }

    function showDyLayer(data) {
        if (!data) { return; }
        var $dysbmit = $("#dysbmit");
        //$dysbmit.addClass("u-btn-dis");
        var phone = data.phone;
        if (phone && phone.a && phone.a.length > 0) {
            $("#dyphonenum").text(phone.a);
            $("#phoneoperate").html('<a href="javascript:showchange();">更换</a>');
            $("#mode_sms").attr("checked", "checked").removeAttr("disabled");
            //$dysbmit.removeClass("u-btn-dis");
        } else {
            $("#dyphonenum").text('未绑定');
            $("#phoneoperate").html('<a href="javascript:showchange();">绑定</a>');
            $("#mode_sms").attr("disabled", "disabled").removeAttr("checked");
        }

        var email = data.email;
        if (email && email.a && email.a.length > 0) {
            $("#dyMail").text(email.a);
            $("#mailoperate").html('<a href="javascript:showmailchange();">更换</a>');
            $("#mode_email").attr("checked", "checked").removeAttr("disabled");
            //$dysbmit.removeClass("u-btn-dis");
        } else {
            $("#dyMail").text('未绑定');
            $("#mailoperate").html('<a href="javascript:showmailchange();">绑定</a>');
            $("#mode_email").attr("disabled", "disabled").removeAttr("checked");
        }
        //$("#starnameStr").html(data.StarNameStr);
        if (data.status) {
            $dysbmit.addClass("u-btn-dis").text("已订阅");
        }
        var layer = $("#dylayer");
        layer.find("div.new-mark, div.new-loading").fadeOut();
        common.layer.show("#dylayer");
    }

    var checkLogin = window["checkLogin"] = function () {
        var ret = /damai\.cn_user=[^;]*/gi.test(document.cookie);
        if (ret && (typeof userInfo == "undefined" || userInfo == null)) {
            getUserInfo();
        }
        return ret;
    };
    var getUserInfo = window["getUserInfo"] = function (callback) {
        var callbackProxy = function (u) { loadu(u); (callback || function (i) { })(u); };
        $.getJSON("/ajax/GetUserInfo.html", { projectId: projectInfo.ProjectID, t: Math.random() }, function (rsp) {
            callbackProxy(rsp.Data.userInfo)
        });
    };

    function loadu(u) {
        //加载用户登录信息
        var strHtml = "";
        if (u) {
            window["userInfo"] = u;
            var nickName = "";
            if (u.nickName.length > 6) {
                var c = 0;
                var r = new RegExp("[\\u4E00-\\u9FFF]");
                for (var i = 0; i < u.nickName.length; i++) {
                    c += 1;
                    var t = u.nickName.charAt(i);
                    nickName += t;
                    if (r.test(t)) {
                        c += 1;
                    }
                    if (c >= 12) {
                        break;
                    }
                }
                nickName += "...";
            } else {
                nickName = u.nickName;
            }
            var headUrl = "//perico.damai.cn/userheadphotos/276897/55379493_50_50.jpg"; //("//perico.damai.cn/userheadphotos/" + parseInt(u.code / 200) + "/" + u.code + "_50_50.jpg").toLowerCase();
            strHtml += '<a class="user" href="//my.damai.cn/" target="_blank"><img my="head" src="' + headUrl + '" onerror="this.src=\'//dui.dmcdn.cn/dm_2015/goods/images/user.png\';" /></a>';
            strHtml += '<a class="name j_userName" href="//my.damai.cn/" target="_blank"> ' + nickName + '</a>';
            strHtml += '<b></b>';

            $("div[my=menu]").removeAttr("style");
            $('#userLoginInfo').html(strHtml);
            $("img[my=head]").attr("src", headUrl);
            $("span[my=nickname]").text(nickName);

            (function () {
                if (u.phone.length == 0) { return; }
                var $ele = $("#kaishoutixingPhone");
                if ($ele.length == 0) { return; }
                if (($ele.val() || "").length != 0 && $ele.val() != $ele.attr("placeholder")) { return; }
                $ele.val(u.phone);
            })();
        } else if (false) {
            strHtml += '<span class="sign j_loginForm">';
            strHtml += '<a class="dm-login" title="登录" href="//www.damai.cn/redirect.aspx?type=login">登录</a> | ';
            strHtml += '<a class="dm-register" title="注册" href="//www.damai.cn/redirect.aspx?type=reg">注册</a>';
            strHtml += '</span>';
            $('#userLoginInfo').html(strHtml);
            $("div[my=menu]").hide();
            $("img[my=head]").attr("src", "//dui.dmcdn.cn/dm_2015/goods/images/user.png");
        }
    }

    //加载页面关键信息
    (function () {
        //下架、退票中、宣传、待定
        if (projectInfo.SiteStatus == 4 || projectInfo.SiteStatus == 11 || projectInfo.SiteStatus == 5) {
            return false;
        }
        if (projectInfo.SiteStatus == 2) {
            $.getJSON("/ajax/getUserTakeAdress.html?_" + Math.random(), function (rsp) {
                if (rsp.Status == 200 && rsp.Data != null) {
                    var yudingdengjiLayer = $("#yudingdengjiLayer");
                    var uname = yudingdengjiLayer.find(".j_userName").val(rsp.Data.name);
                    var uphone = yudingdengjiLayer.find(".j_phone").val(rsp.Data.mobile);
                    uname.keypress(keypress);
                    uphone.keypress(keypress);
                    function keypress(event) {
                        if (event.which == 13) {
                            event.preventDefault();
                            return false;
                        }
                        uname.unbind("keypress").val("");
                        uphone.unbind("keypress").val("");
                        yudingdengjiLayer.find("[name='enStr']").val("");
                    }
                    yudingdengjiLayer.find("[name='enStr']").val(rsp.Data.enStr);
                }
            });
            return false;
        }

        $.getJSON("/ajax/getInfo.html", { projectId: projectInfo.ProjectID }, function (json) {
            if (typeof json == "undefined" || json == null || json.Status != damai.status.ok || json.Data == null) {
                $("#getInfoFail").show();
                $("#performList, #priceList").remove();
                return;
            }
            render(json.Data);
        });

        function render(pro) {
            //performs
            (function () {
                var data = pro.performs;
                var performList = $("#performList");
                var htmls = [];
                if (data != null && data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        var p = data[i];
                        htmls.push(
                            '<li class="itm {3}" data-performId="{0}" data-performTime="{1}" data-buyCount="{2}">'.format(p.PerformID,
                                Date.parseJsonDate(p.StartTime).format("yyyy-MM-dd hh:mm:ss"),
                                p.MaxBuyCount,
                                p.Status == 0 ? "itm-oos" : "") +
                            '<a href="javascript:;" data-spm-click="gostr=/damai_pc.default.click;localid=item_' + i + ';dclicktitle=' + p.PerformName + '&ditem_id=' + projectInfo.ProjectID + '">' +
                            (p.PerformName ? p.PerformName : ('<span class="date">' + p.ShowDate + '</span><span class="week">' + p.ShowWeekday + '</span><span class="time">' + p.ShowTime + '</span>')) +
                            '</a></li>');
                    }
                } else {
                    htmls.push('<li style="line-height:36px;padding-left:10px"><span>待定</span></li>');
                }
                var l = $(htmls.join(""));
                l.first().attr("id", "firstperform");
                performList.find("ul.lst").html("");
                performList.find("ul.lst").append(l);
            })();
            //prices
            (function () {
                var data = pro.prices, priceList = $("#priceList");
                var htmls = [];
                if (data != null && data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        var p = data[i];
                        htmls.push(
                            '<li class="itm{0}{1}" data-priceId="{2}" data-pricename="{3}" data-price="{4}" data-taopiao="{5}" data-maxnum="20" data-status="{6}">'
                                .format(
                                    (p.IsAppPrice ? ' itm-mobile' : ''),
                                    (!p.IsAppPrice && (p.Status == 1 || pro.saleStatus == 0) ? ' itm-oos' : ''),
                                    p.PriceID,
                                    p.PriceName,
                                    p.SellPrice,
                                    p.IsTaoPiao,
                                    pro.saleStatus == 0 ? 10 : 1) +
                            '<a href="javascript:;" data-spm-click="gostr=/damai_pc.default.click;localid=item_' + i + ';dclicktitle=' + p.PriceName + '&ditem_id=' + projectInfo.ProjectID + '">' +
                            '<span class="price">{0}</span></a></li>'.format(p.PriceName));
                    }
                } else {
                    htmls.push('<li style="line-height:36px;padding-left:10px"><span>待定</span></li>');
                }
                //var l = $(htmls.join(""));
                priceList.find("ul.lst").html(htmls.join(""));
                //priceList.find("ul.lst").append(l);
                priceList.attr("data-performId", pro.performId);
            })();

            if (is_show_perform_calendar && is_show_perform_calendar == 1 && pro.performs.length > 12) {
                $(".m-choose-picker").attr("style", "display:block");
                initPerformCalendar();
            }
            if (pro.b3) {
                setTips3Dates(pro.ele);
            }
            setBtnXuanzuoStatus(pro.xz);
        }
    })();

    function initPage(project) {
        var performList = $("#performList"), priceList = $("#priceList"), cartList = $("#cartList"), buyButtonC = $("#buyButtonC");
        var projectStatusDescn = $("#projectStatusDescn"), projectAxis = $("#projectAxis");
        var loginUser = project.userInfo, saleStatus = project.saleStatus;
        var isComingSoon = false, isJinpai = false, jinpaiStatus = 0, isPrivilege = false, privilegeStatus = false, privilegeCountdownTime = 0;
        var difftime = 0;  //服务器与本地的时间
        var comingSoon = project.comingSoon;

        //特权
        (function () {
            var privileges = project.privileges;
            var privilegeAnchor = $("#privilegeAnchor"), errorMsg = $("#privilege_error");
            if (privileges == null) {
                privilegeAnchor.remove();
                privilegeStatus = true;
                return;
            }
            errorMsg.find(".j_btnOk").click(function () {
                common.layer.hide(errorMsg);
            });
            function showMsg(msg) {
                errorMsg.find("#privilegeErrorMsg").html(msg);
                common.layer.show(errorMsg);
            }

            damai.privilege = {
                types: { code: 1, sigleCode: 2, userCode: 3, realname: 4, memberGrade: 5, purchaseNum: 6 },
                strings: {

                },
                createFuns: {
                    //特权码
                    t1: function (isLogin, itm) {
                        var hs = [
                            '<div class="head j_code">',
                                '<div class="row"><input class="ipt" placeholder="输入特权码" type="text"></div>',
                                '<a class="u-btn j_verifyCode" href="javascript:;">提交验证</a>',
                            '</div>',
                            '<div class="bd">',
                                '<h2 class="tit j_tit"><i class="icon-code"></i>本项目需使用特权码进行购买，登录后输入特权码，码上享特权</h2>',
                                ('<div class="box j_conditions" style="display:none;">' + (isLogin ? this.createConditions(itm) : '') + '</div>'),
                                '<dl class="lst">',
                                '<dd class="text-1" style="height:auto;">{0}</dd>'.format(itm.Descn),
                                '</dl>',
                            '</div>'
                        ];
                        verifyCode = false;
                        return hs.join("");
                    },
                    //单一特权码
                    t2: function (isLogin, itm) {
                        return this.t1(isLogin, itm);
                    },
                    //用户code
                    t3: function (isLogin, itm) {
                        var hs = [
                           '<div class="bd">',
                               '<h2 class="tit j_tit"><i class="icon-card icon-card1"></i>{0}</h2>'.format('本项目仅支持部分特权用户购买，请参看下方特权说明'),
                               ('<div class="box j_conditions" style="display:none;">' + (isLogin ? this.createConditions(itm) : '') + '</div>'),
                               '<dl class="lst">',
                               '<dd class="text-1" style="height:auto;">{0}</dd>'.format(itm.Descn),
                               '</dl>',
                           '</div>'
                        ];
                        return hs.join("");
                    },
                    //实名
                    t4: function (isLogin, itm) {
                        var hs = [
                        '<div class="bd">',
                            '<h2 class="tit j_tit"><i class="icon-card icon-card1"></i>{0}</h2>'.format(isLogin && itm.Conditions[0].VerifyStatus == 200 ? "你已完成实名认证，符合购买条件" : "购买本项目需完成实名认证"),
                            ('<div class="box j_conditions" style="display:none;">' + (isLogin ? this.createConditions(itm) : '') + '</div>'),
                            '<dl class="lst">',
                            (isLogin && itm.Conditions[0].Status == 200 ? '' : '<dd class="text-1" style="height:auto;">为了公平的购票环境以及现场安全良好的公共秩序，本项目需实名认证用户才可购买，请至用户中心进行实名认证。 <a class="link" href="javascript:;">点击进入</a>认证页面。</dd>'),
                            '<dd class="text-1" style="height:auto;">',
                            itm.Descn,
                            '</dd></dl>',
                        '</div>'
                        ];
                        return hs.join("");
                    },
                    //用户等级
                    t5: function (isLogin, itm) {
                        var conditionStr = "";
                        for (var xxx = 0; xxx < itm.Conditions.length; xxx++) {
                            if (itm.Conditions[xxx].ConditionType == damai.privilege.types.memberGrade) {
                                conditionStr = itm.Conditions[xxx].Conditions;
                                break;
                            }
                        }
                        var hs = [
                            '<div class="bd">',
                                '<h2 class="tit j_tit"><i class="icon-vip icon-card1"></i>本项目由大麦{0}等级会员尊享购票特权</h2>'.format("M" + conditionStr.split(",").join("、M")),
                                ('<div class="box j_conditions" style="display:none;">' + (isLogin ? this.createConditions(itm) : '') + '</div>'),
                                '<dl class="lst">',
                                '<dd class="text-1" style="height:auto;">{0}</dd>'.format(itm.Descn),
                                '</dl>',
                            '</div>'
                        ];
                        return hs.join("");
                    },
                    createHtml: function (isLogin, itm) {
                        return this["t" + itm.PrivilegeType](isLogin, itm);
                    },
                    createConditions: function (itm) {
                        if (itm.Conditions.length <= 1) {
                            return "";
                        }
                        var conditions = [];
                        conditions.push('<ul class="itm">');
                        for (var i = 0; i < itm.Conditions.length; i++) {
                            if (damai.privilege.types.code == itm.Conditions[i].ConditionType || damai.privilege.types.sigleCode == itm.Conditions[i].ConditionType) {
                                continue;
                            }
                            var str = "";
                            if (itm.Conditions[i].ConditionType == damai.privilege.types.userCode) { //3
                                str = "获得本项目购买特权";
                            } else if (itm.Conditions[i].ConditionType == damai.privilege.types.memberGrade) { //5
                                str = "本项目由大麦{0}等级会员尊享购票特权".format("M" + itm.Conditions[i].Conditions.split(',').join("、M"));
                            } else if (itm.Conditions[i].ConditionType == damai.privilege.types.realname) { //4
                                str = "购买本项目需完成实名认证";
                            } else if (itm.Conditions[i].ConditionType == damai.privilege.types.purchaseNum) { //6
                                str = "您的特权总共可使用{0}次".format(itm.Conditions[i].Conditions);
                            }
                            conditions.push('<li class="ipt ipt2 j_conitm" data-status="{1}" data-msg="{2}" data-type="{3}" data-conditions="{4}"><i></i>{0}</li>'
                                .format(str, itm.Conditions[i].VerifyStatus, itm.Conditions[i].VerifyMsg, itm.Conditions[i].ConditionType, itm.Conditions[i].Conditions));
                        }
                        conditions.push('</ul>');
                        return conditions.join("");
                    }
                },
                loginCallback: "privilegeLoginCallback",
                errorMessages: {
                    "e303": "您输入的特权码无效，请重试",
                    "e307": "您的操作过于频繁，请稍后重试"
                }
            };
            var loginStr = '<div class="ft" id="privilegeLogin"><p class="tt">本演出项目暂只支持部分特权用户购买，请<a class="link" href="//www.damai.cn/redirect.aspx?type=login">登录</a>或<a class="link" href="//www.damai.cn/redirect.aspx?type=reg">注册</a>后进行验证。</p></div>';
            var currentPrivilege = null, verifyingUser = false, verifyUserStatus = false, verifyCodeStatus = false;
            var arrHtmls = [];
            for (var i = 0; i < privileges.length; i++) {
                var itm = privileges[i];
                //多个特权活动
                if (privileges.length > 1) {
                    var icon, descn;
                    if (itm.PrivilegeType != damai.privilege.types.code) {
                        icon = "icon2"
                    } else if (itm.PrivilegeType == damai.privilege.types.code) {
                        icon = "icon1";
                        //descn = "本项目需使用特权码进行购买，登录后输入特权码，码上享特权";
                    }
                    descn = itm.PrivilegeName;
                    arrHtmls.push('<div class="j_mcodes m-codes m-bt j_privilegeInfo" data-privilegeId="{0}">'.format(itm.PrivilegeId));
                    arrHtmls.push('<div class="hd1"><h2 class="tit"><i class="{0}"></i>{1}</h2><a class="link1" href="javascript:;"><span class="j_up m-up z-hide"><i></i></span><span class="j_off m-off z-hide"><i></i></span></a></div>' //<a class="link1" href="javascript:;"><span class="m-up z-hide"><i></i></span><span class="m-off z-show"><i></i></span></a>
                        .format(icon, descn));
                    arrHtmls.push('<div class="j_details rows z-hide">');
                    arrHtmls.push(damai.privilege.createFuns.createHtml(loginUser != null, itm));
                    arrHtmls.push('</div>');
                    arrHtmls.push('</div>');
                } else {
                    arrHtmls.push('<div class="m-code z-show j_privilegeInfo" data-privilegeId="{0}" id="privilegeList">'.format(itm.PrivilegeId));
                    arrHtmls.push(damai.privilege.createFuns.createHtml(loginUser != null, itm));
                    if (loginUser == null) {
                        arrHtmls.push(loginStr);
                    }
                    arrHtmls.push('</div>');
                }
            }
            if (privileges.length > 1) {
                privilegeAnchor.after('<div class="boxs z-show j_privilegeInfo" id="privilegeList">{1}{0}</div>'.format(arrHtmls.join(''), loginUser != null ? "" : loginStr));
                $(".j_privilegeInfo .j_mcodes .j_off").show();
                $(document).on("click", ".j_privilegeInfo .j_mcodes .j_off", function () {
                    if (verifyingUser) {
                        return false;
                    }
                    $(this).hide().siblings(".j_up").show();
                    var thisPrivilege = $(this).closest(".j_mcodes");
                    thisPrivilege.find(".j_details").show();
                    thisPrivilege.siblings(".j_mcodes").find(".j_details").hide();
                    thisPrivilege.siblings(".j_mcodes").find(".j_off").show();
                    thisPrivilege.siblings(".j_mcodes").find(".j_up").hide();
                    currentPrivilege = thisPrivilege;
                    verifyUser();
                });
            } else {
                privilegeAnchor.after(arrHtmls.join(""));
                currentPrivilege = $(".j_privilegeInfo");
                updatePrivilegeStatus(loginUser != null, privileges[0]);
            }

            function verifyUser() {
                if (loginUser == null) { return; }
                verifyingUser = true;
                var cId = currentPrivilege.attr("data-privilegeId") - 0;
                for (var i = 0; i < privileges.length; i++) {
                    if (privileges[i].PrivilegeId == cId) {
                        var conditionHtml = damai.privilege.createFuns.createConditions(privileges[i]);
                        if (privileges[i].Conditions.length > 1) {
                            currentPrivilege.find(".j_conditions").show().html(conditionHtml);
                        } else {
                            currentPrivilege.find(".j_conditions").hide().html("");
                        }
                        break;
                    }
                }
                currentPrivilege.find(".j_verifyCode").removeClass("u-btn-code");
                privilegeStatus = verifyUserStatus = verifyCodeStatus = false;
                updateStatus();
                $.getJSON("/ajax/verifyPrivilegeUser.html", {
                    projectId: projectInfo.ProjectID,
                    privilegeId: currentPrivilege.attr('data-privilegeId'),
                    t: Math.random()
                }, function (data) {
                    verifyingUser = false;
                    if (data.Status == damai.status.ok) {
                        updatePrivilegeStatus(true, data.Data);
                    }
                });
            }

            function setPrivilegeStatus() {
                privilegeStatus = verifyUserStatus && verifyCodeStatus && loginUser != null;
                if (verifyUserStatus && loginUser != null) {
                    currentPrivilege.find(".j_verifyCode").addClass("u-btn-code");
                }
                if (privilegeStatus) { updateStatus(); }
            }

            function updatePrivilegeStatus(isLogin, itm) {
                if (!isLogin) {
                    verifyCodeStatus = verifyUserStatus = false;
                    updateStatus();
                    return;
                }

                if (itm.PrivilegeType == damai.privilege.types.code || itm.PrivilegeType == damai.privilege.types.sigleCode) {
                    verifyCodeStatus = false;
                } else {
                    verifyCodeStatus = true;
                }

                if (itm.PrivilegeType == damai.privilege.types.realname && itm.Conditions[0].VerifyStatus == 200) {
                    currentPrivilege.find(".auth .text-1").remove();
                    currentPrivilege.find(".j_tit").html('<i class="icon-card icon-card1"></i>你已完成实名认证，符合购买条件');
                }

                var conditionHtml = damai.privilege.createFuns.createConditions(itm);
                if (conditionHtml.length > 0) {
                    currentPrivilege.find(".j_conditions").show().html(conditionHtml);
                } else {
                    currentPrivilege.find(".j_conditions").hide().html("");
                }
                var conitms = currentPrivilege.find(".j_conditions .j_conitm");
                try {
                    var i = 0, timer;
                    timer = setInterval(function () {
                        if (i >= conitms.length) {
                            clearInterval(timer);
                            timer = null;
                            var xx = true;
                            for (var ci = 0; ci < itm.Conditions.length; ci++) {
                                if (itm.Conditions[ci].ConditionType == damai.privilege.types.userCode ||
                                    itm.Conditions[ci].ConditionType == damai.privilege.types.memberGrade ||
                                    itm.Conditions[ci].ConditionType == damai.privilege.types.purchaseNum ||
                                    itm.Conditions[ci].ConditionType == damai.privilege.types.realname) {
                                    xx = xx && (itm.Conditions[ci].VerifyStatus == damai.status.ok);
                                }
                            }
                            verifyUserStatus = xx;
                            setPrivilegeStatus();
                            return;
                        }

                        var conitm = $(conitms[i]);
                        var status = conitm.attr("data-status") - 0, type = conitm.attr("data-type") - 0, conditions = conitm.attr("data-conditions");
                        if (status == 200) {
                            //验证通过
                            conitm.removeClass("ipt2").addClass("ipt0");
                            if (type == damai.privilege.types.memberGrade) { //用户等级
                                conitm.html('<i />您已经是大麦网<strong class="grade">{0}</strong>等级会员'.format('M' + conitm.attr('data-msg')));
                            } else if (type == damai.privilege.types.realname) { //实名认证
                                conitm.html('<i />你已完成实名认证，符合购买条件');
                            } else if (type == damai.privilege.types.purchaseNum) { //次数限制

                            }
                        } else {
                            //验证不通过
                            conitm.removeClass("ipt2").addClass("ipt1");
                            if (status != 0) {
                                if (type == damai.privilege.types.memberGrade) { //用户等级
                                    conditions = conditions.split(',');
                                    var cz = true;
                                    if ((conitm.attr("data-msg") - 0) > (conditions[0] - 0)) {
                                        cz = false;
                                    }
                                    conitm.html('<i />您的会员等级为<strong class="grade">{0}</strong>，限制为{1}{2}'.format("M" + conitm.attr('data-msg'), 'M' + conditions.join('、M'),
                                        (cz ? '，快来查看如何快速<a class="link" href="//vip.damai.cn/chengzhang/" target="_blank">等级提升</a>吧！' : '')
                                        ));
                                } else if (type == damai.privilege.types.realname) { //实名认证
                                    conitm.html('<i />你尚未完成实名认证，无法购买本项目 <a class="link" href="javascript:;">去认证&gt;</a>');
                                } else if (type == damai.privilege.types.purchaseNum) { //次数限制

                                }
                            }
                        }
                        i++;
                    }, 500);
                } catch (e) { }
            }

            $(document).on("click", ".j_privilegeInfo .j_verifyCode.u-btn-code", function () {
                var btn = $(this);
                var code = $(this).prev().find("input").val();
                if (!code || code.length == 0) {
                    showMsg("请输入特权码");
                    return false;
                }
                if (/^(\s*)$/.test(code)) {
                    showMsg(damai.privilege.errorMessages.e303);
                    return false;
                }
                var id = $(this).closest(".j_privilegeInfo").attr("data-privilegeId");
                $.getJSON("/ajax/verifyPrivilege.html", {
                    projectId: projectInfo.ProjectID,
                    privilegeId: id,
                    privilegeCode: code,
                    t: Math.random()
                }, function (data) {
                    if (data.Status == damai.status.ok) {
                        var jCode = btn.closest(".j_code");
                        jCode.next().find(".j_tit").html('<i class="icon-code" />您已通过验证，即刻享受购买特权');
                        jCode.remove();
                        verifyCodeStatus = true;
                        setPrivilegeStatus();
                    } else {
                        common.layer.show("#privilege_error".format(data.Status));
                        if (damai.privilege.errorMessages["e" + data.Status]) {
                            showMsg(damai.privilege.errorMessages["e" + data.Status]);
                        } else {
                            showMsg(data.Message);
                        }
                    }
                });
                return false;
            });
            if (privileges.length == 1 && privileges[0].StopMilliseconds < project.sellendtime) {
                privilegeCountdownTime = privileges[0].StopMilliseconds;
            }

            if (loginUser == null) {
                $.damaiItem.loginCallbacks.privilegeCallback = function (uInfo) {
                    loginUser = uInfo;
                    $("#privilegeLogin").remove();
                    if (currentPrivilege != null) {
                        verifyUser();
                    }
                };
            }

            isPrivilege = true;
        })();

        //先付先抢
        (function () {
            var jinpai = project.jinpai;
            var jinpaiMark = $("#jinpaiMark"), jinpaiCounter = $("#jinpaiCounter"), jinpaiTabs = $("#jinpaiTabs"), jinpaiOrders = $("#jinpaiOrders"), jinpaiLives = $("#jinpaiLives"), jinpaiGroupList = $("#jinpaiGroupList");
            if (jinpai == null) {
                jinpaiMark.remove();
                jinpaiCounter.remove();
                jinpaiTabs.remove();
                return;
            }
            var changetime = jinpai.changetime, starttime = jinpai.starttime, endtime = jinpai.endtime, groups = jinpai.groups;
            if (starttime < changetime) {
                changetime = starttime; //
            }
            var liveTimer = null;
            function getLives() {
                if (jinpaiStatus < 2) {
                    return;
                }
                if (jinpaiStatus > 2) {
                    clearInterval(liveTimer);
                    liveTimer = null;
                    return;
                }
                //抢座阶段加载实况
                $.getJSON("/ajax/getJinpaiLiveList.html", {
                    projectId: projectInfo.ProjectID,
                    performId: jinpai.performId,
                    t: Math.random()
                }, function (ret) {
                    if (ret != null && ret.Data != null && ret.Data.length > 0) {
                        render(ret.Data);
                    }
                });

                function render(list) {
                    var $jinpaiLiveList = $("#jinpaiLiveList");
                    var liveHtm = "";
                    for (var i = 0; i < list.length; i++) {
                        liveHtm += String.format('<li class="itm {3}"><span>恭喜</span><a href="javascript:;">{0}</a><span>成功抢占{1}个座位</span><span>{2}</span></li>',
                            list[i].NickName, list[i].Number,
                            new Date(/\((\d+)\)/.exec(list[i].UpdateTime)[1] - 0).format("yyyy/MM/dd hh:mm"),
                            i == 0 ? "first" : "");
                    }
                    $jinpaiLiveList.html(liveHtm);
                }
            }

            function getOrders() {
                if (jinpaiStatus == 0 || loginUser == null) {
                    jinpaiTabs.find("li.j_tabOrders").addClass("f-dn");
                    jinpaiOrders.addClass("f-dn");
                    return;
                }
                //等待开始阶段、抢座阶段加载我的订单
                var myRanking = 0;
                $.getJSON("/ajax/GetJinpaiOrders.html", {
                    projectId: projectInfo.ProjectID,
                    performId: jinpai.performId,
                    t: Math.random()
                }, function (ret) {
                    var htmls = [];
                    if (ret != null && ret.Data != null && ret.Data.length > 0) {
                        for (var xxx = 0; xxx < ret.Data.length; xxx++) {
                            var oitm = ret.Data[xxx];
                            //<th class="cola">订单号</th>
                            //<th class="colb">票价（数量）</th>
                            //<th class="cola">排名</th>
                            //<th class="cola">分组</th>
                            //<th class="colc">进场时间</th>
                            //<th>操作</th>
                            var prices = [];
                            for (var px in oitm.prices) {
                                prices[px] = String.format("{0}*{1}", oitm.prices[px].price, oitm.prices[px].count);
                            }
                            htmls.push('<tr><td>{0}</td><td>{1}</td><td>{2}</td><td>{4}</td><td>{5}</td><td><a href="{6}" target="{7}">{3}</a>{8}</td></tr>'.format(
                                oitm.orderSn
								, prices.join("<br />")
								, oitm.ranking
								, oitm.status == 0 ? "选座成功" : (oitm.seatStatus > 0 ? "进场选座" : "等待进场")
                                , oitm.groupName
								, (new Date(oitm.startTime)).format('yyyy.MM.dd hh:mm')
								, oitm.status == 0 ? "//order.damai.cn/index.aspx" : (oitm.seatAddress || "javascript:;")
								, (oitm.status == 0 || oitm.seatStatus > 0) ? "_blank" : ''
								, oitm.status == 0 ? "<br /><a href='//order.damai.cn/index.aspx' target='_blank'>查看详情</a>" : ""));
                            if (myRanking == 0 && oitm.status == 1 && oitm.seatStatus > 0) {
                                myRanking = oitm.ranking;
                            }
                        }
                        if (myRanking == 0) {
                            myRanking = ret.Data[0].ranking;
                        }
                        $("#jinpaiMyRanking strong").html(myRanking);
                        //jinpaiOrders.removeClass("f-dn").addClass("z-show").siblings(".itm-tab").addClass("f-dn").removeClass("z-show");
                        //jinpaiTabs.find("li.j_tabOrders").addClass("z-crt").siblings(".itm-tab").removeClass("z-crt");
                    } else {
                        htmls.push('<tr><td colspan="6">未查到订单信息.</td></tr>');
                    }
                    jinpaiOrders.find("tbody").html(htmls.join(""));
                });

                jinpaiTabs.find("li.j_tabOrders").removeClass("f-dn");
                jinpaiOrders.removeClass("f-dn");
            }

            function setJinpaiStatus(now) {
                if (changetime > 0 || starttime > 0 || endtime > 0) {
                    if (changetime > now) {
                        jinpaiStatus = 0; //先付阶段
                    } else if (changetime <= now && now < starttime) {
                        jinpaiStatus = 1; //等待抢座
                    } else if (starttime <= now && now < endtime) {
                        jinpaiStatus = 2; //抢座阶段
                    } else if (endtime <= now) {
                        jinpaiStatus = 3; //抢座结束
                    }
                }

                if (jinpaiStatus > 0) {
                    jinpaiTabs.show();
                }

                if (jinpaiStatus == 3) {
                    isJinpai = false;
                    jinpaiMark.remove();
                    jinpaiCounter.remove();
                    jinpaiTabs.remove();
                }

                getOrders();

                updateStatus();
            }

            function getNext(now) {
                if (now > endtime) {
                    return null;
                }

                if (changetime > now) {
                    return { endtime: changetime, timespan: changetime - now };
                }

                if (groups != null) {
                    for (var g in groups) {
                        var gg = groups[g];
                        var et = gg.starttime;
                        if (now < et) {
                            return { endtime: et, title: "距{0}开始".format(gg.name), tipsTitle: gg.name + "开始时间" };
                        }
                    }
                }

                if (now < starttime)
                    return { endtime: starttime, title: "距抢座开始", tipsTitle: "抢座开始时间" };

                return { endtime: endtime, title: "距抢座结束", tipsTitle: "抢座结束时间" };
            }

            function countdown() {
                //改为异步加载
                var now = utlis.servertime().getTime(); //getServerTime();
                if (changetime == 0 && starttime == 0 && endtime == 0) {
                    setJinpaiStatus(now);
                    return;
                }
                var next = getNext(now);

                if (next == null) {
                    setJinpaiStatus(now);
                    return;
                }

                if (typeof next.timespan != "undefined") {
                    var threeMinutes = 5 * 60 * 1000;
                    var changeTimer = setTimeout(function () {
                        clearTimeout(changeTimer);
                        countdown();
                    }, next.timespan > threeMinutes ? threeMinutes : next.timespan);
                    return;
                }

                plug.countdown({
                    element: jinpaiCounter,
                    endtime: (new Date(next.endtime)).format("yyyy/MM/dd hh:mm:ss"),
                    format: "hhmmss",
                    title: next.title,
                    tipsTitle: next.tipsTitle,
                    callback: countdown
                });
                setJinpaiStatus(now);
                jinpaiCounter.show();
            }

            if (groups != null) {
                var groupHtms = [];
                for (var i = 0; i < groups.length; i += 2) {
                    groupHtms.push(String.format('<li class="itm {0}">', i == 0 ? "first" : ""));
                    for (var j = 0; j < 2 && (i + j) < groups.length; j++) {
                        groupHtms.push(String.format('<div class="group"><h4 class="stt">{0}</h4><p>进场时间：{3}进场</p><p>分组号码：{1}号-{2}号</p></div>'
                            , groups[i + j].name
							, groups[i + j].startnum
							, groups[i + j].endnum
							, new Date(groups[i + j].starttime).format("yyyy/MM/dd hh:mm")));
                    }
                    groupHtms.push("</li>");
                }
                jinpaiTabs.find("li.j_tabGroups").removeClass("f-dn");
                jinpaiGroupList.removeClass("f-dn").find("ul.lst").html(groupHtms.join(""));
            }

            countdown();

            liveTimer = setInterval(function () {
                getLives();
            }, 15 * 1000);
            getLives();

            if (loginUser == null) { //未登录
                $.damaiItem.loginCallbacks.jinpaiCallback = function (uInfo) { //注册登录回调事件
                    loginUser = uInfo;
                    //加载我的排名、订单列表
                    getOrders();
                };
            }

            jinpaiMark.show();
            isJinpai = true;
        })();

        //即将开始
        (function () {
            var kaishoutixingLayer = $("#kaishoutixingLayer");
            if (comingSoon == null) {
                kaishoutixingLayer.remove();
                return;
            }
            if (comingSoon.isPreregistration) {
                kaishoutixingLayer.show();
            }
            isComingSoon = true;
        })();

        //countdown
        (function () {
            var toBeAboutTo = $("#toBeAboutTo"), kaishoutixingLayer = $("#kaishoutixingLayer");
            function getNext(now) {
                if (isComingSoon && comingSoon != null) {
                    if (comingSoon.startTime > 0 && comingSoon.startTime <= now) {
                        isComingSoon = false;
                        comingSoon = null;
                        kaishoutixingLayer.remove();
                    }
                }
                if (privilegeCountdownTime > 0 && privilegeCountdownTime <= now) {
                    privilegeCountdownTime = 0;
                    isPrivilege = false;//特权结束
                    privilegeStatus = true;
                    $("#privilegeList").remove();
                }

                var strJinpai = "";
                if (isJinpai) { strJinpai = "先付"; }

                if (isComingSoon && comingSoon != null) {
                    if (comingSoon.startTime <= 0) { //不开倒计时
                        return {
                            endtime: 0
                        };
                    }

                    if (privilegeCountdownTime > 0) {
                        return {
                            endtime: comingSoon.startTime,
                            title: "距特权" + strJinpai + "开始",
                            tipsTitle: "特权" + strJinpai + "开始时间",
                            newline: true
                        };
                    }

                    return {
                        endtime: comingSoon.startTime,
                        title: "距开始",
                        tipsTitle: "开始时间",
                        newline: false
                    };
                } else if (privilegeCountdownTime > 0) {
                    var title, tipsTitle;
                    return {
                        endtime: privilegeCountdownTime,
                        title: "距特权" + strJinpai + "结束, 正式" + strJinpai + "开始",
                        tipsTitle: "特权" + strJinpai + "结束, 正式" + strJinpai + "开始时间",
                        newline: true
                    };
                }

                return null;
            }
            function countdown() {
                var now = utlis.servertime().getTime();
                var next = getNext(now);
                updateStatus();
                if (next == null) {
                    toBeAboutTo.remove();
                    return;
                }
                if (next.endtime > 0) {
                    plug.countdown({
                        url: '/date.html',
                        element: toBeAboutTo,
                        endtime: (new Date(next.endtime)).format("yyyy/MM/dd hh:mm:ss"),
                        interval: 1000 * 60 * 3,
                        format: "ddhhmmss",
                        title: next.title,
                        newline: next.newline,
                        callback: countdown
                    }); //end
                    toBeAboutTo.find(".j_endtime").html("{1}：{0}".format((new Date(next.endtime)).format("yyyy年MM月dd日 hh:mm:ss"), next.tipsTitle));
                    toBeAboutTo.show();
                }
            }

            countdown();
        })();

        function updateStatus() {
            var statusDesc = "";

            if (isPrivilege) {
                statusDesc = "特权购票";
            } else if (isComingSoon) {
                statusDesc = "即将开始";
            } else if (isJinpai) {
                statusDesc = "先付先抢";
            } else if (projectAxis.length == 0) {
                statusDesc = projectStatusDescn.find("span.txt-status").attr("data-status");
            } else {
                statusDesc = "";
            }

            if (statusDesc.length > 0) {
                projectStatusDescn.find("span.txt-status").html(statusDesc);
                projectStatusDescn.removeClass("m-goodstips-2");
            } else {
                projectStatusDescn.addClass("m-goodstips-2");
            }

            if (saleStatus == 0) {
                return;
            }

            if (!isJinpai && !isComingSoon && privilegeStatus) {
                performList.find("ul.lst").removeClass("lst-dis");
                priceList.find("ul.lst").removeClass("lst-dis");
                if (!(projectInfo.QuestionPass && projectInfo.TicketValidateType == 2)) {
                    cartList.show();
                }
                buyButtonC.show();
                //默认选中场次与票价
                (function () {
                    var perc = performList.find("ul.lst li.itm:not(.itm-mobile,.itm-oos)"), pric = priceList.find("ul.lst li.itm:not(.itm-mobile,.itm-oos)");  // itm-sel
                    if (perc.length == 1) {
                        perc.addClass("itm-sel");
                        if (pric.length == 1) {
                            pric.addClass("itm-sel");
                            moveToCart(perc.attr("data-performId"), pric.attr("data-priceId"));
                        }
                    }
                })();
            } else if (isJinpai && jinpaiStatus == 0 && !isComingSoon && privilegeStatus) {
                //先付先抢，先付阶段
                performList.find("ul.lst").removeClass("lst-dis");
                priceList.find("ul.lst").removeClass("lst-dis");
                $("#btnXuanzuo,#btnXuanzuo2,btnXuanzuo3").hide();
                cartList.show();
                buyButtonC.show();

            } else if (isJinpai && (jinpaiStatus == 1 || jinpaiStatus == 2) && !isComingSoon && privilegeStatus) {
                //先付先抢，等待开始、抢座
                performList.hide();
                priceList.hide();
                cartList.hide();
                buyButtonC.hide();
            } else {
                performList.find("ul.lst").addClass("lst-dis");
                priceList.find("ul.lst").addClass("lst-dis");
                cartList.hide();
                buyButtonC.hide();
            }
        }

        updateStatus();
    }

    $(document).ready(function () {
        $.getJSON("/ajax/initPage/" + projectInfo.ProjectID, { t: new Date().getTime() }, function (rsp) {
            initPage(rsp.Data);
            loadu(rsp.Data.userInfo);
            initFlower(rsp.Data.flowerInfo);
            //if (rsp.Data.isFavorite) {
            //	$("#projectInfo div.collect").addClass("collect-sel");
            //}
            setFreights(rsp.Data.freight);
            if (rsp.Data.LOLProjectId) {
                try {
                    var tt = rsp.Data.LOLProjectId.split(";");
                    var settings = {};
                    for (var t2 in tt) {
                        if (!tt) { continue; }
                        var t22 = tt[t2].split(":");
                        var t33 = t22[1].split(",");
                        for (var i in t33) {
                            settings["chk" + t33[i]] = t22[0];
                        }
                    }
                    window["LOLProjects"] = settings;
                } catch (e) { }
            }
        });



        //加载个性化推荐
        initGexhTuijian();
        //加载速度排行榜
        initSpeedList();
        //加载浏览历史
        initLishi();
        //加载微博
        loadwidget();
        //绑定页面倒计时控件
        initCountdown();
        //如果有定义PrivelegePId
        if (typeof (PrivelegePId) != "undefined" && projectInfo.ProjectID == PrivelegePId) {
            initYanzheng();//如果是指定项目弹窗验证项目,执行相关验证或弹窗。
        }

        //非待定、退票中和下架状态显示优惠政策
        if ((projectInfo.SiteStatus != 5) && (projectInfo.SiteStatus != 6) && (projectInfo.SiteStatus != 11) && (projectInfo.SiteStatus != 4)) {
            initYhcx();
        }
        //绑定搜索建议
        if (jQuery("#txtSearchText").HMActiveSearchText) {
            jQuery("#txtSearchText").HMActiveSearchText({
                id: 'txtSearchText',
                ajaxtype: 'get',
                url: search_suggest_url + '?',
                para: 'isassociate=1&',
                allpara: ''

            });
        }
        jQuery("#txtSearchText").keypress(function (event) {
            if (event.which == 13) {
                var txt = $(this).val();
                location.href = search_url + "?keyword=" + encodeURIComponent(txt);
                return false;
            }
        });

        var itm_height = $('.m-goodstips .itm').height();
        if (itm_height > 56) {
            $('.m-goodstips .tips-multi .btnsel').show();
        }
        else {
            $('.m-goodstips .tips-multi .btnsel').hide();
        }

        if (projectInfo.SiteStatus == 4) {
            (function mtab() {
                mbtn = $("#m-button input"), mul = $("#m-botton-box ul");
                $(mbtn[0]).attr("class", "m-proslide-active");//这个保留
                $(mul[0]).attr("style", "display:block");//这个保留
                mbtn.click(function () {
                    mbtn.filter(".m-proslide-active").attr("class", "m-proslide-btn");
                    $(this).attr("class", "m-proslide-active");
                    mul.attr("style", "").filter("[data-tab='" + $(this).attr("data-tab") + "']").attr("style", "display:block;");
                });
            })();
        }
    })
	.on("click", ".m-goodstips .btnsel", function () {

	    if ($('.m-goodstips .bd').hasClass("on")) {
	        $('.m-goodstips .bd').removeClass("on");
	        $('.m-goodstips .tips-multi').removeClass("z-show");
	    }
	    else {
	        var itm_height = $('.m-goodstips .itm').height();
	        $('.m-goodstips .bd').addClass("on");
	        $('.m-goodstips .tips-multi').addClass("z-show");
	    }
	})
    .on("click", "#dysbmit:not(.u-btn-dis)", function () {
        sbmitDy();
    })
    .on("click", "#dycancel", function () {
        common.layer.hide("#dylayer");
    })
//    .on("click", "#mode_email", function () {
//    	if ($(this).attr("checked")) {
//    		$("#dysbmit").removeClass("u-btn-dis");
//    	} else if (!$("#mode_sms").attr("checked")) {
//    		$("#dysbmit").addClass("u-btn-dis");
//    	}
//    })
//    .on("click", "#mode_sms", function () {
//    	if ($(this).attr("checked")) {
//    		$("#dysbmit").removeClass("u-btn-dis");
//    	} else if (!$("#mode_email").attr("checked")) {
//    		$("#dysbmit").addClass("u-btn-dis");
//    	}
//    })
    .on("keyup", "#changephonenum:not(.z-dis)", function () {
        changephonenum();
    })
    .on("click", "#getmail_btn:not(.z-dis)", function () {
        var changemailnum = $("#changemailnum").val().trim();
        if (changemailnum == "") {
            alert("请输入您的邮箱地址！");
            return;
        }
        if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(changemailnum)) {
            alert("邮箱格式不正确！");
            return false;
        }
        var $btn = $(this);
        $btn.removeClass("z-show");
        $.get("/ajax/getmailcode.html", { email: changemailnum, t: Math.random() }, function (data) {
            data = eval('(' + data + ')');
            if (data.Status == 200) {
                $btn.addClass("z-show");
                dyBtnCountdown($btn);
                alert("发送成功！");
            } else {
                alert("发送失败，错误代码：" + data.Status);
            }
        });
    })
    .on("click", "#getcode_btnl:not(.z-dis)", function () {
        var getcode_btnl = $(this);
        if (issending == 1) { return false; }
        var changephonenum = $("#changephonenum").val();
        if (changephonenum == "") {
            alert("请输入您的手机号码！");
            return false;
        }
        var isMobile = /^1\d{10}$/;
        if (!isMobile.test(changephonenum)) {
            alert("请输入正确的手机号码！");
            return false;
        }
        getcode_btnl.next().removeClass("z-show");
        issending = 1;
        var tokenvalue = timestamp;
        $.get("/ajax/getcode.html", { phonenum: changephonenum, token: tokenvalue, t: Math.random() }, function (data) {
            data = eval('(' + data + ')');
            if (data.Status == 200) {
                alert("发送成功！");
                getcode_btnl.next().addClass("z-show");
                dyBtnCountdown(getcode_btnl);
            } else if (data.Status == 801) {
                alert("手机号码不能为空！");
            } else if (data.Status == 802) {
                alert("验证码发送间隔3分钟，请勿重复点击！");
            } else if (data.Status == 8008) {
                alert("你的帐号存在安全风险已被系统禁止操作，请联系客服或稍后再试！");
            } else {
                alert("发送失败，错误代码：" + data.Status);
            }
            issending = 0;
        });
    })
    .on("click", "#lijidy, #dy3", function () {
        if (!checkLogin()) {
            $.damaiItem.showLogin();
            return false;
        }
        var layer = $("#dylayer");
        layer.find("div.new-mark, div.new-loading").show();
        common.layer.show(layer);

        $.getJSON("/ajax/GetSubscribeChannels.html", { projectId: projectInfo.ProjectID, t: Math.random() }, function (data) {
            if (data.Status == 200) {
                if (data.Data != null) {
                    showDyLayer(data.Data);
                } else {
                    common.layer.hide(layer);
                }
            } else if (data.Status == 404) {
                common.layer.hide(layer);
                $.damaiItem.showLogin();
            } else {
                alert(data.Data);
                common.layer.hide(layer);
            }
        });
    })
	.on("click", "#dy2", function () {
	    //var $this = $(this),
	    //	artistId = $this.attr("data-artistId"),
	    //	artistName = $this.attr("data-artistName");
	    //$.getJSON("/ajax/SubscribeArtist.html", {
	    //	t:Math.random()
	    //	, cityId : projectInfo.CityID
	    //	, cityName : $("#cityName").val()
	    //	, artistId: artistId, artistName: artistName, projectId: projectInfo.ProjectID}, function(data) {
	    //	if(data.Status != 200) {
	    //		alert("订阅失败！");
	    //		return;
	    //	}
	    //	aaa(data.Data);
	    //});

	    !function () {
	        common.layer.hide("#layerRemind");
	        var layer = $("#dylayer");
	        layer.find("div.new-mark, div.new-loading").show();
	        $.getJSON("/ajax/GetSubscribeChannels.html", { projectId: projectInfo.ProjectID, t: Math.random() }, function (data) {
	            if (data.Status == 200) {
	                if (data.Data != null) {
	                    showDyLayer(data.Data);
	                } else {
	                    common.layer.hide(layer);
	                }
	            } else if (data.Status == 404) {
	                common.layer.hide(layer);
	                $.damaiItem.showLogin();
	            } else {
	                alert(data.Data);
	                common.layer.hide(layer);
	            }
	        });
	    }();
	})
    .on("click", "#projectInfo div.collect span.btn-normal span.txt", function () {
        $.get("/ajax/collect.html", { projectId: projectInfo.ProjectID, t: Math.random() }, function (rsp) {
            rsp = eval(String.format("({0})", rsp));
            if (rsp.Status == 404) {
                $.damaiItem.showLogin();
                return false;
            }
            if (rsp.Status == 200) {
                switch (rsp.Data) {
                    case 2:
                    case 1:
                        $("#projectInfo div.collect").addClass("collect-sel");
                        break;
                }
            }
        });
        return false;
    })
    .on("mouseenter", "#projectInfo .collect", function () {
        $(this).addClass('collect-hover');
    })
    .on("mouseleave", "#projectInfo .collect", function () {
        $(this).removeClass('collect-hover');
    })
    .on("click", "div.m-choose.m-choose-date ul.lst:not(.lst-dis) li.itm:not(.itm-more,.itm-oos)>a", function () {
        var $this = $(this).parent(), performId = $this.attr("data-performId"), performtime = new Date($this.attr("data-performTime").replace(/\-/g, '/')).getTime();
        var date3 = performtime - (new Date()).getTime();
        var isShowTips3Dates = false;
        if (date3 > 0 && (Math.floor(date3 / (24 * 3600 * 1000)) <= 3)) {
            isShowTips3Dates = true;
        }
        var cartList = $("#cartList .lst .itm");
        if (cartList.length > 0) {
            if (!confirm("是否要取消之前选择？")) {
                return false;
            }
            removeCartPrice(performId, 0);
        }
        $(".m-choose.m-choose-date .lst .itm[data-performId='{0}']".format(performId)).toggleClass("itm-sel")
		.siblings("li").removeClass("itm-sel");
        if ($("#priceList").attr("data-performId") == performId) {
            $("#priceList .lst .itm").removeClass("itm-sel");
            return false;
        }
        $(".m_heighlight_tip").html("");
        getPriceList(performId, isShowTips3Dates, function (obj) {
            $this.attr("data-buyCount", obj.buyCount);
        });
    })
    .on("click", "div.m-choose.m-choose-date ul.lst.lst-dis li.itm:not(.itm-more,.itm-oos)>a", function () {
        if ($(this).parent().hasClass("itm-oos")) {
            return false;
        }
        var $this = $(this).parent(), performId = $this.attr("data-performId");
        var date3 = (new Date($this.attr("data-performTime").replace(/\-/g, '/')).getTime()) - (new Date()).getTime();
        var isShowTips3Dates = false;
        if (date3 > 0 && (Math.floor(date3 / (24 * 3600 * 1000)) <= 3)) {
            isShowTips3Dates = true;
        }
        if ($("#priceList").attr("data-performId") == performId) {
            $("#priceList .lst .itm").removeClass("itm-sel");
            return false;
        }
        $(".m_heighlight_tip").html("");
        getPriceList(performId, isShowTips3Dates, function (obj) {
            $this.attr("data-buyCount", obj.buyCount);
        });
    })
	.on("click", "#priceList .lst:not(.lst-dis) .itm.itm-oos:not(.itm-mobile) > a", function () {
	    var $this = $(this).parent();
	    if ($this.attr("data-status") == 10) {
	        return false;
	    }
	    var performId = $("#priceList").attr("data-performId");
	    var $perform = $("#performList .itm[data-performId='{0}']".format(performId));
	    showQuehuodengji($perform, $this);
	    return false;
	})
    .on("click", "div.m-choose.m-choose-price ul.lst:not(.lst-dis) li.itm:not(.itm-more,.itm-oos,.itm-mobile)>a", function () {
        var $this = $(this), $itm = $this.parent();
        var $perform = $("#performList .lst .itm.itm-sel"), performId = $perform.attr("data-performId");
        var priceId = $itm.attr("data-priceId");
        if ($itm.hasClass("itm-sel")) {
            removeCartPrice(performId, priceId);
            return false;
        }
        if ($perform.length == 0) {
            alert(categoryId == 6 ? "请先选择演出或赛事时间！" : "请先选择演出时间！");
            return false;
        }
        moveToCart(performId, priceId);
        return false;
    })
	.on("click", ".m-choose.m-choose-price .lst .itm.itm-mobile>a", function () {
	    common.layer.show("#appDownLayer");
	    return false;
	})
	.on("mouseenter", "#priceList .lst:not(.lst-dis) .itm-oos", function () {
	    var $this = $(this);
	    if ($this.attr("data-status") == 10) {
	        return false;
	    }
	    var $mpricetips = $("#priceList .tips");
	    $mpricetips.css({
	        'left': $(this).position().left + 30,
	        'top': $(this).position().top + 34
	    });
	    $mpricetips.addClass('z-show');
	})
	.on("mouseleave", "#priceList .lst:not(.lst-dis) .itm-oos", function () {
	    $("#priceList .tips").removeClass('z-show');
	})
    .on("click", ".m-cart .lst .itm>a.btn-del", function () {
        var $itm = $(this).parent();
        removeCartPrice($itm.attr("data-performId"), $itm.attr("data-priceId"));
        return false;
    })
    .on("keypress", "div.m-cart ul.lst li.itm span.m-nums .ipt-num", function (e) {
        var which = e.which; //48-57
        if ((which < 48 || which > 57) && (which != 8 && which != 0))
            return false;
        if ($(this).val().trim().length == 0 && which == 48)
            return false;
    })
    .on("click", "div.m-cart ul.lst li.itm span.m-nums a.btn-low", function () {
        var $i = $(this).closest("li.itm");
        var $item = $("div.m-cart ul.lst li.itm[data-priceId='{0}'][data-performId='{1}']".format($i.attr("data-priceId"), $i.attr("data-performId")));
        var $ipt = $item.find("input.ipt-num");
        var v = $ipt.val() - 0;
        if (v <= 1) return false;
        $ipt.val(v - 1);
    })
    .on("click", "div.m-cart ul.lst li.itm span.m-nums a.btn-add", function () {
        var $i = $(this).closest("li.itm");
        var $item = $("div.m-cart ul.lst li.itm[data-priceId='{0}'][data-performId='{1}']".format($i.attr("data-priceId"), $i.attr("data-performId")));
        var $ipt = $item.find("input.ipt-num");
        var v = $ipt.val() - 0;
        $ipt.val(v + 1);
    })
    .on("click", "#btnBuyTicketValidate", function () {
        var $v = $(this).prev(), v = $v.val().trim();
        var $c = $(this).closest(".m-problem");
        if (v.length == 0 || v == $v.attr("placeholder")) {
            $c.find(".tips").text("请输入您的答案~");
            return false;
        }
        $.get("/ajax/buyTicketValidate.html", { projectId: projectInfo.ProjectID, v: v, t: Math.random() }, function (rsp) {
            rsp = eval("(" + rsp + ")");
            if (rsp.Status == 200) {
                $c.remove();
                if (projectInfo.TicketValidateType == 2) {
                    projectInfo.QuestionPass = false;
                }
                $("#performList, #priceList, #cartList").show();
                $("#btnBuyNow2,#btnXuanzuo2").removeClass("u-btn-dis");
            } else if (rsp.Status == 404) {
                $.damaiItem.showLogin();
                return false;
            } else {
                $c.find(".tips").text(rsp.Data);
            }
        });
        return false;
    })
    .on("click", '.more1,.more2,.more3', function () {
        if ($(this).parent().find('.s_manjian').height() == 71) {
            $(this).parent().find('.s_manjian').animate({ height: $(this).attr("ht") * 26 - 7 }); //根据内容多少来调整高度
            $(this).find('i').addClass('icon_less');
            $(this).find('span').html('收起');
        } else {
            $(this).parent().find('.s_manjian').animate({ height: 71 });	//初始高度
            $(this).find('i').removeClass('icon_less');
            $(this).find('span').html('展开');
        }
    })
    .on("click", "#btnKaishoutixing", function () {
        //即将开始项目预定
        var v = $(this).prev().val().trim();
        if (v == "") {
            alert("请输入手机号！");
            return false;
        }
        if ((!/^1\d{10}$/.test(v) && !/^1\d{2}\*{4}\d{4}$/.test(v))) {
            alert("请输入正确的手机号！");
            return false;
        }
        var data = {
            projectId: projectInfo.ProjectID,
            mobilePhone: v
        };
        function callback(status, rsp) {
            if (200 == status) {
                common.layer.show("#layerRemind");
                $("#layerRemind img").each(function () {
                    var $this = $(this);
                    if (!$this.attr("src") && $this.attr("original")) {
                        $this.attr("src", $this.attr("original"));
                    }
                });
            }
        }
        ProjectRegistration(3, data, callback);
        return false;
    })
	.on("click", "#btnYuyuedengji, #btnYuyuedengji2", function () {
	    //待定项目预约登记
	    var $cc = $("#yudingdengjiLayer");
	    var
			userName = $cc.find("input.j_userName").val(),
			phone = $cc.find("input.j_phone").val(),
			count = $cc.find("input.j_count").val(),
            enStr = $cc.find("input[name='enStr']").val(),
			notes = $cc.find("textarea.j_notes").val();

	    var data = {
	        projectId: projectInfo.ProjectID,
	        userName: userName,
	        mobilePhone: phone,
	        count: count,
	        enStr: enStr,
	        notes: notes
	    };
	    if (userName.length == 0) {
	        alert("请输入联系人姓名！");
	        return false;
	    }
	    if (phone.length == 0) {
	        alert("请输入联系人手机号！");
	        return false;
	    }
	    if (!/^1\d{10}$/.test(phone) && !/^1\d{2}\*{4}\d{4}$/.test(phone)) {
	        alert("手机号格式输入有误！");
	        return false;
	    }
	    var $this = $(this);
	    if ($this.data("registing") == "registing") {
	        return false;
	    }
	    $this.data("registing", "registing");
	    ProjectRegistration(2, data, function (status, ret) {
	        $this.data("registing", "");
	        if (200 == status) {
	            alert("预订成功");
	        }
	    });

	    return false;
	})
    .on("click", "#btnQuehuodengji", function () {
        var $this = $(this).attr("disabled", "disabled");
        var $form = $this.closest("form");
        $form.find("[name='count']").val($form.find(".j_count a.itm.z-crt").html());
        var data = {};
        $form.find("[name]").each(function () {
            var $$ = $(this);
            data[$$.attr("name")] = $$.val();
        });
        var mobilePhone = data.mobilePhone;
        if (!mobilePhone || !/^1\d{10}$/.test(mobilePhone)) {
            if (!(/^1\d{2}\*{4}\d{4}$/.test(mobilePhone) && data["enStr"])) {
                $form.find("[name='mobilePhone']").addClass("m_b_r");
                alert("请输入正确的手机号码！");
                return false;
            }
        }
        data["projectId"] = projectInfo.ProjectID;
        ProjectRegistration(1, data, callback, $this);
        function callback(status, rsp) {
            if (status == 200) {
                common.layer.hide("#layerQuehuodengji");
                alert("提交成功！");
            }
        }
    })
    .on("click", "div.m-choose ul.lst li.itm-more a", function () {
        var $i = $("div.m-choose ul.lst li.itm-more");
        if ($i.hasClass("itm-more-sel")) {
            $i.siblings("li.j_more:not(.itm-sel)").hide();
        } else {
            $i.siblings("li.j_more").show();
        }
        $i.toggleClass("itm-more-sel");
        $i.each(function () {
            var $t = $(this).find("span.txt"), t = $t.text();
            $t.text($t.attr("data-toggle-txt")).attr("data-toggle-txt", t);
        });
        return false;
    })
    .on("click", "#btnBuyNow, #btnBuyNow2", function () {
        $("#warnXiangou").removeClass("z-show");
        if ($(this).hasClass("u-btn-dis")) {
            return false;
        }
        if (!checkLogin()) {
            $.damaiItem.showLogin(chk);
            return false;
        }
        function chk() {
            if (isLOLProject()) {
                $.getJSON("/ajax/CheckLOLUser.html", {
                    projectId: projectInfo.ProjectID,
                    _: Math.random()
                }, function (data) {
                    if (data.Status != 200) {
                        alert(data.Message || "玩家已挤满，排队进入中ing. . .");
                        return false;
                    }
                    if (data.Data != "1") {
                        alert("抱歉，您尚未取得购票资格，请阅读项目介绍，取得购票资格后购买");
                        return false;
                    }
                    cb();
                });
                return false;
            }
            cb();
        }
        function cb(lazy) {
            if (lazy) {
                var t1 = setTimeout(function () {
                    clearTimeout(t1); t1 = null;
                    if (!gotoShopping(0)) {
                        showChooseGoodsLayer();
                    }
                }, 0);
            } else {
                if (!gotoShopping(0)) {
                    showChooseGoodsLayer();
                }
            }
        }
        chk();
        return false;
    })
	.on("click", "#btnBuyNow3", function () {
	    $("#warnXiangou").removeClass("z-show");
	    var l1 = $("#cartList .lst .itm"), l3 = $("#chooseGoodsLayer .m-cart .lst .itm");
	    for (var i = 0; i < l1.length ; i++) {
	        $(l1[i]).find(".ipt-num").val($(l3[i]).find(".ipt-num").val());
	    }
	    if (!gotoShopping(0)) {
	        alert("请先选择要购买的票价");
	    }
	    return false;
	})
    .on("focus", "#question", function () {
        if ($(this).val() == "请在此留下您的问题，最多只能输入100字") {
            $(this).val("");
        }
    })
    .on("blur", "#question", function () {
        if ($.trim($(this).val()) == "") {
            $(this).val("请在此留下您的问题，最多只能输入100字");
        }
    })
	.on("click", "#btnSearch", function () {
	    var $txt = $("#txtSearchText"), k = $txt.val().trim();
	    location.href = search_url + "?keyword=" + encodeURIComponent(k);
	})
	.on("click", "#btnSeatPic", function () {
	    var $showLayer = $("#layerSeatPic"), $img = $showLayer.find("div.seat img");
	    if ($img.attr("src")) {
	        common.layer.show($showLayer);
	        return false;
	    }
	    var style = { width: 600, height: 400 }, layerCss = common.layer.show($showLayer, style);
	    var img = new Image();
	    img.src = $(this).attr("href");
	    img.onload = function () {
	        var css = { width: img.width - 0, height: img.height - 0 };
	        var $win = $(window), $wh = $win.height(), $ww = $win.width();
	        if (css.height > $wh) {
	            var r = ($wh * 0.78) / css.height;
	            css.height = css.height * r;
	            css.width = css.width * r;
	        }
	        css["margin-left"] = (0 - css["width"]) / 2;
	        css["margin-top"] = (0 - (css["height"] + layerCss["hh"])) / 2;
	        $img.attr("src", this.src).show();
	        $showLayer.animate(css, 300);
	    };
	    return false;
	})
	.on("click", "#yudingdengjiLayer span.m-nums a", function () {
	    var $this = $(this), $ipt = $(this).siblings("input"), c = $ipt.val() - 0;
	    if (isNaN(c)) {
	        c = 1;
	    }
	    if ($this.hasClass("btn-low")) {
	        if (c > 1) { c -= 1; }
	    } else {
	        c += 1;
	    }
	    $ipt.val(c);
	    return false;
	})
	.on("click", "#mingxingtuanti a.u-btn-rss, #linkGotoAsk", function () {
	    if (!checkLogin()) {
	        $.damaiItem.showLogin();
	        return false;
	    }
	})
	.on("click", "input[name='receive_mode']", function () {

	})
	.on("click", "#tabProjectDescn", function () {
	    try { $.damaiItem.club.hideItems(); }
	    catch (exc) { }
	})
    .on("click", ".jiathis_style > a.jiathis_button_weixin", function () {
        var $this = $(this);
        jiathisFuns[$this.attr("class")]();
        return false;
    });
    var jiathisFuns = {
        "jiathis_button_tsina": function () {

        },
        "jiathis_button_weixin": function () {
            var layer = $("#layerWeiShare");
            common.layer.show(layer);
            var img = layer.find(".m-viewseat img");
            if (!img.attr("src")) {
                var tt = new Image();
                tt.onload = function () {
                    img.attr("src", img.attr("lazy-src")).show();
                };
                tt.src = img.attr("lazy-src");
            }
        },
        "jiathis_button_qzone": function () {

        }
    };

    function isLOLProject() {
        var chk = (typeof window["LOLProjects"] != "undefined") && (typeof window["LOLProjects"]["chk" + projectInfo.ProjectID] != "undefined");
        return chk;
    }
    $(function () {
        $("#btnXuanzuo, #btnXuanzuo2, #btnXuanzuo3").on("click", function () {
            $("#warnXiangou").removeClass("z-show");
            var $id = $(this).attr("id");
            if ($(this).hasClass("u-btn-dis")) {
                return false;
            }
            if (!checkLogin()) {
                $.damaiItem.showLogin(chk);
                return false;
            }

            function chk() {
                if (isLOLProject()) {
                    $.getJSON("/ajax/CheckLOLUser.html", {
                        projectId: projectInfo.ProjectID,
                        _: Math.random()
                    }, function (data) {
                        if (data.Status != 200) {
                            if (data.Message && data.Message.length) {
                                alert(data.Message);
                            } else {
                                alert("玩家已挤满，排队进入中ing. . .");
                            }
                            return false;
                        }
                        if (data.Data != "1") {
                            alert("抱歉，您尚未取得购票资格，请阅读项目介绍，取得购票资格后购买");
                            return false;
                        }
                        cb();
                    });
                    return false;
                }
                cb();
            }
            function cb() {
                if ($id == "btnXuanzuo3") {
                    var l1 = $("#cartList .lst .itm"), l3 = $("#chooseGoodsLayer .m-cart .lst .itm");
                    for (var i = 0; i < l1.length ; i++) {
                        $(l1[i]).find(".ipt-num").val($(l3[i]).find(".ipt-num").val());
                    }
                }

                if (!gotoShopping(1)) {
                    if ($id == "btnXuanzuo" || $id == "btnXuanzuo2") {
                        showChooseGoodsLayer();
                    }
                    else {
                        alert(categoryId == 6 ? "请先选择演出或赛事时间！" : "请先选择演出时间！");
                    }
                }
            }
            chk();
            return false;
        });
    });
    $(function () {
        var $modes = $("input[name='receive_mode']");
        var $btn = $("#dysbmit");
        $modes.on("click", function () {
            $btn.text("提交订阅");
            if ($modes.filter(":checked").length == 0) {
                $btn.addClass("u-btn-dis");
            } else {
                $btn.removeClass("u-btn-dis");
            }
        });
    });
    $(function () {
        $("#m-certification-a").hover(function () {
            $("#m-certification-b").css('display', 'block');
        }, function () {
            $("#m-certification-b").css('display', 'none');
        });
    });
})(jQuery);
function turnOnLayer(w, h, url, img) {
    var B = '<div id="J" class="adam-mask" style="background: #000000;position: fixed;top: 0;left: 0;z-index: 1000000001;filter: alpha(opacity = 80);opacity: 0.8;*position: absolute;*left: expression(eval(document.documentElement.scrollLeft));*top: expression(eval(document.documentElement.scrollTop));"></div>';
    var F = '<iframe src="' + url + '" height="' + h + '" width="' + w + '" scrolling="no" frameborder="0" allowTransparency="true"></iframe>';
    var hs = document.body.clientHeight;
    var ws = document.body.clientWidth;
    var L = '<div id="L" class="adam" style="position: absolute;background: url(' + img + ') no-repeat;top: 0;left: 0;z-index: 1000000002;"></div>',
                $W = $(window).width(),
                $windoH = $(window).height(),
                $T = 0,
                $L = 0;
    $("body").append($(L));
    $('#L').html(F);
    $("body").append($(B));
    $("#J").css({ "height": $windoH + "px", "width": $W + "px" });
    $("#L").css({ "left": ($W - w) / 2 + "px", "top": ($windoH - h) / 2 + "px" });

    $(window).scroll(function () {
        var $scrollH = $(document).scrollTop();
        $T = ($windoH - h) / 2 + $scrollH;
        $("#L").css({ "top": $T + "px" });
    });

    $(window).resize(function () {
        var $scrollH = $(document).scrollTop();
        $windoH = $(window).height();
        $T = ($windoH - h) / 2 + $scrollH;
        $L = ($(window).width() - w) / 2;
        $("#L").css({ "left": $L + "px", "top": $T + "px" });
        $("#J").css({ "height": $windoH + "px", "width": $(window).width() + "px" });
    });
}

//剧评
(function ($) {
    if (categoryId != 2 && categoryId != 3 && categoryId != 7) {
        return;
    }
    var $itms, pager;
    function setStars() {
        var $marking = $('#projectMarking');
        var $lst = $marking.find('.lst');
        var $score = $marking.find('.score');
        var itotal = Number($marking.data('total') || 10);  // 总分
        var inum = Number($marking.data('divide') || 10);  // 个数
        var iratio = itotal / inum;
        var iscore = Number($score.html());
        var istar = parseInt(iscore / iratio);
        var ihalf = Math.round(iscore / iratio - istar);
        var inull = inum - istar - ihalf;
        var html = '';
        var i = 0;

        for (; i < istar; i++) {
            html += '<li class="itm"></li>';
        }

        for (i = 0; i < ihalf; i++) {
            html += '<li class="itm half"></li>';
        }

        for (i = 0; i < inull; i++) {
            html += '<li class="itm null"></li>';
        }

        $lst.html(html);
    }
    function page(pagesize, pageidx, totalpage) {
        var htmls = [];
        if (pageidx == 1) {
            htmls.push('<li class="m-pagePrev gray" name="pageA">&lt;上一页</li>');
            htmls.push('<li class="m-page-act">1</li>');
        } else {
            htmls.push('<li class="m-pagePrev" name="pageA" data-idx="{0}">&lt;上一页</li>'.format(pageidx - 1));
            htmls.push('<li data-idx="1">1</li>');
        }
        if (pageidx >= 6) {
            htmls.push('<li class="m-page-more">...</li>');
        }
        for (var i = pageidx - 3; i <= pageidx + 3; i++) {
            if (i <= 1 || i >= totalpage) {
                continue;
            }
            if (i == pageidx) {
                htmls.push('<li class="m-page-act">{0}</li>'.format(i));
            } else {
                htmls.push('<li data-idx="{0}">{0}</li>'.format(i));
            }
        }
        if (pageidx <= (totalpage - 5)) {
            htmls.push('<li class="m-page-more">...</li>');
        }
        if (pageidx == totalpage) {
            htmls.push('<li class="m-page-act">{0}</li>'.format(totalpage));
            htmls.push('<li class="m-pageNext gray">下一页&gt;</li>');
        } else {
            htmls.push('<li data-idx="{0}">{0}</li>'.format(totalpage));
            htmls.push('<li class="m-pageNext" data-idx="{0}">下一页&gt;</li>'.format(pageidx - 0 + 1));
        }
        //'<li class="m-page-act" class="gray">2</li><li>3</li><li>4</li><li>5</li><li>6</li><li pagen="morePage" class="m-page-more">...</li> '
        pager.find(".m-page-list").html(htmls.join(""));
        return pager;
    }
    function getList(pageidx) {
        $.getJSON("/ajax/GetClubInfo.html", {
            projectId: projectInfo.ProjectID,
            pageIdx: pageidx,
            top: 25,
            t: Math.random()
        }, function (rsp) {
            if (rsp.Status == 200) {
                if (rsp.Data == null || !rsp.Data.FirstContent || rsp.Data.FirstContent.length == 0) {
                    $("#markingContent").parent().remove();
                    setStars();
                } else {
                    var a = 0;
                    $("#markingScore").html(parseFloat(rsp.Data.Score).toFixed(1));
                    $("#markingCount, #spanMarkingCount").html(rsp.Data.ReviewCount);
                    $("#markingContent").html(rsp.Data.FirstContent);
                    setStars();
                    aaa(rsp.Data.ReviewList);
                    if (rsp.Data.Count > 1) {
                        page(rsp.Data.Size, rsp.Data.Index, rsp.Data.Count).show();
                    }
                    $("#dramaticNum").html(rsp.Data.ReviewCount);
                }
            }
        });
    }
    function aaa(list) {
        var strHtml = "";
        for (var i = 0; i < list.length; i++) {
            var itm = list[i];
            strHtml += GetItemHtml(itm);
        }
        $itms = $(strHtml);
        if (projectInfo.Tabcontrol != 1) {
            $itms.filter(":gt(1)").hide();
        }
        $("#jupingList").html(strHtml);
        if ("true" == pager.attr("data-page")) {
            $('body, html').animate({ scrollTop: $('#jupingList').closest(".itm-tab").offset().top - $('#m-infonav .nav').height() }, 'slow');
        }
    }
    function GetItemHtml(itm) {
        if (categoryId == 7) { itm.id = 0; }
        return ['<li class="itm">',
				'<span class="avatar"><img alt="{2}" src="{1}" onerror="this.src=\'//dui.dmcdn.cn/dm_2015/goods/images/user.png\';"></span>',
				'<span class="user-name">{2}</span>',
				'<div class="bar">',
					'<i class="ico ico-arrow-left"></i>',
					'<h5 class="title"><{8} href="{0}" {7}>{3}</{8}></h5>',
					'<div class="info">',
						'<p class="score">',
							'{6}',
						'</p>',
						'<span class="datetime">{5}</span>',
					'</div>',
				'</div>',
				'<div class="detail">{4}</div>',
			'</li>'].join("")
			.format((itm.id == 0 ? "javascript:;" : "//club.damai.cn/review/" + projectInfo.ProjectID + ".html?reviewId=" + itm.Id + "")
				, ("//perico.damai.cn/UserHeadPhotos/" + parseInt(itm.UserId / 200) + "/" + itm.UserId + "_50_50.jpg").toLowerCase()
				, itm.NickName, itm.Title, itm.Content, Date.parseJsonDate(itm.PublishTime).format("yyyy/MM/dd hh:mm")
				, GetStarsHtml(itm.Mark), itm.id != 0 ? 'target="_blank"' : "", itm.id != 0 ? "a" : "span");

    }

    function GetStarsHtml(score) {
        var htm =
			['<span class=""></span>',
			'<span class="half"></span>',
			'<span class=""></span>',
			'<span class="half"></span>',
			'<span class=""></span>',
			'<span class="half"></span>',
			'<span class=""></span>',
			'<span class="half"></span>',
			'<span></span>',
			'<span class="half"></span>'].join("");
        var $htm = $(htm);
        $htm.filter(":lt(" + score + ")").addClass("on");
        var $p = $("<div />"); $p.append($htm);
        return $p.html();
    }
    $.damaiItem = $.damaiItem || {};
    $.damaiItem.club = $.damaiItem.club || {};
    $.damaiItem.club.hideItems = function () {
        if ($itms && $itms.length > 2) {
            $itms.filter(":gt(1)").hide();
        }
    };
    var msgs = {
        m502: "评论内容包含非法词语，请修改！",
        m501: "请输入正确的评论内容！",
        m503: "内容不得少于十个字！",
        m504: "内容过长，最好不得超过1万个字！",
        m500: "评论功能异常，请稍后再试或联系麦麦！",
        m201: "请勿重复评论！",
        m202: "您操作太频繁，请休息一会儿，30秒后再试！"
    };
    $(function () {
        pager = $("#dramaticPager");
        getList(1);
    });
    $(document)
	.on("click", "#tabJuping", function () {
	    if ($itms && $itms.length > 2) {
	        $itms.show();
	    }
	})
	.on("click", "#btnSubmitClub", function () {
	    if (!checkLogin()) {
	        $.damaiItem.showLogin();
	        return false;
	    }
	    var $txt = $("#txtJuping"), txt = $.trim($txt.val());
	    if (txt.replace(/\s*|<[^>]*>/gi, '').length == 0 || txt == $txt.attr("placeholder")) {
	        alert("请输入评论内容！");
	        return false;
	    }
	    var score = $('.m-grade').find('.star > span.on').length;
	    $.ajax({
	        url: "/ajax/PublishClubComment.html",
	        cache: false,
	        contentType: "application/x-www-form-urlencoded",
	        dataType: "json",
	        type: "POST",
	        data: {
	            projectId: projectInfo.ProjectID,
	            score: score,
	            text: encodeURIComponent(txt),
	            ptype: projectInfo.ProjectType,
	            projectName: projectInfo.Name,
	            cityId: projectInfo.CityID
	        },
	        success: function (data, s) {
	            if (data.Status == 404) {
	                $.damaiItem.showLogin();
	                return;
	            } else if (data.Status != 200) {
	                if (msgs["m" + data.Status]) {
	                    alert(msgs["m" + data.Status]);
	                } else {
	                    alert(msgs["m500"]);
	                }
	                return;
	            }
	            var itm = {
	                Id: data.Data.reviewId,
	                UserId: userInfo.code,
	                NickName: userInfo.nickName,
	                Title: '评"' + projectInfo.Name + '"',
	                Content: data.Data.txt,
	                PublishTime: new Date(),
	                Mark: score
	            };
	            aaa(itm);
	        },
	        complete: function (xhr, s) {
	            if ("success" != s) {
	                alert(msgs["m501"]);
	            }
	        }
	    });
	    function aaa(itm) {
	        $txt.val("");
	        var $itm = $(GetItemHtml(itm));
	        $itm.hide();
	        $("#jupingList").prepend($itm);
	        $itm.slideDown();
	        return;
	    }
	})
    .on("click", "#dramaticPager li", function () {
        pager.attr("data-page", "true");
        getList($(this).attr("data-idx") - 0);
    });

})(jQuery);
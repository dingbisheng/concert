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

$(document).ready(function () {
    if (/locationHash=[^;]*/g.test(document.cookie)) {
        var hash = /locationHash=([^;]*)/g.exec(document.cookie)[1].split('_');
        location.hash = "#" + hash[0];
        if (hash.length == 2 && hash[1] > 0) {
            var $ll = $("#" + hash[0]);
            $ll.siblings(".tab").find("a").removeClass("active").eq(hash[1]).addClass("active");
            $ll.siblings(".detail").find(".con").removeClass("on").eq(hash[1]).addClass("on");
        }
        document.cookie = "locationHash=;expires=" + new Date().toGMTString();
    }
    $('.canceldy').live("click", function () {
        //先前端判断是否登录
        if (nickName == null || nickName == "") {
            location.href = '//www.damai.cn/redirect.aspx?type=login';
            return false;
        }
        var subid = $(this).attr("dyid");
        $this = $(this);
        $.get("/ajax/CachelSubcribe.html", { subId: subid, "t": Math.random() }, function (data) {
            data = eval("(" + data + ")");
            if (data.Status == 200) {
                $this.removeClass("canceldy").addClass("dingyue").html("订阅");
                var $count = $this.siblings(".fl").find(".j_count");
                $count.html($count.html() - 1);
                $this.addClass("btn").removeClass("btn02");
                alert("取消订阅成功！");
            } else if (data.Status == 403) {
                location.href = '//www.damai.cn/redirect.aspx?type=login';
            } else {
                alert('取消订阅失败，请稍后再试或咨询大麦客服！');
                $this.attr("errorcode", data.Status);
            }
        });
    });
    $('.dingyue').live("click", function () {
        var atype = $(this).parent().parent().attr("itype");
        var tabIdx = 0;
        if (atype == "3") {
            tabIdx = 1;
        }
        //先前端判断是否登录
        if (nickName == null || nickName == "") {
            document.cookie = "locationHash=tuijianArtistVenue_" + tabIdx;
            location.href = '//www.damai.cn/redirect.aspx?type=login';
            return false;
        }
        var artistId = $(this).attr("aid");
        if (artistId != null && parseInt(artistId) > 0) {
            var aName = $(this).next().find("dt").html();
            $this = $(this);
            $.get("/ajax/SubscribeSingle.html", { cityId: indexcityId, aid: artistId, aName: aName, type: atype, "t": Math.random() }, function (data) {
                data = eval("(" + data + ")");
                if (data.Status == 200) {
                    $this.removeClass("dingyue").addClass("canceldy").html("取消");
                    $this.attr("dyid", data.Data);
                    var $count = $this.siblings(".fl").find(".j_count");
                    $count.html($count.html() - 0 + 1);
                    $this.addClass("btn02").removeClass("btn");
                    alert("订阅成功！");
                } else if (data.Status == 403) {
                    document.cookie = "locationHash=tuijianArtistVenue_" + tabIdx;
                    location.href = '//www.damai.cn/redirect.aspx?type=login';
                }
                else {
                    alert('订阅失败，请稍后再试或咨询大麦客服！');
                    $this.attr("errorcode", data.Status);
                }
            });
        } else {
            alert('该订阅对象数据加载错误！');
        }
    });

    (function () {
        $("div.index-top div.sort div.sort-list li a.lnk:lt(7)").mouseover(function () {
            if ($(this).data("loaded") == "loaded") {
                return;
            }
            var $this = $(this).data("loaded", "loaded");
            var catergory = $(this).attr('data-categoryId');
            $.getJSON("/ajax/cainiXihuan.html", { type: 3, projectids: "", cityid: defaultSite.id, category: catergory, num: 5, "t": Math.random() }, function (data) {
                if (data.Status == 200) {
                    if (data.Data.length > 0) {
                        $this.parent().find(".showlist").html(getCLikeList(data.Data));
                    }
                }
            });
        });

        function getCLikeList(json) {
            var s = '';

            for (var i = 0; i < json.length; i++) {
                var data = json[i];
                s = s + "<li class='img'><a id='city_recom2_" + data.tag + "' href='//piao.damai.cn/" + data.projectId + ".html' target='_blank' title='" + data.projectName + "' class='img'><img src='//pimg.dmcdn.cn/perform/project/" + parseInt(data.projectId / 100) + "/" + data.projectId + "_n.jpg' width='145' height='193'></a>";
                s = s + "<a id='city_recom2_" + data.tag + "' href='//piao.damai.cn/" + data.projectId + ".html' target='_blank' title='" + data.projectName + "' class='title'>" + data.projectName + "</a>";
                if (data.projectId != 0) {
                    s = s + "<span class='price'>票价：";
                    s = s + "<strong><i class='yen'>&yen;</i>" + data.price + "起</strong>";
                    s = s + "</span>";
                }

                s = s + "</li>";
            }
            return s;
        }
    })();
   
    var categorymap = window.categorymap = {};
    $('#categoryTitle li a').live("click", function () {
        $(this).addClass('active').parent().siblings("li").find('a').removeClass('active');
        var CategoryID = $(this).attr("CategoryID");
        var cityInfoCategoryID = $("#categorylist").attr("CategoryID");
        if (parseInt(CategoryID) != parseInt(cityInfoCategoryID)) {
            var catevalue = categorymap[CategoryID];
            if (catevalue != null) {
                bindProjectlist(catevalue, CategoryID); return false;
            }
        }
        return false;
    });
    initcityAdList();

    
    
    $('#changeartist').live("click", function () {
        var pageindex = parseInt($(this).attr("pageindex"));
        if (pageindex == parseInt($(this).attr("pagecount"))) {
            pageindex = 0;
        }
        var data = artistmap[pageindex];
        if (data == null) {
            return;
        }
        pageindex = pageindex + 1;
        $(this).attr("pageindex", pageindex);
        $("#artistlist").html(bindArtistList(data));
    });
    $('#changevenue').live("click", function () {
        var pageindex = parseInt($(this).attr("pageindex"));
        if (pageindex == parseInt($(this).attr("pagecount"))) {
            pageindex = 0;
        }
        var data = venuemap[pageindex];
        if (data == null) {
            return;
        }
        pageindex = pageindex + 1;
        $(this).attr("pageindex", pageindex);

       
        $("#veunelist").html(bindArtistList(data));
    });

    //interTimer = setInterval('setadHire()', 400);

    // 每日推荐 & 猜你喜欢
    var hotlikeBind = function () {
        var hotlike = $('.hotlike');

        hotlike.each(function (index, element) {
            var tabs = $(this).find('.tab .itm');
            var cons = $(this).find('.poster');

            tabs.each(function (index, element) {
                $(this).on('mouseenter', function () {
                    tabs.removeClass('z-sel');
                    $(this).addClass('z-sel');

                    cons.removeClass('z-act');
                    cons.eq(index).addClass('z-act');
                });
            });
        });
    };

    window.hotlikeBind = hotlikeBind;

    var hotlikeSwitch = function (index) {
        var hotlike = $('.hotlike');
        var tabs = hotlike.find('.tab .itm');
        var cons = hotlike.find('.poster');

        tabs.removeClass('z-sel').eq(index).addClass('z-sel');
        cons.removeClass('z-act').eq(index).addClass('z-act');
    };

    window.hotlikeSwitch = hotlikeSwitch;
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
    String.prototype.subString = function (length) {
        var l = 0;
        for (var i = 0; i < this.length; i++) {
            var tt = escape(this[i]);
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
        return this + "";
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
function servertime(url){
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
function setadHire(){
    var adhtml = $("#damai_clb_slot_iframe_20").contents().find("body").html();
    if (adhtml == null || adhtml == "") {
        if (closei > 3) {
            $('.top-ad').css('display', 'none');
            $('#popup-c-rt').css('top', '36px');
            clearInterval(interTimer); interTimer = null;
            return;
        } else
            closei++;
    } else {
        $('.top-ad-close').css('display', 'block');
        clearInterval(interTimer); interTimer = null;
        return;
    }
    if (closei > 3) {
        clearInterval(interTimer); interTimer = null;
    }
}

//推荐城市广告轮播图加载
function initcityAdList() {
    $("#topadtitle li.itm span.txt").each(function () {
        var $this = $(this), txt = $this.text();
        $this.text(txt.subString(22));
    });
    try {
        dm_slide.render();
        dm_slide.bind();
        dm_slide.auto();
    } catch (e) { }
}

function bindProjectlist(data, categoryId) {
    var maps = {
        t1: "ych",
        t2: "yyh",
        t3: "hjgj",
        t4: "wdbl",
        t5: "qyzt",
        t6: "tybs",
        t7: "djxx",
        t8: "mxzb",
        t100: "etqz"
    };
    var s = '';
    for (var i = 0; i < data.length; i++) {
        var datainfo = data[i];
        var price = "";
        var sn = "";
        if (datainfo.Price == 0) {
            price = "<strong>待定</strong>";
        } else {
            price = "<strong><i class=\"yen\">&yen;</i>" + datainfo.Price + "</strong>起";
        }
        if (datainfo.Name != "") {
            if (datainfo.Name.length > 20) {
                sn = datainfo.Name.substr(0, 18) + "...";
            } else {
                sn = datainfo.Name;
            }
        }
        var id = "home_{0}_{1}_{2}".format(city.host, maps["t" + categoryId] || "qita", i >= 9 ? ("0" + (i - 0 + 1)) : ("00" + (i - 0 + 1)));
        s = s + "<li>";
        s = s + "<a href=\"//piao.damai.cn/" + datainfo.ProjectID + ".html\" target=\"_blank\" title=\"" + datainfo.Name + "\" class=\"img\" id='" + id + "'><img src=\"//pimg.dmcdn.cn/perform/project/" + parseInt(datainfo.ProjectID / 100) + "/" + datainfo.ProjectID + "_n_171_214.jpg\"  width=\"145\" height=\"193\"></a>";
        s = s + "<p class=\"title\"><a href=\"//piao.damai.cn/" + datainfo.ProjectID + ".html\" target=\"_blank\" title=\"" + datainfo.Name + "\" id='" + id + "'>" + datainfo.Name + "</a></p>";
        s = s + "<p>票价："+price+"</p><div class=\"poster-single\"><p class=\"addr\">" + (datainfo.Venue || "待定") + "</p><p class=\"time\">" + (datainfo.ShowTime || "待定") + "</p></div>";
        s = s + "</li>";
    }
    if (data.length > 0) {
        $("#indexCity").show();
    }
    $("#categorylist").html(s);
    $("#categorylist").attr("CategoryID", data[0].CategoryID);
}
var defaultSite;
function getSiteCallback(site) {
    defaultSite = site;
    initSiteHot(site);
    loadlike(site);
}

var indexcityId = 852;
//城市热门词和场馆
function initSiteHot(site) {
    if(typeof pageId == "undefined" || pageId != 1) {
        return false;
    }
    $.get("/ajax/getSiteHot.html", { cityId: site.id, t: Math.random() }, function (data) {
        data = eval("(" + data + ")");
        if (data.Status == 200) {
            if (site != null) {
                //var siteinfo = window["siteInfo"] = data.Data.SiteInfo;
                indexcityId = parseInt(site.id);
                $('.insiteName').each(function (index, element) {
                    $(this).html(site.name);
                });
                $('#insitehref').attr('href', '/' + site.host + '/').show();
                $('#insiteName').html(String.format('<span>目前{0}共有休闲娱乐内容{2}个，进入</span><a href="/{1}/">{0}站>></a>', site.name, site.host, site.num));
            }
            var s = '';
            if (data.Data.HotTxt != null && data.Data.HotTxt.length>0) {
                for (var i = 0; i < data.Data.HotTxt.length; i++) {
                    var info = data.Data.HotTxt[i];
                    var num = (i - 0 + 1) + "";
                    s += String.format('<span><a href="{0}" id="home_{2}_reci_{3}" target="_blank" title="{1}">{1}</a></span>', info.LinkURL, info.Title, site.host, "000".substr(0, 3 - num.length) + num);
                };
                $('#sitehotTxt').html(s);
            }
            if (data.Data.HotVenue != null && data.Data.HotVenue.length>0) {
                s = '';
                for (var i = 0; i < data.Data.HotVenue.length; i++) {
                    var info = data.Data.HotVenue[i];
                    var num = (i - 0 + 1) + "";
                    s += String.format('<span><a href="{0}" id="home_{2}_venue_{3}" target="_blank" title="{1}">{1}</a></span>', info.LinkURL, info.VenueName, site.host, "000".substr(0, 3 - num.length) + num);
                };
                $('#sitehotVenue').html(s);
            }
            if (data.Data.CategoryList != null && data.Data.CategoryList.length > 0) {
                s = '';
                for (var i = 0; i < data.Data.CategoryList.length; i++) {
                    var info = data.Data.CategoryList[i];
                    categorymap[info.CategoryID] = info.Projects;
                    if (i == 0)
                        s += '<li><a class="active" ';
                    else
                        s += '<li><a ';
                    s += String.format('href="javascript:;" CategoryID="{0}">{1}<strong class="arrow"></strong></a>', info.CategoryID, info.CategoryName);

                    if ((i + 1) == data.Data.CategoryList.length)
                        s += '<span></span></li>';
                    else
                        s += '<span>|</span></li>';
                };
                $('#categoryTitle').html(s);
            }
            if (data.Data.CategoryList != null && data.Data.CategoryList.length > 0) {
                bindProjectlist(data.Data.CategoryList[0].Projects, data.Data.CategoryList[0].CategoryID);
            }
            if (data.Data.Artistlist1 != null && data.Data.Artistlist1.length > 0) {
                artistmap[0] = data.Data.Artistlist1;
                $("#artistlist").html(bindArtistList(data.Data.Artistlist1));
                $("#changeartist").attr("pagecount", "1");
            }

            if (data.Data.Artistlist2 != null && data.Data.Artistlist2.length > 0) {
                artistmap[1] = data.Data.Artistlist2;
                $("#changeartist").show();
                $("#changeartist").attr("pagecount", "2");
            }
            if (data.Data.Artistlist3 != null && data.Data.Artistlist3.length > 0) {
                artistmap[2] = data.Data.Artistlist3;
                $("#changeartist").attr("pagecount", "3");
            }
            if (data.Data.Artistlist4 != null && data.Data.Artistlist4.length > 0) {
                artistmap[3] = data.Data.Artistlist4;
                $("#changeartist").attr("pagecount", "4");
            }

            if (data.Data.VenueList1 != null && data.Data.VenueList1.length > 0) {
                venuemap[0] = data.Data.VenueList1;
                $("#veunelist").html(bindArtistList(data.Data.VenueList1));
                $("#changevenue").attr("pagecount", "1");
            }
            if (data.Data.VenueList2 != null && data.Data.VenueList2.length > 0) {
                venuemap[1] = data.Data.VenueList2;
                $("#changevenue").show();
                $("#changevenue").attr("pagecount", "2");
            }
            if (data.Data.VenueList3 != null && data.Data.VenueList3.length > 0) {
                venuemap[2] = data.Data.VenueList3;
                $("#changevenue").attr("pagecount", "3");
            }
            if (data.Data.VenueList4 != null && data.Data.VenueList4.length > 0) {
                venuemap[3] = data.Data.VenueList4;
                $("#changevenue").attr("pagecount", "4");
            }
        }
    });
}

function loadlike(site) {
    var btnChange = $("#btnLikePager"), tabCainilike = $("#tabCainilike"), list = $("#index_recom_a");
    var datas = [], pageDatas = [];

    $.getJSON("/ajax/cainiXihuan.html", { type: 1, cityId: site.id, num: 18, "t": Math.random() }, function (data) {
        if (data.Status == 200 && data.Data.length > 0) {
            datas = data.Data;
            init();
        }
    });

    function init() {
        var pages = Math.ceil(datas.length / 6);
        btnChange.data("pageIdx", 1).data("totalpages", pages).click(function () {
            var pageIdx = $(this).data("pageIdx") - 0 + 1;
            if (pageIdx > $(this).data("totalpages") - 0) {
                pageIdx = 1;
            }
            $(this).data("pageIdx", pageIdx);
            bindList(pageIdx);
        });
        bindList(1);

        $(document).on("mouseover", "div.hotlike div.tab a", function () {
            if ("tabCainilike" == $(this).attr("id")) {
                $("a.ri-change").show();
            } else {
                $("a.ri-change").hide();
            }
            return false;
        });
    }
    function bindList(pageIdx) {
        if (pageDatas.length < pageIdx - 0) {
            var htmls = [];
            var idx = (pageIdx - 1) * 6, maxIdx = idx + 6;
            for (; idx < datas.length && idx < maxIdx; idx++) {
                var ii = datas[idx];
                var s = '';
                s = s + "<li class='show-poster-1'><a id='home_recom_" + ii.tag + "' href='//piao.damai.cn/" + ii.projectId + ".html' target='_blank' title='" + ii.projectName + "' class='img'><img src='//pimg.dmcdn.cn/perform/project/" + parseInt(ii.projectId / 100) + "/" + ii.projectId + "_n.jpg' width='150' height='200'></a>";
                s = s + "<a id='home_recom_" + ii.tag + "' href='//piao.damai.cn/" + ii.projectId + ".html' target='_blank' title='" + ii.projectName + "' class='title'>" + ii.projectName + "</a>";
                if (ii.projectId != 0) {
                    s = s + "<span class='price'>票价：";
                    s = s + "<strong><i class='yen'>&yen;</i>" + ii.price + "</strong>起";
                    s = s + "</span>";
                }
                s = s + "</li>";
                htmls.push(s);
            }
            pageDatas.push(htmls.join(""));
        }
        list.html(pageDatas[pageIdx - 1]);
        tabCainilike.removeAttr("style").addClass("z-sel").siblings(".itm").removeClass("z-sel");
        list.removeAttr("style").addClass("z-act").siblings(".poster").removeClass("z-act");
        btnChange.show();
    }
}

function bindArtistList(json) {
    var s = '';
    for (var i = 0; i < json.length; i++) {
        var dycss = 'dingyue';
        var dybtn = "订阅", dybtncss = "btn";
        var info = json[i];
        if (info.dyid > 0) {
            dycss = "canceldy";
            dybtn = "取消";
            dybtncss = "btn02";
        }
        s = s + String.format('<li><a class="{8} {0}" aid="{1}" dyid="{6}" href="javascript:;">{2}</a><div class="fl"><span class="img"><img src="{3}" alt="" width="50" height="50" onerror="this.src=\'//www.damai.cn/images/boy.jpg\'"></span><dl class="txt"><dt title="{7}">{4}</dt><dd><span class="j_count">{5}</span>人订阅</dd></dl></div></li>',
            dycss, info.id, dybtn, info.picurl, info.name.subString(15), info.subcount, info.dyid, info.name, dybtncss);
    }
    return s;
}

var artistmap = {};
var venuemap = {};

dui.on(window, 'load', init, true);

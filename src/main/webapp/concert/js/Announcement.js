window.onload = function () {
    $(document).ready(function () {
        var cityID = $("#cityID").val();
        if (cityID == undefined || cityID == null) {
            cityID = $("#CityID").val();
        }
        $.getScript('//www.damai.cn/ajax.aspx?type=388&cityID=' + cityID + '&URL=' + document.URL, function () {
            if (AnnContent != null && AnnContent != undefined && AnnContent != "") {
                $("body:first").prepend("<style>.dm-top-tips{ background:#ffffe1; border-bottom:1px solid #ffa461; line-height:36px; padding:0 10px; color:#333; text-align:center;}</style><div class='dm-top-tips'>" + AnnContent + "</div>");
            }
        });
    });

    $(".xnchatService").click(function () {
        if ($ && (/^(http[s]?:)?\/\/www\.damai\.cn\/(index\.html)?(\?.*)?/.test(location.href) || /^(http[s]?:)?\/\/www\.damai\.cn\/[a-z]{1,10}\/(\?.*)?/.test(location.href))) { // 首页、分站
            var $this = $(this);
            if ($this.hasClass("sort-online-service") || $this.hasClass("itm")) {
                new AlimeService({
                    from: "damai_pc",
                    trigger: $this
                });
                return;
            }
        } 

        toAlime(this);
    });

};

function toAlime(trigger) {
    var page;
    if ($ && $(trigger).closest && $(trigger).closest(".dm-service").length > 0) {
        page = "header_service";
    } else {
        page = encodeURIComponent(location.href);
    }
    window.open("https://online.damai.cn/alime/toalime?from=damai_itemdetail&page=" + page);
}
var checkLoginb = window["checkLoginb"] = function () {
    //var ret = /damai.cn_user=[^;]*/gi.test(document.cookie);
    //if (ret) {
    //    xiaonengcallback();
    //} else {
    //    location.href = "//www.damai.cn/redirect.aspx?type=login";
    //}
};

var getUserInfob = window["getUserInfob"] = function (callback) {
    //$.ajax({
    //    url: "//piao.damai.cn/ajax/GetUserInfo.html",
    //    async: false,
    //    dataType: "jsonp",
    //    jsonp: "jsonCallback",
    //    success: function (ret) {
    //        if (ret.Status == 200 && ret.Data.userInfo) {
    //            //加载用户登录信息
    //            window["userInfo"] = ret.Data.userInfo;
    //            xiaonengcallback();
    //        }
    //    }
    //});
};
function xiaonengcallback() {
     //window.open("https://online.damai.cn/alime/toalime?from=damai_itemdetail&page=" + encodeURIComponent(location.href));
}

(function () {
    function AlimeService(config) {
        return AlimeService.prototype.init(config);
    }



    AlimeService.prototype.init = function (config) {
        if (typeof config == "undefined" || typeof config.from == "undefined" || !config.from || !config.trigger) {
            return;
        }
        this.config = config;
        this.config.get_token_uri = "https://online.damai.cn/alime/getDialogToken";
        this.config.login_uri = "//www.damai.cn/redirect.aspx?type=login";
        var thisObj = this;
        jQuery(this.config.trigger).click(function () {
            thisObj.show();
        });
    };

    AlimeService.prototype.alicareDialog = null;

    AlimeService.prototype.show = function () {
        var thisObj = this;
        function showInternal() {
            try {
                thisObj.alicareDialog.ui.emit('openDialog');
            } catch (e) { }
        }

        function initDialog(token, callback) {
            window.alicareDialogAsyncInit = function (AlicareDialog) {
                var alicareDialog = new AlicareDialog({
                    from: thisObj.config.from,
                    accessToken: token
                });

                alicareDialog.onRendered(function (ui) {
                    callback();
                });

                thisObj.alicareDialog = alicareDialog;
                window.alicareDialogAsyncInit = null;
                delete window.alicareDialogAsyncInit;
            }

            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("charset", "utf-8");
            script.setAttribute("src", "//g.alicdn.com/crm/alicare-dialog/0.0.4/include.js");
            jQuery("body").append(script);
        }

        if (thisObj.alicareDialog == null) {
            jQuery.ajax({
                url: thisObj.config.get_token_uri,
                dataType: "jsonp",
                jsonp: "jsonCallback",
                data: {
                    from: thisObj.config.from
                },
                success: function (json) {
                    if (json.code > 0) {
                        // 请先登录
                        location.href = thisObj.config.login_uri;
                        return;
                    }
                    initDialog(json.token, showInternal);
                }
            });

            return thisObj;
        }

        showInternal();

        return thisObj;
    };

    window.AlimeService = AlimeService;

})();
///<reference path="jquery-1.4.2-vsdoc.js" />
var frm = false;
window.document.domain = "damai.cn";
(function ($) {
    $.fn.jQueryDialog = function (options) {
        var defaults = {
            header: true,
            title: "纠错", //标题
            cssstr: "layer_w500", //层区分样式
            showMask: true, //是否显示遮罩层
            maskAlphaColor: '#000000', //遮罩透明色
            maskAlpha: "30", //遮罩透明度
            url: "", //是否外部框架
            ru: "", //内部框架
            img: false, //图片上传
            mh: 300,  //上传图片专用-高
            close: ''  // 关闭按钮
        };
        var o = jQuery.extend(defaults, options);
        var tou = o.url.slice(0, o.url.indexOf("&ru", 0));
        var jru = o.url.slice(o.url.indexOf("&ru", 0), o.url.length);

        if (location.protocol == "https:") {
            o.url = tou + "&protocol=2" + jru;
        }
        var w = $(document).width();
        var h = $(document).height();
        var maskStyle = "";
        if (o.showMask) maskStyle = "position:absolute;top:0;left:0;background:" + o.maskAlphaColor + ";filter:alpha(opacity=" + o.maskAlpha + ");-moz-opacity:" + o.maskAlpha / 100 + ";opacity:" + o.maskAlpha / 100 + "";
        else maskStyle = "position:absolute;top:0;left:0;";
        //增加一个可以遮罩select下拉框的iframe
        $("body").append("<iframe id=\"maskiframe\" style=\"position:absolute;top:0;left:0;width:" + (w - 4) + "px;height:" + h + "px;z-index:200001;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;\"></iframe>");
        //增加一个层
        frm = false;
        if (o.img) {
            if (o.ru != "")
                $("body").append("<div class=\"picture-layer pic-layer1\" id=\"player\"><div class=\"picture-title\"><span title=\"关闭\" class=\"close mt10 mr5\"></span><h2 class=\"pl10\">图片上传管理</h2></div><div id=\"play\"><div id=\"play\"><iframe name='layer' id='layer' src='" + o.ru + "' frameborder='0' scrolling='auto' width='100%' height='" + o.mh + "px'></iframe></div></div>");
            else
                $("body").append("<div class=\"picture-layer pic-layer1\" id=\"player\"><div class=\"picture-title\"><span title=\"关闭\" class=\"close mt10 mr5\"></span><h2 class=\"pl10\">图片上传管理</h2></div><div id=\"play\"><div style='text-align:center;'><img src='/images/Loading.gif' /></div></div></div>");
        } else {
            var html = '';

            if (!o.header) {
                if (o.url != '') {
                    html = '<div class="' + o.cssstr + '" id="player"><iframe name="layer" id="layer" src="' + o.url + '" frameborder="0" scrolling="' + o.scroll + '" width="' + o.width + '" height="' + o.height + '"></iframe></div>';
                    frm = true;
                } else if (o.ru != '') {
                    html = '<div class="' + o.cssstr + '" id="player"><iframe name="layer" id="layer" src="' + o.ru + '" frameborder="0" scrolling="' + o.scroll + '" width="' + o.width + '" height="' + o.height + '"></iframe></div>';
                    frm = true;
                } else {
                    html = '<div class="' + o.cssstr + '" id="player"><b class="La"></b><b class="Lb"></b><b class="Lc"></b><b class="Ld"></b><a href="javascript:;" title="关闭" class="close"></a><div class="inner"><h2 id="cupter">' + o.title + '</h2><div id="play"><div style="text-align:center;"><img src="/images/Loading.gif" /></div></div></div></div>"';
                }

                if (o.width) $(this).width(o.width);
                if (o.height) $(this).height(o.height);
            } else {
                if (o.url != '') {
                    html = ("<div class=\"layers " + o.cssstr + "\" id=\"player\"><b class=\"La\"></b><b class=\"Lb\"></b><b class=\"Lc\"></b><b class=\"Ld\"></b><a href=\"javascript:\" title=\"关闭\" class=\"close\"></a><div class=\"inner\"><h2 id=\"cupter\">" + o.title + "<span class=\"f12 c3 fnor\">中国票务在线用户可用已有账号登录</span></h2><div id=\"play\"><iframe name='layer' id='layer' src='" + o.url + "' frameborder='0' scrolling='" + (o.scroll || 'auto') + "' width='" + (o.width || '100%') + "' height='" + (o.height || '390px') + "'></iframe></div></div></div>"); 
                    frm = true;
                } else if (o.ru != '') {
                    html = ("<div class=\"layers " + o.cssstr + "\" id=\"player\"><b class=\"La\"></b><b class=\"Lb\"></b><b class=\"Lc\"></b><b class=\"Ld\"></b><a href=\"javascript:\" title=\"关闭\" class=\"close\"></a><div class=\"inner\"><h2 id=\"cupter\">" + o.title + "</h2><div id=\"play\"><iframe name='layer' id='layer' src='" + o.ru + "' frameborder='0' scrolling='" + (o.scroll || 'auto') + "' width='" + (o.width || '100%') + "' height='" + (o.height || '390px') + "'></iframe></div></div></div>"); 
                    frm = true;
                } else {
                    html = ("<div class=\"layers " + o.cssstr + "\" id=\"player\"><b class=\"La\"></b><b class=\"Lb\"></b><b class=\"Lc\"></b><b class=\"Ld\"></b><a href=\"javascript:\" title=\"关闭\" class=\"close\"></a><div class=\"inner\"><h2 id=\"cupter\">" + o.title + "</h2><div id=\"play\"><div style='text-align:center;'><img src='/images/Loading.gif' /></div></div></div></div>");
                }
            }

            $('body').append(html);

        }
        $("body").append("<div id=\"maskLevel\" style=\"" + maskStyle + ";z-index:200001;\"></div>");

        if (o.width) $('#player').width(o.width);
        if (o.height) $('#player').height(o.height);


        //判断浏览器版本
        if ($.browser.msie && $.browser.version < 7.0) {
            //遮罩下拉框
            $("#player").css({ "display": "block", "z-index": "200002" }).center({ position: "fixed" });
        }
        else
            $("#player").css({ "display": "block", "z-index": "200002" }).center({ position: "fixed", top: "10%" });
        //判断浏览器版本
        $("#maskLevel").css({ width: (w - 4), height: h, display: "block" });


        $('#layer').load(function () {
            var $self = $(window.frames['layer'].document);
            var $btn = $self.find('.layer_close');

            $btn.click(function () {
                $("#maskLevel,#player,#maskiframe").remove();
            });
        });

        $(".close").click(function () {
            $("#maskLevel,#player,#maskiframe").remove();
        });
    };
})(jQuery);

(function ($) { 
    $.fn.center = function (settings) { 
        var style = $.extend({ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            zIndex: 200002, 
            relative: true 
        }, settings || {}); 

        return this.each(function () { 
            var $this = $(this);

            if (style.top == '50%') style.marginTop = -$this.outerHeight() / 2; 
            if (style.left == '50%') style.marginLeft = -$this.outerWidth() / 2; 
            if (style.relative && !$this.parent().is('body') && $this.parent().css('position') == 'static') $this.parent().css('position', 'relative'); 
            
            delete style.relative; 
            
            if (style.position == 'fixed' && $.browser.version == '6.0') { 
                if (frm) style.marginTop = ($(window).scrollTop() - $this.outerHeight() / 2) - 80; 
                else style.marginTop = ($(window).scrollTop() - $this.outerHeight() / 2) - 280; 

                style.position = 'absolute'; 
                
                $(window).scroll(function () { 
                    $this.stop().animate({ 
                        marginTop: $(window).scrollTop() - $this.outerHeight() / 2 
                    }); 
                }); 
            } 

            $this.css(style); 
        }); 
    }; 
})(jQuery);
(function ($) {
    var $ul;
    var $menus, pager;
    var sourceTypes = [
        "大麦网",
        "大麦网",
		"大麦网移动端访问",
		"Android客户端",
		"iPhone客户端",
        "winPhone客户端"
    ];
    var
	htmTempa =
    '<div class="bar ask"><i class="ico ico-ask">Q</i>' +
    '<div class="user">{QUserName} 提问：</div>' +
    '<p class="txt">{Question}</p><div class="info"><span class="datetime">{QDate}</span>' +
	'<span class="from">来自<i class="ico {icoAndroid}"></i>{FromSource}</span></div></div>',

	htmlTempb = '<div class="reply clearfix"><i class="ico ico-arrow-up"></i><i class="ico ico-reply">A</i><p class="txt">{Answer}</p></div>';
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

    function getType(t) {
        if (sourceTypes[t])
            return sourceTypes[t] + "用户";
        return sourceTypes[0] + "用户";
    }
    function getQaListHtm(lst) {
        var htmls = [];
        for (var i in lst) {
            var itm = lst[i];
            var reg = /[-]/g;
            if (reg.test(itm.QUserName) && itm.QUserName.match(reg).length == 4)
                itm.QUserName = itm.QUserName.substr(0, 1) + "******" + itm.QUserName.substr(itm.QUserName.length - 2, 1);
            itm.Question = itm.Question.replace(/(android手机用户|iphone手机用户|M站用户)\:?/gi, "");
            itm.FromType = itm.FromType - 0;
            itm.FromSource = getType(itm.FromType);
            itm.QDate = Date.parseJsonDate(itm.QDate).format("yyyy/MM/dd hh:mm:ss");
            itm.HeadPic = ("//perico.damai.cn/UserHeadPhotos/" + parseInt(itm.MemberID / 200) + "/" + itm.MemberID + "_50_50.jpg").toLowerCase();
            itm.icoAndroid = (itm.FromType == 2 || itm.FromType == 3 || itm.FromType == 4 || itm.FromType == 5) ? "ico-android" : "";
            htmls.push('<li class="itm">');
            htmls.push(htmTempa.template(itm));
            if (itm.Answer) {
                var ctips = "演出";
                if (categoryId == 6) {
                    ctips = "赛事";
                }
                itm.Answer = (itm.Answer.indexOf("尊敬的客户您好") < 0 ? "尊敬的客户您好！" : "") + itm.Answer + '感谢您对大麦网的支持,<a style="color:red" target="_blank" href="//mobile.damai.cn">下载大麦客户端</a> 随时掌握' + ctips + '动态！';
                htmls.push(htmlTempb.template(itm));
            }
            htmls.push('</li>');
        }
        var t = htmls.join("");
        return t;
    }
    function insertHtm(html) {
        $ul.html(html);
    }
    function getQaList(idx) {
        $ul.html("<li class='itm'>加载中...</li>");
        pager.hide();
        $.getJSON("/ajax/GetQA.html?pid={0}&t={1}&pageidx={2}".format(projectInfo.ProjectID, Math.random(), (idx || 1)), function (obj) {
            if (obj && obj.Data) {
                $("#reviewNum").text(obj.DataCount);
                if (obj.DataCount > 0) {
                    $("#toclubqa").text("共有大麦答疑" + obj.DataCount + "个，>>点击此处查看全部留言<<");
                }
                insertHtm(getQaListHtm(obj.Data));
                if (obj.Count > 1) {
                    page(obj.Size, obj.Index, obj.Count).show().attr("data-type", "all");
                }
            }
            if ("true" == pager.attr("data-page")) {
                $('body, html').animate({ scrollTop: $('#QAList').closest(".itm-tab").offset().top - $('#m-infonav .nav').height() }, 'slow');
            }
        });
    }
    function getMyQaList(idx) {
        $ul.html("<li class='itm'>加载中...</li>");
        pager.hide();
        $.getJSON("/ajax/GetQAByUser.html?pid={0}&pageidx={2}&t={1}".format(projectInfo.ProjectID, Math.random(), idx), function (obj) {
            if (obj && obj.Data && obj.Status == 200) {
                insertHtm(getQaListHtm(obj.Data));
                if (obj.Message - 0 > 25) {
                    var totalpage = Math.ceil((obj.Message - 0) / 25);
                    page(25, idx, totalpage).show().attr("data-type", "my");
                }
            } else {
                $ul.html("<li class='itm'>没有找到任何评论！</li>");
            }
            if ("true" == pager.attr("data-page")) {
                $('body, html').animate({ scrollTop: $('#QAList').closest(".itm-tab").offset().top - $('#m-infonav .nav').height() }, 'slow');
            }
        });
    }


    $(function () {
        if (projectInfo.OptimizationTicket > 0) { return; }
        init();
        getQaList();
    });

    $(document)
	.on("click", "a[qa=SendQA]", function () {
	    var textarea = $(this).parent().find("textarea[name=question]");
	    var question = $.trim(textarea.val());
	    question = question.replace(/<[^>]*>/gi, "");
	    if (question.length == 0 || question == "请在此留下您的问题，最多只能输入100字") {
	        alert("请输入您的问题！");
	        return;
	    }
	    if (!checkLogin()) {
	        $.damaiItem.showLogin();
	        return false;
	    }
	    $.ajax({
	        type: "POST",
	        url: "/ajax/AddQA.html",
	        data: "projectId={0}&question={1}&pcity={2}&pname={3}".format(projectInfo.ProjectID, $('<div/>').text(question).html(), projectInfo.CityID, projectInfo.Name),
	        dataType: "json",
	        cache: false,
	        beforeSend: function () {
	            $(this).attr("disabled", "disabled");
	        },
	        complete: function () {
	            $(this).removeAttr("disabled");
	        },
	        success: function (obj) {
	            if (obj && obj.Status == 102) {
	                $.damaiItem.showLogin();
	                return;
	            } else if (obj && obj.Status == 101) {
	                alert("疑问内容不能为空或其它错误提交内容！");
	                return;
	            } else if (obj && obj.Status == 103) {
	                alert("疑问内容不得大于一百个字！");
	                return;
	            } else if (obj.Status == 500) {
	                alert(obj.Data);
	                return;
	            }
	            textarea.val("");
	            if (typeof userInfo == "undefined" || userInfo == null) {
	                abc([{ ADate: null, FromType: 0, MemberID: userInfo.code, ProjectID: projectInfo.ProjectID, QDate: new Date(), QUserName: userInfo.nickName, Question: obj.Data }]);
	            } else {
	                abc([{ ADate: null, FromType: 0, MemberID: userInfo.code, ProjectID: projectInfo.ProjectID, QDate: new Date(), QUserName: userInfo.nickName, Question: obj.Data }]);
	            }

	        }
	    });

	    function abc(data) {
	        var html = getQaListHtm(data);
	        var $itm = $(html).attr("style", "display:none;");
	        $ul.prepend($itm);
	        $itm.slideDown();
	    }

	    return false;
	})
	.on("click", "ul.m-asknav li:not(.z-crt) a[qa=allQA]", function () {
	    $menus.removeClass("z-crt").eq(0).addClass("z-crt");
	    getQaList();
	    return false;
	})
	.on("click", "ul.m-asknav li:not(.z-crt) a[qa=myQA]", function () {
	    if (!checkLogin()) {
	        $.damaiItem.showLogin();
	        return false;
	    }
	    $menus.removeClass("z-crt").eq(1).addClass("z-crt");
	    getMyQaList(1);
	    return false;
	})
    .on("click", "#QAPager li:not(.gray,.m-page-act,.m-page-more)", function () {
        pager.attr("data-page", "true");
        if ("my" == pager.attr("data-type")) {
            getMyQaList($(this).attr("data-idx") - 0);
        } else {
            getQaList($(this).attr("data-idx") - 0);
        }
    });

    function init() {
        $ul = $("ul[qa='list']");
        $menus = $("ul.m-asknav li");
        pager = $("#QAPager");
    }
})(jQuery);
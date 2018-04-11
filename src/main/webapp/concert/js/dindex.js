/*------------------------------------------------
Create By:			CaoNing
Create Time:		2013-09-9 10:00
*Filename:			script.js
*Version:			1.0.0.0
*Website:			http://www.damai.cn
*Page width:		1000px
*2017-5-23  麦田下线 注释artistAround方法
------------------------------------------------*/
$(document).ready(function () {
	
    tab($('.search_tab1'));
    tab($('.search_tab2'));
    
    $(".search_calendar_loading").hide();
    
    $(".search_load_close").click(function(){
		$(this).parent().hide();
	});

    function tab(obj) {
        obj.find('.tab a').click(function () {
            obj.find('.con').hide().end().find('.con').eq(obj.find('.tab > a').index(this)).show().end().end().find('a').removeClass('active').end().find(this).addClass('active');
        });
    };
	
	//$('#search_vedio1').maiPlayer({speedSwitch: 5000, imageTitle: true, autoPlay: true, numPage: false});
	//$('#search_vedio2').maiPlayer({speedSwitch: 5000, imageTitle: true, autoPlay: true, numPage: false});
	
	$('.sort-list>ul>li').hover(function () {
		$(this).addClass('hover');
		guessajax(2, $(this).attr('cid'));
	}, function () {
		$(this).removeClass('hover');
	});	
/*	
	$('.sort').hover(function(){
		$(this).find('.sort-ti').addClass('active');
		$(".sort-list").show();
	},function(){
		$(this).find('.sort-ti').removeClass('active');
		$(".sort-list").hide();
	});
*/		
	$('.search_txt_btn').hover(function(){
		$(this).find('span').show();
	},function(){
		$(this).find('span').hide();
	});
	
	$('.top_eye').hover(function(){
		$(this).find('.top_title').addClass('on');
		$(this).find('.top_time').show();
	},function(){
		$(this).find('.top_title').removeClass('on');		
		$(this).find('.top_time').hide();
	});
	$('.search_good_fine').click(function () {
		$('.search_good_box').hide();
		$('.search_good_tips').fadeIn(1000);
		setTimeout(function () {
			$(".search_good_tips").hide();
		}, 2000);
	});   

	$('.search_good_bad').click(function () {
		$('.search_good_tips').hide();
		$('.search_good_box').show();
		$('.search_good_box .search_good_cloae').click(function() {
			$('.search_good_box').hide();
		  });
	}); 
	
	$('.search_box_key').click(function () {
		$('.search_box_suc').show();
		$('.search_box_suc .search_box_close').click(function() {
			$('.search_box_suc').hide();
		  });
	}); 
	
    $("#selectDate").change(function () {
        if ($(this).val() == 5)
            $("#dataBetween").show();
        else
            $("#dataBetween").hide();
    });	
	
	$("#dataBetween .remove").click(function () {
        $("#dataBetween").hide();
        $("#selectDate").val(0);
    }); 
	
//	$('.search_time a').toggle(function(){
//		$(this).addClass('on');
//		$("#dataTime").show();
//	},function(){
//		$(this).removeClass('on');
//		$("#dataTime").hide();
//	});	
//	
	
	$('.search_time a').click(function (){ //因为通过ajax加载后的dom,这边用live
	 var div2 = $('#dataTime');
	 if(div2.css("display")=="none") {
		  div2.css("display","block");
		  $(this).addClass('on');
		  
	    } else {
	    	div2.css("display","none");
	    	 $(this).removeClass('on');
	    	
	    }
	});
});

function search_pic(){
	jQuery(function($){
		
		var oA = $('.search_city_more'),
		oCity = $('.search_city_all');
			
		if ( oCity.children("li").length >20 ) {
			oA.css('display', 'block');
			oCity.height(62);
		} else {
			oA.css('display', 'none');
		}
		
		//热门推荐由下向上显示
		$('.search_rec .search_rec_list').on('mouseenter', 'li', function () {
	    	$(this).find('.poster-single').slideDown(200);
	  	});

	  	$('.search_rec .search_rec_list').on('mouseleave', 'li', function () {
	    	$(this).find('.poster-single').slideUp(200);
	  	});
	  	//图片模式鼠标滑过图片
	  	$('.search_pic_item').hover(function(){
	  		$(this).find('.search_pic_item_ct').hide();
			$(this).find('.search_pic_item_ct').next().show();
		},function(){
			$(this).find('.search_pic_item_ct').next().hide();
			$(this).find('.search_pic_item_ct').show();
		});

		//图片模式才您喜欢
		len=$('.search_pic_sess_bg ul li').length;
		
		var prev=$('.prev');
		var next=$('.next');
		if(len>7){
			$('.prev').show();
			$('.next').show();
		}else{
			$('.prev').hide();
			$('.next').hide();
		}
		
		//IE6温馨提示
		if(navigator.userAgent.indexOf("MSIE 6.0") > 0){
			$('.ie6_prompt').show();
			$('.ie6_close').click(function(){
				$('.ie6_prompt').hide();
			});
		}
	});
}
//图片模式 图片滚动左侧按钮
var _index=0;
var _index1=7;
function prevLeft(){
	_index--;
	_index1--;
	if(_index1<=7){
		$('.prev').attr('disabled','disabled');
	}
	if(_index1<=len){
		$(".search_pic_sess_list").stop().animate({left:-_index*130},1000);
		//$('.next').show();
		$('.next').removeAttr('disabled');
	}
}

//图片模式  图片滚动右侧
function nextRight(){
	_index++;
	_index1++;
	if(_index1>=len){
		$('.next').attr('disabled','disabled');
	}
	
	if(_index1<=len){
		$(".search_pic_sess_list").stop().animate({left:-_index*130},1000);
		$('.prev').removeAttr('disabled');
	}
}

//弹出层
function popLayer(ele) {
	//建议框初始化
	$(".seach_taste_fruit #0").attr("checked","checked");
	$(".seach_taste_fruit #1").attr("checked","");
	$("#search_feedback_suggest").val("");
	$(".sh_int").val("");
	//初始化提示语
	txtExplain();
	
	var $ele = $(ele),
			$win = $(window),
			$winH = $win.height(),
			$winW = $win.width(),
			$mask = $("<div class='ph-mask'></div>"),
			$eleW = 0,
			$eleH = 0;
	$("body").append($mask.css({
		"height":$(document).height() + "px"
	}))
	$ele.show().css({
		"top":($winH - $ele.height()) / 2 + "px",
		"left":($winW - $ele.width()) / 2 + "px",
		"zIndex":$mask.css("z-index") + 1
	})

	$(".layer_close").click(function () {
		$(this).parents(".mai_layer").hide();
		$mask.remove()
		return false
	});
}


$(function(){
	  bindSdfix();
	  // 绑定侧边固定栏
	  function bindSdfix() {
	    $('.m-sdfix').each(function () {
	      $(this).find('.itm').on('mouseenter', function () {
	        $(this).addClass('z-crt').siblings().removeClass('z-crt');
	      });

	      $(this).find('.itm').on('mouseleave', function () {
	        $(this).removeClass('z-crt');
	      });

	      $(this).find('.totop').on('click', function () {
	        $('html, body').animate({'scrollTop': 0});
	      });
	    });
	  }
	  limit('#search_feedback_suggest',200);   
	  limit('.sh_int',40); 
});

//文本框提示
$(document).ready(function(){

 });

//文本框提示(用户反馈)
function txtExplain(){
   $(".input_txt").each(function(){
	    var thisVal=$(this).val();
	    //判断文本框的值是否为空，有值的情况就隐藏提示语，没有值就显示
	    if(thisVal!=""){
	      $(this).siblings("span").hide();
	     }else{
	      $(this).siblings("span").show();
	     }
	     $(this).keyup(function(){
	      var val=$(this).val();
	      $(this).siblings("span").hide();
	     }).blur(function(){
	       var val=$(this).val();
	       if(val!=""){
	        $(this).siblings("span").hide();
	       }else{
	        $(this).siblings("span").show();
	       }
	      });
	    });
}


//限制文本字数
function limit(obj,n){
	var $ipt = $(obj);
  	$(obj).keyup(function(){
		var val=$(obj).val().length;
		
		if(val>n){
			$(obj).val( $(obj).val().substring(0,n) );
			return false;
		}
	});
  }

//login.js
function closelogindialog(type,id,name,i) {
    $("#maskLevel,#player,#maskiframe").remove();
    getNickName();
    keywordHit();
    pushsubscription(type,id,name,i);
}

function showlogindialog(type,id,name,i) {
    window.document.domain = "damai.cn";
   var href =encodeURI(encodeURI(window.location.href +"&flag=sub"+"&id="+id+"&form="+type+"&name="+encodeURI(name)+"&i="+i));
   var href1 = escape(href);
    $("#player").jQueryDialog({
        width: '708',
        scroll: 'no',
        cssstr: 'm-layer-newlogin',
        height: '424',
        url: "https://secure.damai.cn/fLogin2015.aspx?callback=" + escape("closelogindialog("+type+","+id+",'"+name+"',"+i+")") + "&ru=" + href1
    });
}


function dateCalendarLoading(type){
	if(type == 0){
		$(".search_calendar_loading").hide();
	}else{
		$(".search_calendar_loading").show();
	}
	
}
//dindex.js


var ie = navigator.appName=="Microsoft Internet Explorer" ? true:false;
var search = window.search = function(key, value, me) {
	if(!key && !value) {
		location.href="/";
		return;
	}
	$("#from").val("");
    $("#to").val("");
    $("#sttime").val(value);
    $("#ettime").val(value);
    window.searchDate = value;
    window.searchDateReal = value;
    if(!value)
      window.searchDate = new Date();
	selectDatechange(6);
}

$(function() {
	if($.browser.msie&&($.browser.version == "6.0")){
		$('.search_calendar').css("display","none");
	} 
	else{
		$('.search_calendar').css("display","block");
	}
	
	$(".search_infor").hide();

	initreditparam();
	
	if("" != $("#from").val() && ""!=$("#to").val() && $("#from").val() != $("#to").val()){
		$('#selectDated').click();
	}
	
	getFooter();
	//relatekey();
	keywordHit();
	
	//明星周边
	$("#pagenum").blur(function(){
		var pagenum = $("#pagenum").val();
		var re = /^[1-9]\d*$/;
		if (!re.test(pagenum)){
			$("#pagenum").val('1');
			$("#pagenum").focus();
			return;
		}
	});
	
		/*$('.search_box_suc .search_box_close').click(function() {
			$('.search_box_suc').hide();
		  });*/
	
	
	$('#product_sel').change(function(){
		var ptype = $(this).children('option:selected').val();
		
		$("#ptype").val(ptype);
		
		var keyword = $("#keyword").val();
		var ctl = $("#category_name").val();
		var cty = $("#city_name").val();
		var isSingleChar = $("#isSingleChar").val();
		var param = {
				"keyword" : keyword,
				"cty":cty,
				"ctl":ctl,
				"ptype":ptype,
				"singleChar":isSingleChar
			};
		searchajax(param);
	});
	
	/*$("#dataTime .remove").click(function () {
        $("#dataTime").hide();
        $("#selectDate").val(0);
        
        $("#from").val("");
		$("#to").val("");
		$("#tsg").val(0);
		
		$( "#to" ).datepicker( "option", "minDate", new Date() );
		$( "#from" ).datepicker( "option", "maxDate", "" );
		
		getStEt();
    }); */  //可以不要
	
	
    /*$('#selectDate').change(function(){
		var tsg = $(this).children('option:selected').val();
		$("#tsg").val(tsg);
		if(tsg == 5 ){
			var dataStr = "";
			var d = new Date();
			dataStr += d.getFullYear();
			dataStr +="-";
			dataStr += d.getMonth()+1>10?d.getMonth()+1: "0" + (d.getMonth()+1);
			dataStr +="-";
			dataStr += d.getDate()>10? d.getDate(): "0" + d.getDate();
			
			$("#from").val(dataStr);
			
			return;
		}else{
			$("#from").val("");
			$("#to").val("");
			
			$( "#to" ).datepicker( "option", "minDate", new Date() );
			$( "#from" ).datepicker( "option", "maxDate", "" );
		}
		
		
		getStEt();
		
	});*/
	
	
	$( "#from" ).datepicker({
//		defaultDate: "+1w",
		numberOfMonths: 1,
		minDate: new Date(),
		onSelect: function( selectedDate ) {
	      $("#tsg").val(5);
	      $("#sttime").val($("#from").val());
		  $("#ettime").val($("#to").val());
		  getStEt();
		  $( "#to" ).datepicker( "option", "minDate", selectedDate );
		}
	  });
	$( "#to" ).datepicker({
//		defaultDate: "+1w",
		numberOfMonths: 1,
		minDate: new Date(),
		onSelect: function( selectedDate ) {
		  $("#tsg").val(5);
		  $("#sttime").val($("#from").val());
		  $("#ettime").val($("#to").val());
		  getStEt();
		  $( "#from" ).datepicker( "option", "maxDate", selectedDate );
		}
	  });

});

function initreditparam(){
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
	}
	if(theRequest.et && theRequest.st && theRequest.tsg){
		$("#sttime").val(theRequest.st);
		$("#ettime").val(theRequest.et);
		$("#tsg").val(theRequest.tsg);
	}
	
}

function close(){
	$('.search_box_suc').hide();
}

function selectDatechange(num,obj){
	var tsg = num;
	//var tsg = $(this).children('option:selected').val();
	if(tsg!= 5)
		$("#tsg").val(tsg);
	
	if(tsg == 5 ){
//		selectDatechange(7,$('#alltime'));
		var dataStr = "";
		var d = new Date();
		dataStr += d.getFullYear();
		dataStr +="-";
		dataStr += d.getMonth()+1>=10?d.getMonth()+1: "0" + (d.getMonth()+1);
		dataStr +="-";
		dataStr += d.getDate()>=10? d.getDate(): "0" + d.getDate();
		
		if("" != $("#from").val() && ""!=$("#to").val() && $("#from").val() != $("#to").val()){
		}
		else{
			$("#from").val(dataStr);
		}
//		$("#tsg").val(0);
		return;
		
	}
	else if(tsg == 6)
	{
		$("#tsg").val(5);
	} 
	else{
		$("#from").val("");
		$("#to").val("");
		
		$( "#to" ).datepicker( "option", "minDate", new Date() );
		$( "#from" ).datepicker( "option", "maxDate", "" );
	}
	
//	if(num!= 7)
	getStEt();
	
	$("#search_time a").removeClass('on');
	//$("#dataTime").css("display","none");
	
	$("#search_time a").removeClass("active");
	//$("#dataTime").hide();
	$(obj).addClass("active");
}

function getStEt(){
	$("#search_time a").removeClass("active");
	var st = $("#sttime").val();
	var et = $("#ettime").val();
	var tsg = $("#tsg").val();
	
	if(st && et){
		
	}else{
		if(tsg == 5)
			return;
	}
	
	var keyword = $("#keyword").val();
	var ctl = $("#category_name").val();
	var cty = $("#city_name").val();
	var isSingleChar = $("#isSingleChar").val();
	var param = {
			"keyword" : keyword,
			"cty":cty,
			"ctl":ctl,
			"tsg":tsg,
			"st":st,
			"et":et,
			"singleChar":isSingleChar
		};
	searchajax(param);
}

function getFooter(){
	
	var keyword = $("#keyword").val();
	if(keyword!= null && keyword.length >0){
		$("#searchText").val(keyword);
	}
	/*
	var param = {};
	jQuery.ajax({
		url : "../voosay/headfoot.html",
		data : param,
		type : "POST",
		dataType : "json",
		error : function() {
			//alert("服务器忙,请稍候重试... headfoot");
		},
		success : function(data) {
			if(data!= null){
				$("#showfoot").html(data.foot);
				$("#showhead").html(data.head);
				//alert(data.head);
			}
		}
	});*/
}

function search(){
	var keyword = $("#searchText").val();
	if(keyword != null && keyword != "" && keyword != "请输入演出，艺人，场馆名称…"){
		$("#keyword").val(keyword);
	}
	else{
		$("#keyword").val("");
	}
	$("#currPage").val("1");
	document.searchForm.submit();
}

function pages(currPage){
    document.searchForm.currPage.value=currPage;
    document.searchForm.submit();
}

function tosearch(totalPage){
	var pagenum = $("#pagenum").val();
	if(pagenum == ""){
		return;
	}
	
	var re = /^[1-9]\d*$/;
	if (!re.test(pagenum)){
		pagenum = 1;
	}
	
	if(pagenum > totalPage){
		pagenum = 1;
	}
	pages(pagenum);
}


function relatekey() {
	var keyword = $("#searchText").val();
	if (keyword == null || keyword == "") {
		return;
	}
	if(keyword == '请输入演出，艺人，场馆名称…'){
		return;
	}
	var param = {
		"keyword" : keyword
	};
	jQuery.ajax({
		url : "relatekeyword.html",
		data : param,
		type : "POST",
		dataType : "json",
		error : function() {
			//alert("服务器忙,请稍候重试... relatekeyword");
		},
		success : function(data) {
			
			if(data!= null && data.list!=null){
				$(".search_infor").show();
				var list = data.list;
				var htm = "";
				
				for(var i=0;i<list.length;i++){
					var keyname=list[i].keyname;
					//$("#relatekeyword").append('<li><a href="search.html?keyword='+keyname+'" target="_blank" title="'+ keyname +'">'+keyname+'</a></li>');
					htm +='<li><a href="search.html?keyword='+encodeURIComponent(keyname)+'" target="_blank" title="'+ keyname +'">'+keyname+'</a></li>';
					if(i > 5)
						break;
				}
				$("#relatekeyword").html(htm);
			}
		}
	});
}

function tosearchAjax(totalPage){
	var pagenum = $("#pagenum").val();
	if(pagenum == ""){
		return;
	}
	
	var re = /^[1-9]\d*$/;
	if (!re.test(pagenum)){
		pagenum = 1;
	}
	
	if(pagenum > totalPage){
		pagenum = 1;
	}
	pagesAjax(pagenum);
}

function pagesAjax(currPage){
	var keyword = $("#keyword").val();
	var ctl = $("#category_name").val();
	var cty = $("#city_name").val();
	var tn = $("#tag_names").val();
	var sctl = $("#subcategory_name").val();
	
	var isSingleChar = $("#isSingleChar").val();
	var param = {
			"keyword" : keyword,
			"cty":cty,
			"ctl":ctl,
			"currPage":currPage,
			"singleChar":isSingleChar,
			"tn": tn,
			"sctl": sctl
		};
	searchajax(param);
	window.scrollTo(0,0);
}

function orderajax(order,obj){
	var keyword = $("#keyword").val();
	var ctl = $("#category_name").val();
	var cty = $("#city_name").val();
	var tn = $("#tag_names").val();
	var sctl = $("#subcategory_name").val();
	
	$("#curr_order").val(order);
	var param = {
			"keyword" : keyword,
			"cty":cty,
			"ctl":ctl,
			"order":order,
			"tn": tn,
			"sctl": sctl
		};
	searchajax(param);
	
	$(".search_sort_way a").removeClass("active");
	$(obj).addClass("active");
}



function searchajax(param, from ){
	var async = true;
	var fromDataInit = false;
	if(from == 1){
		async = false;
		fromDataInit = true;
	}
//	var ptype = $("#ptype").val();
//	if(ptype!= "" && ptype!= null){
//		param.ptype = ptype;
//	}
	
	var st = $("#sttime").val();
	var et = $("#ettime").val();
	var tsg = $("#tsg").val();
	if(st!= "" && st!= null && param.st == undefined){
		param.st = st;
	}
	if(et!= "" && et!= null && param.et == undefined ){
		param.et = et;
	}
	if(tsg!= "" && tsg!= null && param.tsg == undefined){
		param.tsg = tsg;
	}
	
	var cityId = $("#cityId").val();
	if(cityId!= "" && cityId!= null){
		param.cityId = cityId;
	}
	var order= $("#curr_order").val();
	param.order = order;
	var simpKey = $("#simp_key").val();
	if(param.keyword!= undefined && 
			param.keyword!= "" && 
			param.keyword == simpKey){
		param.simple = 1;
	}else{
		$("#simp_key").val("");
	}
	/**
	 * 设置加载
	 */
	if(!fromDataInit){
		setLoading(1);
	}
	//setLoading(1);
	jQuery.ajax({
		url : "searchajax.html",
		data : param,
		type : "POST",
		dataType : "json",
		async : async,		
		error : function() {
			//alert("服务器忙,请稍候重试... searchajax");
		},
		success : function(data) {
			$('#projectids').val(data.ids);
			setTimeout("guessajax(1)",2000);
//			guessajax(1);
			if(data!= null){
				if(!fromDataInit){
					var pageData = data.pageData;
					$("#content_list").empty();
					//异常情况下，统一展示筛选无结果
					if(pageData==undefined){
						$('.search_new').hide();
						if(""!=param.keyword && undefined !=param.keyword){
							$('.search-none').hide();
							$('.search-none-keywords').show();
						}else{
							$('.search-none').show();
							$('.search-none-keywords').hide();
						}
						
						setLoading(0);
						return;
					}
					//搜索无结果的情况
					if(pageData.totalResults==0){
						//有时间参数的情况，统一展示筛选列表及筛选无结果
						if(param.tsg!="" && undefined !=param.tsg){
							setContent(pageData);
							setTopPage(pageData);
							setNavigation(data);
							setCityLineByCityChoose(data);
							setLoading(0);
							return;
						}
						//搜索词不为空，展示搜索无结果，正常情况下，城市和类别筛选条件是随动的，一定会有关联项目
						if(""!=param.keyword && undefined !=param.keyword){
							$('.search_new').hide();
							$('.search-none').hide();
							$('.search-none-keywords').show();
							setLoading(0);
							return;
						}else{
							//搜索词为空，一般对应PC分类页。此时城市、分类会展示全部城市和分类。如果输入参数在列表中，展示列表，否则展示筛选无结果
							var displayCity = false;
							var displayCategory = false;
							var factmap = data.pageData.factMap;
							if(param.cty!="" && param.cty!=undefined){
								if(factmap!= undefined){
									var citymap = factmap.cityname;
									for(var z=0; z<citymap.length; z++){
										var item = citymap[z];
										if(item.name==param.cty){
											displayCity = true;
											break;
										}
									}
								}
							}
							if(param.ctl!="" && param.ctl!=undefined){
								if(factmap!= undefined){
									var categorymap = factmap.categoryname;
									for(var z=0; z<categorymap.length; z++){
										var item = categorymap[z];
										if(item.name==param.ctl){
											displayCategory = true;
											break;
										}
									}
								}
							}
							if(param.tn!="" && param.tn!=undefined){
								if(factmap!= undefined){
									var categorymap = factmap.tag_names;
									for(var z=0; z<categorymap.length; z++){
										var item = categorymap[z];
										if(item.name==param.tn){
											displayCategory = true;
											break;
										}
									}
								}
							}
							if(displayCity && displayCategory){
								setContent(pageData);
								setTopPage(pageData);
								setNavigation(data);
								setCityLineByCityChoose(data);
								setLoading(0);
								return;
							}
							//筛选无结果作为兜底显示
							$('.search_new').hide();
							$('.search-none').show();
							$('.search-none-keywords').hide();
							setLoading(0);
							return;
						}
					}
					if( (order == 0 || !order) && tsg == 0 && data.currPage<=1){
						setIpsuggest(data.data);
					}
					setContent(pageData);
					setTopPage(pageData);
					setNavigation(data);
					setCityLineByCityChoose(data);
					setLoading(0);
				}else{
					setRedDate(data); 	//加红点
//					dateCalendarLoading(1);//显示loading 此功能暂时搁置
//					var start = new Date().getTime();
//				    while(true)  if(new Date().getTime()-start > 3000) break;
//					dateCalendarLoading(0);//隐藏loading
				}
			}
		}
	});
}

function dateinit()
{
	var st = "";//$("#from").val();;
	var et = "";//$("#to").val();;
	if(yy == null || mm == null){
		var dataSt = "";
		var dataEt = "";
		var d = new Date();
		dataSt += d.getFullYear();
		dataSt +="-";
		dataSt += d.getMonth()+1>10?d.getMonth()+1: "0" + (d.getMonth()+1);
		dataSt +="-";
		dataSt += d.getDate()>10? d.getDate(): "0" + d.getDate();
		st = dataSt;
		
		if(d.getMonth() == 11){
			dataEt += d.getFullYear()+1;
			dataEt +="-";
			dataEt += d.getMonth()+1>10?d.getMonth()+1: "0" + (d.getMonth()+1);
			dataEt +="-";
			dataEt += d.getDate()>10? d.getDate(): "0" + d.getDate();
		}else{
			dataEt += d.getFullYear();
			dataEt +="-";
			dataEt += d.getMonth()+2>10?d.getMonth()+2: "0" + (d.getMonth()+2);
			dataEt +="-";
			dataEt += d.getDate()>10? d.getDate(): "0" + d.getDate();
		}
		et = dataEt;
	}else{
		var dataSt = "";
		var dataEt = "";
		dataSt += yy;
		dataSt +="-";
		dataSt += mm+1>10?mm+1: "0" + (mm+1);
		dataSt +="-";
		dataSt += "01";
		st = dataSt;
		
		if(mm == 11){
			dataEt += yy+1;
			dataEt +="-";
			dataEt += mm+1>10?mm+1: "0" + (mm+1);
			dataEt +="-";
			dataEt += "01";
		}else{
			dataEt += yy;
			dataEt +="-";
			dataEt += mm+2>10?mm+2: "0" + (mm+2);
			dataEt +="-";
			dataEt += "01";
		}
		et = dataEt;
	}
//	alert(st + " " + et + " " + yy + " " + mm);
	/*初始化日历红点 */
    
	var tsg = 5;//$("#tsg").val();
	var keyword = $("#keyword").val();
	var ctl = $("#category_name").val();
	var cty = $("#city_name").val();
	var isSingleChar = $("#isSingleChar").val();
	var param = {
			"keyword" : keyword,
			"cty":cty,
			"ctl":ctl,
			"tsg":tsg,
			"st":st,
			"et":et,
			"singleChar":isSingleChar
		};
	searchajax(param, 1);
}

function closeSuggest(){
//	$("#guess_position").css('display', 'block');
	$("#guess_position").css('display', 'none');
	$("#guess_position").html("");
}

function setIpsuggest(pageData){
	if(!pageData)
		return;
	
	var resultData = pageData;
	
	if(resultData != null && resultData.length > 0){
		
		var li = "";
		
		li+='<div class="serch_guess">';
		li+='<div class="guess_title">';
		li+='<a class="guanbi" href="javascript:closeSuggest()"></a>';
		li+='<span class="guess_btn">猜您在找</span>';
		li+='</div>';
		li+='<ul class="search_list">';
		
		
		
		for(var i = 0; i < resultData.length; i++){
			var item = resultData[i];
			var item = resultData[i];
			var projectid = item.projectid;
			var imgurl = item.imgurl;
			var name = item.name;
			var nameNoHtml = item.nameNoHtml;
			var description = item.description;
			var showtime = item.showtime;
			var venueName = item.venue;
			var showstatus = item.showstatus;
			var pricestr = item.price_str;
			var isxuanzuo = item.isxuanzuo;
			var iseticket = item.iseticket;
			var status = item.sitestatus;
			var venueId = item.venueid;
			var venuecity = item.venuecity;
			var showtags = item.showtags;
			var firstPerformstartTime = item.firstPerformstartTime;
			
			if(showstatus == null){
				showstatus = "";
			}
			if(venueName == null){
				venueName = "";
			}
			if(pricestr == null){
				pricestr = "<em>价格待定</em>";
			}else{
				if(status == 2 || status == 5 || status == 11){
					pricestr = "<em>价格待定</em>";
				}else{
					pricestr = pricestr + "元";
				}
			}
			
			if(showtime == null){
				showtime = "";
			}
			if(description == null){
				description = "";
			}
			
			
			//优惠促销
			var favourablelist=item.favourable;
			var favourableHtml="";
			if(null!=favourablelist && favourablelist.length>0){

				for(var kk=0;kk<favourablelist.length;kk++){
					var favourables=favourablelist[kk];
					var favourable=	favourables.split("|||");
					if(null!=favourable && favourable.length>0){
						var len = favourable[1].length;
						var le =len-1;
                        if(favourable[1].substring(le,len)==';'){
                    	   favourable[1] = favourable[1].substring(0,le).replace(/;/g,'；');
                         }
						if(favourable[0]==1){
							favourableHtml+='<p class="c1   search_list_icon"><em class="l_icon l_icon_z">折扣</em><span>'+favourable[1]+'</span></p>';
						}else if(favourable[0]==2){
							favourableHtml+='<p class="c1   search_list_icon" ><em class="l_icon l_icon_m">满减</em><span>'+favourable[1]+'</span></p>';
						}else if(favourable[0]==3){
							favourableHtml+='<p class="c1   search_list_icon" ><em class="l_icon l_icon_l">0元</em><span>'+favourable[1]+'</span></p>';
						}else if(favourable[0]==4){
							favourableHtml+='<p class="c1   search_list_icon" ><em class="l_icon l_icon_y">一口价</em><span  class="t-y">'+favourable[1]+'</span></p>';
						}
					 }
				}
               }
			 
			
			
			
			
			
			
			
			
			if(i == 0){
				li += '<li><div class="search_img"><a id="search_log_'+projectid+'" href="//piao.damai.cn/'+projectid+'.html"  target="_blank" title="'+nameNoHtml+'"><img src="//pimg.damai.cn/perform/project/'+imgurl+'/'+projectid+'_n.jpg" alt="" width="115" height="155" /></a></div>';
				li += '<div class="search_txt">';
				li += '<h3>'+  (venuecity?'【'+ venuecity +'】': '')  +'<a id="search_log_'+projectid+'" href="//piao.damai.cn/'+projectid+'.html"  target="_blank"><em>'+name+'</em></a></h3>';

			    li += '<p class="search_txt_cut c3">'+description+'</p>';
				li += '<p  class="search_txt_time c3"><a href="#" class="search_txt_time_icon"></a>'+showtime+'</p>';



				//venueHtml 场馆显示
				var venueHtml='';
				if((null !=venueId && venueId != '0') && (null!=venueName && venueName!='暂无') && ( null != venuecity && venuecity !='')){
					li +=' <p class="c1"><a href="//venue.damai.cn/venue_'+venueId+'.html" target="_blank"  class="search_txt_site_icon">'+venueName+' - '+ (venuecity? venuecity : '') +'</a></p>';
				}else if((null !=venueId && venueId != '0') && (null!=venueName && venueName!='暂无')){
					li +=' <p class="c1"><a href="//venue.damai.cn/venue_'+venueId+'.html" target="_blank"  class="search_txt_site_icon">'+venueName+'</a></p>';
				} else{

					li +=' <p class="search_txt_site_icon">场馆待定</p>';
				}

				li += '<p class="search_txt_piao"><em>' + pricestr + '</em>'+showstatus+'</p>';
				if((isxuanzuo != null && isxuanzuo == 1) ||(iseticket != null && iseticket == 1)||(null!=showtags && showtags.length>0) ){
					li += '<div class="search_txt_order">';
					li += '<p class="search_txt_line clear">';
					//
					if(isxuanzuo != null && isxuanzuo == 1){
						li += '<a class="search_txt_icon" id="search_log_'+projectid+'" href="//seat.damai.cn/elist/'+projectid+'" target="_blank">在线选座</a>';
					}

					//
					if(iseticket != null && iseticket == 1){
						li += '<a class="search_txt_icon2" id="search_log_'+projectid+'" href="//piao.damai.cn/'+projectid+'.html" target="_blank">电子票</a>';
					}
					
					if(null!=showtags && showtags.length>0){
						for(var zz=0; zz<showtags.length;zz++){
							var showtag=eval('(' + showtags[zz] + ')'); 
							li += '<a class="search_txt_icon5" href="//piao.damai.cn/'+projectid+'.html" target="_blank">'+showtag.name+'</a>';
						}
					}
					li += '</p>';
					li += '</div>';
				}

				if(status!=2 && status!=11){
					li += favourableHtml;
				}
				li += '</div>';
				li += '</li>';
				li += '</ul>';
				
			}else{
//				if(i == 1)
//					li += '<div class="sess">';
//				li += '<p><a href="//piao.damai.cn/'+projectid+'.html" target="_blank"><span>'+firstPerformstartTime+'</span>'+name+'<em>'+  (venuecity?'【'+ venuecity +'】': '')  +'</em></a></p>';
//			
//				if(i == resultData.length -1 && i >0){
//					li += '</div>';
//				}
			}
				
		}
		li+='</div>';
		
//		li +='<div class="search_tit">';
//		li +='<p>全部搜索结果：</p>';
//		li +='</div>';
		
		var tours = eval('(' + item.tours + ')');
		if(null!=tours && tours.length>0){
			//巡演
			li+='<div class="search_pic_sess">';
			li+='<input type="button" value="<" onclick="prevLeft()" class="prev" disabled ="true"/>';
			li+='<div class="search_pic_sess_bg">';
			li+='<ul class="search_pic_sess_list">';
			for(var zz=0; zz<tours.length;zz++){
				var tour=tours[zz]; 
				li+='<a href=//piao.damai.cn/'+tour.projectId+'.html target="_blank">';
				li+='<li><h3>'+tour.cityName+'</h3><p>'+tour.showTime+'</p></li>';
				li+='</a>';
			}
			li+='</ul>';
			li+='</div>';
			li+='<input type="button" value=">" onclick="nextRight()" class="next"/>';
			li+='</div>';
		}
		
		$("#guess_position").html(li);
		search_pic();
		
		$("#guess_position").css('display', 'block');
	}
}

/**
 * 0列表模式 1大图模式
 * @param modle
 */
function pageListModle(modle){
	$("#listmodle").val(modle);
	var keyword = $("#keyword").val();
	var ctl = $("#category_name").val();
	var cty = $("#city_name").val();
	var tn = $("#tag_names").val();
	var sctl = $("#subcategory_name").val();
	var order= $("#curr_order").val();
	var param = {
			"keyword" : keyword,
			"cty":cty,
			"ctl":ctl,
			"order":order,
			"tn": tn,
			"sctl": sctl
		};
	
	searchajax(param,0);
}

/**
 * 设置图片内容显示
 */
var pageSize=4;//每行显示个数
function setContent_Pic(pageData){
	var resultData = pageData.resultData;
	var pNum=pageData.currentPage;

	if(pageData != null && resultData != null && resultData.length > 0){
		$("#content_list").addClass("search_pic_list");

		var resultSize=resultData.length;
		 var pageCount=1;
	        if(pageSize>0)
	        {
	            pageCount =parseInt(resultSize/pageSize);
	        }
	        if(resultSize % pageSize>0)
	        {
	            pageCount++;
	        }
	        var j=0;
	        var k=0;
	        var index = pageCount;
	        for(var i=0 ;i <pageCount;i++){
			     var  cliNum=i+1;
	        	var li="<li style=\"*z-index:"+ index +";*position: relative;\">";
	        	index --;
	        	
	        	k= k + pageSize;
	        	if(k > resultSize){
	        		k= resultSize;
	        	}
	        	
	        	for( j ; j < k; j++){

    				var item = resultData[j];
    				var imgurl = item.imgurl;
    				var projectid = item.projectid;
    				var name = item.name;

    				var nameNoHtml = item.nameNoHtml;
    				var description = item.description;
    				var showtime = item.showtime;
    				var venueName = item.venue;
    				var showstatus = item.showstatus;
    				var pricestr = item.price_str;
    				var isxuanzuo = item.isxuanzuo;
    				var iseticket = item.iseticket;
    				var status = item.sitestatus;
    				var venueId = item.venueid;
    				var venuecity = item.venuecity;
    				var showtags = item.showtags;
    				
    				if(showstatus == null){
    					showstatus = "";
    				}
    				if(venueName == null){
    					venueName = "";
    				}
    				if(pricestr == null){
    					pricestr = "<em>价格待定</em>";
    				}else{
    					if(status == 2 || status == 5 || status == 11){
    						pricestr = "<em>价格待定</em>";
    					}else{
    						pricestr = "<em>" + pricestr + "元</em>";
    					}
    				}
    				
    				if(showtime == null){
    					showtime = "";
    				}
    				if(description == null){
    					description = "";
    				}



					//优惠促销
					var favourablelist=item.favourable;
					var favourableHtml='';
					var favourableHtml_on='';

						favourableHtml+='<p class="search_pic_icon">';
					if(null!=favourablelist && favourablelist.length>0){
						for(var kk=0;kk<favourablelist.length;kk++){
							var favourables=favourablelist[kk];
							var favourable=	favourables.split("|||");
							if( favourable.length>0){
								var len = favourable[1].length;
								var le =len-1;
	                            if(favourable[1].substring(le,len)==';'){
	                        	   favourable[1] = favourable[1].substring(0,le).replace(/;/g,'；');
	                             }
								if(favourable[0]==1){
									favourableHtml_on+='<p>';
									favourableHtml_on+='<span class="s_icon s_icon_z">折扣</span>';
									favourableHtml_on+=' <span class="s_txt">'+favourable[1]+'</span>';
									favourableHtml_on+='</p>';
									favourableHtml+='<span class="s_icon s_icon_z">折扣</span>';
								}else if(favourable[0]==2){
									favourableHtml_on+='<p>';
									favourableHtml_on+='<span class="s_icon s_icon_m">满减</span>';
									favourableHtml_on+=' <span class="s_txt">'+favourable[1]+'</span>';
									favourableHtml_on+='</p>';
									favourableHtml+='<span class="s_icon s_icon_m">满减</span>';
								}else if(favourable[0]==3){
									favourableHtml_on+='<p>';
									favourableHtml_on+='<span class="s_icon s_icon_l">0元</span>';
									favourableHtml_on+=' <span class="s_txt">'+favourable[1]+'</span>';
									favourableHtml_on+='</p>';
									favourableHtml+='<span class="s_icon s_icon_l">0元</span>';
								}else if(favourable[0]==4){
									favourableHtml_on+='<p>';
									favourableHtml_on+='<span class="s_icon s_icon_y">一口价</span>';
									favourableHtml_on+=' <span class="s_txt s_txt_y">'+favourable[1]+'</span>';
									favourableHtml_on+='</p>';
									favourableHtml+='<span class="s_icon s_icon_y">一口价</span>';
								}
							}
						}
					}
					var tagsHtml = '';
					var tagsHtml_on = '';
					if(null!=showtags && showtags.length>0){
						for(var zz=0; zz<showtags.length;zz++){
							var showtag=eval('(' + showtags[zz] + ')'); 
							tagsHtml_on+='<p>';
							if(showtag.len > 12) {
								tagsHtml_on+='<span class="s_icon s_icon_cm" style="width:82px">'+showtag.name+'</span>';
							}else{
								tagsHtml_on+='<span class="s_icon s_icon_cm">'+showtag.name+'</span>';
							}
							
							tagsHtml_on+='</p>';
							if(showtag.len > 12) {
								tagsHtml+='<span class="s_icon s_icon_cm" style="width:82px">'+showtag.name+'</span>';
							}else{
								tagsHtml+='<span class="s_icon s_icon_cm">'+showtag.name+'</span>';
							}
							
						}
					}
					
					//选座处理
					if(isxuanzuo == 1) {
						tagsHtml+='<span class="seat-pic">选座</span>';
						tagsHtml_on+='<span class="seat-pic-on">选座</span>';
					}
						favourableHtml+=tagsHtml +'</p>';

					//venueHtml 场馆显示
					var venueHtml='';
					if(venueId != '' &&venueName!='' && venuecity !=''){
						var venueDesc=venueName+' - '+ (venuecity? venuecity : '');
					    venueHtml+='<a href="//piao.damai.cn/'+projectid+'.html"  target="_blank" class="infos" title="'+venueDesc+'">'+venueDesc+'</a>';
					}else if(venueId != '' &&venueName!='' && venuecity ==''){
						var venueDesc=venueName;
						venueHtml+='<a href="//piao.damai.cn/'+projectid+'.html"  target="_blank" class="infos" title="'+venueDesc+'">'+venueDesc+'</a>';
					} else{

						venueHtml +='<a href="//piao.damai.cn/'+projectid+'.html" target="_blank" class="infos" >场馆待定</a>';
					}
					// <p class="search_pic_icon"><span class="s_icon s_icon_m">满减</span> <span class="s_icon s_icon_l">0元</span> </p>
	        					 
					li += '<div class="search_pic_item">';
					li += ' <div class="search_pic_item_ct" style="display:block;">';
					li += '  <div class="search_pic_img"><a id="search_log_pic_'+projectid+'" href="//piao.damai.cn/'+projectid+'.html" onclick="toItem('+projectid+','+pNum+','+cliNum+','+nameNoHtml+')" target="_blank" ><img src="//pimg.damai.cn/perform/project/'+imgurl+'/'+projectid+'_n.jpg" alt=""  ></a></div>';
					li += '  <div class="search_pic_txt">';
					li += '   <h3><a id="search_log_'+projectid+'" href="//piao.damai.cn/'+projectid+'.html" onclick="toItem('+projectid+','+pNum+','+cliNum+','+nameNoHtml+')" target="_blank">'+ ( venuecity?' 【'+venuecity+'】':'') +name+'</a></h3>';
					li += '    <p class="search_txt_time c3"><a href="#" class="search_txt_time_icon"></a>'+showtime+'</p>';
					li += '    <p class="search_txt_piao"><em>' + pricestr + '</em>'+showstatus+'</p>';
					
					if(status!=2 && status!=11){
						li += favourableHtml;
					}else {
						li += '<p class="search_pic_icon">' + tagsHtml + '</p>';
					}

					li += '  </div>';
					li += '</div>';
					li += '<div class="search_pic_item_ct_on" style="display:none">';
					li += '  <div class="search_pic_img"><a id="search_log_pic_'+projectid+'" href="//piao.damai.cn/'+projectid+'.html" onclick="toItem('+projectid+','+pNum+','+cliNum+','+nameNoHtml+')" target="_blank" ><img src="//pimg.damai.cn/perform/project/'+imgurl+'/'+projectid+'_n.jpg" alt=""  ></a>';
					li+=venueHtml;
					li+='</div>';
					li += '  <div class="search_pic_txt">';
					li += '   <h3><a id="search_log_'+projectid+'" href="//piao.damai.cn/'+projectid+'.html" onclick="toItem('+projectid+','+pNum+','+cliNum+','+nameNoHtml+')" target="_blank">'+ ( venuecity?' 【'+venuecity+'】':'') +name+'</a></h3>';
					li += '    <p class="search_txt_time c3"><a href="#" class="search_txt_time_icon"></a>'+showtime+'</p>';

					li += '    <p class="search_txt_piao"><em>'+pricestr+'</em>'+showstatus+'</p>';
					if(status!=2 && status!=11){
						li += favourableHtml_on;
					}
					li += tagsHtml_on;
					li += '  </div>';
					li += '</div>';
					li += '</div>';
	        					
        	}
        	j = k;
        	li +="</li>";
        	$("#content_list").append(li);
	        	
	        }
	        setShowSetting(1);
	}
}

function setShowSetting(showpic){
	if(showpic==1){
		$('.search_pic_item').hover(function(){
	  		$(this).find('.search_pic_item_ct').hide();
			$(this).find('.search_pic_item_ct').next().show();
		},function(){
			$(this).find('.search_pic_item_ct').next().hide();
			$(this).find('.search_pic_item_ct').show();
		});
		$('.search_lis_on').attr('class','search_lis');
		$('.search_icon').attr('class','search_icon_on');
	}else{
		$('.search_lis').attr('class','search_lis_on');
		$('.search_icon_on').attr('class','search_icon');
	}
	//$("img").lazyload({effect: "fadeIn", failurelimit: 0, threshold: 0});
	
}
/**
 * 设置列表内容显示
 * @param pageData
 */

function setContent(pageData){
	var resultData = pageData.resultData;
	
	var keyword = $("#keyword").val();
    var  pNum=pageData.currentPage;
    if(pageData != null && resultData != null && resultData.length > 0){
		var listmodle=$("#listmodle").val();
		if(listmodle==0){
			//列表模式
			for(var i = 0; i < resultData.length; i++){
				var cliNum=i+1;
				var item = resultData[i];
				var imgurl = item.imgurl;
				var projectid = item.projectid;
				var name = item.name;
				var nameNoHtml = item.nameNoHtml;
				var description = item.description;
				var showtime = item.showtime;
				var venueName = item.venue;
				var showstatus = item.showstatus;
				var pricestr = item.price_str;
				var isxuanzuo = item.isxuanzuo;
				var iseticket = item.iseticket;
				var status = item.sitestatus;
				var venueId = item.venueid;
				var venuecity = item.venuecity;
				var showtags = item.showtags;
				
				if(showstatus == null){
					showstatus = "";
				}
				if(venueName == null){
					venueName = "";
				}
				if(pricestr == null){
					pricestr = "<em>价格待定</em>";
				}else{
					if(status == 2 || status == 5 || status == 11){
						pricestr = "<em>价格待定</em>";
					}else{
						pricestr = "<em>" + pricestr + "元</em>";
					}
				}
				
				if(showtime == null){
					showtime = "";
				}
				if(description == null){
					description = "";
				}
				//优惠促销
				var favourablelist=item.favourable;
				var favourableHtml="";
				if(null!=favourablelist && favourablelist.length>0){

					for(var kk=0;kk<favourablelist.length;kk++){
						var favourables=favourablelist[kk];
						var favourable=	favourables.split("|||");
						if(null!=favourable && favourable.length>0){
							var len = favourable[1].length;
							var le =len-1;
                            if(favourable[1].substring(le,len)==';'){
                        	   favourable[1] = favourable[1].substring(0,le).replace(/;/g,'；');
                             }
							if(favourable[0]==1){
								favourableHtml+='<p class="c1   search_list_icon"><em class="l_icon l_icon_z">折扣</em><span>'+favourable[1]+'</span></p>';
							}else if(favourable[0]==2){
								favourableHtml+='<p class="c1   search_list_icon" ><em class="l_icon l_icon_m">满减</em><span>'+favourable[1]+'</span></p>';
							}else if(favourable[0]==3){
								favourableHtml+='<p class="c1   search_list_icon" ><em class="l_icon l_icon_l">0元</em><span>'+favourable[1]+'</span></p>';
							}else if(favourable[0]==4){
								favourableHtml+='<p class="c1   search_list_icon" ><em class="l_icon l_icon_y">一口价</em><span  class="t-y">'+favourable[1]+'</span></p>';
							}
						 }
					}
                   }
				 
				//列表模式
				$("#content_list").removeClass("search_pic_list");
				var li ='<li>';
//					li += '<div class="search_img"><a href="//item.damai.cn/'+projectid+'.html" target="_blank"><img src="//pimg.damai.cn/perform/project/'+imgurl+'/'+projectid+'_n_109_144.jpg" alt="" width="115" height="155" title="1" /></a></div>';
				li += '<div class="search_img"><a id="search_log_'+projectid+'" href="//piao.damai.cn/'+projectid+'.html" onclick="toItem('+projectid+','+pNum+','+cliNum+','+nameNoHtml+')" target="_blank" title="'+nameNoHtml+'"><img src="//pimg.damai.cn/perform/project/'+imgurl+'/'+projectid+'_n.jpg" alt="" width="115" height="155" /></a></div>';
				li += '<div class="search_txt">';
				li += '<h3>'+  (venuecity?'【'+ venuecity +'】': '')  +'<a id="search_log_'+projectid+'" href="//piao.damai.cn/'+projectid+'.html" onclick="toItem('+projectid+','+pNum+','+cliNum+','+nameNoHtml+')" target="_blank">'+name+'</a></h3>';

			    li += '<p class="search_txt_cut c3">'+description+'</p>';
				li += '<p  class="search_txt_time c3"><a href="#" class="search_txt_time_icon"></a>'+showtime+'</p>';



				//venueHtml 场馆显示
				var venueHtml='';
				if((null !=venueId && venueId != '0') && (null!=venueName && venueName!='暂无') && ( null != venuecity && venuecity !='')){
					li +=' <p class="c1"><a href="//venue.damai.cn/venue_'+venueId+'.html" target="_blank"  class="search_txt_site_icon">'+venueName+' - '+ (venuecity? venuecity : '') +'</a></p>';
				}else if((null !=venueId && venueId != '0') && (null!=venueName && venueName!='暂无')){
					li +=' <p class="c1"><a href="//venue.damai.cn/venue_'+venueId+'.html" target="_blank"  class="search_txt_site_icon">'+venueName+'</a></p>';
				} else{

					li +=' <p class="search_txt_site_icon">场馆待定</p>';
				}


				li +='<p class="search_txt_piao">' + pricestr + ''+showstatus+'</p>';
				if((isxuanzuo != null && isxuanzuo == 1) ||(iseticket != null && iseticket == 1)||(null!=showtags && showtags.length>0) ){
					li += '<div class="search_txt_order">';
					li += '<p class="search_txt_line clear">';
					//
					if(isxuanzuo != null && isxuanzuo == 1){
						li += '<a class="search_txt_icon" id="search_log_'+projectid+'" href="//seat.damai.cn/elist/'+projectid+'" target="_blank">在线选座</a>';
					}

					//
					if(iseticket != null && iseticket == 1){
						li += '<a class="search_txt_icon2" id="search_log_'+projectid+'" href="//piao.damai.cn/'+projectid+'.html" target="_blank">电子票</a>';
					}
					
					if(null!=showtags && showtags.length>0){
						for(var zz=0; zz<showtags.length;zz++){
							var showtag=eval('(' + showtags[zz] + ')'); 
							li += '<a class="search_txt_icon5" href="//piao.damai.cn/'+projectid+'.html" target="_blank">'+showtag.name+'</a>';
						}
					}
					li += '</p>';
					li += '</div>';
				}

				if(status!=2 && status!=11){
					li += favourableHtml;
				}
				li += '</div>';
				li += '</li>';
				$("#content_list").append(li);
			}
			setShowSetting(0);
		}else{
			//大图模式
			setContent_Pic(pageData);
		}
		
		
		//增加搜索结果评价
//		var html ='                    <li class="search_list_good">';
//		html +='                    	<dl class="search_good">';
//		html +='                        	<dt>您对搜索结果：</dt>';
//		html +='                            <dd>	';
//		html +='                            	<a class="search_good_fine" href="javascript:searchFeedBack(1)"></a>';
//		html +='                            	<a class="search_good_bad" href="javascript:void(0)"></a>';
//		html +='                                <p class="search_good_tips"><strong></strong><span>感谢您对大麦网的支持</span><em class="search_good_arrow"></em></p>';
//		html +='                                <div class="search_good_box">';
//		html +='                                	<a class="search_good_cloae" title="关闭" href="#"></a>';
//		html +='                                    <em class="search_good_arrow2"></em>';
//		html +='                                	<h5>您遇到了什么问题？</h5>';
//		html +='                                    <p class="search_good_txt">大麦搜索持续优化中，我们需要您的建议和想法~~~</p>';
//		html +='                                    <textarea id="search_feedback_suggest"></textarea>';
//		html +='                                    <p class="search_good_txt">我们希望留下您的联系方式，便于我们后期回访和调查。您的建议将是我们今后改进的方向~~~</p>';
//		html +='                                    <div class="search_good_edit">';
//		html +='                                    	<p>';
//		html +='                                        	<span>邮　箱：</span>';
//		html +='                                        	<input type="text" id="search_feedback_mail"/>';
//		html +='                                            <strong>非必填</strong>';
//		html +='                                        </p>';
//		html +='                                    	<p>';
//		html +='                                        	<span>手机号：</span>';
//		html +='                                        	<input type="text" id="search_feedback_phone"/>';
//		html +='                                            <strong>非必填</strong>';
//		html +='                                        </p>';
//		html +='                                    </div>';
//		html +='                                    <a class="search_good_btn" href="javascript:searchFeedBack(2)">提  交</a>';
//		html +='                                </div>';
//		html +='                            </dd>';
//		html +='                        </dl>';
//		
//		$("#content_list").append(html);
		
		
		//搜索结果评价
		$('.search_good_fine').click(function () {
			$('.search_good_box').hide();
			$('.search_good_tips').fadeIn(1000);
			setTimeout(function () {
				$(".search_good_tips").hide();
			}, 2000);
		});   

		$('.search_good_bad').click(function () {
			$('.search_good_tips').hide();
			$('.search_good_box').show();
			$('.search_good_box .search_good_cloae').click(function() {
				$('.search_good_box').hide();
			  });
		}); 
		
		setPage(pageData);
	}
	else{
		
		var html = '<li class="now">没有找到符合条件的商品。您可以减少筛选条件重新搜索。</li>';
		$("#content_list").append(html);
		
	}
	
}

function setPage(pageData){
	if(pageData != null){
		var curpage = pageData.currentPage;
		var totalPage = pageData.totalPage;
		var previousPage = pageData.previousPage;
		var nextPage = pageData.nextPage;
		var pg = '<li id="search_list_page_tj" class="search_list_page">';
		pg += '   <div class="search-page-box">';
		pg += '   <ul class="search-page-list">';
		pg += '   <ul class="search-page-num">';
		if(curpage == 1){
			pg += '<li class="search-pagePrev gray">&lt; 上一页</li>';
		}
		else{
			pg += ' <li class="search-pagePrev" onclick="pagesAjax('+previousPage+')" name="pageA" >&lt;上一页</li>';
		}
		
		if(curpage < 6 || totalPage == 6){
			var frpg = 1;
			var sepg = 6;
			if((totalPage > 0) && (totalPage < 6)){
				sepg = totalPage;
			}
			else if(totalPage == 0){
				sepg = 1;
			}
			for(var i = frpg;i<=sepg;i++){
				if(i==curpage){
					pg += '<li  class="search-page-act" onclick="pagesAjax('+i+')">'+i+'</li>';
				}
				else{
					pg += '<li onclick="pagesAjax('+i+')" >'+i+'</li>';
				}
			}
			if(totalPage > 6){
				pg += '<li pagen="morePage" class="search-page-more">...</li>';
				pg += '<li onclick="pagesAjax('+ totalPage +')" dataId="'+ totalPage +'" >'+ totalPage +'</li>';
			}
		}
		else if((curpage >= 6) && (curpage < pageData.totalPage)){
			var frpg = curpage - 2;
			var sepg = curpage - 1;
			
			pg += '<li onclick="pagesAjax(1)">1</li>';
			pg += '<li pagen="morePage" class="search-page-more">...</li>';
			
			for(var i = frpg;i<=sepg;i++){
				pg += '<li onclick="pagesAjax('+i+')">'+i+'</li>';
			}
			pg += '<li  class="search-page-act"  onclick="pagesAjax('+curpage+')">'+curpage+'</li>';
			frpg = curpage + 1;
			sepg = curpage + 2;
			if(sepg >= totalPage){
				sepg = totalPage;
			}
			for(var i = frpg;i<=sepg;i++){
				pg += '<li onclick="pagesAjax('+i+')">'+i+'</li>';
			}
			if(sepg < totalPage && totalPage - sepg > 1){
				pg += ' <li pagen="morePage" class="search-page-more">...</li>';
				pg += '<li onclick="pagesAjax(\''+ totalPage +'\')" dataId="'+ totalPage +'" >'+ totalPage +'</li>';
			}else if(sepg < totalPage && totalPage - sepg == 1){
				pg += '<li onclick="pagesAjax(\''+ totalPage +'\')" dataId="'+ totalPage +'" >'+ totalPage +'</li>';
			}
		}
		else{
			var frpg = curpage - 6;
			var sepg = curpage;
			
			pg += '<li onclick="pagesAjax(1)">1</li>';
			pg += '<li pagen="morePage" class="search-page-more">...</li>';
			
			
			if(frpg == 0){
				frpg=1;
			}
			for(var i = frpg;i<=sepg;i++){
				if(i==curpage){
					pg += '<li  class="search-page-act" onclick="pagesAjax('+i+')">'+i+'</li>';
				}
				else{
					pg += '<li onclick="pagesAjax('+i+')">'+i+'</li>';
				}
			}
		}
		
		if(curpage == totalPage){
			pg += '<li class="search-pageNext gray">下一页 &gt;</li>';
		}
		else{
			pg += ' <li class="search-pageNext" onclick="pagesAjax('+nextPage+')" dataId="'+nextPage+'">下一页&gt;</li>';
		}
		pg += '</ul>';
		pg += '</ul>';
		pg += '</div>';
		pg += '</li>';
		
		if(totalPage!= 1){
			$("#content_list").append(pg);
		}
	}
}

function setTopPage(pageData){
	if(pageData != null){
		var currentPage = pageData.currentPage;
		var totalPage = pageData.totalPage;
		var pg = '';
		if(currentPage == 1){
			pg += '<a href="javascript:void(0)" class="search_sort_prev_gray"></a>';
		}
		else{
			pg += '<a href="javascript:void(0)" class="search_sort_prev" onclick="pagesAjax('+pageData.previousPage+')"></a>';
		}
		pg += '<p class="search_sort_txt"><span>'+pageData.currentPage+'</span>/<span>'+pageData.totalPage+'</span></p>';
		if(currentPage == totalPage){
			pg += '<a class="search_sort_next_gray"></a>';
		}
		else{
			pg += '<a class="search_sort_next" href="javascript:void(0)" onclick="pagesAjax('+pageData.nextPage+')"></a>';
		}
		
		
		$(".search_sort_num").empty();
		$(".search_sort_num").append(pg);
	}
}

/*function nullKeyword(){   //
	var html ='<div class="search_box2">';
	html +='<h4>想订阅您感兴趣演出信息吗？</h4>';
	html +='<p>赶快来试试吧，我们会及时通知您哦。</p>';
	html +='<a href="//dingyue.damai.cn/subType.do?platformId=4" target="_blank" id="search_dy">马上订阅</a>';
	html +='</div></br>';
	$(".search_right_head").html(html);
}	*/			

function keywordHit(){
	var keyword = $("#keyword").val();
	//var keyword = $("#searchText").val();
	if (keyword == null || keyword == "") {
		//nullKeyword();
		return;
	}
	
	if(keyword == '请输入演出，艺人，场馆名称…'){
		//nullKeyword();
		return;
	}
	
	var param = {
			"keyword" : keyword
	};
	
	
	jQuery.ajax({
		url : "keywordhit.html",
		data : param,
		type : "POST",
		dataType : "json",
		error : function() {
//			artistAround(keyword);
		},
		success : function(data) {
			if(data!= null){
				var html = '';
//				if(data.keywordHitVo==null||data.keywordHitVo.length<=0){
//					artistAround(keyword);
//				}
				$(data.keywordHitVo).each(function(i,vo){
					
					//TODO：艺人
					if(vo.type == 2  || vo.type == 1){
						var d = vo.artistDTO;
						var issub = vo.sub;
//						if(i==0&& d!=null&& d.name!=''&& d.name!=null){
//							artistAround(d.name);
//						}
						html += '';
						
						html += '<div class="search_box">';
						html += '<div class="search_box_fast clear">';
						html += '<span class="search_box_pic"><a href="//www.damai.cn/artist_'+ d.pkid +'.html" title="'+ d.name +'" target="_blank"><img title = "'+ d.name +'" src="'+ d.imgsource +'" width="95" height="95" alt="" /></a></span>';
						html += '<div class="search_box_notice">';
						html += '<h5 title="'+ d.name +'"><a href="//www.damai.cn/artist_'+ d.pkid +'.html" target="_blank">'+ cutstrgass(d.name,7,14) +'</a></h5>';
						html += '<p>通知我Ta的下场演出</p>';
						var unsub ='';
						var sub ='';
						if(issub == false){
							 unsub = "block";
							 sub = "none";
						}else{
							 unsub ="none";
							 sub = "block";
						}
						html += '<a href="javascript:void(0)" onclick = "pushsubscription('+vo.type+','+d.pkid+',\''+d.name.replace("'","\\'")+'\', '+ i +')" class="search_box_key" id ="unSub_'+d.pkid+'" style="display:'+ unsub +'">一键订阅</a>';
						html += '<a href="javascript:void(0)" onclick ="cancelsubscription('+vo.type+','+d.pkid+',\''+d.name.replace("'","\\'")+'\', '+ i +')" class="search_box_key search_box_none" id ="isSub_'+d.pkid+'" style="cursor:pointer;display:'+ sub +'">已订阅</a>';
						
						html += '</div>';
		                html += '</div>';
						//html += '<p title="'+ d.name +'">&nbsp;&nbsp;&nbsp;&nbsp;<a' +
						//		' href="//t.damai.cn/download/1010003" target="_blank">'+ cutstrgass('了解【<font' +
						//				' color="red">'+ d.name+'</font>】更多行程和动态',140,14)+'</a></p>';
						//html +='<a class="grasp-more" href="//t.damai.cn/download/1010003"' +
						//		' target="_blank"><span>了解【</span><em>'+ d.name+'</em><span>'+'】更多行程和动态</span></a>'
						html += '</div>';
					}																	
						
					//TODO: 场馆
					if(vo.type == 3){
						var d = vo.venueDTO;
						var issub = vo.sub;
						
							
						
						html += '';
						
						html += '<div class="search_box">';
						html += '<div class="search_box_fast clear">';
						html += '<span class="search_box_pic"><a href="//venue.damai.cn/venue_'+vo.venuepk+'.html" target="_blank"><img title = "'+ d.name +'" src="'+ vo.venuepic +'" width="95" height="95" alt="" /></a></span>';
						html += '<div class="search_box_notice">';
						html += '<h5 title="'+ d.name +'" ><a href="//venue.damai.cn/venue_'+vo.venuepk+'.html" target="_blank">'+ cutstrgass(d.name,7,14) +'</a></h5>';
						html += '<p>通知我这儿的演出</p>';
						
		                if(issub == false){    
		                	html += '<a href="javascript:void(0)" onclick = "pushsubscription('+vo.type+','+vo.venuepk+',\''+ d.name.replace("'","\\'") +'\', '+ i +')" class="search_box_key" id ="sub_'+vo.venuepk+'">一键订阅</a>';
						}else{
							html += '<a href="javascript:void(0)" class="search_box_key search_box_none" id ="sub_'+vo.venuepk+'" style="cursor:pointer">已订阅</a>';
						}
						html += '</div>';
		               
						
						html += '</div>';
						html += '</div>';
						
						
						
					}
					
				});
				
				$(".search_right_head").html(html);
			}else{
//				artistAround(keyword);
			}
			
			addClickEvent();
			cancelSub();
		}
	});
	return null;
}

function checkInt(obj){
	if(obj == null || obj == undefined)
		return 0;
	else
		return obj;
}


function joinmaitian(maitianId){
	
	var param = {
			"maitianId" : maitianId
	};
	
	jQuery.ajax({
		url : "joinmaitian.html",
		data : param,
		type : "POST",
		dataType : "json",
		error : function() {
			//alert("服务器忙,请稍候重试...");
		},
		success : function(data) {
			try{
				if(data.joinres == "加入成功"){
					window.open("//t.damai.cn/fanclub/topics/"+ maitianId, "_blank");
					window.location.reload();
					//TODO:
				}else{
					window.open("//t.damai.cn/fanclub/topics/"+ maitianId, "_blank");
				}
					
			}catch (e) {
			}
			
		}
	});
}


function addClickEvent(){
	if($('.search_tab1')!= undefined && $('.search_tab1')!= null)
		tab($('.search_tab1'));
	if($('.search_tab2')!= undefined && $('.search_tab2')!= null)
		tab($('.search_tab2'));

    function tab(obj) {
        obj.find('.tab a').click(function () {
            obj.find('.con').hide().end().find('.con').eq(obj.find('.tab > a').index(this)).show().end().end().find('a').removeClass('active').end().find(this).addClass('active');
        });
    };
    
    $('#search_vedio').maiPlayer({speedSwitch: 5000, imageTitle: true, autoPlay: true, numPage: false});
}

function cutstrgass(keyword,clength,elength){
	var des = "";
	if(/[^\x00-\xff]$/.test(keyword)){
	   if(keyword!=undefined && keyword!=null)
		  des = keyword.length > clength? keyword.substring(0,clength)+"...":keyword;
    }else{
	   if(keyword!=undefined && keyword!=null)
		  des = keyword.length > elength? keyword.substring(0,elength)+"...":keyword;	
    }
	return des;
}

function cutstrlength(keyword,ctlength){
	if(keyword==undefined || keyword==null){
		return;
	}
	else if(keyword.length < ctlength){
		return  keyword;	
	}
	
	 var char_length = 0;
     for (var i = 0; i < keyword.length; i++){
        // var son_str = keywordstr.charAt(i);
        // encodeURI(son_str).length > 2 ? char_length += 1.1 : ((/^[a-z]+$/.test( son_str ))? char_length += 0.6 : char_length += 0.7);
            if(/^[a-z]+$/.test(keyword[i])){
				char_length += 0.5;
			}
			else if(/^[A-Z]+$/.test(keyword[i])){
				char_length += 0.72;
			}
			else if(/[^\x00-\xff]$/.test(keyword[i])){
    		 char_length += 1;
			}
			else if(/^[0-9]*$/.test(keyword[i])){
				char_length += 0.55;
			}
			else{
				char_length += 0.25;
			}
    	 if (char_length >= ctlength){
             var sub_len = char_length == ctlength ? i+1 : i;
             return keyword.substring(0, sub_len)+"...";
             break;
         }
     }
     return keyword;
}

function setNavigation(data){
	var size = data.pageData.totalResults;
	var keyword = $("#keyword").val();
	var ctl = $("#category_name").val();
	var cty = $("#city_name").val();
	var ht = "";
	var ht1 = '';
	var showHead = data.showHead;
	
	var des = cutstrlength(keyword,35);
	
//	if(cty != null && cty != ""){
//		ht +=cty+'<em class="top_c1">></em>';
//	}
//	if(ctl != null && ctl != ""){
//		ht +=ctl+'<em class="top_c1">></em>';
//	}
//	if(keyword == null || keyword == ""){
//		keyword = "全部";
//	}	
	if(keyword!= "" && keyword!= null && keyword!= undefined){
		ht1 += '搜索<em>“</em><span class="cf" title = '+keyword+'> '+ des +' </span><em>”</em>, 共<span class="cf" >'+size+'</span>个商品'//'+size+'</span>个';
		if(showHead!="" && showHead!=null && showHead!=undefined){
			ht1 += showHead;
		}
	}else{
		ht1 += '共<span class="cf" >'+size+'</span>个商品'//'+size+'</span>个';
	}
	
	
	$("#navigation_show").html(ht1);
	
	//$(".search_sort_com").html('共<strong>'+ size +'</strong>个商品');
}


var currentClickTag = 0; //0未选  1先城市  2先分类
var clickscl = 0;       

function cityfilter(cty,obj){
	var keyword = $("#keyword").val();
	var ctl = $("#category_name").val();
	var tn = $("#tag_names").val();
	var sctl = $("#subcategory_name").val();
	if(currentClickTag == 1 && keyword!=''){
		ctl = "";
		$("#category_name").val("");
		sctl = "";
		$("#subcategory_name").val("");
	}
		
	
	if(ctl == "")
		currentClickTag = 1;
	
	if(cty == "" && ctl == "" && tn == "")
		currentClickTag = 0;
	
	var isSingleChar = $("#isSingleChar").val();
	var param = {
			"keyword" : keyword,
			"cty":cty,
			"ctl":ctl,
			"tn":tn,
			"sctl":sctl,
			"singleChar":isSingleChar
		};

	$("#city_name").val(cty);
	searchajax(param);
	$("#search_city_line a").removeClass("active");
	$(obj).addClass("active");
}


function categoryfilter(ctl,obj){
	var keyword = $("#keyword").val();
	var cty = $("#city_name").val();
	var isSingleChar = $("#isSingleChar").val();

	$("#subcategory_name").val("");
	var sctl = $("#subcategory_name").val();
	
	if(ctl == ""){
		sctl ="";
		$("#subcategory_name").val("");
	}
	
	if(currentClickTag == 2){
		$("#city_name").val("");
		cty = "";
	}
	
	var param = {
			"keyword" : keyword,
			"cty":cty,
			"ctl":ctl,
			"tn":"",
			"sctl":sctl,
			"singleChar":isSingleChar
		};
	$("#category_name").val(ctl);
	$("#tag_names").val("");
	
	if(cty == "")
		currentClickTag = 2;
	
	if(cty == "" && ctl == "")
		currentClickTag = 0;
	
	searchajax(param);
	$("#category_filter_id a").removeClass("active");
	$(obj).addClass("active");
}

function tagfilter(tn,obj){
	var keyword = $("#keyword").val();
	var cty = $("#city_name").val();
	var isSingleChar = $("#isSingleChar").val();

	$("#subcategory_name").val("");
	var sctl = $("#subcategory_name").val();
	
	if(currentClickTag == 2){
		$("#city_name").val("");
		cty = "";
	}
	
	if(cty == "")
		currentClickTag = 2;
	
	if(cty == "" && tn == "")
		currentClickTag = 0;
	
	var param = {
			"keyword" : keyword,
			"cty":cty,
			"tn":tn,
			"sctl":sctl,
			"ctl":"",
			"singleChar":isSingleChar
		};
	$("#tag_names").val(tn);
	$("#category_name").val("");
	
	searchajax(param);
	$("#category_filter_id a").removeClass("active");
	$(obj).addClass("active");
}

function sctlfilter(sctl,obj){
	var keyword = $("#keyword").val();
	var cty = $("#city_name").val();
	var isSingleChar = $("#isSingleChar").val();
	var ctl = $("#category_name").val();
	var tn = $("#tag_names").val();
	clickscl =1;
	
	var param = {
			"keyword" : keyword,
			"cty":cty,
			"sctl":sctl,
			"ctl":ctl,
			"tn":tn,
			"singleChar":isSingleChar
		};
	
	$("#subcategory_name").val(sctl);
	searchajax(param);
	$("#subcategory_filter_id a").removeClass("active");
	$(obj).addClass("active");
}


function setCityLineByCityChoose(data){
	var factmap = data.pageData.factMap;
	var ctl = data.ctl;
	var cty = data.cty;
	var sctl = data.sctl;
	var tn = data.tn;
	if(ctl==undefined){
		ctl='';
	}
	if(cty==undefined){
		cty='';
	}
	if(tn==undefined){
		tn='';
	}
	if(sctl==undefined){
		sctl='';
	}
	if(sctl == null)
		sctl = "";
	
	if(factmap!= undefined){
		var categroys = factmap.categoryname;
		var citys = factmap.cityname;
		var tagnames = factmap.tag_names;
		var subcategorynames = factmap.subcategoryname;
		var categorynameend = factmap.categorynameend;
		
		if(currentClickTag == 0){
			var html = "";
			
			var cityhtml = "";
			cityhtml +='<dt>城　市：</dt>';
			cityhtml +='<dd><a href="javascript:void(0)" onclick="cityfilter(\'\',this)" '+ (cty == ""? "class=\"active\"":"") +'  >全部</a></dd>';
			cityhtml +='<dd class="search_city_num" id="search_city_num_tj">';
			cityhtml +='<ul class="search_city_all clear">';
			if(citys){
				$(citys).each(function(i,item){
//					cityhtml +='<li><a href="javascript:void(0)" onclick="cityfilter(\''+ item.name +'\',this)"  '+ (cty == item.name? "class=\"active\"":"") +' >'+ item.name +'<span>('+ item.count +')</span></a></li>';
					cityhtml +='<li><a href="javascript:void(0)" onclick="cityfilter(\''+ item.name +'\',this)"  '+ (cty == item.name? "class=\"active\"":"") +' >'+ item.name +'</a></li>';
				});
			}
			cityhtml +='</ul>';
			cityhtml +='</dd>';
			
			$("#search_city_line").html(cityhtml);
			
			var categroyhtml = "";
			categroyhtml +='<dt>分　类：</dt>';
			categroyhtml +='<dd><a href="javascript:void(0)" onclick="categoryfilter(\'\',this)" '+ ((ctl == ""&&tn=="")? "class=\"active\"":"") +'>全部</a></dd>';
			categroyhtml +='<dd class="search_city_num">';
			categroyhtml +='<ul class="clear">';
			if(categroys){
				$(categroys).each(function(i,item){
//					categroyhtml +='<li><a href="javascript:void(0)" onclick="categoryfilter(\'' +item.name+ '\',this)"  '+ (ctl == item.name? "class=\"active\"":"") +' >' +item.name+ '<span>(' +item.count+ ')</span></a></li>';
					categroyhtml +='<li><a href="javascript:void(0)" onclick="categoryfilter(\'' +item.name+ '\',this)"  '+ (ctl == item.name? "class=\"active\"":"") +' >' +item.name+ '</a></li>';
				});
			}
			if(tagnames){
				$(tagnames).each(function(i,item){
//					categroyhtml +='<li><a href="javascript:void(0)" onclick="tagfilter(\'' +item.name+ '\',this)">' +item.name+ '<span>(' +item.count+ ')</span></a></li>';
					categroyhtml +='<li><a href="javascript:void(0)" onclick="tagfilter(\'' +item.name+ '\',this)"  '+ (tn == item.name? "class=\"active\"":"") +' >' +item.name+ '</a></li>';
				});
			}
			if(categroys){
				$(categorynameend).each(function(i,item){
//					categroyhtml +='<li><a href="javascript:void(0)" onclick="categoryfilter(\'' +item.name+ '\',this)"  '+ (ctl == item.name? "class=\"active\"":"") +' >' +item.name+ '<span>(' +item.count+ ')</span></a></li>';
					categroyhtml +='<li><a href="javascript:void(0)" onclick="categoryfilter(\'' +item.name+ '\',this)"  '+ (ctl == item.name? "class=\"active\"":"") +' >' +item.name+ '</a></li>';
				});
			}
			
			categroyhtml +='</ul>';
			categroyhtml +='</dd>';

			$("#category_filter_id").html(categroyhtml);
			
			
		}
		

		if(currentClickTag == 2){
			if(cty == ""){
				var cityhtml = "";
				cityhtml +='<dt>城　市：</dt>';
				cityhtml +='<dd><a href="javascript:void(0)" onclick="cityfilter(\'\',this)" '+ (cty == ""? "class=\"active\"":"") +'  >全部</a></dd>';
				cityhtml +='<dd class="search_city_num">';
				cityhtml +='<ul class="search_city_all clear">';
				if(citys){
					$(citys).each(function(i,item){
//						cityhtml +='<li><a href="javascript:void(0)" onclick="cityfilter(\''+ item.name +'\',this)"  '+ (cty == item.name? "class=\"active\"":"") +' >'+ item.name +'<span>('+ item.count +')</span></a></li>';
						cityhtml +='<li><a href="javascript:void(0)" onclick="cityfilter(\''+ item.name +'\',this)"  '+ (cty == item.name? "class=\"active\"":"") +' >'+ item.name +'</a></li>';
					});
				}
				cityhtml +='</ul>';
				cityhtml +='</dd>';
				
				$("#search_city_line").html(cityhtml);
				
				
			}
		}
		if(currentClickTag == 1){
			if(ctl == "" && tn == ""){
				var categroyhtml = "";
				categroyhtml +='<dt>分　类：</dt>';
				categroyhtml +='<dd><a href="javascript:void(0)" onclick="categoryfilter(\'\',this)" '+ (ctl == ""? "class=\"active\"":"") +'>全部</a></dd>';
				categroyhtml +='<dd class="search_city_num">';
				categroyhtml +='<ul class="clear">';
				if(categroys){
					$(categroys).each(function(i,item){
//						categroyhtml +='<li><a href="javascript:void(0)" onclick="categoryfilter(\'' +item.name+ '\',this)"  '+ (ctl == item.name? "class=\"active\"":"") +' >' +item.name+ '<span>(' +item.count+ ')</span></a></li>';
						categroyhtml +='<li><a href="javascript:void(0)" onclick="categoryfilter(\'' +item.name+ '\',this)"  '+ (ctl == item.name? "class=\"active\"":"") +' >' +item.name+ '</a></li>';
					});
				}
				if(tagnames){
					$(tagnames).each(function(i,item){
//						categroyhtml +='<li><a href="javascript:void(0)" onclick="tagfilter(\'' +item.name+ '\',this)">' +item.name+ '<span>(' +item.count+ ')</span></a></li>';
						categroyhtml +='<li><a href="javascript:void(0)" onclick="tagfilter(\'' +item.name+ '\',this)">' +item.name+ '</a></li>';
					});
				}
				if(categroys){
					$(categorynameend).each(function(i,item){
//						categroyhtml +='<li><a href="javascript:void(0)" onclick="categoryfilter(\'' +item.name+ '\',this)"  '+ (ctl == item.name? "class=\"active\"":"") +' >' +item.name+ '<span>(' +item.count+ ')</span></a></li>';
						categroyhtml +='<li><a href="javascript:void(0)" onclick="categoryfilter(\'' +item.name+ '\',this)"  '+ (ctl == item.name? "class=\"active\"":"") +' >' +item.name+ '</a></li>';
					});
				}
				
				categroyhtml +='</ul>';
				categroyhtml +='</dd>';
				
				$("#category_filter_id").html(categroyhtml);
				
				
				
			}
		}
		
		
//		if( (ctl!= "" && ctl!= null) || (tn!= ""&& tn!= null) ){
		if( (ctl!= "" && ctl!= null) ){
			if(clickscl == 1){
				clickscl = 0;
			}else{
				
				var subcategroyhtml = "";
				subcategroyhtml +='<dt>子　类：</dt>';
				subcategroyhtml +='<dd><a href="javascript:void(0)" onclick="sctlfilter(\'\',this)" '+ (sctl == ""? "class=\"active\"":"") +'  >全部</a></dd>';
				subcategroyhtml +='<dd class="search_city_num">';
				subcategroyhtml +='<ul class="clear">';
				if(subcategorynames){
					$(subcategorynames).each(function(i,item){
//						cityhtml +='<li><a href="javascript:void(0)" onclick="cityfilter(\''+ item.name +'\',this)"  '+ (cty == item.name? "class=\"active\"":"") +' >'+ item.name +'<span>('+ item.count +')</span></a></li>';
						subcategroyhtml +='<li><a href="javascript:void(0)" onclick="sctlfilter(\''+ item.name +'\',this)"  '+ (sctl == item.name? "class=\"active\"":"") +' >'+ item.name +'</a></li>';
					});
				}
				subcategroyhtml +='</ul>';
				subcategroyhtml +='</dd>';
				
				$("#subcategory_filter_id").css("display","block");
				$("#subcategory_filter_id").html(subcategroyhtml).addClass("search_city_line");
			}
			
		}else{
			$("#subcategory_filter_id").html("").removeClass("search_city_line");;
			$("#subcategory_filter_id").css("display","none");	
		}
		
		setCityUpJs(data);
	}
}


function setCityLine(data){
	
	var factmap = data.pageData.factMap;
	var ctl = data.ctl;
	var cty = data.cty;
	
	
	
	if(factmap!= undefined){
		var categroys = factmap.categoryname;
		var citys = factmap.cityname;
		var tagnames = factmap.tag_names;
	
		var html = "";
		
		html +='<dl class="search_city_line" id = "search_city_line">';
		html +='<dt>城　市：</dt>';
		html +='<dd><a href="javascript:void(0)" onclick="cityfilter(\'\',this)" '+ (cty == ""? "class=\"active\"":"") +'  >全部</a></dd>';
		html +='<dd class="search_city_num">';
		html +='<ul class="clear">';
		if(citys){
			$(citys).each(function(i,item){   
//				html +='<li><a href="javascript:void(0)" onclick="cityfilter(\''+ item.name +'\',this)"  '+ (cty == item.name? "class=\"active\"":"") +' >'+ item.name +'<span>('+ item.count +')</span></a></li>';
				html +='<li><a href="javascript:void(0)" onclick="cityfilter(\''+ item.name +'\',this)"  '+ (cty == item.name? "class=\"active\"":"") +' >'+ item.name +'</a></li>';
			});
		}
        html +='</ul>';
        html +='</dd>';
		html +='</dl>';
		
		
		html +='<dl id="category_filter_id" class="search_city_line">';
		html +='<dt>分　类：</dt>';
		html +='<dd><a href="javascript:void(0)" onclick="categoryfilter(\'\',this)" '+ (ctl == ""? "class=\"active\"":"") +'>全部</a></dd>';
		html +='<dd class="search_city_num">';
		html +='<ul class="clear">';
		if(categroys){
			$(categroys).each(function(i,item){
//				html +='<li><a href="javascript:void(0)" onclick="categoryfilter(\'' +item.name+ '\',this)"  '+ (ctl == item.name? "class=\"active\"":"") +' >' +item.name+ '<span>(' +item.count+ ')</span></a></li>';
				html +='<li><a href="javascript:void(0)" onclick="categoryfilter(\'' +item.name+ '\',this)"  '+ (ctl == item.name? "class=\"active\"":"") +' >' +item.name+ '</a></li>';
			});
		}
		if(tagnames){
			$(tagnames).each(function(i,item){
//				html +='<li><a href="javascript:void(0)" onclick="tagfilter(\'' +item.name+ '\',this)">' +item.name+ '<span>(' +item.count+ ')</span></a></li>';
				html +='<li><a href="javascript:void(0)" onclick="tagfilter(\'' +item.name+ '\',this)">' +item.name+ '</a></li>';
			});
		}
		
		html +='</ul>';
		html +='</dd>';
		html +='</dl>';
		
		
		$(".search_city").html(html);
	}
}

function setRedDate(data){
	var factmap = data.pageData.factMap;
	
	
	window.projectDates = [""];
	
	if(factmap!= undefined){
		var performstarttime = factmap.performstarttimelow;

		if(performstarttime){
			$(performstarttime).each(function(i,item){
				 var mydate = new Date();
				 
				 var dtime = parseFloat( parseInt(item.name) * 86400000 + 3600 * 16 *1000);
		    	 var nowdate = new Date(dtime);
		    	 var k = "D" + nowdate.format("yyyyMMdd");
		         if(nowdate.format("yyyy-MM-dd") >= mydate.format("yyyy-MM-dd")){
		        	 window.projectDates[k] = true;
		         }
		         else
		        	 window.projectDates[k] = false; 
			});
		}
	}
	
}

//截取字符串 中文相当于2个字符
function cutstr(str,len) 
{ 
    var str_length = 0; 
    var str_len = 0; 
    str_cut = new String(); 
    str_len = str.length; 
    for(var i = 0; i < str_len; i++) 
    { 
    	a = str.charAt(i); 
        str_length++; 
        if(escape(a).length > 4) 
        { 
            //中文字符的长度经编码之后大于4 
            str_length++; 
        } 
        str_cut = str_cut.concat(a); 
        if(str_length>=len) 
        { 
            str_cut = str_cut.concat("..."); 
            return str_cut; 
        } 
    } 
    //如果给定字符串小于指定长度，则返回源字符串； 
    if(str_length < len){ 
        return  str; 
    } 
}


function setCityUpJs(data){
	
	var oA = $('.search_city_more'),
	oCity = $('.search_city_all');
	
	if("" == $("#city_name").val())
	{
		if ( oCity.children("li").length > 20 ) {
			oA.css('display', 'block');
		} else if(oCity.children("li").length > 10 & oCity.children("li").length <=20){
			oA.css('display', 'none');
			oCity.css('height', 'auto');
		}else {
			oA.css('display', 'none');
			oCity.css('height', '25px');
		}
		
	}
	else{
		if ( oCity.children("li").length > 20 ) {
			oA.css('display', 'block');
		} else if(oCity.children("li").length > 10 & oCity.children("li").length <=20){
			oA.css('display', 'none');
			oCity.css('height', 'auto');
		}else {
			oA.css('display', 'none');
			oCity.css('height', '25px');
		}
	}
	
	if(oCity.css("height") == '62px'){
		oA.find('.search_city_up').show();
		oA.find('.search_city_off').hide();
	}else{
		oA.find('.search_city_up').hide();
		oA.find('.search_city_off').show();
	}
	
	if(data.ctyIdx > 19 ){
		citylinecontrol(0);
	}
}

/**
 * 控制城市导航隐藏显示
 * @param type 0:更多 1：收起
 */
function citylinecontrol(type){
	
	var oCity = $('.search_city_all');
	var oA = $('.search_city_more');
	
	if(type == 0){
		oCity.css('height','auto').height();
		oA.find('.search_city_up').hide();
		oA.find('.search_city_off').show();
	}else{
		oCity.height(62);
		oA.find('.search_city_off').hide();
		oA.find('.search_city_up').show();
	}
}



//0赞 1不赞
function searchFeedBack(){
	
	var inputs = $(".seach_taste_fruit input:checked");
	var input = inputs[0].id;
	var type = Number(input);
	
	var mail = $('#search_feedback_mail').val();
	var phone = $('.search_taste_int input').eq(0).val();
	var suggest = $('#search_feedback_suggest').val();
	var keyword = $("#keyword").val();
	
	if(phone == "手机号/qq/邮箱"){
		phone = "";
	}
	if(suggest == "描述一下您遇到的问题或提出建议。大麦搜索持续优化中，您的反馈将作为我们重要的参考。(200字以内)"){
		suggest = "";
	}
	
	/*
	if(mail!= null && mail.length > 0){
		var format = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
		if (!mail.match(format)){
			alert("邮箱格式错误");
			return;
		}
	}
	if(phone!= null && phone.length > 0){
		var format = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
		
		if (!phone.match(format)){
			alert("请填写11位国内手机号");
			return;
		}
	}
	if(suggest == null || suggest == '' || suggest.length == 0){
		alert("请填写您对大麦搜索的建议");
		return;
	}
	*/
	var re = /<script.*?>(.|\n)*<\/script>/;
	suggest = suggest.replace(re, "");
	
	
	if(suggest.length > 200)
		suggest = suggest.substring(0, 200);
	
	alert("感谢您对大麦网的支持");
	
	$('.search_taste_int input').eq(0).val("手机号/qq/邮箱");
	$('#search_feedback_suggest').val("描述一下您遇到的问题或提出建议。大麦搜索持续优化中，您的反馈将作为我们重要的参考。(200字以内)");
	
	jQuery.ajax({
		url : "feedback.html",
		data : {
			"mail" : mail,
			"phone": phone,
			"suggest":suggest,
			"type" : type,
			"keyword" : keyword
		},
		type : "POST",
		dataType : "json",
		error : function() {
			//alert("服务器忙,请稍候重试... searchajax");
		},
		success : function(data) {
//			if(data!= null){
//				alert(data);
//			}
		}
	});
	
	$('#seachTaste').hide();
	$('.ph-mask').remove();
}

var cache = {};
function guessajax(type, category){
	
	var projects = $('#projectids').val();

	var keyword = $("#keyword").val();
	if(cache[category] != undefined){
		return;
	}else{
		if("on"== $('#degrade').val()){
			return;
		}
		var siteCity = $('.insiteName').html();
		var destCity = $("#destCity").val();
		var categoryName = $("#category_name").val();
		jQuery.ajax({
			url : "external/gl.html",
			data : {
				"keyword" : keyword,//"周杰伦"
				"projects": projects,
				"category": category,
				"siteCity": siteCity,
				"destCity": destCity,
				"ctl": categoryName,
				"type":type
				},
			type : "GET",
			dataType : "json",
			error : function() {
				//alert("服务器忙,请稍候重试... searchajax");
			},
			success : function(data) {
				if(type == 1){
					setGuess(data, projects);
				}else if( type == 2){
					setSortListContent(data, category);
				}
			}
	   });
	}

}

// 明星周边
function artistAround(name) {
	try{
		//关键字
		var keyword = name;
		if(keyword==null||keyword==''){
			keyword = $("#keyword").val();
		}
		//项目id
		var projects = $('#projectids').val();
		//注意这种方式不支付POST,指定type:"POST"也不起作用
		$.ajax({
			type: "GET",
			url:"//mai.damai.cn/openapi/search/index",
			data:{keywords:keyword},
			dataType:'jsonp',
			jsonpCallback:"callback",
			success: function(data){
				setArtistAround(data,projects,keyword);
			}
		});
	}catch(e) {

	}
}

function setSortListContent(data, category){
	var content = $("#sort-list-content-" + category);
	
	cache[category] = category;
	
	var suggest = data.suggest;
	
	if(suggest != null && suggest.length > 0){
		
		var li = "";
		for(var i = 0; i < 5; i++){
			var item = suggest[i];
			if(item == undefined || item == null)
				break;
			
			var projectId=item.projectId;
			var projectName=item.projectName;
			var price=item.price;
			
			li += '<li class="img">'+
					   '<a id="city_recom2_category_0_88333_categorypopular_default" href="//piao.damai.cn/'+projectId+'.html" target="_blank" title="'+ projectName +'" class="img">'+
			           '<img src="//pimg.damai.cn/perform/project/'+parseInt(projectId/100)+'/'+projectId+'_n.jpg" width="145" height="193"></a>'+
			           '<a id="city_recom2_category_0_88333_categorypopular_default" href="//piao.damai.cn/'+projectId+'.html" target="_blank" title="'+ projectName +'" class="title">'+
			           ''+ projectName +'</a>'+
			           '<span class="price">票价：<strong><i class="yen">¥</i>'+price+'起</strong></span>'+
			           '</li>';
			
		}
		
		content.html(li);
	}
	
	
}

function showName(){
	$("#infor").blur(function(){
		
	});
}

var guessdata;

function setGuess(data, projects){
	if(!data)
		return;
	
	guessdata = data;
	
	var suggest = data.suggest;
	
	if(suggest != null && suggest.length > 0){
		
		var li = "";
		var li1 = "";
		
		li+='<div class="search_box">'+
    	' <div class="search_box_title">您可能还喜欢</div>'+
        '<div class="search_box_con">'+
            '<ul id="search_recom1" class="search_box_hot">';
		var i = 0;
		var j = 0;
		while(i<suggest.length){
			i++;
			if(Math.random()<0.2){
				continue;
			}
			j++;
			if(j>3){
				break;
			}
			var item = suggest[i];
			var num1="00"+(i+1);
			if(item == undefined || item == null)
				break;
			var projectId=item.projectId;
			var projectName=item.projectName;
			var startTime = item.startTime;
			var fold = item.fold;
			var tag = item.tag;
			//价格
			var price=item.price;
			//场馆
			var venue = item.venue;

			li+= ' <li class="clearfix">';
			li +=' <a id="search_recom1_'+ tag +'"  onclick=clickCn('+projectId+',"'+projectName+'",'+num1+') href="//piao.damai.cn/'+projectId+'.html" target="_blank" class="img"><img title="'+ projectName +'" src="//pimg.damai.cn/perform/project/'+parseInt(projectId/100)+'/'+projectId+'_n.jpg" width="171" height="214" alt="" /></a>';
			li +=' <div class="infos">';
			li +=' <div class="title">';
			li += '  <a  id="search_recom1_'+ tag +'"  onclick=clickCn('+projectId+',"'+ projectName +'",'+num1+')  title="'+ projectName +'" href="//piao.damai.cn/'+projectId+'.html" target="_blank">'+projectName+'</a>';
			li +='  </div>';
			li += ' <p title="'+venue+'">'+venue+'</p>';
			li += ' <p title="'+startTime+'">'+startTime+'</p>';
			li += ' <p class="c-price"><strong>'+price+'元</strong>起</p>';
			li +='  </div>';
			li += '</li>';	
		}
	
	    li +='</ul>';
	    li +='</div>';
		li +='</div>';
		li +='</div>';
		
		li1 +=' <div class="search_rec">';
		li1 +='<h4 class="rec_title">';
	    li1 +='<a href="javascript:changeGuess(5)">换一组</a>';
		li1 +=' <span>猜您喜欢</span>';
		li1 +=' </h4>';
		li1 +=' <ul id="search_recom2" class="search_rec_list">';
		
		var h = 0;
		for(var i = 0; i < suggest.length; i++){
			if(h == 5)
				break;
			var item = suggest[i];
			if(item== null || item == undefined)
				break;
			
			var price=item.price;
			var projectId=item.projectId;
			var projectName=item.projectName;
			var showTime=item.showTime;
			var fold = item.fold;
			var tag = item.tag;
			var venueName = item.venue;
			if(venueName == null){
				venueName = "";
			}
			var num="00"+(i+1);
			li1 +='  <li>';
			li1 +='  <a id="search_recom2_'+ tag +'" class="search_rec_img" href="//piao.damai.cn/'+projectId+'.html" onclick=clickCn('+projectId+',"'+ projectName +'",'+num+') target="_blank"><img title="'+ projectName +'" src="//pimg.damai.cn/perform/project/'+parseInt(projectId/100)+'/'+projectId+'_n.jpg" alt="" width="150" height="200"/></a>';
			li1 +='   <p class="search_rec_txt"><a id="search_recom2_'+ tag +'" title="'+ projectName +'" id="search_recom2_'+ tag +'" href="//piao.damai.cn/'+projectId+'.html" target="_blank">'+projectName+'</a></p>';
			li1 +='  <p class="search_rec_txt search_rec_cur"><strong>'+price+'元</strong>起</p>';
			li1 +='<a href="//piao.damai.cn/'+projectId+'.html" onclick=clickCn('+projectId+',"'+ projectName +'",'+num+') target="_blank">';
			li1 +=' <div class="poster-single">';
			li1 +='<p class="addr">'+venueName+'</p>';
			li1 +='<p class="time">'+showTime+'</p>';
			li1 +='</div>';
			li1 +='</a>';
			li1 +=' </li>';
			
			h++;
		 }
		 
		 li1 +='</ul>';
		 li1 +='</div>';
		 
		 if(projects!= ''){
			 $("#guess_you_like").html(li);
		 }else
			 $(".guess_you_likemore").html(li1);
			//热门推荐由下向上显示
			$('.search_rec .search_rec_list').on('mouseenter', 'li', function () {
		    	$(this).find('.poster-single').slideDown(200);
		  	});

		  	$('.search_rec .search_rec_list').on('mouseleave', 'li', function () {
		    	$(this).find('.poster-single').slideUp(200);
		  	});
		 //$("#guess_position").css('display', 'block');
	}
}

//明星周边
function setArtistAround(data,projects,keyword){
	if(!data||data==null||data==undefined){
		return;
	}
	//返回状态码 200为正常
	var retrunCode = data.code;
	//数据主体
	var productData = data.data;
	if(retrunCode!=200||productData==null){
		return;
	}
	//商品总数量
	var productCount = productData.total;
	if(productCount<=0){
		return;
	}
	var searchUrl = productData.searchurl;
	var productlist = productData.productlist;
	if(productlist.length<=0){
		return;
	}
		var li = "";
		var li1 = "";

		li+='<div class="search_box">'+
				' <div class="search_box_title">明星周边</div>'+
				'<div class="search_box_con">'+
				'<ul  class="search_box_hot">';

		for(var i = 0; i < 3; i++){
			var item = productlist[i];
			if(item == undefined || item == null){
				break;
			}
			//商品名称
			var productName=item.product_name;
			//商品地址
			var productUrl=item.product_url;
			//商品价格
			var productPrice=item.product_price;
			if(Number(productPrice)!=null&&Number(productPrice)!=undefined){
				productPrice=Number(productPrice).toFixed(2);
			}
			//商品图片
			var productImg=item.product_img;
			li+= ' <li class="clearfix li-cur">';
			li +=' <a href="'+productUrl+'" target="_blank" class="img"><img title="'+ productName +'" src="'+productImg+'" alt="" /></a>';
			li +=' <div class="infos">';
			li += '  <a  class="title" title="'+ productName +'" href="'+productUrl+'" target="_blank">'+productName+'</a>';
			li += ' <p class="c-price"><strong>'+productPrice+'元</strong></p>';
			li +='  </div>';
			li += '</li>';
		}

		li +='</ul>';
		li +='<div class="check-more"><a href="'+searchUrl+'" target="_blank">全部'+productCount+'个商品&gt;&gt;</a></div>'
		li +='</div>';
		li +='</div>';
		li +='</div>';

		li1 +=' <div class="search_rec search_cur">';
		li1 +='<h4 class="rec_title">';
		li1 +='<a href="'+searchUrl+'" target="_blank">全部'+productCount+'个商品&gt;&gt;</a>';
		li1 +=' <span>明星周边中，“<em>'+keyword+'</em>”的结果</span>';
		li1 +=' </h4>';
		li1 +=' <ul class="search_rec_list">';

		for(var i = 0; i < 5; i++){
			var item = productlist[i];
			if(item== null || item == undefined)
				break;

			//商品名称
			var productName=item.product_name;
			//商品地址
			var productUrl=item.product_url;
			//商品价格
			var productPrice=item.product_price;
			if(Number(productPrice)!=null&&Number(productPrice)!=undefined){
				productPrice=Number(productPrice).toFixed(2);
			}
			//商品图片
			var productImg=item.product_img;
			li1 +='  <li>';
			li1 +='  <a class="search_rec_img" href="'+productUrl+'" target="_blank"><img title="'+ productName +'" src="'+productImg+'" alt="" /></a>';
			li1 +='   <p class="search_rec_txt"><a  class="title" title="'+ productName +'" href="'+productUrl+'" target="_blank">'+productName+'</a></p>';
			li1 +='  <p class="search_rec_txt search_rec_cur"><strong>'+productPrice+'元</strong></p>';
			li1 +=' </li>';
		}
		li1 +='</ul>';
		li1 +='</div>';
		if(projects!= ''){
			$("#artist_around").html(li);
		}else{
			$("#artist_around_bottom").html(li1);
		}
		//$("#guess_position").css('display', 'block');
}

function changeGuess(currguess){
	if(!guessdata)
		return;
	var suggest = guessdata.suggest;
	
	var li1 = "";
	li1 +=' <div class="search_rec">';
	li1 +='<h4 class="rec_title">';
    li1 +='<a href="javascript:changeGuess('+ (currguess + 5 >= suggest.length? 0 : currguess + 5) +')">换一组</a>';
	li1 +=' <span>猜您喜欢</span>';
	li1 +=' </h4>';
	li1 +=' <ul id="search_recom2" class="search_rec_list">';
	
	var h = 0;
	
	for(var i = currguess; i < suggest.length; i++){
		if(h == 5)
			break;
		var item = suggest[i];
		if(item== null || item == undefined)
			break;
		
		var price=item.price;
		var projectId=item.projectId;
		var projectName=item.projectName;
		var showTime=item.showTime;
		var fold = item.fold;
		var tag = item.tag;
		var venueName = item.venue;
		if(venueName == null){
			venueName = "";
		}
		li1 +='  <li>';
		li1 +='  <a id="search_recom2_'+ tag +'" class="search_rec_img" href="//piao.damai.cn/'+projectId+'.html" target="_blank"><img title="'+ projectName +'" src="//pimg.damai.cn/perform/project/'+parseInt(projectId/100)+'/'+projectId+'_n.jpg" alt="" width="150" height="200"/></a>';
		li1 +='   <p class="search_rec_txt"><a id="search_recom2_'+ tag +'" title="'+ projectName +'" id="search_recom2_'+ tag +'" href="//piao.damai.cn/'+projectId+'.html" target="_blank">'+projectName+'</a></p>';
		li1 +='  <p class="search_rec_txt search_rec_cur"><strong>'+price+'元</strong>起</p>';
		li1 +='<a href="//piao.damai.cn/'+projectId+'.html" target="_blank">';
		li1 +=' <div class="poster-single">';
		li1 +='<p class="addr">'+venueName+'</p>';
		li1 +='<p class="time">'+showTime+'</p>';
		li1 +='</div>';
		li1 +='</a>';
		li1 +=' </li>';
		
		h++;
	 }
	 
	 li1 +='</ul>';
	 li1 +='</div>';
	 
	 currguess +=5;
	 $(".guess_you_likemore").html(li1);
	 
	 $('.search_rec .search_rec_list').on('mouseenter', 'li', function () {
	    $(this).find('.poster-single').slideDown(200);
	 });

	 $('.search_rec .search_rec_list').on('mouseleave', 'li', function () {
	    $(this).find('.poster-single').slideUp(200);
	 });
}

function pushsubscription(type,id,name, i){
 var url = window.location.href;
  if(isLogin()){
	jQuery.ajax({
		url : "external/sub.html",
		data : {
			"type":type,
			"id":id,
			"value":name
			},
		type : "POST",
		dataType : "json",
		error : function() {
			//alert("服务器忙,请稍候重试... searchajax");
		},
		success : function(result) {
			var ret = eval('(' + result.resultValue + ')');
			if(url.indexOf('flag=sub')){
				setCookie('damai.user_sub','autoSub');
			}
			if(ret == 0){ //成功
				subShow(id,"sub");
				popLayer($('#subscribe'));
				window.setTimeout(function(){
					closeSubRemind(id);
				},4000);
				return;
			}else if(ret == 1){ //未登录
				//alert('登录');
				//showlogindialog();
				showlogindialog(type,id,name,i);
				return;
			} 
			else if(ret == 2){ //失败
				alert('订阅失败，请稍后再试!');
				return;
			} 
			else if(ret == 3){ //失败
				//alert('已订阅!');
				popLayer($('#subscribed'));
				window.setTimeout(function(){
					closeSubscribed();
				},4000);
				return;
			} 
		}
   });
}else{
	//showlogindialog();
	if(!isAutoSub()){
		setCookie('damai.user_sub','');
	}
	showlogindialog(type,id,name,i);
}
}
//取消订阅
function cancelsubscription(type,id,name, i){
	var url = window.location.href;
	  if(isLogin()){
		jQuery.ajax({
			url : "external/cancelsub.html",
			data : {
				"type":type,
				"id":id,
				"value":name
				},
			type : "POST",
			dataType : "json",
			error : function() {
				//alert("服务器忙,请稍候重试... searchajax");
			},
			success : function(result) {
				var ret = eval('(' + result.resultValue + ')');
				if(ret == 0){ //成功
					subShow(id,"unsub")
					return;
				}else if(ret == 1){ //未登录
					//alert('登录');
					//showlogindialog();
					showlogindialog(type,id,name,i);
					return;
				} 
				else if(ret == 2){ //失败
					alert('取消订阅失败，请稍后再试!');
					return;
				} 
			}
	   });
	}else{
		//showlogindialog();
		showlogindialog(type,id,name,i);
	}
	}

function closeSubRemind(i){
	//$('#sub_suc_'+ i).hide();
	$(".layer_close").parents(".mai_layer").hide();
	$(".ph-mask").remove();
//	keywordHit();
}
function closeSubscribed(){
	//$('#sub_suc_'+ i).hide();
	$(".layer_close").parents(".mai_layer").hide();
	$(".ph-mask").remove();
	//keywordHit();
}
function setLoading(i){
	if(i==0){
		//$('#search_loading').hide();
		//$('#search_loading').stop();
		 $('#search_loading').slideUp();
	}else{
		//$('#search_loading').show();
		//$('#search_loading').stop();
		$('#search_loading').slideDown();
	}
	
}

function isLogin(){
	var userCode = getCookie("damai.cn_user");
	if(userCode == null || userCode == 'undefined' || userCode == '0'){
		return false;
	}
	return true;
}


$(function(){
	var sub =getCookie("damai.user_sub");
	var url = window.location.href;
	if(url.indexOf('flag=sub')>0 && url != document.referrer){
		var array= url.split("&");
		var parms =new Array();
		for (var i=0;i<array.length;i++){
		var index = array[i].indexOf('=')+1;
		parms.push(array[i].substring(index,array[i].length));
		}
		var len =parms.length;
		var name = decodeURI(parms[len-2]);
		if(name.length>0 && isLogin()&& isAutoSub()){
		  pushsubscription(parms[len-3],parms[len-4],decodeURI(parms[len-2]),parms[len-1]);
		}
		
	}
	if(url.indexOf('flag=sub')>0 && url == document.referrer){
		var newUrl = url.substring(0,url.indexOf('&'));
		location.href= newUrl;
	}
})

//取消订阅
function cancelSub() {
  $('.search_box_none').each(function () {
    $(this).on('mouseenter', function () {
     this.innerHTML='取消订阅';
    });
    $(this).on('mouseleave', function () {
       this.innerHTML ='已订阅';
    });
  });
  }
//删除cookie
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 10000);
    var cval=getCookie(name);
    if(cval != null || cval !=''){
    	//document.cookie = name + "=" + escape(value) + ";domain=damai.cn;expires=" + exp.toGMTString() + ";Path =/";
    	setCookie(name,'');
    }
}
//是否自动订阅
function isAutoSub(){
	var subFlag = getCookie('damai.user_sub');
	if(subFlag == null || subFlag == 'undefined' || subFlag == '0' || subFlag ==''){
		setCookie('damai.user_sub','');
		return true;
	}
	return false;
}
function subShow(id,name){
	var unSubId= "unSub_"+id;
	var isSubId = "isSub_"+id;
	if(name == "sub"){
		$("#"+unSubId).css("display","none");
		$("#"+isSubId).css("display","block");	
	}else{
		$("#"+unSubId).css("display","block");
		$("#"+isSubId).css("display","none");
	}
	
	
}
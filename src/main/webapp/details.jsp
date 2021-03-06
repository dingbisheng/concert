﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%	String basePath = request.getContextPath();%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title> - 大麦搜索</title>
<meta name="spm-id" content="a2o6e" />
<meta name="keywords" content=",大麦网"/>
<meta name="description" content="大麦网-中国最大票务平台,包括：,演出票,电影,球馆预订,门票,在线订票购票服务"/>

<link href="//search.damai.cn/favicon.ico" rel="shortcut icon" type="image/ico">
<link href="//search.damai.cn/favicon.ico" rel="icon" type="image/ico">
<link href="<%=basePath %>/concert/css/jquery-ui.min.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath %>/concert/css/public-min_2.css"  rel="stylesheet" type="text/css"/>
<link href="<%=basePath %>/concert/css/style-min_1.css" rel="stylesheet" type="text/css" />
<!-- <link href="<%=basePath %>/com.concert.test/css/style_1.css" rel="stylesheet" type="text/css" /> -->
<link href="<%=basePath %>/concert/css/style_2.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="<%=basePath %>/concert/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="<%=basePath %>/concert/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="<%=basePath %>/concert/js/public-min.js"></script>
<script type="text/javascript" src="<%=basePath %>/concert/js/dui-min.js"></script>
<script type="text/javascript" src="<%=basePath %>/concert/js/app-min.js"></script>
<script type="text/javascript" src="<%=basePath %>/concert/js/headv6.js"></script>
<!-- <script type="text/javascript" src="<%=basePath %>/com.concert.test/js/headv6.js"></script> -->
<script type="text/javascript" src="<%=basePath %>/concert/js/jquery.playalert3.js"></script>
</head>
<body data-spm="search">
<script type="text/javascript" id="beacon-aplus" src="<%=basePath %>/concert/js/aplus_v2.js"  exparams="clog=o&aplus&sidx=aplusSidx&ckx=aplusCkx"></script>
<div class="wrapper">
<script type="text/javascript">var cityId = 0;</script>
<!--页面头部 start-->
<div class="top-s">
	<div class="top-con">
  	<ul class="fl">
      <li class="dm-info" id="headerUserinfo"><span class="dm-name">HI, 欢迎来大麦</span>[<a class="dm-login" title="登录" href="//www.damai.cn/redirect.aspx?type=login" target="_blank">登录</a><a class="dm-register" title="注册" href="//www.damai.cn/redirect.aspx?type=reg" target="_blank">注册</a>]</li>
      <li class="mydm">
         <div class="dm-t mydm-t"><a target="_blank" href="//my.damai.cn/">我的大麦</a><b></b></div>
         <div class="dm-c mydm-c">
          <a title="个人信息" target="_blank" href="//my.damai.cn/account/myinfo.aspx">个人信息</a>
          <a title="订单管理" target="_blank" href="//order.damai.cn/index.aspx">订单管理</a>
          <a title="我的钱包" target="_blank" href="//my.damai.cn/trade/ewallet/myEwallet.aspx">我的钱包</a>
          <a target="_blank" href="//my.damai.cn/account/mysubscribe">我的订阅</a>
		      <a title="我的优惠券" target="_blank" href="https://coupon.damai.cn/coupon-web-damai/mycoupon/myCoupon">我的优惠券</a>
         </div>
      </li>
      <li class="myorder">
         <div class="dm-t mydm-t"><a target="_blank" href="//order.damai.cn/index.aspx">我的订单</a></div>
      </li>
    </ul>
    <ul class="fr">
		<li class="dm-weixin">
			<div class="dm-t weixin-t"><a href="javascript:void(0)">大麦网微信</a></div>
			<div class="dm-c weixin-c">
				<div class="dm-code">

				</div>
			</div>
		</li>
    	<li class="dm-app">
      	<div class="dm-t app-t"><a target="_blank" href="//mobile.damai.cn/">手机版</a></div>
        <div class="dm-c app-c">
			<div class="dm-code">
			<p class="t1">扫描我，即刻下载</p>
			<p class="t2">大麦客户端</p>
			</div>
			<a class="dm-iphone" target="_blank" href="//mapi.damai.cn/href.aspx?id=1"></a>
			<a class="dm-ipad" target="_blank" href="//mapi.damai.cn/href.aspx?id=2"></a>
			<a class="dm-android" target="_blank" href="//mapi.damai.cn/href.aspx?id=5"></a>
			<a class="dm-wp" target="_blank" href="//www.windowsphone.com/zh-cn/store/app/%E5%A4%A7%E9%BA%A6/c7194979-6d1e-4698-9df9-8a1ac7970151"></a>
			<div class="dm-code-m">
				<p class="t1">
					手机扫一扫<br>下单更快捷</p>
				<p class="t2">大麦M站</p>
			</div>
        </div>
      </li>
      <li class="dm-service">
         <div class="dm-t service-t"><a href="javascript:void(0)">客户服务</a><b></b></div>
         <div class="dm-c service-c">
          <a target="_blank" href="//help.damai.cn/#selfservice">账户服务</a>
          <a target="_blank" href="//help.damai.cn/#onlineservice">人工服务</a>
          <a target="_blank" href="//help.damai.cn/#specialproducts">特色产品</a>
          <a target="_blank" href="//help.damai.cn/">帮助中心</a>
           <span class="xiaonengservice xnchatService">在线客服</span>
         </div>
      </li>
      <li class="dm-site-nav">
         <div class="dm-t site-nav-t"><a href="javascript:void(0)">网站导航</a><b></b></div>
         <div class="dm-c site-nav-c"  style="width:956px;" >
         	<dl class="dm-sev01">
          	<dt>特色服务</dt>
            <dd>
              <ul>
                										<li><a target="_blank" href="//venue.damai.cn/">场馆库</a></li>
					                										<li><a target="_blank" href="//dingyue.damai.cn/subType.do?platformId=1">演出订阅</a></li>
					                										<li><a target="_blank" href="//i.damai.cn/">精彩专题</a></li>
					                										<li><a target="_blank" href="//mobile.damai.cn/">手机购票</a></li>
					                										<li><a target="_blank" href="//sale.damai.cn/2017dzqb/index.html">电子钱包</a></li>
					                										<li><a target="_blank" href="//en.damai.cn/">英文频道</a></li>
					                										<li><a target="_blank" href="https://anti.damai.cn/">防诈骗</a></li>
					                              </ul>
            </dd>
          </dl>
          <dl class="dm-sev01">
          	<dt>演出分类</dt>
            <dd>
            	<ul>
              	  <li><a title="演唱会" target="_blank" href="//search.damai.cn/search.html?ctl=%E6%BC%94%E5%94%B1%E4%BC%9A&order=1">演唱会</a></li>
                  <li><a title="音乐会" target="_blank" href="//search.damai.cn/search.html?ctl=%E9%9F%B3%E4%B9%90%E4%BC%9A&order=1">音乐会</a></li>
                                    <li><a title="舞蹈芭蕾" target="_blank" href="//search.damai.cn/search.html?ctl=%E8%88%9E%E8%B9%88%E8%8A%AD%E8%95%BE&order=1">舞蹈芭蕾</a></li>
                  <li><a title="曲苑杂坛" target="_blank" href="//search.damai.cn/search.html?ctl=%E6%9B%B2%E8%8B%91%E6%9D%82%E5%9D%9B&order=1">曲苑杂坛</a></li>
                                    <li><a title="度假休闲" target="_blank" href="//search.damai.cn/search.html?ctl=%E5%BA%A6%E5%81%87%E4%BC%91%E9%97%B2&order=1">度假休闲</a></li>
                  <li><a title="儿童亲子" target="_blank" href="//search.damai.cn/search.html?tn=%E5%84%BF%E7%AB%A5%E4%BA%B2%E5%AD%90&order=1">儿童亲子</a></li>
                  <li><a title="话剧歌剧" target="_blank" href="//search.damai.cn/search.html?ctl=%E8%AF%9D%E5%89%A7%E6%AD%8C%E5%89%A7&order=1">话剧歌剧</a></li>
				          <li><a title="动漫" target="_blank" href="//search.damai.cn/search.html?tn=%E5%8A%A8%E6%BC%AB&order=1">动漫</a></li>
        		  </ul>
            </dd>
          </dl>
                      <dl class="dm-sev01">
             <dt>赛事分类</dt>
             <dd>
               <ul>
                 <li>
                   <a title="足球" target="_blank" href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&order=1&sctl=%E8%B6%B3%E7%90%83">足球</a>
                 </li>
                 <li>
                   <a title="篮球" target="_blank" href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&order=1&sctl=%E7%AF%AE%E7%90%83">篮球</a>
                 </li>
                 <li>
                   <a title="电竞" target="_blank" href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&order=1&sctl=%E7%94%B5%E7%AB%9E">电竞</a>
                 </li>
                 <li>
                   <a title="田径" target="_blank" href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&order=1&sctl=%E7%94%B0%E5%BE%84">田径</a>
                 </li>
                 <li>
                   <a title="网球" target="_blank" href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&order=1&sctl=%E7%BD%91%E7%90%83">网球</a>
                 </li>
                 <li>
                   <a title="赛车" target="_blank" href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&order=1&sctl=%E8%B5%9B%E8%BD%A6">赛车</a>
                 </li>
                 <li>
                   <a title="冰雪" target="_blank" href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&order=1&sctl=%E5%86%B0%E9%9B%AA">冰雪</a>
                 </li>
                 <li>
                   <a title="格斗" target="_blank" href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&order=1&sctl=%E6%A0%BC%E6%96%97">格斗</a>
                 </li>
                 <li>
                   <a title="排球" target="_blank" href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&order=1&sctl=%E6%8E%92%E7%90%83">排球</a>
                 </li>
                 <li>
                   <a title="其他" target="_blank" href="//sports.damai.cn/">其他</a>
                 </li>
               </ul>
             </dd>
           </dl>
           
          <dl class="dm-sev02">
          	<dt>城市切换</dt>
            <dd>
            	<ul>
                                      <li>
                    <a title="北京" href="//www.damai.cn/bj/"  target="_blank">北京</a>
                  </li>
                                    <li>
                    <a title="广州" href="//www.damai.cn/gz/"  target="_blank">广州</a>
                  </li>
                                    <li>
                    <a title="上海" href="//www.damai.cn/sh/"  target="_blank">上海</a>
                  </li>
                                    <li>
                    <a title="南京" href="//www.damai.cn/nj/"  target="_blank">南京</a>
                  </li>
                                    <li>
                    <a title="港澳" href="//www.damai.cn/hk/"  target="_blank">港澳</a>
                  </li>
                                    <li>
                    <a title="台州" href="//www.damai.cn/taizhou/"  target="_blank">台州</a>
                  </li>
                                    <li>
                    <a title="西安" href="//www.damai.cn/xa/"  target="_blank">西安</a>
                  </li>
                                    <li>
                    <a title="杭州" href="//www.damai.cn/hz/"  target="_blank">杭州</a>
                  </li>
                                    <li>
                    <a title="成都" href="//www.damai.cn/cd/"  target="_blank">成都</a>
                  </li>
                                    <li>
                    <a title="重庆" href="//www.damai.cn/cq/"  target="_blank">重庆</a>
                  </li>
                                    <li>
                    <a title="宁波" href="//www.damai.cn/ningbo/"  target="_blank">宁波</a>
                  </li>
                                    <li>
                    <a title="无锡" href="//www.damai.cn/wuxi/"  target="_blank">无锡</a>
                  </li>
                                    <li>
                    <a title="深圳" href="//www.damai.cn/sz/"  target="_blank">深圳</a>
                  </li>
                                    <li>
                    <a title="武汉" href="//www.damai.cn/wuhan/"  target="_blank">武汉</a>
                  </li>
                                    <li>
                    <a title="济南" href="//www.damai.cn/jn/"  target="_blank">济南</a>
                  </li>
                                    <li>
                    <a title="昆明" href="//www.damai.cn/km/"  target="_blank">昆明</a>
                  </li>
                                    <li>
                    <a title="南宁" href="//www.damai.cn/nn/"  target="_blank">南宁</a>
                  </li>
                                    <li>
                    <a title="佛山" href="//www.damai.cn/foshan/"  target="_blank">佛山</a>
                  </li>
                                    <li>
                    <a title="太原" href="//www.damai.cn/ty/"  target="_blank">太原</a>
                  </li>
                                    <li>
                    <a title="哈尔滨" href="//www.damai.cn/hrb/"  target="_blank">哈尔滨</a>
                  </li>
                                    <li>
                    <a title="南昌" href="//www.damai.cn/nanchang/"  target="_blank">南昌</a>
                  </li>
                                    <li>
                    <a title="温州" href="//www.damai.cn/wenzhou/"  target="_blank">温州</a>
                  </li>
                                    <li>
                    <a title="长沙" href="//www.damai.cn/cs/"  target="_blank">长沙</a>
                  </li>
                                    <li>
                    <a title="福州" href="//www.damai.cn/fuzhou/"  target="_blank">福州</a>
                  </li>
                                    <li>
                    <a title="天津" href="//www.damai.cn/tj/"  target="_blank">天津</a>
                  </li>
                                    <li>
                    <a title="苏州" href="//www.damai.cn/suz/"  target="_blank">苏州</a>
                  </li>
                                    <li>
                    <a title="郑州" href="//www.damai.cn/zhengzhou/"  target="_blank">郑州</a>
                  </li>
                                    <li>
                    <a title="东莞" href="//www.damai.cn/dg/"  target="_blank">东莞</a>
                  </li>
                                    <li>
                    <a title="贵阳" href="//www.damai.cn/gy/"  target="_blank">贵阳</a>
                  </li>
                                    <li>
                    <a title="石家庄" href="//www.damai.cn/sjz/"  target="_blank">石家庄</a>
                  </li>
                                    <li>
                    <a title="厦门" href="//www.damai.cn/xiamen/"  target="_blank">厦门</a>
                  </li>
                                    <li>
                    <a title="兰州" href="//www.damai.cn/lanzhou/"  target="_blank">兰州</a>
                  </li>
                                    <li>
                    <a title="沈阳" href="//www.damai.cn/sy/"  target="_blank">沈阳</a>
                  </li>
                                    <li>
                    <a title="常州" href="//www.damai.cn/changzhou/"  target="_blank">常州</a>
                  </li>
                                    <li>
                    <a title="南通" href="//www.damai.cn/nantong/"  target="_blank">南通</a>
                  </li>
                                    <li>
                    <a title="内蒙古" href="//www.damai.cn/neimeng/"  target="_blank">内蒙古</a>
                  </li>
                                    <li>
                    <a title="烟台" href="//www.damai.cn/yantai/"  target="_blank">烟台</a>
                  </li>
                                    <li>
                    <a title="长春" href="//www.damai.cn/changchun/"  target="_blank">长春</a>
                  </li>
                                    <li>
                    <a title="青岛" href="//www.damai.cn/qd/"  target="_blank">青岛</a>
                  </li>
                                    <li>
                    <a title="海南" href="//www.damai.cn/haikou/"  target="_blank">海南</a>
                  </li>
                                    <li>
                    <a title="乌鲁木齐" href="//www.damai.cn/wulumuqi/"  target="_blank">乌鲁木齐</a>
                  </li>
                                    <li>
                    <a title="珠海" href="//www.damai.cn/zhuhai/"  target="_blank">珠海</a>
                  </li>
                                    <li>
                    <a title="扬州" href="//www.damai.cn/yangzhou/"  target="_blank">扬州</a>
                  </li>
                                    <li>
                    <a title="大连" href="//www.damai.cn/dl/"  target="_blank">大连</a>
                  </li>
                                    <li>
                    <a title="舟山" href="//www.damai.cn/zhoushan/"  target="_blank">舟山</a>
                  </li>
                                    <li>
                    <a title="洛阳" href="//www.damai.cn/luoyang/"  target="_blank">洛阳</a>
                  </li>
                                    <li>
                    <a title="镇江" href="//www.damai.cn/zhenjiang/"  target="_blank">镇江</a>
                  </li>
                                    <li>
                    <a title="泉州" href="//www.damai.cn/quanzhou/"  target="_blank">泉州</a>
                  </li>
                                    <li>
                    <a title="中山" href="//www.damai.cn/zs/"  target="_blank">中山</a>
                  </li>
                                    <li>
                    <a title="惠州" href="//www.damai.cn/huizhou/"  target="_blank">惠州</a>
                  </li>
                                    <li>
                    <a title="合肥" href="//www.damai.cn/hf/"  target="_blank">合肥</a>
                  </li>
                                    <li>
                    <a title="嘉兴" href="//www.damai.cn/jx/"  target="_blank">嘉兴</a>
                  </li>
                                    <li>
                    <a title="柳州" href="//www.damai.cn/lz/"  target="_blank">柳州</a>
                  </li>
                                    <li>
                    <a title="唐山" href="//www.damai.cn/tangshan/"  target="_blank">唐山</a>
                  </li>
                                    <li>
                    <a title="银川" href="//www.damai.cn/ych/"  target="_blank">银川</a>
                  </li>
                                    <li>
                    <a title="拉萨" href="//www.damai.cn/ls/"  target="_blank">拉萨</a>
                  </li>
                                    <li>
                    <a title="桂林" href="//www.damai.cn/gl/"  target="_blank">桂林</a>
                  </li>
                                    <li>
                    <a title="徐州" href="//www.damai.cn/xuzhou/"  target="_blank">徐州</a>
                  </li>
                                    <li>
                    <a title="海外" href="//www.damai.cn/hwz/"  target="_blank">海外</a>
                  </li>
                                    <li>
                    <a title="西宁" href="//www.damai.cn/xn/"  target="_blank">西宁</a>
                  </li>
                                    <li>
                    <a title="绍兴" href="//www.damai.cn/sx/"  target="_blank">绍兴</a>
                  </li>
                                    <li>
                    <a title="江门" href="//www.damai.cn/jiangmen/"  target="_blank">江门</a>
                  </li>
                                    <li>
                    <a title="金华" href="//www.damai.cn/jinhua/"  target="_blank">金华</a>
                  </li>
                                    <li>
                    <a title="北海" href="//www.damai.cn/beihai/"  target="_blank">北海</a>
                  </li>
                                    <li>
                    <a title="泰州" href="//www.damai.cn/tz/"  target="_blank">泰州</a>
                  </li>
                                    <li>
                    <a title="盐城" href="//www.damai.cn/yancheng/"  target="_blank">盐城</a>
                  </li>
                                    <li>
                    <a title="芜湖" href="//www.damai.cn/wuhu/"  target="_blank">芜湖</a>
                  </li>
                                    <li>
                    <a title="吉林" href="//www.damai.cn/jilin/"  target="_blank">吉林</a>
                  </li>
                                    <li>
                    <a title="丹东" href="//www.damai.cn/dandong/"  target="_blank">丹东</a>
                  </li>
                                    <li>
                    <a title="蚌埠" href="//www.damai.cn/bengbu/"  target="_blank">蚌埠</a>
                  </li>
                                    <li>
                    <a title="马鞍山" href="//www.damai.cn/maanshan/"  target="_blank">马鞍山</a>
                  </li>
                                    <li>
                    <a title="潍坊" href="//www.damai.cn/weifang/"  target="_blank">潍坊</a>
                  </li>
                                    <li>
                    <a title="湖州" href="//www.damai.cn/huzhou/"  target="_blank">湖州</a>
                  </li>
                                    <li>
                    <a title="廊坊" href="//www.damai.cn/langfang/"  target="_blank">廊坊</a>
                  </li>
                  				</ul>
            </dd>
          </dl>
         </div>
	  </li>
		<li class="dm-bilingual">
			<div class="dm-t service-t">
				<a target="_blank" href="//en.damai.cn/">English</a>
			</div>
		</li>
    </ul>
  </div>
</div>

<div class="top-ad">
	<a href="#" class="top-ad-close ad-close"></a>
	<div id="PAGE_AD_1"></div>
</div>

<div class="header-w">
  <a href="//www.damai.cn/" class="dm-logo">
    <img src="<%=basePath %>/concert/picture/logo.png" alt="大麦网">
  </a>
		<!--选择城市 start-->
  <div class="dm-citys">
    <div class="dm-citys-change">
      <span class="dm-ct">全国<i></i></span>
      <div class="ri-con">
        <span class="ri-t">
            当前全国共有<i>4457</i>场演出（比赛），城市后数字代表演出场次
        </span>
        <a href="javascript:void(0)" class="ri-close">关闭</a>
      </div>

      <div class="bt-infos">
        <dl class="resent bg-col" id="recentCities" style="display:none;">
          <dt>近期访问&nbsp;&gt;</dt>
          <dd></dd>
        </dl>
				  <dl>
          <dt>华北东北&nbsp;&gt;</dt>
          <dd>
            <ul>
                            <li>
                <a href="//www.damai.cn/bj/" target="_blank">北京</a>
                <cite>751</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/xa/" target="_blank">西安</a>
                <cite>137</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/jn/" target="_blank">济南</a>
                <cite>57</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/ty/" target="_blank">太原</a>
                <cite>59</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/hrb/" target="_blank">哈尔滨</a>
                <cite>27</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/tj/" target="_blank">天津</a>
                <cite>172</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/zhengzhou/" target="_blank">郑州</a>
                <cite>49</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/sjz/" target="_blank">石家庄</a>
                <cite>57</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/sy/" target="_blank">沈阳</a>
                <cite>48</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/neimeng/" target="_blank">内蒙古</a>
                <cite>24</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/yantai/" target="_blank">烟台</a>
                <cite>2</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/changchun/" target="_blank">长春</a>
                <cite>26</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/qd/" target="_blank">青岛</a>
                <cite>16</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/dl/" target="_blank">大连</a>
                <cite>49</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/tangshan/" target="_blank">唐山</a>
                <cite>5</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/ych/" target="_blank">银川</a>
                <cite>8</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/hwz/" target="_blank">海外</a>
                <cite>68</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/jilin/" target="_blank">吉林</a>
                <cite>3</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/dandong/" target="_blank">丹东</a>
                <cite>0</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/weifang/" target="_blank">潍坊</a>
                <cite>16</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/langfang/" target="_blank">廊坊</a>
                <cite>1</cite>
              </li>
                          </ul>
          </dd>
        </dl>
        		  <dl>
          <dt>华东地区&nbsp;&gt;</dt>
          <dd>
            <ul>
                            <li>
                <a href="//www.damai.cn/sh/" target="_blank">上海</a>
                <cite>599</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/nj/" target="_blank">南京</a>
                <cite>81</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/taizhou/" target="_blank">台州</a>
                <cite>4</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/hz/" target="_blank">杭州</a>
                <cite>199</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/ningbo/" target="_blank">宁波</a>
                <cite>86</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/wuxi/" target="_blank">无锡</a>
                <cite>60</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/wenzhou/" target="_blank">温州</a>
                <cite>17</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/suz/" target="_blank">苏州</a>
                <cite>125</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/changzhou/" target="_blank">常州</a>
                <cite>40</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/nantong/" target="_blank">南通</a>
                <cite>8</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/yangzhou/" target="_blank">扬州</a>
                <cite>7</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/zhoushan/" target="_blank">舟山</a>
                <cite>8</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/zhenjiang/" target="_blank">镇江</a>
                <cite>1</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/hf/" target="_blank">合肥</a>
                <cite>45</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/jx/" target="_blank">嘉兴</a>
                <cite>1</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/xuzhou/" target="_blank">徐州</a>
                <cite>1</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/sx/" target="_blank">绍兴</a>
                <cite>26</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/jinhua/" target="_blank">金华</a>
                <cite>7</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/tz/" target="_blank">泰州</a>
                <cite>7</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/yancheng/" target="_blank">盐城</a>
                <cite>1</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/wuhu/" target="_blank">芜湖</a>
                <cite>2</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/bengbu/" target="_blank">蚌埠</a>
                <cite>1</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/maanshan/" target="_blank">马鞍山</a>
                <cite>9</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/huzhou/" target="_blank">湖州</a>
                <cite>2</cite>
              </li>
                          </ul>
          </dd>
        </dl>
        		  <dl>
          <dt>华南地区&nbsp;&gt;</dt>
          <dd>
            <ul>
                            <li>
                <a href="//www.damai.cn/gz/" target="_blank">广州</a>
                <cite>186</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/hk/" target="_blank">港澳</a>
                <cite>38</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/sz/" target="_blank">深圳</a>
                <cite>241</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/nn/" target="_blank">南宁</a>
                <cite>40</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/foshan/" target="_blank">佛山</a>
                <cite>38</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/fuzhou/" target="_blank">福州</a>
                <cite>25</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/dg/" target="_blank">东莞</a>
                <cite>41</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/xiamen/" target="_blank">厦门</a>
                <cite>63</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/haikou/" target="_blank">海南</a>
                <cite>5</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/zhuhai/" target="_blank">珠海</a>
                <cite>7</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/quanzhou/" target="_blank">泉州</a>
                <cite>16</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/zs/" target="_blank">中山</a>
                <cite>18</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/huizhou/" target="_blank">惠州</a>
                <cite>17</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/lz/" target="_blank">柳州</a>
                <cite>1</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/gl/" target="_blank">桂林</a>
                <cite>0</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/jiangmen/" target="_blank">江门</a>
                <cite>9</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/beihai/" target="_blank">北海</a>
                <cite>2</cite>
              </li>
                          </ul>
          </dd>
        </dl>
        		  <dl>
          <dt>中西部&nbsp;&gt;</dt>
          <dd>
            <ul>
                            <li>
                <a href="//www.damai.cn/cd/" target="_blank">成都</a>
                <cite>155</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/cq/" target="_blank">重庆</a>
                <cite>192</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/wuhan/" target="_blank">武汉</a>
                <cite>170</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/km/" target="_blank">昆明</a>
                <cite>60</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/nanchang/" target="_blank">南昌</a>
                <cite>61</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/cs/" target="_blank">长沙</a>
                <cite>98</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/gy/" target="_blank">贵阳</a>
                <cite>24</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/lanzhou/" target="_blank">兰州</a>
                <cite>17</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/wulumuqi/" target="_blank">乌鲁木齐</a>
                <cite>4</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/luoyang/" target="_blank">洛阳</a>
                <cite>3</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/ls/" target="_blank">拉萨</a>
                <cite>4</cite>
              </li>
                            <li>
                <a href="//www.damai.cn/xn/" target="_blank">西宁</a>
                <cite>10</cite>
              </li>
                          </ul>
          </dd>
        </dl>
                      </div>
    </div>
    <a href="//www.damai.cn/" id="insitehref" class="dm-rec" target="_blank" style="display:none;">推荐进入<span class="insiteName"></span>站</a>
  </div>
  <!--选择城市 end-->

  <!--搜索 start-->
  <div class="dm-search">
    <div class="search-main" id="searchMain">
      <input type="text" autocomplete="off" value="请输入演出、艺人、场馆名称..." class="search-text" id="searchText" data-keyword="" data-link="">
	    <button class="search-btn" type="button" id="search">搜索</button>
      <div id="searchRelate" class="search-relate" style="display:none;"></div>
    </div>
	  <script type="text/javascript">var searchSuggestions = []</script>
    <div class="dm-recommend">
          <a target="_blank" href="https://search.damai.cn/search.html?keyword=%E5%AD%9F%E4%BA%AC%E8%BE%89">孟京辉</a>
          <a target="_blank" href="https://search.damai.cn/search.html?keyword=%E4%BA%91%E5%8D%97%E6%98%A0%E8%B1%A1">云南映象</a>
          <a target="_blank" href="https://search.damai.cn/search.html?keyword=%E5%BC%A0%E5%AD%A6%E5%8F%8B">张学友</a>
        </div>
  </div>
  <!--搜索 end-->

</div>

<!--页面头部 end-->
<script type="text/javascript" src="<%=basePath %>/concert/js/announcement.js"></script>

 <!--主导航 start-->
<div class="miannav-wrap">
	<div class="miannav clear">
		<div class="sort">
			<div class="sort-ti">
				<a target="_blank" href="//www.damai.cn/alltickets.html">全部商品分类</a>
			</div>
		</div>
		<ul>
			<li>
				<a href="//www.damai.cn/">首页</a>
			</li>
			<li>
				<a href="//rock.damai.cn/">摇滚</a>
			</li>
			<li>
				<a href="//drama.damai.cn/">戏剧</a>
			</li>
			<li>
				<a href="//sports.damai.cn/">体育</a>
			</li>
			<li>
				<a href="//kids.damai.cn/">亲子</a>
			</li>
			<li>
				<a href="//dc.damai.cn/">舞蹈古典</a>
			</li>
			<!-- <li>
				<a href="//i.damai.cn/super/">超级票</a>
			</li> -->
		</ul>
	</div>
</div>
<!--主导航 end-->

<form name="searchForm" action="##" method="post">
    <%--模糊查询--%>
	<input type="hidden" name="keyword" id="keyword" value=""/>
        <%--分页--%>
	<input type="hidden" name="currPage" id="currPage" value="1"/>
	<input type="hidden" id="tsg" value=""/>
        <%--开始时间 结束时间--%>
	<input type="hidden" id="sttime" value=""/>
	<input type="hidden" id="ettime" value=""/>
	<input type="hidden" id="degrade" value=""/>
        <%--城市--%>
	<input type="hidden" id="cityId" value=""/>
	<input type="hidden" id="ptype" value=""/>
	<input type="hidden" id="simp_key" value=""/>
	<input type="hidden" id="curr_order" value="1"/>
	<input type="hidden" id="city_name" value=""/>
	<input type="hidden" id="destCity" value=""/>
        <%--分类--%>
	<input type="hidden" id="category_name" value="${sortId}"/>
	<input type="hidden" id="tag_names" value=""/>
        <%--子类--%>
	<input type="hidden" id="subcategory_name" value="${subId}"/>
	<input type="hidden" id="isSingleChar" value=""/>
	<input type="hidden" id="projectids" value=""/>
	<input type="hidden" id="listmodle" value="0"/>
</form>

<!--内容 start-->


<!--如果搜索无结果 有关键字的 begin-->   
<div class="search-none-keywords" style="display:none">
			<div class="search-result"><p>哎呀！麦麦没有找到与“<span class="cf"></span>”相关的商品</p></div>
			<div class="clearfix change-box">
				<div class="change-left">
	<!--明星周边 begin-->
					<div id = "artist_around_bottom"></div>
	<!--明星周边 end-->
	
	<!--猜您喜欢 begin-->
					<div class = "guess_you_likemore"></div>
	<!--猜您喜欢 end-->
				</div>
				<div class="search_right">
	<!-- 艺人场馆展位 -->
					<div class = "search_right_head" ></div>
				</div>
			</div>
	<!--如果搜索有结果 end-->
</div>
<!--如果没有结果 有关键字的 end-->


<!--如果搜索无结果 无关键字的 begin-->
<div class="search-none" style="display:none">
	<div class="search-result"><p>哎呀！麦麦没有找到该筛选条件下相关的商品</p></div>
	<div class="clearfix change-box">
		<div class="change-left">
	<!--明星周边 begin-->
			<div id = "artist_around_bottom"></div>
	<!--明星周边 end-->
	
	<!--猜您喜欢 begin-->
			<div class = "guess_you_likemore"></div>
	<!--猜您喜欢 end-->
		</div>
		<div class="search_right">
	<!-- 艺人场馆展位 -->
			<div class = "search_right_head" ></div>
		</div>
	</div>
	<!--如果搜索有结果 end-->
</div>
<!--如果没有结果 无关键字的 end-->




<!--搜索有结果 start -->
<!--如果搜索有结果 begin-->
<div class="search_new">     
		<div class="search_top">
			<p  id="navigation_show">
			</p>
		</div>
        
		<div class="search_con clear">
			<div class="search_left">
<!-- 猜您在找 start -->
				<div id="guess_position">
					
				</div>
<!-- 猜您在找 end-->
<!-- 条件筛选 start -->
				<div class="search_city">
<!-- 加载城市 start  -->
                    <%--${assortmentDTOList}--%>
                    <%--${subclassDTOList}--%>
                    <%--${messageDTOList}--%>
                    ${cityDTOList}
                    <%--${placeDTO}--%>
                    <%--${mesDetList}--%>
					<a class="search_city_more" href="#">
						<span class="search_city_up" onclick="javascript:citylinecontrol(0)">更多</span>
						<span class="search_city_off" style="display:none;" onclick="javascript:citylinecontrol(1)">收起</span>
					</a> 
					<dl class="search_city_line" id="search_city_line">
						<dt>城　市：</dt>
						<dd><a class="active" href="javascript:void(0)" onclick="cityfilter('',this)">全部</a></dd>
						<dd class="search_city_num" id="search_city_num_tj">
							<ul class="search_city_all clear" style="height: auto;">
                                <c:forEach items="${cityDTOList}" var="city" varStatus="status">
                                    <li>
                                        <a href="javascript:void(0)" onclick="cityfilter('${city.cityId}',this)">
                                            ${city.cityName}
                                        </a>
                                    </li>
                                </c:forEach>
							</ul>
						</dd>
					</dl>
<!-- 加载城市 end -->    

<!-- 加载分类 start-->
					<dl id="category_filter_id"  class="search_city_line">
						<dt>分　类：</dt>
							<dd><a class="active" href="javascript:void(0)" onclick="categoryfilter('',this)">全部</a></dd>
							<dd class="search_city_num">
								<ul class="clear">
                                    <c:forEach items="${assortmentDTOList}" var="sort" varStatus="status">
                                        <li>
                                            <input type="hidden" value="${sort.sortId}" name="sortId"/>
                                            <a href="javascript:void(0)" onclick="categoryfilter('${sort.sortId}',this)">${sort.sortName}</a>
                                        </li>
                                    </c:forEach>
								</ul>
							</dd>
						</dl>
<!-- 加载分类 end -->

<!--加载子类 start -->
						<dl class="search_city_line"  id="subcategory_filter_id" style="display:none">
                            <dt>子　类：</dt>
                            <dd><a class="active" href="javascript:void(0)" onclick="sctlfilter('',this)">全部</a></dd>
                            <%--<dd class="search_city_num">
                                <ul class="clear">
                                    <c:forEach items="${subclassDTOList}" var="sub">
                                        <li>
                                            <a href="javascript:void(0)" onclick="sctlfilter('${sub.subName}',this)">${sort.subName}</a>
                                        </li>
                                    </c:forEach>
                                </ul>
                            </dd>--%>
						</dl>
<!-- 加载子类 end -->

<!--时间筛选 start -->
						<dl id = "search_time">
							<dt>时　间：</dt>
							<dd><a id="alltime" class="active" href="javascript:void(0)" onclick="selectDatechange(0,this)">全部</a></dd>
							<dd class="search_city_num">
								<ul class="clear">
									<li><a href="javascript:void(0)" id = "selectDate" name="maxTime" onClick = "selectDatechange(1,this)">今天</a></li>
									<li><a href="javascript:void(0)" id = "selectDate" name="maxTime" onClick = "selectDatechange(2,this)">明天</a></li>
									<li><a href="javascript:void(0)" id = "selectDate" name="maxTime" onClick = "selectDatechange(3,this)">本周末</a></li>
									<li><a href="javascript:void(0)" id = "selectDate" name="maxTime" onClick = "selectDatechange(4,this)">一个月内</a></li>
									<li class="search_time">
										<span class="dataTime" id="dataTime">按时间段:
											<input id="from" class="t" type="text" name="minTime" onClick="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'%y-%M-%d'})"  style="*z-index:100;*position:relative;"/> -
											<input id="to" class="t" type="text" name="maxTime" onClick="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'%y-%M-%d'})"  style="*z-index:100;*position:relative;"/>
										</span>
									</li>
									<li class="sarch-calen">
										<a class="search_calendar" href="javascript:datepicker;"  onclick="showcalendar(event, this);return false;" onfocus="showcalendar(event, this);" data-value="">按日历</a>
									</li>
								</ul>
							</dd>
						</dl>
<!-- 时间筛选 end -->
					</div>
<!-- 条件筛选 end -->

<!-- 排序start -->
                <div class="search_main">
						<div class="search_sort">
							<div class="search_sort_page">
								<div class="search_sort_com">
									<a title="列表模式" href="javascript:void(0)" onclick="pageListModle(0)" class="search_lis_on"></a>
									<a title="大图模式" href="javascript:void(0)" class="search_icon" onclick="pageListModle(1)"></a>
								</div>
								<div class="search_sort_num">
									<a href="javascript:void(0)" class="search_sort_prev_gray"></a>
									<a href="javascript:void(0)"  class="search_sort_prev"  onclick="pagesAjax('0')"></a>
									<p class="search_sort_txt"><span>1</span>/<span>0</span></p>
									<a class="search_sort_next_gray" ></a>
									<a class="search_sort_next" href="javascript:void(0)"  onclick="pagesAjax('0')"></a>
								</div>
							</div>
							<ul class="search_sort_way">
								<li><a id="search_xgj"  href="javascript:void(0)" onclick="orderajax(0,this)">相关度排序</a></li>
								<li><a id="search_rm" class="active" href="javascript:void(0)" onclick="orderajax(1,this)">推荐排序</a></li>
								<li><a id="search_ycsj"  href="javascript:void(0)" onclick="orderajax(2,this)">最近开场</a></li>
								<li><a id="search_sjsj"  href="javascript:void(0)" onclick="orderajax(3,this)">最新上架</a></li>
							</ul>
						</div>
						<%--<ul  class="search_list_loading">
							<li style="border:none;display:none;margin-left:30px;height:40px; margin-top:25px;" id="search_loading"  >
								<div class="search_loading"  >努力加载中...</div>
							</li>
						</ul>--%>
<!-- 搜索列表 start -->
                        <%--${messageDTOList}--%>
						<ul class="search_list" id="content_list" >
                            <c:forEach items="${messageDTOList}" var="mes" varStatus="status">
                                <li>
                                    <div class="search_img">
                                        <a id="search_log_147994" href="<%=basePath%>/message/info?mesId=${mes.mesId}" onclick="toItem(147994,1,1,${mes.mesName})"
                                           target="_blank" title="${mes.mesName}">
                                            <img src="<%=basePath%>/concert/img/${mes.mesPhoto}" alt="" width="115" height="155"></a>
                                    </div>

                                    <div class="search_txt">
                                        <h3>【${mes.cityDTO.cityName}】<a id="search_log_147994" href="<%=basePath%>/message/info?mesId=${mes.mesId}"
                                                   onclick="toItem(147994,1,1,2018)" target="_blank">${mes.mesName}</a></h3>
                                        <p class="search_txt_cut c3">${mes.mesExplain}</p>
                                        <p class="search_txt_time c3" data-spm-anchor-id="a2o6e.search.0.i2.54824d15MB9bj8">
                                            <a href="#" class="search_txt_time_icon"></a>${mes.mesTime}
                                        </p>
                                        <p class="c1">
                                            <a href="#" target="_blank" class="search_txt_site_icon">${mes.placeDTO.placeName}</a>
                                        </p>
                                        <p class="search_txt_piao"><em>${mes.mesDetList[0].mdPrice}元</em>预售</p>
                                    </div>
                                </li>
                            </c:forEach>
						</ul>
					</div>
            </div>

				<div class="search_right">
					<div class = "search_right_head" ></div>
<!-- 艺人场馆展位 -->
					<!-- <script type="text/javascript" src="<%=basePath %>/com.concert.test/js/o.js"></script>
					<script type="text/javascript">DAMAI_CLB_fillSlotAsync("35","ad_clb_cnt");</script>
					<div id="ad_clb_cnt" class="mb15"></div> -->
<!--明星周边-->
					<div id = "artist_around"></div>
<!--热门推荐-->
					<div id = "guess_you_like"></div>
				</div>
        </div>
</div>
<!--搜索有结果 end -->



<!--内容 end-->
<!--页面尾部  start-->
    <div id="showfoot">
	<!--页面底部 start-->
        <div class="dm-bottom-wrap">
          <div class="dm-bottom">
            <div class="dm-helper">
                  <dl class="lst  lst-order">
                      <dt>订购方式</dt>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/269.html" target="_blank">在线订购</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/270.html" target="_blank">电话订购</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/271.html" target="_blank">上门订购</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/272.html" target="_blank">大客户团体订购</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/contents/295/5717.html" target="_blank">大麦超级票订购</a>
                      </dd>
                  </dl>
                  <dl class="lst  lst-dist">
                      <dt>配送方式</dt>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/275.html" target="_blank">送货上门</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/276.html" target="_blank">电子票</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/277.html" target="_blank">上门自取</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/1916.html" target="_blank">大麦自助机换票</a>
                      </dd>
                  </dl>
                  <dl class="lst  lst-pay">
                      <dt>支付方式</dt>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/281.html" target="_blank">在线支付</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/284.html" target="_blank">柜台付款</a>
                      </dd>
                  </dl>
                  <dl class="lst lst-weixin">
                    <dt style="margin-left:-2px;">大麦网微信</dt>
                    <dd>
                      <a class="dm-code"></a>
                    </dd>
                  </dl>
                  <dl class="lst lst-touch">
                    <dt style="margin-left:-8px;">大麦网触屏版</dt>
                    <dd><a class="dm-code-m"></a></dd>
                  </dl>
                  <dl class="lst  lst-safe ">
                      <dt>账户安全</dt>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/287.html" target="_blank">找回密码</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/288.html" target="_blank">账户注册</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/289.html" target="_blank">账户绑定</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/290.html" target="_blank">SSL安全证书</a>
                      </dd>
                  </dl>
                  <dl class="lst  lst-service ">
                      <dt>售后服务</dt>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/299.html" target="_blank">退换及缺货说明</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/channels/300.html" target="_blank">发票帮助</a>
                      </dd>
                      <dd>
                          <a href="//help.damai.cn/damai/contents/1870/5676.html" target="_blank">订票服务条款</a>
                      </dd>
                  </dl>
                  <dl class="lst lst-feature">
                      <dt>特色服务</dt>
                                              <dd>
                          <a target="_blank" href="//venue.damai.cn/">场馆库</a>
                      </dd>
                      <dd>
                          <a target="_blank" href="//dingyue.damai.cn/subType.do?platformId=1">演出订阅</a>
                      </dd>
                  </dl>
              </div>

            <div class="dm-links">
                    <a href="//help.damai.cn/damai/contents/1896/5617.html" target="_blank">公司介绍</a>
                    |<a href="//help.damai.cn/damai/contents/1896/5638.html" target="_blank">品牌识别</a>
                    |<a href="//www.damai.cn/QuestionDetail_186_396.html" target="_blank">企业荣誉</a>
                    |<a href="https://help.damai.cn/damai/contents/288/13934.html" target="_blank">隐私权专项政策</a>
                    |<a href="//help.damai.cn/damai/contents/1872/5674.html" target="_blank">联系及合作</a>
                    |<a href="https://jubao.alibaba.com/internet/readme.htm?site=damai" target="_blank">廉正举报</a>
                    |<a href="https://help.damai.cn/contents/1896/5629.html" target="_blank">招聘信息</a>
                    |<a href="//www.damai.cn/map.html" target="_blank">网站地图</a>
                    |<a href="//help.damai.cn/damai/contents/1896/5655.html" target="_blank">友情链接</a>
                    |<a href="https://help.damai.cn/damai/contents/1896/13733.html" target="_blank">公司大事记</a>
                   </div>
            <div class="dm-copyright">
                <p>
                    <a href="http://www.miitbeian.gov.cn" target="_blank">京ICP证031057号</a>
                    <span>|</span>
                    <a href="http://www.miitbeian.gov.cn" target="_blank">京ICP备11043884号</a>
                    <span>|</span>
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102000430" target="_blank">
                        <img src="<%=basePath %>/concert/picture/police.png" class="vm" />京公网安备11010102000430号
                    </a>
                    <span>|</span>
                    <a href="//dui.dmcdn.cn/dm_2014/common/img/logo/gbdsjm.jpg" target="_blank">广播电视节目制作经营许可证 (京)字第02253号</a>
                </p>
                <p>
                    <a href="//dui.dmcdn.cn/dm_2014/common/img/logo/wlwhjy.jpg?v2016" target="_blank">网络文化经营许可证 京网文[2016]3438-413号</a>
                    <span>|</span>
                    <a href="//dui.dmcdn.cn/dm_2014/common/img/logo/yyxyc.jpg" target="_blank">营业性演出许可证 京市演587号</a>
                </p>
                <p>
                    北京红马传媒文化发展有限公司 版权所有 <a href="//www.damai.cn/">大麦网</a> Copyright 2003-2018 All Rights Reserved
            </p>
            </div>
            <div class="dm-copyright">
              <a rel="nofollow" title="中国票务在线" target="_blank" href="//www.damai.cn/">
                <img class="mr10" alt="" src="<%=basePath %>/concert/picture/piao.png">
              </a>
                <a rel="nofollow" title="电子营业执照" target="_blank" href="//dui.dmcdn.cn/dm_2014/common/img/logo/dzyyzz.jpg">
                    <img class="mr10" alt="" src="<%=basePath %>/concert/picture/dzyy.png">
                </a>
                <span id="siteseal">
                    <script async="" type="text/javascript">
            function verifySeal() {
                var bgHeight = "null";
                var bgWidth = "593";
                var url = "https:\/\/seal.godaddy.com\/verifySeal?sealID=LU6rXPgk5BZ67ZEYpYS2JcN3AyCJOs6aD3HBo4dwA3iGeqp6csKFmqgB0zLL";
                window.open(url,'SealVerfication','menubar=no,toolbar=no,personalbar=no,location=yes,status=no,resizable=yes,fullscreen=no,scrollbars=no,width=' + bgWidth + ',height=' + bgHeight);
            }
        </script>
        <img style="cursor:pointer;cursor:hand" src="<%=basePath %>/concert/picture/siteseal_gd_3_h_l_m.gif" onclick="verifySeal();" alt="SSL site seal - click to verify">		</span>
              <a rel="nofollow" target="_blank" href="https://www.pcisecuritystandards.org/">
                <img src="<%=basePath %>/concert/picture/pci.png" class="mr10">
              </a>
              <a rel="nofollow" target="_blank" href="http://www.itrust.org.cn/home/index/itrust_certifi/wm/1756737221">
                <img src="<%=basePath %>/concert/picture/xin.png" class="mr10">
              </a>
              <a target="_blank" href="https://search.szfw.org/cert/l/CX20130327002367002885" id="___szfw_logo___">
                <img src="<%=basePath %>/concert/picture/chengxin.png">
              </a>
                <script type="text/javascript">(function () { document.getElementById('___szfw_logo___').oncontextmenu = function () { return false; } })();</script>
            </div>
          </div>
        </div>
<!--页面底部 end-->
    <script type="text/javascript" src="<%=basePath %>/concert/js/seoflowstatistics.js"></script>
    <script>
        if (typeof JsLoader === 'undefined') { window.JsLoader = { load: function () { }, before: function () { }, complete: function () { }, completeAfter: function () { } }; }
    </script>

    </div>

<!--页面尾部 end-->
<!-- 固定侧栏 begin -->
	<div class="m-sdfix">
		<a class="itm resch" href="javascript:;" onclick="popLayer($('#seachTaste'));">
			<i class="ico"></i><span class="txt">用户反馈</span>
		</a>
		<a class="itm totop z_crt" href="javascript:;">
			<i class="ico"></i><span class="txt">返回顶部</span>
		</a>
	</div>
<!-- 固定侧栏 end -->
<!-- ie6提示 begin -->
	<div class="ie6_prompt">温馨提示：为了您获得更好的浏览体验，建议您升级IE浏览器，或使用谷歌浏览器<a href="javascript:;" class="ie6_close"></a></div>
<!-- ie6提示 end -->
<!--弹出层  start-->
<!--一键订阅  start-->
	<div class="mai_layer layer_w330" id="subscribe">
		<div class="layer_title"><a class="layer_close" href="#" title="关闭"></a><h4>提示</h4></div>  
		<div class="layer_con subscribe_con">
			<div class="layer_box clear">
				<p class="search_box_tips"><span></span><strong>恭喜您，订阅成功！</strong></p>
				<p class="search_box_hint">您可在“我的大麦-我的订阅”进行设置。</p>
			</div>
		</div>
	</div>
<!--一键订阅  end-->
<!--已订阅  start-->
	<div class="mai_layer layer_w330" id="subscribed">
		<div class="layer_title"><a class="layer_close" href="#" title="关闭"></a><h4>提示</h4></div>
		<div class="layer_con subscribe_con">
			<div class="layer_box clear">
				<p class="search_box_tips"><span></span><strong>已订阅！</strong></p>
				<p class="search_box_hint">您可在“我的大麦-我的订阅”进行设置。</p>
			</div>
		</div>
	</div>
<!--已订阅  end-->
<!--搜索体验 start-->
	<div class="mai_layer layer_w368" id="seachTaste">
		<div class="layer_title">
			<a class="layer_close" href="#" title="关闭"></a>
			<h4>说说您的搜索体验</h4>
		</div>
		<div class="layer_con seach_taste_con">
			<div class="layer_box clear">
				<p>1.您对搜索的结果？<p>
				<p class="seach_taste_fruit"><input type="radio" checked="checked" name="fruit" id="1"/>满意　<input type="radio" name="fruit" id="2"/>不满意</p>
				<p class="search_taste_txt">2.您有什么建议（选填）</p>
				<label>
					<span style="">描述一下您遇到的问题或提出建议。大麦搜索持续优化中，您的反馈将作为我们重要的参考。(200字以内)</span>
					<textarea id="search_feedback_suggest" class="input_txt"></textarea>
				</label>
				<p class="search_taste_txt">3.留下您的联系方式，便于回复您的问题（选填）</p>
				<label class="search_taste_int">
					<span style="">手机号/qq/邮箱</span>
					<input type="text" class="sh_int input_txt">
				</label>
				<a class="search_taste_btn" href="javascript:searchFeedBack()">提  交</a>
			</div>
		</div>
	</div>

</div>
<!--搜索体验  end-->
<!--弹出层  end-->
<script src="<%=basePath %>/concert/js/dindex.js"></script>
<script type="text/javascript">
var keyword = $("#keyword").val();
var ctl = $("#category_name").val();
var tn = $("#tag_names").val();
var sctl = $("#subcategory_name").val();
var cty = $("#city_name").val();
var destCity = $("#destCity").val();
var isSingleChar = $("#isSingleChar").val();
var param = {
		"keyword" : keyword,
		"cty":cty,
		"ctl":ctl,
		"sctl":sctl,
		"tn":tn,
		"destCity":destCity,
		"singleChar":isSingleChar
	};
searchajax(param);
</script>
<!-- cnzz start-->
<!-- start Dplus -->
<script type="text/javascript">!function(a,b){if(!b.__SV){var c,d,e,f;window.dplus=b,b._i=[],b.init=function(a,c,d){function g(a,b){var c=b.split(".");2==c.length&&(a=a[c[0]],b=c[1]),a[b]=function(){a.push([b].concat(Array.prototype.slice.call(arguments,0)))}}var h=b;for("undefined"!=typeof d?h=b[d]=[]:d="dplus",h.people=h.people||[],h.toString=function(a){var b="dplus";return"dplus"!==d&&(b+="."+d),a||(b+=" (stub)"),b},h.people.toString=function(){return h.toString(1)+".people (stub)"},e="disable track track_links track_forms register unregister get_property identify clear set_config get_config get_distinct_id track_pageview register_once track_with_tag time_event people.set people.unset people.delete_user".split(" "),f=0;f<e.length;f++)g(h,e[f]);b._i.push([a,c,d])},b.__SV=1.1,c=a.createElement("script"),c.type="text/javascript",c.charset="utf-8",c.async=!0,c.src="//w.cnzz.com/dplus.php?token=7415364c9dab5n09ff68",d=a.getElementsByTagName("script")[0],d.parentNode.insertBefore(c,d)}}(document,window.dplus||[]),dplus.init("7415364c9dab5n09ff68");</script>
<!-- end Dplus -->

<!-- start Dplus Define -->
<script type="text/javascript">!function(a,b){var c,d;window.__dplusDefineCacheQueue=[],b.define=function(){window.__dplusDefineCacheQueue.push(Array.prototype.slice.call(arguments))},c=a.createElement("script"),c.type="text/javascript",c.charset="utf-8",c.async=!0,c.src="//w.cnzz.com/dplus.define.php",d=a.getElementsByTagName("script")[0],d.parentNode.insertBefore(c,d)}(document,window.dplus);</script>
<!-- end Dplus Define -->

<script type="text/javascript">
	$(document).ready(function(){
		var key='';
		var tol=0;
		dplus.define('inSearch', function(inSearch){
			inSearch.listResults({
				keyword: key,
				resultNumber: tol,
				'$cg':'大麦搜索'
			});
		});
	});
	function toItem(st,pn,cli,stn){
		var key='';
		var tag=$("#category_name").val();
		var tn=$("#curr_order").val();
		var tna="相关度排序";
		if(tn==1){
			tna="推荐排序";
		}else if(tn==2){
			tna="按演出时间";
		}
		var ut=0;
		dplus.track('searchclick',{
			'$tti':'search',
			'userid':ut,
			'$tul':'//search.damai.cn/search.html?keyword='+key+'',
			'kw':key,
			'$tna':tna,
			'$tdx':cli,
			'$pid':st,
			'tag':tag,
			'$na':stn
		});
	}
	
	function clickCn(pid,pname,tdx){
		var key='';
		var ut=0;
		dplus.track('recclick',{
			'$tti':'search',
			'kw':key,
			'userid':ut,
			'$tul':'//search.damai.cn/search.html?keyword='+key+'',
			'$tna':'猜你喜欢',
			'$tdx':tdx,
			'$pid':pid,
			'tag':'search_recom1_search_0_'+pid+'_userpreference_integrateartist_project_default',
			'$na':pname
		});
	}
</script>
<!-- cnzz end-->

<script type="text/javascript">
	//author: meizz
	Date.prototype.format = function (fmt) { 
		var o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			"S": this.getMilliseconds() //毫秒
		};
		
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	
	var calendarSettings = [
		{ year: 2017, month: 12, days: [{ day: 24, holiday: false, festival: "平安夜" }, { day: 25, holiday: false, festival: "圣诞节"},{ day: [30,31], holiday: true}] },
		{ year: 2018, month: 1, days: [{ day: 1, holiday: true, festival: "元旦" }, { day: 24, holiday: false, festival: "腊八节" }] },
		{ year: 2018, month: 2, days: [{ day: 4, holiday: false, festival: "立春" },{ day: 14, holiday:false, festival:"情人节"}, { day: 15, holiday: true, festival: "除夕" }, { day: 16, holiday: true, festival: "春节" }, { day: [17, 18, 19, 20, 21], holiday: true }] },
		{ year: 2018, month: 3, days: [{ day: 2, holiday: false, festival: "元宵节" }, { day: 8, holiday: false, festival: "妇女节" }, { day: 12, holiday: false, festival: "植树节"}] },
		{ year: 2018, month: 4, days: [{ day: 1, holiday: false, festival: "愚人节" }, { day: [6, 7, 29, 30], holiday: true},{ day: 5, holiday: true, festival: "清明节" }] },
		{ year: 2018, month: 5, days: [{ day: 1, holiday: true, festival: "劳动节" }, { day: 4, holiday: false, festival: "青年节" }, { day: 5, holiday: false, festival: "立夏" }, { day: 13, holiday: false, festival: "母亲节" }, { day: 12, holiday: false, festival: "护士节" }] },
		{ year: 2018, month: 6, days: [{ day: 1, holiday: false, festival: "儿童节" }, { day: [16], holiday: true }, { day: 17, holiday: true, festival: "父亲节" }, { day: 18, holiday: true, festival: "端午节" }] },
		{ year: 2018, month: 7, days: [{ day: 1, holiday: false, festival: "建党节"}] },
		{ year: 2018, month: 8, days: [{ day: 1, holiday: false, festival: "建军节" }, { day: 7, holiday: false, festival: "立秋" }, { day: 17, holiday: false, festival: "七夕"},{ day: 25, holiday: false, festival: "中元节" }] },
		{ year: 2018, month: 9, days: [{ day: 3, holiday: false, festival: "抗战胜利日" },{ day: 10, holiday: false, festival: "教师节" },{ day: [22,23], holiday: true },{ day: 24, holiday: true, festival: "中秋节" }] },
		{ year: 2018, month: 10, days: [{ day: 1, holiday: true, festival: "国庆节" }, { day: [2, 3, 4, 5, 6, 7], holiday: true }, { day: 17, holiday: false, festival: "重阳节"}] },
		{ year: 2018, month: 11, days: [{ day: 1, holiday: false, festival: "万圣节" },{ day: 7, holiday: false, festival: "立冬" }, { day: 22, holiday: false, festival: "感恩节"}] },
		{ year: 2018, month: 12, days: [{ day: 24, holiday: false, festival: "平安夜" }, { day: 25, holiday: false, festival: "圣诞节"}] }
	];
	
	function getSetting(date) {
		var ret = {};
		var month = date.getMonth() + 1, day = date.getDate(), year = date.getFullYear();
		for(var i = 0; i < calendarSettings.length; i++) {
			if(calendarSettings[i].month == month && calendarSettings[i].year == year) {
				for(var j = 0; j < calendarSettings[i].days.length; j++) {
					var sday = calendarSettings[i].days[j];
					if(day == sday.day) {
						ret = sday;
					} else if(Object.prototype.toString.call(sday.day) == "[object Array]") {
						for(var d = 0 ; d < sday.day.length; d++) {
							if(sday.day[d] == day) ret = { day: day, holiday: sday.holiday, festival: sday.festival };
						}
					}
				}
			}
		}
		ret.hasProject = hasProject(date);
		ret.isSearchDate = isSearchDate(date);
		return ret;
	}
	
	function hasProject(date) {
		var k = "D" + date.format("yyyyMMdd");
		if(window.projectDates[k])
			return true;
		return false;
	}
	
	function isSearchDate(date) {
		if(typeof(searchDate) == 'string' && date.format("yyyy-MM-dd") == searchDate)
			return true;
		return false;
	}

	var controlid = null;
	var currdate = null;
	var startdate = null;
	var enddate  = null;
	var yy = null;
	var mm = null;
	var hh = null;
	var ii = null;
	var currday = null;
	var addtime = false;
	var today = new Date();
	var lastcheckedyear = false;
	var lastcheckedmonth = false;
	
	function _cancelBubble(event) {
		e = event ? event : window.event ;
		if(ie) {
			e.cancelBubble = true;
		} else {
			e.stopPropagation();
		}
	}
	
	function getposition(obj) {
		var r = new Array();
		r['x'] = obj.offsetLeft;
		r['y'] = obj.offsetTop;
		while(obj = obj.offsetParent) {
			r['x'] += obj.offsetLeft;
			r['y'] += obj.offsetTop;
		}
		return r;
	}
	
	function loadcalendar() {
		s = '';
		s += '<div id="calendar" style="display:none; position:absolute; z-index:100;" onclick="_cancelBubble(event)">';
		s += '<div style="width:auto; -moz-border-radius:8px; -webkit-border-radius:8px; border-radius:8px; box-shadow:0px 0px 10px #ccc;margin-top:10px;"><table class="tableborder" cellspacing="0" cellpadding="0" width="100%" style="text-align: center;">';
 		s += '<tr align="center"><td colspan="7" class="dateheader" style="text-align: left; padding-left:20px; height:36px;border-top-left-radius: 5px; border-top-right-radius:5px;"><a id="calendarLeftButton" href="#" onclick="refreshcalendar(yy, mm-1);return false" title="上一月" class="mr15"><</a><a href="#" onclick="showdiv(\'year\');_cancelBubble(event);return false" title="点击选择年份" id="year" style=" font-weight:400"></a><span class="ml5 mr10 f16 c1">年</span><a id="month" title="点击选择月份" href="#" style=" font-weight:400" onclick="showdiv(\'month\');_cancelBubble(event);return false"></a><span class="ml5 mr10 f16 c1">月</span><A href="#" onclick="refreshcalendar(yy, mm+1);return false" title="下一月" class="ml15 red">></A><a href="#" class="new-today" onclick="gotoToday();" style="font-size:12px; font-weight:400">返回今天</a><a href="#" class="new-error" style="font-size:12px; font-weight:400" onclick="hideCalendar();"></a></td></tr>';
 		s += '<tr class="category"><td style="height:25px; color:#ff3b3c;">星期日</td><td style="height:25px;">星期一</td><td style="height:25px;">星期二</td><td style="height:25px;">星期三</td><td style="height:25px;">星期四</td><td style="height:25px;">星期五</td><td style="height:25px; color:#ff3b3c;">星期六</td></tr>';
 		for(var i = 0; i < 6; i++) {
 			s += '<tr class="altbg2">';
 			// 修改行数
 			for(var j = 1; j <= 7; j++) {
 				s += "<td id=d" + (i * 7 + j) + " height=\"190\">0<br>111</td>";
 			}
 			s += "</tr>";
 		}
 		s += '</table></div></div>';
 		s += '<div id="calendar_year" onclick="_cancelBubble(event)"><div class="col">';
 		for(var k = 2017; k <= 2022; k++) {
 			s += k != 2017  &&  k % 10 == 0 ? '</div><div class="col">' : '';
 			s += '<a href="#" onclick="refreshcalendar(' + k + ', mm);document.getElementById(\'calendar_year\').style.display=\'none\';return false"><span' + (today.getFullYear() == k ? ' class="today"' : '') + ' id="calendar_year_' + k + '">' + k + '</span></a><br />';
 		}
 		s += '</div></div>';
 		s += '<div id="calendar_month" onclick="_cancelBubble(event)">';
 		for(var k = 1; k <= 12; k++) {
 			s += '<a href="#" onclick="refreshcalendar(yy, ' + (k - 1) + ');document.getElementById(\'calendar_month\').style.display=\'none\';return false"><span' + (today.getMonth()+1 == k ? ' class="today"' : '') + ' id="calendar_month_' + k + '">' + k + ( k < 10 ? ' ' : '') + ' 月</span></a><br />';
 		}
 		s += '</div>';
 		var nElement = document.createElement("div");
 		nElement.innerHTML=s;
 		document.getElementsByTagName("body")[0].appendChild(nElement);
 		// document.write(s);
 		document.onclick = function(event) {
 			document.getElementById('calendar').style.display = 'none';
 			document.getElementById('calendar_year').style.display = 'none';
 			document.getElementById('calendar_month').style.display = 'none';
 		}
 		document.getElementById('calendar').onclick = function(event) {
 			_cancelBubble(event);
 			document.getElementById('calendar_year').style.display = 'none';
 			document.getElementById('calendar_month').style.display = 'none';
 		}
 	}

	function parsedate(s) {
		/(\d+)\-(\d+)\-(\d+)\s*(\d*):?(\d*)/.exec(s);
		var m1 = (RegExp.$1  &&  RegExp.$1 > 1899  &&  RegExp.$1 < 2101) ? parseFloat(RegExp.$1) : today.getFullYear();
		var m2 = (RegExp.$2  &&  (RegExp.$2 > 0  &&  RegExp.$2 < 13)) ? parseFloat(RegExp.$2) : today.getMonth() + 1;
		var m3 = (RegExp.$3  &&  (RegExp.$3 > 0  &&  RegExp.$3 < 32)) ? parseFloat(RegExp.$3) : today.getDate();
		var m4 = (RegExp.$4  &&  (RegExp.$4 > -1  &&  RegExp.$4 < 24)) ? parseFloat(RegExp.$4) : 0;
		var m5 = (RegExp.$5  &&  (RegExp.$5 > -1  &&  RegExp.$5 < 60)) ? parseFloat(RegExp.$5) : 0;
		/(\d+)\-(\d+)\-(\d+)\s*(\d*):?(\d*)/.exec("0000-00-00 00\:00");
		return new Date(m1, m2 - 1, m3, m4, m5);
	}
	
	function settime(d) {
		document.getElementById('calendar').style.display = 'none';
		//controlid.value = yy + "-" + zerofill(mm + 1) + "-" + zerofill(d) + (addtime ? ' ' + zerofill(document.getElementById('hour').value) + ':' + zerofill(document.getElementById('minute').value) : '');
		window.search("date", yy + "-" + zerofill(mm - 0 + 1) + "-" + zerofill(d));
	}
	
	function showcalendar(event, controlid1, addtime1, startdate1, enddate1) {
		if(window.searchDate != window.searchDateReal && window.searchDateReal){
			window.searchDate = window.searchDateReal;
		}
		controlid = controlid1;
		addtime = addtime1;
		startdate = startdate1 ? parsedate(startdate1) : false;
		enddate = enddate1 ? parsedate(enddate1) : false;
		var dv = controlid.getAttribute("data-value");
		if(dv && dv.length > 0)
			currday = parsedate(dv);
		else currday = today;
		hh = currday.getHours();
		ii = currday.getMinutes();
		var p = getposition(controlid);
		document.getElementById('calendar').style.display = 'block';
		document.getElementById('calendar').style.left = (p['x']-390) + 'px';//500+'px';
		document.getElementById('calendar').style.top = (p['y'] + 20)+'px';
		_cancelBubble(event);
		
		if(null !=window.searchDate){
			var strs= new Array(); //定义一数组
			strs=window.searchDate.split("-");
			yy = parseInt(strs[0]);
			mm = parseInt(strs[1]) - 1;
			
			refreshcalendar(yy, mm);
		} else
			refreshcalendar(currday.getFullYear(), currday.getMonth());
		
		if(lastcheckedyear != false) {
			document.getElementById('calendar_year_' + lastcheckedyear).className = 'default';
			document.getElementById('calendar_year_' + today.getFullYear()).className = 'today';
		}
		if(lastcheckedmonth != false) {
			document.getElementById('calendar_month_' + lastcheckedmonth).className = 'default';
			document.getElementById('calendar_month_' + (today.getMonth() + 1)).className = 'today';
		}
		//document.getElementById('calendar_year_' + currday.getFullYear()).className = 'checked';
		//document.getElementById('calendar_month_' + (currday.getMonth() + 1)).className = 'checked';
		//document.getElementById('hourminute').style.display = addtime ? '' : 'none';
		lastcheckedyear = currday.getFullYear();
		lastcheckedmonth = currday.getMonth() + 1;
	}
	
	function refreshcalendar(y, m) {
		if(y <= today.getFullYear() && m < today.getMonth()) {
			return false;
		}
		
		var date=new Date();
		var month=date.getMonth();
		if(m == month){
			$("#calendarLeftButton").addClass("gray");
		}else{
			$("#calendarLeftButton").removeClass("gray");
		}

		var x = new Date(y, m, 1);
		var mv = x.getDay();
		var d = x.getDate();
		var dd = null;
		yy = x.getFullYear();
		mm = x.getMonth();
		
		dateinit();
		document.getElementById("year").innerHTML = yy;
		document.getElementById("month").innerHTML = mm + 1 > 9  ? (mm + 1) : '0' + (mm + 1);
		for(var i = 1; i <= mv; i++) {
			dd = document.getElementById("d" + i);
			dd.innerHTML = " ";
			dd.className = "";
		}
		while(x.getMonth() == mm) {
			dd = document.getElementById("d" + (d + mv));
			var setting = getSetting(x);
			var clsN = "default ";
			var innerHTML ="";
			var isold = false;
			if(setting.holiday){
				clsN += 'new-pic-holiday ';
			} else if(setting.workday) {
				clsN += 'new-pic-work ';
			}
			if( (x.getFullYear() <= today.getFullYear() && x.getMonth() < today.getMonth()) || (x.getFullYear() <= today.getFullYear() && x.getMonth() <= today.getMonth() && x.getDate() < today.getDate() ) || (enddate  &&  x.getTime() > enddate.getTime()) || (startdate  &&  x.getTime() < startdate.getTime())) {
				clsN += 'expire ';
				//innerHTML = '<div class=calendar-relative calendar-active onmouseover="calendarOver(this)" onmouseout="calendarOut(this)"><span class=date>' + d + "</span></div>";
				
				innerHTML = '<div class=calendar-relative calendar-active onmouseover="calendarOver(this)" onmouseout="calendarOut(this)"><span class=date>' + d + "</span>";
				if(setting.festival && setting.festival.length > 0){
					innerHTML += "<span class=fest>" + setting.festival + "</span>";
				}
				innerHTML +="</div>";
				isold =true;
			} else {
				innerHTML = '<div class="calendar-relative calendar-active" onclick="settime(' + d + ');return false" onmouseover="calendarOver(this)" onmouseout="calendarOut(this)"><span class="date">' + d + '</span>';
				if(setting.hasProject){
					clsN += 'new-pic-dian ';
				}
				if(x.getFullYear() == today.getFullYear()  &&  x.getMonth() == today.getMonth()  &&  x.getDate() == today.getDate()) {
					//clsN += 'today ';
					if(!window.searchDate)
						clsN += "checked";
					dd.title = '今天';
				}
				if(setting.isSearchDate) {
					clsN += 'checked';
				}
			}
			
			if(setting.festival && setting.festival.length > 0 && !isold){
				innerHTML += "<span class=fest>" + setting.festival + "</span>";
			}
			innerHTML += "</div>";
			dd.innerHTML = innerHTML;
			dd.className = clsN;
			x.setDate(++d);
		}
		while(d + mv <= 42) {
			dd = document.getElementById("d" + (d + mv));
			dd.innerHTML = " ";
			d++;
		}
		if(addtime) {
			document.getElementById('hour').value = zerofill(hh);
			document.getElementById('minute').value = zerofill(ii);
		}
		
		// add by chenxi begin at 2014-09-29 14:03
		// 隐藏最后一行为空的日历
		var calendar = document.getElementById('calendar');
		var table = calendar.getElementsByTagName('table')[0];
		var trs = table.getElementsByTagName('tr');
		var tds = table.getElementsByTagName('td');
		var days = [];
		var lines = [];
		
		// 获取所有行
		for (var i = 0, len = trs.length; i < len; i++) {
			if (trs[i].className.indexOf('altbg2') !== -1) lines.push(trs[i]);
		}
		
		// 去除空行
		for (var i = 0, len = lines.length; i < len; i++) {
			if (isEmptyLine(lines[i])) {
				lines[i].style.display = 'none';
			} else {
				lines[i].style.display = '';
			}
		}
		
		// 去除空日
		for (var i = 0, len = tds.length; i < len; i++) {
			if (tds[i].className.indexOf('new-pic-dian') !== -1) days.push(tds[i]);
		}
		
		for (var i = 0, len = days.length; i < len; i++) {
			if (!/[^\s\b\r\t]/i.test(days[i].innerHTML)) days[i].className = '';
		}

		function isEmptyLine(element) {
			var itms = element.getElementsByTagName('td');
			var empty = true;

			for (var i = 0, len = itms.length; i < len; i++) {
				if (/[^\s\b\r\t]/i.test(itms[i].innerHTML)) {
					empty = false;
					break;
				}
			}
			
			return empty;
		}
		// add by chenxi end at 2014-09-29 15:05
	}
	// 工具集
	var utlis = {
		// 去除多余空格
		trimb: function (value) {
			return value.replace(/((\s)+)/ig, '$2').replace(/^[\s\b]|[\s\b]$/ig, '');
		},
		// 增加 class
		addClass: function (element, value) {
			if ((' ' + element.className.toLowerCase() + ' ').indexOf(' ' + value + ' ') === -1)
				element.className += (' ' + value);
			return this;
		},
		// 移除 class
		removeClass: function (element, value) {
			if ((' ' + element.className.toLowerCase() + ' ').indexOf(' ' + value + ' ') !== -1) 
				element.className = this.trimb(element.className.replace(value, ''));
			if (!element.className)
				element.removeAttribute('class');
			return this;
		}
	};
	// 增加 hover 效果
	function calendarOver(element) {
		utlis.addClass(element, 'calendar-hover');
	}
	
	function calendarOut(element) {
		utlis.removeClass(element, 'calendar-hover');
	}
	
	// add by chenxi begin at 2014-09-29 15:05
	// 返回今天
	function gotoToday(ev, context) {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth();
		window.searchDate = new Date().format("yyyy-MM-dd");
		refreshcalendar(year, month);
	}
	
	function hideCalendar() {
		var calendar = document.getElementById('calendar');
		calendar.style.display = 'none';
	}
	// add by chenxi end at 2014-09-29 15:05
	
	function showdiv(id) {
		var p = getposition(document.getElementById(id));
		document.getElementById('calendar_' + id).style.left = p['x']+'px';
		document.getElementById('calendar_' + id).style.top = (p['y'] + 16)+'px';
		document.getElementById('calendar_' + id).style.display = 'block';
	}
	
	function zerofill(s) {
		var s = parseFloat(s.toString().replace(/(^[\s0]+)|(\s+$)/g, ''));
		s = isNaN(s) ? 0 : s;
		return (s < 10 ? '0' : '') + s.toString();
	}
	
	loadcalendar();

	var nkeyword = cutstrlength('',35);
	$("#kwordspan").html(nkeyword);
</script>

<script type="text/javascript">
    (function (b) {
        var c = b(window);
        b.fn.lazyload = function (e) {
            var f = {threshold: 100, failurelimit: 10, event: "scroll", effect: "show", container: window};
            if (e) {
                b.extend(f, e)
            }
            var d = this;
            if ("scroll" == f.event) {
                b(f.container).bind("scroll", function (h) {
                    var g = 0;
                    d.each(function () {
                        if (b.abovethetop(this, f)) {
                        } else {
                            if (!b.belowthefold(this, f)) {
                                b(this).trigger("appear")
                            } else {
                                if (g++ > f.failurelimit) {
                                    return false
                                }
                            }
                        }
                    });
                    var i = b.grep(d, function (j) {
                        return !j.loaded
                    });
                    d = b(i)
                })
            }
            this.each(function () {
                var g = this;
                if (undefined != b(g).attr("original")) {
                    g.loaded = false;
                    b(g).one("appear", function () {
                        if (!this.loaded) {
                            b("<img />").bind("load", function () {
                                b(g).hide().attr("src", b(g).attr("original"))[f.effect](f.effectspeed);
                                g.loaded = true
                            }).attr("src", b(g).attr("original"))
                        }
                    })
                }
            });
            b(f.container).trigger(f.event);
            return this
        };
        function a() {
        }

        b.belowthefold = function (e, d) {
            var f;
            if (d.container === undefined || d.container === window) {
                f = (window.innerHeight ? window.innerHeight : b(window).height()) + b(window).scrollTop()
            } else {
                f = b(d.container).offset().top + b(d.container).height()
            }
            return f <= b(e).offset().top - d.threshold
        };
        b.abovethetop = function (e, d) {
            var f;
            if (d.container === undefined || d.container === window) {
                f = b(window).scrollTop()
            } else {
                f = b(d.container).offset().top
            }
            return f >= b(e).offset().top + d.threshold + b(e).height()
        };
        b.extend(b.expr[":"], {
            "below-the-fold": "jQuery.belowthefold(a, {threshold : 0, container: window})",
            "above-the-fold": "!jQuery.belowthefold(a, {threshold : 0, container: window})"
        })
    })(jQuery);
    $(function () {
        $("img").lazyload({effect: "fadeIn", failurelimit: 0, threshold: 0});
    });


//    function cityfilter(data){
//
//        $.post("/assortment/queryMessage?sortId="+data,function () {
//
//        })
//    }

</script>


</body>
</html>
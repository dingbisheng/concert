﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
		  pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%	String basePath = request.getContextPath();%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<title>选择支付方式</title>
<link rel="stylesheet" href="/concertbuy/css/shopping-min_1.css" />
<link rel="stylesheet" href="/concertbuy/css/public-min_3.css" />
<link rel="stylesheet" href="/concertbuy/css/public-min_4.css" />
<link rel="stylesheet" href="/concertbuy/css/base_1.css" />
</head>
<body>
	<div id="operLayer"></div>
	<!--top start--><div class="top-s">	<div class="top-con">  	<ul class="fl">    	<li id="headerUserinfo" class="dm-info">          <span class="dm-name">HI, 欢迎来大麦</span>[<a class="dm-login" title="登录" href="#">登录</a><a class="dm-register" title="注册" href="#">注册</a>]        </li>      <li class="mydm o">         <div class="dm-t mydm-t"><a href="//my.damai.cn/" target="_blank">我的大麦</a><b></b></div>         <div class="dm-c mydm-c">          <a href="//my.damai.cn/account/myinfo.aspx"  target="_blank" title="个人信息">个人信息</a>          <a href="//order.damai.cn/index.aspx" target="_blank" title="订单管理">订单管理</a>          <a href="//my.damai.cn/trade/ewallet/myEwallet.aspx" target="_blank" title="我的钱包">我的钱包</a>          <a href="//my.damai.cn/account/mysubscribe" target="_blank">我的订阅</a>		  <a href="https://coupon.damai.cn/coupon-web-damai/mycoupon/myCoupon" target="_blank" title="我的优惠券">我的优惠券</a>         </div>      </li>    </ul>    <ul class="fr">		<li class="dm-app">      	<div class="dm-t app-t"><a href="//mobile.damai.cn/" target="_blank">手机版</a></div>        <div class="dm-c app-c">        	<div class="dm-code">          	<p class="t1">扫描我，即刻下载</p>            <p class="t2">大麦客户端</p>          </div>          <a href="//mapi.damai.cn/href.aspx?id=1" target="_blank" class="dm-iphone"></a>          <a href="//mapi.damai.cn/href.aspx?id=2" target="_blank" class="dm-ipad"></a>          <a href="//mapi.damai.cn/href.aspx?id=5" target="_blank" class="dm-android"></a><a href="//www.windowsphone.com/zh-cn/store/app/%E5%A4%A7%E9%BA%A6/c7194979-6d1e-4698-9df9-8a1ac7970151" target="_blank" class="dm-wp"></a>        </div>      </li>      <li class="dm-service">         <div class="dm-t service-t"><a href="#">客户服务</a><b></b></div>         <div class="dm-c service-c">			 <a href="//help.damai.cn/#selfservice" target="_blank" >账户服务</a>			 <a href="//help.damai.cn/#onlineservice" target="_blank" >人工服务</a>			 <a href="//help.damai.cn/#specialproducts" target="_blank" >特色产品</a>          <a href="//help.damai.cn/" target="_blank">帮助中心</a>	  <span class="xiaonengservice xnchatService">在线客服</span>         </div>		  </li>      <li class="dm-site-nav">         <div class="dm-t site-nav-t"><a href="#">网站导航</a><b></b></div>         <div class="dm-c site-nav-c">         	<dl class="dm-sev01">          	<dt>特色服务</dt>            <dd>              <ul>                					<li><a target="_blank" href="//venue.damai.cn/">场馆库</a></li>                					<li><a target="_blank" href="//dingyue.damai.cn/subType.do?platformId=1">演出订阅</a></li>                					<li><a target="_blank" href="//i.damai.cn/">精彩专题</a></li>                					<li><a target="_blank" href="//mobile.damai.cn/">手机购票</a></li>                					<li><a target="_blank" href="//sale.damai.cn/2017dzqb/index.html">电子钱包</a></li>                					<li><a target="_blank" href="//en.damai.cn/">英文频道</a></li>                					<li><a target="_blank" href="https://anti.damai.cn/">防诈骗</a></li>                              </ul>            </dd>          </dl>          <dl class="dm-sev01">          	<dt>演出分类</dt>            <dd>            	<ul>              	<li><a href="//search.damai.cn/search.html?ctl=%E6%BC%94%E5%94%B1%E4%BC%9A&order=1" target="_blank" title="演唱会">演唱会</a></li>                <li><a href="//search.damai.cn/search.html?ctl=%E9%9F%B3%E4%B9%90%E4%BC%9A&order=1" target="_blank" title="音乐会">音乐会</a></li>                                <li><a href="//search.damai.cn/search.html?ctl=%E8%88%9E%E8%B9%88%E8%8A%AD%E8%95%BE&order=1" target="_blank" title="舞蹈芭蕾">舞蹈芭蕾</a></li>                <li><a href="//search.damai.cn/search.html?ctl=%E6%9B%B2%E8%8B%91%E6%9D%82%E5%9D%9B&order=1" target="_blank" title="曲苑杂坛">曲苑杂坛</a></li>                <li><a href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&order=1" target="_blank" title="体育比赛">体育比赛</a></li>                <li><a href="//search.damai.cn/search.html?ctl=%E5%BA%A6%E5%81%87%E4%BC%91%E9%97%B2&order=1" target="_blank" title="度假休闲">度假休闲</a></li>                <li><a href="//search.damai.cn/search.html?tn=%E5%84%BF%E7%AB%A5%E4%BA%B2%E5%AD%90&order=1" target="_blank" title="儿童亲子">儿童亲子</a></li>                <li><a href="//search.damai.cn/search.html?ctl=%E8%AF%9D%E5%89%A7%E6%AD%8C%E5%89%A7&order=1" target="_blank" title="话剧歌剧">话剧歌剧</a></li>     				<li><a title="动漫" target="_blank" href="//search.damai.cn/search.html?tn=%E5%8A%A8%E6%BC%AB&order=1">动漫</a></li>        		</ul>            </dd>          </dl>          <dl class="dm-sev02">          	<dt>城市切换</dt>            <dd>            	<ul>                                    <li>                    <a title="北京" href="//www.damai.cn/bj/"  target="_blank">北京</a>                  </li>                                    <li>                    <a title="上海" href="//www.damai.cn/sh/"  target="_blank">上海</a>                  </li>                                    <li>                    <a title="深圳" href="//www.damai.cn/sz/"  target="_blank">深圳</a>                  </li>                                    <li>                    <a title="广州" href="//www.damai.cn/gz/"  target="_blank">广州</a>                  </li>                                    <li>                    <a title="武汉" href="//www.damai.cn/wuhan/"  target="_blank">武汉</a>                  </li>                                    <li>                    <a title="重庆" href="//www.damai.cn/cq/"  target="_blank">重庆</a>                  </li>                                    <li>                    <a title="杭州" href="//www.damai.cn/hz/"  target="_blank">杭州</a>                  </li>                                    <li>                    <a title="天津" href="//www.damai.cn/tj/"  target="_blank">天津</a>                  </li>                                    <li>                    <a title="成都" href="//www.damai.cn/cd/"  target="_blank">成都</a>                  </li>                                    <li>                    <a title="西安" href="//www.damai.cn/xa/"  target="_blank">西安</a>                  </li>                                    <li>                    <a title="苏州" href="//www.damai.cn/suz/"  target="_blank">苏州</a>                  </li>                                    <li>                    <a title="长沙" href="//www.damai.cn/cs/"  target="_blank">长沙</a>                  </li>                                    <li>                    <a title="宁波" href="//www.damai.cn/ningbo/"  target="_blank">宁波</a>                  </li>                                    <li>                    <a title="南京" href="//www.damai.cn/nj/"  target="_blank">南京</a>                  </li>                                    <li>                    <a title="海外" href="//www.damai.cn/hwz/"  target="_blank">海外</a>                  </li>                                    <li>                    <a title="昆明" href="//www.damai.cn/km/"  target="_blank">昆明</a>                  </li>                                    <li>                    <a title="厦门" href="//www.damai.cn/xiamen/"  target="_blank">厦门</a>                  </li>                                    <li>                    <a title="南昌" href="//www.damai.cn/nanchang/"  target="_blank">南昌</a>                  </li>                                    <li>                    <a title="无锡" href="//www.damai.cn/wuxi/"  target="_blank">无锡</a>                  </li>                                    <li>                    <a title="石家庄" href="//www.damai.cn/sjz/"  target="_blank">石家庄</a>                  </li>                                    <li>                    <a title="济南" href="//www.damai.cn/jn/"  target="_blank">济南</a>                  </li>                                    <li>                    <a title="太原" href="//www.damai.cn/ty/"  target="_blank">太原</a>                  </li>                                    <li>                    <a title="合肥" href="//www.damai.cn/hf/"  target="_blank">合肥</a>                  </li>                                    <li>                    <a title="郑州" href="//www.damai.cn/zhengzhou/"  target="_blank">郑州</a>                  </li>                                    <li>                    <a title="沈阳" href="//www.damai.cn/sy/"  target="_blank">沈阳</a>                  </li>                                    <li>                    <a title="大连" href="//www.damai.cn/dl/"  target="_blank">大连</a>                  </li>                                    <li>                    <a title="东莞" href="//www.damai.cn/dg/"  target="_blank">东莞</a>                  </li>                                    <li>                    <a title="常州" href="//www.damai.cn/changzhou/"  target="_blank">常州</a>                  </li>                                    <li>                    <a title="南宁" href="//www.damai.cn/nn/"  target="_blank">南宁</a>                  </li>                                    <li>                    <a title="港澳" href="//www.damai.cn/hk/"  target="_blank">港澳</a>                  </li>                                    <li>                    <a title="佛山" href="//www.damai.cn/foshan/"  target="_blank">佛山</a>                  </li>                                    <li>                    <a title="福州" href="//www.damai.cn/fuzhou/"  target="_blank">福州</a>                  </li>                                    <li>                    <a title="贵阳" href="//www.damai.cn/gy/"  target="_blank">贵阳</a>                  </li>                                    <li>                    <a title="长春" href="//www.damai.cn/changchun/"  target="_blank">长春</a>                  </li>                                    <li>                    <a title="哈尔滨" href="//www.damai.cn/hrb/"  target="_blank">哈尔滨</a>                  </li>                                    <li>                    <a title="绍兴" href="//www.damai.cn/sx/"  target="_blank">绍兴</a>                  </li>                                    <li>                    <a title="内蒙古" href="//www.damai.cn/neimeng/"  target="_blank">内蒙古</a>                  </li>                                    <li>                    <a title="兰州" href="//www.damai.cn/lanzhou/"  target="_blank">兰州</a>                  </li>                                    <li>                    <a title="温州" href="//www.damai.cn/wenzhou/"  target="_blank">温州</a>                  </li>                                    <li>                    <a title="中山" href="//www.damai.cn/zs/"  target="_blank">中山</a>                  </li>                                    <li>                    <a title="泉州" href="//www.damai.cn/quanzhou/"  target="_blank">泉州</a>                  </li>                                    <li>                    <a title="惠州" href="//www.damai.cn/huizhou/"  target="_blank">惠州</a>                  </li>                                    <li>                    <a title="潍坊" href="//www.damai.cn/weifang/"  target="_blank">潍坊</a>                  </li>                                    <li>                    <a title="青岛" href="//www.damai.cn/qd/"  target="_blank">青岛</a>                  </li>                                    <li>                    <a title="西宁" href="//www.damai.cn/xn/"  target="_blank">西宁</a>                  </li>                                    <li>                    <a title="银川" href="//www.damai.cn/ych/"  target="_blank">银川</a>                  </li>                                    <li>                    <a title="江门" href="//www.damai.cn/jiangmen/"  target="_blank">江门</a>                  </li>                                    <li>                    <a title="扬州" href="//www.damai.cn/yangzhou/"  target="_blank">扬州</a>                  </li>                                    <li>                    <a title="舟山" href="//www.damai.cn/zhoushan/"  target="_blank">舟山</a>                  </li>                                    <li>                    <a title="马鞍山" href="//www.damai.cn/maanshan/"  target="_blank">马鞍山</a>                  </li>                                    <li>                    <a title="南通" href="//www.damai.cn/nantong/"  target="_blank">南通</a>                  </li>                                    <li>                    <a title="珠海" href="//www.damai.cn/zhuhai/"  target="_blank">珠海</a>                  </li>                                    <li>                    <a title="金华" href="//www.damai.cn/jinhua/"  target="_blank">金华</a>                  </li>                                    <li>                    <a title="海南" href="//www.damai.cn/haikou/"  target="_blank">海南</a>                  </li>                                    <li>                    <a title="台州" href="//www.damai.cn/taizhou/"  target="_blank">台州</a>                  </li>                                    <li>                    <a title="泰州" href="//www.damai.cn/tz/"  target="_blank">泰州</a>                  </li>                                    <li>                    <a title="乌鲁木齐" href="//www.damai.cn/wulumuqi/"  target="_blank">乌鲁木齐</a>                  </li>                                    <li>                    <a title="唐山" href="//www.damai.cn/tangshan/"  target="_blank">唐山</a>                  </li>                                    <li>                    <a title="北海" href="//www.damai.cn/beihai/"  target="_blank">北海</a>                  </li>                                    <li>                    <a title="洛阳" href="//www.damai.cn/luoyang/"  target="_blank">洛阳</a>                  </li>                                    <li>                    <a title="拉萨" href="//www.damai.cn/ls/"  target="_blank">拉萨</a>                  </li>                                    <li>                    <a title="吉林" href="//www.damai.cn/jilin/"  target="_blank">吉林</a>                  </li>                                    <li>                    <a title="烟台" href="//www.damai.cn/yantai/"  target="_blank">烟台</a>                  </li>                                    <li>                    <a title="徐州" href="//www.damai.cn/xuzhou/"  target="_blank">徐州</a>                  </li>                                    <li>                    <a title="芜湖" href="//www.damai.cn/wuhu/"  target="_blank">芜湖</a>                  </li>                                    <li>                    <a title="湖州" href="//www.damai.cn/huzhou/"  target="_blank">湖州</a>                  </li>                                    <li>                    <a title="镇江" href="//www.damai.cn/zhenjiang/"  target="_blank">镇江</a>                  </li>                                    <li>                    <a title="嘉兴" href="//www.damai.cn/jx/"  target="_blank">嘉兴</a>                  </li>                                    <li>                    <a title="柳州" href="//www.damai.cn/lz/"  target="_blank">柳州</a>                  </li>                                    <li>                    <a title="盐城" href="//www.damai.cn/yancheng/"  target="_blank">盐城</a>                  </li>                                    <li>                    <a title="蚌埠" href="//www.damai.cn/bengbu/"  target="_blank">蚌埠</a>                  </li>                                    <li>                    <a title="阜阳" href="//www.damai.cn/fuyang/"  target="_blank">阜阳</a>                  </li>                                    <li>                    <a title="廊坊" href="//www.damai.cn/langfang/"  target="_blank">廊坊</a>                  </li>                                  </ul>            </dd>          </dl>         </div>		  </li>		<li class="dm-bilingual">			<div class="dm-t service-t">				<a target="_blank" href="//en.damai.cn/">English</a>			</div>		</li>    </ul>  </div></div><!--top end--><script type="text/javascript" src="/concertbuy/js/announcement_1.js"></script>
	<div class="line"></div>
	<div class="site_guide">
		<a title="首页" href="https://www.damai.cn/index.html">首页</a> &gt; 支付中心
	</div>
	<!--main-->
	<div class="shopping shopping_w">
		<dl class="guide threestep">
			<dt class="on">确认订单信息</dt>
			<dd class="on">下订单</dd>
			<dt class="on">选择支付方式</dt>
			<dd>完成支付</dd>
			<dt>追踪订单</dt>
		</dl>
		<!--erro-->
		<!--table list-->
		<div class="pay">
			<ul class="hd">
				<li>支付编号</li>
				<li>订单编号</li>
				<li>商品名称</li>
				<li>订单金额</li>
				<li>应付金额</li>
			</ul>
			<table class="orderTableinfo">

				<c:forEach items="${newOrderDTOList}" var="order" >
					<tr>
						<td>${order.orderNum}</td>
						<td>
							<table>
								<tr>
									<td>${order.orderNum}</td>
									<td>${order.msgVO.msgName}</td>
									<td>${order.orderPrice}元</td>
								</tr>
							</table>
						</td>
						<td class="f14"><strong class="c4">${order.orderPrice}</strong>元</td>
					</tr>
				</c:forEach>
			</table>
			 
			<!--pay tab-->
	<div class="hidden" id="paymethods">
		<div class="payTab" id="selectPay">
			<ul>
<li  typeID="7"><a href="#">网上银行付款</a></li><li class="i-active" typeID="1"><a href="#">支付平台付款</a></li><li typeID="17"><a href="#">分期付款</a></li><li typeID="9" ewalletUrl="https://pay.damai.cn/ewallettab.do?merchantId=20100520&amp;tradeId=19871098&amp;skin=0&amp;epay=0&amp;orderIds=1004635776679&amp;sign=c577d11bb66c1102b3f508eed1611bfa"><a id="ewalletPage" href="javascript:void(0)">电子钱包</a></li>			</ul>
		</div>
		<form action="pays.do" method="post" name="form1" target="_blank" id="form1">
			<div class="payInner">
				<div class="t">
					<p>应付总金额:<span class="c4">590.00</span> 元</p>
<p class="c5 bold">部分网上银行不支持非IE浏览器，建议复制本网页的网址，使用IE浏览器继续付款操作</p>				</div>
				
				<ul class="bank clear">
							<li><label><input class="r" type="radio" name="payMethod" value="621" groupId="27" typeID="17" rt="2"  st="7" />
							<img src="/concertbuy/picture/17_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="617" groupId="16" typeID="12" rt="2"  st="7" />
							<img src="/concertbuy/picture/12_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="615" groupId="11" typeID="10" rt="2"  st="7" />
							<img src="/concertbuy/picture/10_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="620" groupId="24" typeID="15" rt="2"  st="7" />
							<img src="/concertbuy/picture/15_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="631" groupId="35" typeID="21" rt="2"  st="7" />
							<img src="/concertbuy/picture/21_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="623" groupId="33" typeID="20" rt="2"  st="7" />
							<img src="/concertbuy/picture/20_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="625" groupId="39" typeID="23" rt="2"  st="7" />
							<img src="/concertbuy/picture/23_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="627" groupId="43" typeID="25" rt="2"  st="7" />
							<img src="/concertbuy/picture/25_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="628" groupId="48" typeID="27" rt="2"  st="7" />
							<img src="/concertbuy/picture/27_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="618" groupId="19" typeID="13" rt="2"  st="7" />
							<img src="/concertbuy/picture/13_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="626" groupId="41" typeID="24" rt="2"  st="7" />
							<img src="/concertbuy/picture/24_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="630" groupId="29" typeID="18" rt="2"  st="7" />
							<img src="/concertbuy/picture/18_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="619" groupId="21" typeID="14" rt="2"  st="7" />
							<img src="/concertbuy/picture/14_1.jpg"   /></label></li>
							<li><label><input class="r" type="radio" name="payMethod" value="629" groupId="13" typeID="11" rt="2"  st="7" />
							<img src="/concertbuy/picture/11_1.jpg"   /></label></li>
				</ul>
				<div class="banTips" style="border:0;margin-top:0;padding:0;"></div>
				<p class="pt20"><input type="submit" name="gotoPay" onclick="return SumbitPay();" id="submit1" value="" class="btn_pay" /></p>
			</div>
			<div class="payInner">
				<div class="t prel">
					<p>应付总金额:<span class="c4">590.00</span> 元</p>
					<p>以下支付平台都支持大多数银行卡.</p>
<p class="c5 bold">部分网上银行不支持非IE浏览器，建议复制本网页的网址，使用IE浏览器继续付款操作</p>				</div>
				<ul class="bank clear">
					<li>
					<label>
					<input class="r" type="radio" name="payMethod" value="2481" groupId="77" typeID="57" rt="57" st="1" />
					<img src="/concertbuy/picture/57_1.jpg"   />
					</label>
					</li>
					<li>
					<label>
					<input class="r" type="radio" name="payMethod" value="35" groupId="1" typeID="2" rt="2" st="1" />
					<img src="/concertbuy/picture/2_1.jpg"   />
					</label>
					</li>
				</ul>
				<p class="tips-new" id="wsdtips" style="padding:0 0 0 35px; margin-top:5px;display:none">当您选择此支付方式时，会产生3%的费用。如果您不能接受，我们建议您选择其他支付方式进行支付。由此造成的不便，请见谅。</p>
				<p class="pt20"><input type="submit" name="gotoPay" onclick="return SumbitPay();" id="submit2" value="" class="btn_pay" /></p>				
			</div>
	    <div class="payInner" style="display:block">
        <div class="t">
          <p>应付总金额:<span class="c4">590.00</span> 元</p>
        </div>
        <ul class="bank stages clear">
          <li class="itm">
            <label>
			  <input type="radio"  class="r" name="payMethod" value="2411" groupId="124" typeID="79" st="17" rt="79" >
			  <img src="/concertbuy/picture/79_1.jpg" />
              <a class="more"  href="https://ds.alipay.com/fd-iiiblm8p/index.html" target="_blank" >了解更多&gt;&gt;</a>
			</label>
          </li>
        </ul>
        <div class="details banTipsInstallment1779">
          <div class="t">
	           <p>请选择:<span class="c4">花呗分期</span>付款的期数： </p>
          </div>
          
          <ul class="lst">
				<li class="itm1">
              <label>
			    <input class="r" type="radio" id="installmentMethod" name="installmentMethod" value="3"> 
                 3期 （<strong class="c4">201.18 </strong>元 ×  3 <span> 含手续费4.52元/期）</span>
			  </label>
            </li>
				<li class="itm1">
              <label>
			    <input class="r" type="radio" id="installmentMethod" name="installmentMethod" value="6"> 
                 6期 （<strong class="c4">102.75 </strong>元 ×  6 <span> 含手续费4.42元/期）</span>
			  </label>
            </li>
				<li class="itm1 itm2">
              <label>
			    <input class="r" type="radio" id="installmentMethod" name="installmentMethod" value="12"> 
                 12期 （<strong class="c4">53.09 </strong>元 ×  12 <span> 含手续费3.93元/期）</span>
			  </label>
            </li>
          </ul>
         </div>
        <p class="pt20"><input type="submit" class="btn_pay" value="" id="submit1" onclick="return SubmitInstallmentPay();" name="gotoPay"></p>
      </div>
			
		
		<input name="custId" type="hidden" id="custId" value="20100520" />
		<input name="transactionId" type="hidden" id="transactionId" value="19871098" />
		<input name="orderAmount" type="hidden" id="orderAmount" value="59000" />
		<input name="payComId" type="hidden" id="payComId" value="0" />
		<input name="productCount" type="hidden" id="productCount" value="1" />
		<input name="splitAccount" type="hidden" id="splitAccount" value="0" />
		<input name="sign" type="hidden" id="sign" value="9082738975292ca354f5f53c8586339a" />
		<input name="skin" type="hidden" id="skin" value="0" />
		<input name="mobilePhone" type="hidden" id="mobilePhone" value="" />
		<input name="userCode" type="hidden" id="userCode" value="" />
		<input name="isTakePay" type="hidden" id="isTakePay" value="0"/>
		<input name="orderIds" type="hidden" id="orderIds" value="1004635776679"/>
		<input name="payId" type="hidden" id="payId" value="19871098"/>
		<input name="accountIds" type="hidden" id="accountIds" value="621|617|615|620|631|2411|2481|623|625|627|628|618|626|630|35|619|629|"/>
		</form>     <!-- pays.aspx end-->
		
		<div id="ewalletpay">
			<div class="payInner">
			</div>
		</div>
	</div>
	</div>
	</div>	
	<div class="dm-bottom-wrap">  <div class="dm-bottom">   <div class="dm-links">                <a href="//help.damai.cn/damai/contents/1896/5617.html" target="_blank">公司介绍</a>                    |<a href="//help.damai.cn/damai/contents/1896/5638.html" target="_blank">品牌识别</a>                    |<a href="//www.damai.cn/QuestionDetail_186_396.html" target="_blank">企业荣誉</a>                    |<a href="https://help.damai.cn/damai/contents/288/13934.html" target="_blank">隐私权专项政策</a>                    |<a href="//help.damai.cn/damai/contents/1872/5674.html" target="_blank">联系及合作</a>                    |<a href="https://jubao.alibaba.com/internet/readme.htm?site=damai" target="_blank">廉正举报</a>                    |<a href="https://help.damai.cn/contents/1896/5629.html" target="_blank">招聘信息</a>                    |<a href="//www.damai.cn/map.html" target="_blank">网站地图</a>                    |<a href="//help.damai.cn/damai/contents/1896/5655.html" target="_blank">友情链接</a>                    |<a href="https://help.damai.cn/damai/contents/1896/13733.html" target="_blank">公司大事记</a>               </div>   <div class="dm-copyright">	   <p>		   <a href="http://www.miitbeian.gov.cn" target="_blank">京ICP证031057号</a>		   <span>|</span>		   <a href="http://www.miitbeian.gov.cn" target="_blank">京ICP备11043884号</a>		   <span>|</span>		   <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102000430" target="_blank">			   <img src="/concertbuy/picture/police_1.png" class="vm" />京公网安备11010102000430号		   </a>		   <span>|</span>		   <a href="//dui.dmcdn.cn/dm_2014/common/img/logo/gbdsjm.jpg" target="_blank">广播电视节目制作经营许可证 (京)字第02253号</a>	   </p>	   <p>		   <a href="//dui.dmcdn.cn/dm_2014/common/img/logo/wlwhjy.jpg?v2016" target="_blank">网络文化经营许可证 京网文[2016]3438-413号</a>		   <span>|</span>		   <a href="//dui.dmcdn.cn/dm_2014/common/img/logo/yyxyc.jpg" target="_blank">营业性演出许可证 京市演587号</a>	   </p>	   <p>		   北京红马传媒文化发展有限公司 版权所有 <a href="//www.damai.cn/">大麦网</a> Copyright 2003-2017 All Rights Reserved	   </p>   </div>  </div></div><script>if(typeof JsLoader === 'undefined') {window.JsLoader = {load:function(){},before:function(){},complete:function(){},completeAfter:function(){}};}</script>
<div class="bgpaylayer" id="promptLayer">
	<h2>请您在新打开的页面上完成付款</h2>
<p>有效支付截止时间：2018-04-14 14:27:15</p>    <p>自动返回到大麦网前不要关闭任何网页。</p>
	<p>完成付款后请根据您的实际情况点击下方按钮：</p>
    <p class="btns"><a href="https://pay.damai.cn/paycenter.do?cityId=586&amp;code=6690679&amp;currency=CNY&amp;groupId=1,11,122,124,13,16,19,21,24,27,29,31,33,35,37,39,4,41,43,45,48,50,56,58,60,62,64,68,71,77,78&amp;merchant=20100520&amp;passage=1,17,18,7,8,9&amp;service=single&amp;skin=0&amp;takePay=0&amp;tradeId=19871098&amp;sign=fe99478bdee0a791c2fd7a6d4324e299">已完成付款</a><a href="#" onclick="return CloseLayer();">付款遇到问题</a></p>
</div>
<div class="bgpaylayer" id="rechargeSuperticket">
    <h2>请您在新打开的页面上完成充值</h2>
	<p>完成充值后请根据您的实际情况点击下方按钮：</p>
    <p class="btns"><a href="#" onclick="return CloseLayer();">完成充值</a><a href="#" onclick="return HideLayerRechargeSuperTicket();">取消充值</a></p>
</div>

<div class="layers hidden" id="loginframe">
<b class="La"></b>
<b class="Lb"></b>
<b class="Lc"></b>
<b class="Ld"></b>
<a href="#" title="关闭" class="close" onclick="return HiddenLayer();"></a>
<div class="inner">
<h2>大麦用户登录</h2>
<div class="payforanother"><iframe scrolling="no" allowtransparency="yes" frameborder="0"></iframe></div>
</div>
</div>

<script src="/concertbuy/js/jquery-1.7.2.min_1.js"></script>
<script src="/concertbuy/js/pay_1.js"></script>
<script type="text/javascript">
 window.onload=function(){
	 dplus.define('page', function(page){
		page.setType('orderpay');//设置页面类型
		page.setTitle('选择支付方式');//设置页面标题
		page.view({
			'orderId':'1004635776679',
			'payId':'19871098',
			'userId':''
		});
	});
 }
</script></body>
</html>
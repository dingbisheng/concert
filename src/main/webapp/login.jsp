﻿﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
		  pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%	String basePath = request.getContextPath();%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="keywords" content="大麦,大麦演出,大麦旅游,大麦电影,演出,旅游,电影,订票" />
    <meta http-equiv="description" content="大麦由中国票务在线发展而来，是用全新理念打造出的娱乐商业平台。提供演出，旅游，电影资讯及内容丰富的大麦社区。独有的在线选座和电子票技术为您提供方便快捷的在线订票体验！" />
    <link rel="stylesheet" href="concert/css/damai_ui_login_v2.css" type="text/css" />
    <script type="text/javascript" src="concert/js/jquery-1.7.2.min.js"></script>
    <link href="concert/css/public-min.css" rel="stylesheet" />

    <script src="concert/js/script.js" type="text/javascript"></script>
    <link href="concert/css/style.css" rel="stylesheet" type="text/css" />

    <title>登录--大麦</title>
   

	
</head>
<body>
    <!-->
    <!--<div class="top-line"></div>-->

    <script src="concert/js/fp.js" type="text/javascript"></script>
<script src="concert/js/register-min.js" type="text/javascript"></script>

<link type="text/css" href="concert/css/nc.css" rel="stylesheet"/>
<script type="text/javascript" src="concert/js/nc.js"></script>
<link rel="stylesheet" href="concert/css/taobao.css" />
<div id="_umfp" style="display:inline;width:1px;height:1px;overflow:hidden"></div>

<style>
#nc_1_wrapper{width:380px !important}
.nc_1_wrapper{width:378px !important}
.login_account{height:580px;}
.nc-container .imgCaptcha, .nc-container .clickCaptcha{width:378px !important;}
.clickCaptcha_img{text-align:center}
.nc-container.tb-login .errloading, .nc-container .errloading{width:368px !important}
.nc-container .nc_scale .clickCaptcha{height:300px !important}
.nc_scale{* margin-top:-30px !important}
</style>



<div class="login_header">
  <div class="wrap clear">
    <a class="header_en" href="/en/login.aspx">English</a>

    <div class="header_left">
      <a class="header_logo" href="http://www.damai.cn" title="大麦">
        <img src="concert/picture/logo.png" alt="大麦" width="126" height="47" />
      </a>
      <h1 class="header_title">欢迎登录</h1>
    </div>
  </div>
</div>
<div class="main">
  <div class="login_account layer_box">
    <div class="account_con" id="J_LoginBox">
      
	  <ul class="m_layer_tab tab" style="position:absolute; top:0; left:0">
				<li class="active first" id="AccountLogin"><a href="javascript:void(0)"><span class="m_login_pic1"></span>账户登录</a></li>				
				<li id="QRCodebtn"><a href="javascript:void(0)"><span class="m_ewm_pic1"></span>二维码登录</a></li>		
				<li id="MsgLogin"><a href="javascript:void(0)"><span class="m_message_pic1"></span>短信快捷登录</a></li>		
	  </ul>


		<!--<form id="dlform" name="dlform" method="post">-->
        <input name="token" id="token" type="hidden"/>
        <input name="nationPerfix" id="nationperfix" type="hidden"/>
        <div class="account_box">
		  
          <ul class="account_list pt30" id="form_inputs">
            <li style="margin-bottom:0">
              <div id="m_account" class="account_inner w_378 m_phone" style="position:relative; z-index:1114;">
			  <p class="c2 pt10" id="tishi1"  style="display:none;" >验证即登录，未注册将自动创建大麦网账号</p>
                <span class="account_email"></span>
                <div id="box"  style="display:none;" >
                  <div id="select" onchange="select_change">
                    <h3>
                      <i class="m_china"></i>
                      <b class="fl" style="display:none;">中国</b>
                      <b class="fr" style="display:block;">+86</b>
                    </h3>
                    <div class="hide">
                      <p>
                        <i class="m_china"></i>
                        <b class="fl">中国</b>
                        <b class="fr">+86</b>
                      </p>
                      <p>
                        <i class="m_hongkong"></i>
                        <b class="fl">香港</b>
                        <b class="fr">+852</b>
                      </p>
                      <p>
                        <i class="m_macao"></i>
                        <b class="fl">澳门</b>
                        <b class="fr">+853</b>
                      </p>
                      <p>
                        <i class="m_taiwan"></i>
                        <b class="fl">台湾</b>
                        <b class="fr">+886</b>
                      </p>
                    </div>
                  </div>
                </div>
				<input type="text" class="text layer_text" name="login_email" id="login_email"  placeholder="邮箱/手机号码"
					   style="width:312px;"  value="" autocomplete="off" />
                
              </div>
            </li>
			</ul>

			<form method="post" id="login_form" name="login_form" action="assortment/queryAssortment">
			
			<div id="acc_div" class="con m_new_tab_main">
				<ul class="account_list">
					<li>
						<div class="account_inner" style="z-index:2;">
							<span class="account_password"></span>
                            <input type="password" id="login_pwd" class="text layer_text" style="width:312px;">
							
							<p class="account_letter" id="capsLock_tips" style=" display:none;">键盘大写锁定被打开，请注意大小写</p>
						</div>
												<p class="account_site" id="pwdmsg"></p>
												<script type="text/javascript">
						  $("#login_pwd").live("keypress", function (event) {
						  var e = event || window.event,
						  kc = e.keyCode || e.which, // 按键的keyCode
						  isShift = e.shiftKey || (kc == 16) || false; // shift键是否按住
						  if (((kc >= 65 && kc <= 90) && !isShift) || ((kc >= 97 && kc <= 122) && isShift)) {
						  $("#capsLock_tips").show();
						  }
						  else {
						  $("#capsLock_tips").hide();
						  }
						  });
						</script>
					</li>
					<li>
											</li>
				</ul>
				<!--<input id="subbtn" type="button" class="login_btn" value="立即登录" onclick="FrSubmit();" />-->

				<input id="subbtn" type="button" class="login_btn" value="立即登录" onclick="doLogin('/user/login')" />
			</div>


			</form>


			<div class="con account_code" style=" display:none;">
				<ul class="account_list" style="position:relative;top:-90px; *top:-85px; background:#fff; z-index:10000;">
					<li>
						<h3 class="account_title">
							<span>扫码登录</span>
						</h3>

						<div class="code_con">
						  <div class="code_tips">
							用<a href="http://mobile.damai.cn/" target="_blank">大麦手机客户端</a>扫码快速登录
						  </div>
						  
						  <span class="code_img" style=" width:165px; height:165px;">
							<img  width="165" height="165" id="QRCodeImg" src="concert/picture/verifyshow.aspx" alt="" />
						  </span>
						  <p class="code_change">
							<a href="javascript:void(0)" onclick="RefreshQRCode()">刷新一下</a>
						  </p>
						</div>
					</li>
				</ul>
			</div>

			<div class="con" id="msg_login" style="display:none;">
				<ul class="layer_write">
					<!--<li style="position:relative;z-index:999">
								<input type='hidden' id='csessionid1' name='csessionid1' /> 
								<input type='hidden' id='sig1' name='sig1' /> 
								<input type='hidden' id='alitoken1'	name='alitoken1' />
								<input type='hidden' id='scene1' name='scene1' />
								<div id="dom_id1"></div>
					</li>-->
					<li>
						<div class="layer_inner">
							<span class="account_password"></span>
							
							<input type="text" id="mCode" class="text layer_text" value="动态密码" onblur="if(this.value=='') {this.value='动态密码';}" onfocus="if(this.value=='动态密码') {this.value='';}" style="width:193px;" />
                        </div>
						<!--发送动态码-->
						<!--<span class="m_send_code c1" id="get_mcode">发送动态密码</span>-->
						<span class="m_send_code c1" id="get_mcode1">发送动态密码</span>
                        <a id="dis_get_vcode" class="m_send_code c3" style="display:none;"></a>
					</li>
					<!--错误弹出框-->
					<div class="account_site" id="pwdmsg1"></div>
					<li id="layer_img_code"class="layer_high" style="display:none;">
						<div class="account_inner">
							<!--验证码输入框-->
							<input id="vcode" type="text" class="text layer_text" phdata="验证码" style="width:160px; float:left" />
							<strong class="account_icon" style="display:none;"></strong>
					    </div>
					    <span class="account_img">
							<img id="mImg" src="concert/picture/verifyshow.aspx" onclick="this.src='/VerifyShow.aspx?d='+new Date().toLocaleString()" alt="" width="96" height="45" />
					    </span>
					    <a class="account_else" href="javascript:void(0)" onclick="document.getElementById('mImg').src='/VerifyShow.aspx?d='+new Date().toLocaleString()">换一换</a>
					</li>
				</ul>
				<!--登陆-->
				<input type="button" id="msgBtn1" class="login_btn" value="立即登录" onclick="msgSubmit()"/>
			</div>
			
			<!--</form>-->
        </div>
      <p id="account_txt" class="account_txt mt5">
		    <a href="https://secure.damai.cn/reg.aspx" target="_parent" class="c4 ml10">立即注册</a>
            <a href="/SeekPsd.aspx" class="fl">忘记密码？</a>
            <label class="checkbox">
              <input type="checkbox" />
              <span>下次自动登录</span>
            </label>
          </p>
      
	  <div id="account_share">
		  <div class="account_share">
			<span>其他登录：</span>
			<a class="wx" href="http://connect.damai.cn/wechat/login.aspx?callbackUrl=https%3a%2f%2fwww.damai.cn%2f" onclick="cnzz(this);" title="微信"></a>
			<a href="http://connect.damai.cn/qzone/login.aspx?callbackUrl=https%3a%2f%2fwww.damai.cn%2f" class="qq" onclick="cnzz(this);" title="QQ"></a>
			<a href="http://connect.damai.cn/Sina/Login.aspx?callbackUrl=https%3a%2f%2fwww.damai.cn%2f" class="sina" onclick="cnzz(this);" title="新浪微博"></a>
			<a href="http://connect.damai.cn/alipay/Login.aspx?callbackUrl=https%3a%2f%2fwww.damai.cn%2f" class="zhifubao" onclick="cnzz(this);" title="支付宝"></a>
		  </div>

		  
	  </div>
    </div>
    <div class="account_banner" id="PAGE_AD_1">
    </div>
  </div>
</div>
<script>
	var nc = new noCaptcha();
	var nc_appkey = 'FFFF000000000168D5DA';
    var nc_scene = 'login';
	var nc_token = [nc_appkey, (new Date()).getTime(), Math.random()].join(':');
	var nc_option = {
		renderTo: '#dom_id',
		appkey: nc_appkey,
        scene: nc_scene,
		token: nc_token,
		callback: function (data) {
			document.getElementById('csessionid').value = data.csessionid;
			document.getElementById('sig').value = data.sig;
			document.getElementById('alitoken').value = nc_token;
            document.getElementById('scene').value = nc_scene;
		}
	};
	nc.init(nc_option);
	nc.on('error', function(){
		$("#login_email").val("");
		$("#login_pwd_txt").val("");
		$("#login_pwd").val("");
		$("#dom_id").html("<div class=\"errloading\"><i class=\"nc_iconfont icon_warn\"></i><span class=\"nc-lang-cnt\" data-nc-lang=\"_error300\">您的账户有危险，请稍后<a href=\"javascript:noCaptcha.reset(1)\">再试</a></span></div>");
	});
</script>

<script>
/*	var nc1 = new noCaptcha();
	var nc_appkey1 = 'FFFF000000000168D5DA';
    var nc_scene1 = 'login';
	var nc_token1 = [nc_appkey1, (new Date()).getTime(), Math.random()].join(':');
	var nc_option1 = {
		renderTo: '#dom_id1',
		appkey: nc_appkey1,
        scene: nc_scene1,
		token: nc_token1,
		callback: function (data) {
			document.getElementById('csessionid1').value = data.csessionid;
			document.getElementById('sig1').value = data.sig;
			document.getElementById('alitoken1').value = nc_token1;
            document.getElementById('scene1').value = nc_scene1;

			sendLoginCode();
		}
	};
	nc1.init(nc_option1);
	nc1.on('error', function(){
	});*/
</script>

<script type="text/javascript">
var tongdun_open="1";

  codenum=0;
  var verify_mode = 2;
  callback="https://www.damai.cn/";
  jQuery("#login_pwd,#code").live('keyup', function(event) {
  if (event.keyCode == 13) {
  FrSubmit();
  }
  });
</script>



<script type="text/javascript">
var acc = "1";
$(function() {  
   if(acc == "1"){
		$("#MsgLogin").removeClass("active");
   		$("#AccountLogin").addClass("active");
		$("#acc_div").attr("style","dispaly:block;");
		$("#account_txt").show();
		$("#account_share").show();
		$("#msg_login").hide();
   }
});
</script>
<!-- CNZZ -->
<script type="text/javascript">
!function(a,b){
	if(!b.__SV){
		var c,d,e,f;window.dplus=b,b._i=[],b.init=function(a,c,d){
			function g(a,b){
				var c=b.split(".");2==c.length&&(a=a[c[0]],b=c[1]),a[b]=function(){
					a.push([b].concat(Array.prototype.slice.call(arguments,0)))}}var h=b;for("undefined"!=typeof d?h=b[d]=[]:d="dplus",h.people=h.people||[],h.toString=function(a){var b="dplus";return"dplus"!==d&&(b+="."+d),a||(b+=" (stub)"),b},h.people.toString=function(){return h.toString(1)+".people (stub)"},e="disable track track_links track_forms register unregister get_property identify clear set_config get_config get_distinct_id track_pageview register_once track_with_tag time_event people.set people.unset people.delete_user".split(" "),f=0;f<e.length;f++)g(h,e[f]);b._i.push([a,c,d])},b.__SV=1.1,c=a.createElement("script"),c.type="text/javascript",c.charset="utf-8",c.async=!0,c.src="//w.cnzz.com/dplus.php?token=7415364c9dab5n09ff68",d=a.getElementsByTagName("script")[0],d.parentNode.insertBefore(c,d)}}(document,window.dplus||[]),dplus.init("7415364c9dab5n09ff68");
</script>
<script type="text/javascript">!function(a,b){var c,d;window.__dplusDefineCacheQueue=[],b.define=function(){window.__dplusDefineCacheQueue.push(Array.prototype.slice.call(arguments))},c=a.createElement("script"),c.type="text/javascript",c.charset="utf-8",c.async=!0,c.src="https://w.cnzz.com/dplus.define.php",d=a.getElementsByTagName("script")[0],d.parentNode.insertBefore(c,d)}(document,window.dplus);</script>
<script type="text/javascript">
window.onload = function(){
	dplus.define('page', function(page){
        page.init("7415364c9dab5n09ff68", {
            'page_duration': true,
            'clean_url': true
       });
    });
	var ru = "https%3a%2f%2fwww.damai.cn%2f";
	dplus.define('page', function(page){
        page.setType('loginpage');
        page.setTitle("登录页");
        page.view({'ruurl':ru});
	});

}
</script>
<script type="text/javascript" src="concert/js/o.js"></script>
<script type="text/javascript">
DAMAI_CLB_fillSlotAsync('18', 'PAGE_AD_1');
</script>

    <div class="dm-bottom-wrap">
  <div class="dm-bottom">
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
			   <img src="concert/picture/police.png" class="vm" />京公网安备11010102000430号
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
		   北京红马传媒文化发展有限公司 版权所有 <a href="//www.damai.cn/">大麦网</a> Copyright 2003-2017 All Rights Reserved
	   </p>
   </div>
  </div>
</div>

<script>
if(typeof JsLoader === 'undefined') {window.JsLoader = {load:function(){},before:function(){},complete:function(){},completeAfter:function(){}};}
</script>

<script>
	function doLogin(url) {
		alert(url);
		$.post(url,
				{
					username:$("#login_email").val(),
					password:$("#login_pwd").val()

				},function(data,status){
					if(data=="failed"){
						alert("用户名或者密码错误");
//						document.getElementById("pwdmsg1").innerHTML = "用户名或者密码错误";
					}else{
						$("#login_form").submit();
					}
				});
	}

	function msgSubmit() {
		var usernameStr = $("#login_email").val();
		var inputCode = $("#mCode").val();
		$.post("/reg/register",
				{login_email:usernameStr,vcode:inputCode},
				function (data) {
					alert(data);
					if ("success" == data){
						window.location.href="/assortment/queryAssortment";

					}else{
						document.getElementById("pwdmsg1").innerHTML = "请检查验证码是否正确";
					}
				}
		)
	}
	//发送验证码
	$("#get_mcode1").click(function () {
		var usernameStr = $("#login_email").val();
			$.ajax({
				cache:false,
				url:"/reg/sendSms",
				data:{login_email:usernameStr},
				success:updateButtonStatus()
			});

	})

	function updateButtonStatus() {
		times = 60;
		timer = null;
		var code = document.getElementById('get_mcode1');
		timer = setInterval(function () {
			times --;
			if (times <= 0){
				code.innerHTML = '发送验证码';
				clearInterval(timer);
				times = 60;
				code.disabled = false;
			}else {
				code.innerHTML = times + '秒后重试';
				code.disabled = true;
			}console.log(times)
		},1000)
	}

//	失去焦点时间，判断手机号是否满足条件
/*	function checkPhone() {
		var mobileReg = /^((\+86)|(86))?(1)\d{10}$/;
		var mobile = $("#login_email").val();
		var result = mobileReg.test(mobile);
		if (!result){
			document.getElementById("pwdmsg1").innerHTML = "请输入合法的手机号";
		}

	}*/
</script>

</body>
</html>

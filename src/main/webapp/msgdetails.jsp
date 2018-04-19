<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<% String basePath = request.getContextPath();%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="spm-id" content="a2o6e"/>
    <meta name="renderer" content="webkit">
    <meta name="force-rendering" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache,must-revalidate">
    <meta http-equiv="expires" content="0">
    <title>${messageDTO.mesName}【网上订票】– 大麦网</title>
    <meta name="create-time" content="2018-04-05 22:02:03"/>
    <meta name="keywords" content="${messageDTO.mesName},大麦网"/>
    <meta name="description"
          content="大麦网（Damai.cn）周深武汉演唱会 - ${messageDTO.mesName}将于2018.05.29在汉秀剧场上演，大麦网为2018周深“深空间”巡回演唱会武汉站门票代理，更多门票价格及订票详情请咨询大麦网武汉站."/>
    <link rel="stylesheet" type="text/css" href="/concertbuy/css/style_3.css"/>
    <link rel="stylesheet" type="text/css" href="/concertbuy/css/style_4.css"/>
    <style type="text/css">
        .chat-view-xiaoneng-version {
            opacity: 0;
        }

        .m-choose .tt {
            padding-top: 10px;
        }

        .m-cart .tt {
            padding-top: 16px;
        }

        .m-choose .lst .s_manjian {
            height: 71px;
        }

        .jiathis_style .jtico {
            text-align: left;
            overflow: hidden;
            display: block !important;
            height: 16px !important;
            line-height: 16px !important;
            padding-left: 20px !important;
            cursor: pointer;
        }

        .jiathis_style .jtico:hover {
            opacity: 0.8;
        }

        .jiathis_style .jiathis_txt {
            float: left;
            font-size: 12px;
            line-height: 18px !important;
            text-decoration: none;
        }
    </style>
    <script type="text/javascript">
        var projectInfo = {
            "ProjectID": 146408,
            "CityID": 586,
            "Name": "2018周深“深空间”巡回演唱会武汉站",
            "ShowTime": "2018.05.29",
            "Price": 280.00,
            "SiteStatus": 3,
            "VenueName": "汉秀剧场",
            "IsOnlyXuanZuo": true,
            "QuestionPass": false,
            "TicketValidateType": 0,
            "htmlName": null,
            "Tabcontrol": 0,
            "IsShowStartTime": false,
            "StartTicketTime": "\/Date(1522033200000)\/",
            "SellStartTime": "\/Date(1521788879000)\/",
            "OptimizationTicket": 0
        };
        var hostName = "wuhan", itemDomain = "piao.damai.cn", categoryId = 1, is_show_perform_calendar = 0;
        is_show_perform_calendar = 1;
        var PrivelegePId = 108944;
    </script>
</head>
<body data-spm='project'>

<%--${messageInfoDTOList}--%>


<script type="text/javascript" id="beacon-aplus" src="/concertbuy/js/aplus_v2_1.js"
        exparams="clog=o&aplus&sidx=aplusSidex&ckx=aplusCkx"></script>
<div class="g-hd" style="position:static;">
    <div class="g-hdc">
        <input type="hidden"
               value="2018%e5%91%a8%e6%b7%b1%e2%80%9c%e6%b7%b1%e7%a9%ba%e9%97%b4%e2%80%9d%e5%b7%a1%e5%9b%9e%e6%bc%94%e5%94%b1%e4%bc%9a%e6%ad%a6%e6%b1%89%e7%ab%99"
               id="Hidden1"/>
        <input type="hidden"
               value="我在@大麦网 『www.damai.cn』发现了一个非常不错的演出:『${messageDTO.mesName}』,时间是2018.05.29，场馆在,强烈推荐！分享一下&gt;&gt;&gt;&gt;&gt;&gt;"
               id="Title"/>
        <input type="hidden"
               value="2018%d6%dc%c9%ee%a1%b0%c9%ee%bf%d5%bc%e4%a1%b1%d1%b2%bb%d8%d1%dd%b3%aa%bb%e1%ce%e4%ba%ba%d5%be"
               id="NameCN"/>
        <input type="hidden" value="https%3a%2f%2fpiao.damai.cn%2f146408.html" id="LinkCN"/>
        <input type="hidden" value="586" id="cityId"/>
        <input type="hidden" value="武汉" id="cityName"/>
        <input type="hidden" value="1" id="CategoryID"/>
        <input type="hidden" value="1" id="ChildCategoryID"/>
        <input type="hidden" value="120" id="epconfig"/>
        <!-- logo begin -->
        <h1 class="m-logo"><a href="//www.damai.cn/" title="大麦网">大麦</a></h1>
        <!-- logo end -->

        <!-- 城市切换 begin -->
        <div class="m-citys">
            <a class="tt" href="javascript:;"><span class="txt">武汉站</span><span class="arrow arrow-down"></span></a>
            <div class="ct">
                <dl>
                    <dt>华北东北</dt>
                    <dd>
                        <ul>
                            <li>
                                <a title="北京" href="//www.damai.cn/bj/" target="_blank">北京</a>
                                <cite>756</cite>
                            </li>
                            <li>
                                <a title="西安" href="//www.damai.cn/xa/" target="_blank">西安</a>
                                <cite>133</cite>
                            </li>
                            <li>
                                <a title="济南" href="//www.damai.cn/jn/" target="_blank">济南</a>
                                <cite>63</cite>
                            </li>
                            <li>
                                <a title="太原" href="//www.damai.cn/ty/" target="_blank">太原</a>
                                <cite>39</cite>
                            </li>
                            <li>
                                <a title="哈尔滨" href="//www.damai.cn/hrb/" target="_blank">哈尔滨</a>
                                <cite>30</cite>
                            </li>
                            <li>
                                <a title="天津" href="//www.damai.cn/tj/" target="_blank">天津</a>
                                <cite>160</cite>
                            </li>
                            <li>
                                <a title="郑州" href="//www.damai.cn/zhengzhou/" target="_blank">郑州</a>
                                <cite>47</cite>
                            </li>
                            <li>
                                <a title="石家庄" href="//www.damai.cn/sjz/" target="_blank">石家庄</a>
                                <cite>55</cite>
                            </li>
                            <li>
                                <a title="沈阳" href="//www.damai.cn/sy/" target="_blank">沈阳</a>
                                <cite>48</cite>
                            </li>
                            <li>
                                <a title="内蒙古" href="//www.damai.cn/neimeng/" target="_blank">内蒙古</a>
                                <cite>21</cite>
                            </li>
                            <li>
                                <a title="烟台" href="//www.damai.cn/yantai/" target="_blank">烟台</a>
                                <cite>2</cite>
                            </li>
                            <li>
                                <a title="长春" href="//www.damai.cn/changchun/" target="_blank">长春</a>
                                <cite>21</cite>
                            </li>
                            <li>
                                <a title="青岛" href="//www.damai.cn/qd/" target="_blank">青岛</a>
                                <cite>16</cite>
                            </li>
                            <li>
                                <a title="大连" href="//www.damai.cn/dl/" target="_blank">大连</a>
                                <cite>44</cite>
                            </li>
                            <li>
                                <a title="唐山" href="//www.damai.cn/tangshan/" target="_blank">唐山</a>
                                <cite>5</cite>
                            </li>
                            <li>
                                <a title="银川" href="//www.damai.cn/ych/" target="_blank">银川</a>
                                <cite>8</cite>
                            </li>
                            <li>
                                <a title="海外" href="//www.damai.cn/hwz/" target="_blank">海外</a>
                                <cite>70</cite>
                            </li>
                            <li>
                                <a title="吉林" href="//www.damai.cn/jilin/" target="_blank">吉林</a>
                                <cite>4</cite>
                            </li>
                            <li>
                                <a title="潍坊" href="//www.damai.cn/weifang/" target="_blank">潍坊</a>
                                <cite>16</cite>
                            </li>
                            <li>
                                <a title="廊坊" href="//www.damai.cn/langfang/" target="_blank">廊坊</a>
                                <cite>1</cite>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>华东地区</dt>
                    <dd>
                        <ul>
                            <li>
                                <a title="上海" href="//www.damai.cn/sh/" target="_blank">上海</a>
                                <cite>601</cite>
                            </li>
                            <li>
                                <a title="南京" href="//www.damai.cn/nj/" target="_blank">南京</a>
                                <cite>81</cite>
                            </li>
                            <li>
                                <a title="台州" href="//www.damai.cn/taizhou/" target="_blank">台州</a>
                                <cite>4</cite>
                            </li>
                            <li>
                                <a title="杭州" href="//www.damai.cn/hz/" target="_blank">杭州</a>
                                <cite>189</cite>
                            </li>
                            <li>
                                <a title="宁波" href="//www.damai.cn/ningbo/" target="_blank">宁波</a>
                                <cite>76</cite>
                            </li>
                            <li>
                                <a title="无锡" href="//www.damai.cn/wuxi/" target="_blank">无锡</a>
                                <cite>54</cite>
                            </li>
                            <li>
                                <a title="温州" href="//www.damai.cn/wenzhou/" target="_blank">温州</a>
                                <cite>18</cite>
                            </li>
                            <li>
                                <a title="苏州" href="//www.damai.cn/suz/" target="_blank">苏州</a>
                                <cite>125</cite>
                            </li>
                            <li>
                                <a title="常州" href="//www.damai.cn/changzhou/" target="_blank">常州</a>
                                <cite>31</cite>
                            </li>
                            <li>
                                <a title="南通" href="//www.damai.cn/nantong/" target="_blank">南通</a>
                                <cite>7</cite>
                            </li>
                            <li>
                                <a title="扬州" href="//www.damai.cn/yangzhou/" target="_blank">扬州</a>
                                <cite>6</cite>
                            </li>
                            <li>
                                <a title="舟山" href="//www.damai.cn/zhoushan/" target="_blank">舟山</a>
                                <cite>8</cite>
                            </li>
                            <li>
                                <a title="合肥" href="//www.damai.cn/hf/" target="_blank">合肥</a>
                                <cite>50</cite>
                            </li>
                            <li>
                                <a title="嘉兴" href="//www.damai.cn/jx/" target="_blank">嘉兴</a>
                                <cite>1</cite>
                            </li>
                            <li>
                                <a title="绍兴" href="//www.damai.cn/sx/" target="_blank">绍兴</a>
                                <cite>28</cite>
                            </li>
                            <li>
                                <a title="金华" href="//www.damai.cn/jinhua/" target="_blank">金华</a>
                                <cite>8</cite>
                            </li>
                            <li>
                                <a title="泰州" href="//www.damai.cn/tz/" target="_blank">泰州</a>
                                <cite>8</cite>
                            </li>
                            <li>
                                <a title="盐城" href="//www.damai.cn/yancheng/" target="_blank">盐城</a>
                                <cite>1</cite>
                            </li>
                            <li>
                                <a title="芜湖" href="//www.damai.cn/wuhu/" target="_blank">芜湖</a>
                                <cite>2</cite>
                            </li>
                            <li>
                                <a title="蚌埠" href="//www.damai.cn/bengbu/" target="_blank">蚌埠</a>
                                <cite>1</cite>
                            </li>
                            <li>
                                <a title="湖州" href="//www.damai.cn/huzhou/" target="_blank">湖州</a>
                                <cite>3</cite>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>华南地区</dt>
                    <dd>
                        <ul>
                            <li>
                                <a title="广州" href="//www.damai.cn/gz/" target="_blank">广州</a>
                                <cite>175</cite>
                            </li>
                            <li>
                                <a title="港澳" href="//www.damai.cn/hk/" target="_blank">港澳</a>
                                <cite>40</cite>
                            </li>
                            <li>
                                <a title="深圳" href="//www.damai.cn/sz/" target="_blank">深圳</a>
                                <cite>233</cite>
                            </li>
                            <li>
                                <a title="南宁" href="//www.damai.cn/nn/" target="_blank">南宁</a>
                                <cite>41</cite>
                            </li>
                            <li>
                                <a title="佛山" href="//www.damai.cn/foshan/" target="_blank">佛山</a>
                                <cite>32</cite>
                            </li>
                            <li>
                                <a title="福州" href="//www.damai.cn/fuzhou/" target="_blank">福州</a>
                                <cite>26</cite>
                            </li>
                            <li>
                                <a title="东莞" href="//www.damai.cn/dg/" target="_blank">东莞</a>
                                <cite>42</cite>
                            </li>
                            <li>
                                <a title="厦门" href="//www.damai.cn/xiamen/" target="_blank">厦门</a>
                                <cite>58</cite>
                            </li>
                            <li>
                                <a title="海南" href="//www.damai.cn/haikou/" target="_blank">海南</a>
                                <cite>5</cite>
                            </li>
                            <li>
                                <a title="珠海" href="//www.damai.cn/zhuhai/" target="_blank">珠海</a>
                                <cite>8</cite>
                            </li>
                            <li>
                                <a title="泉州" href="//www.damai.cn/quanzhou/" target="_blank">泉州</a>
                                <cite>16</cite>
                            </li>
                            <li>
                                <a title="中山" href="//www.damai.cn/zs/" target="_blank">中山</a>
                                <cite>18</cite>
                            </li>
                            <li>
                                <a title="惠州" href="//www.damai.cn/huizhou/" target="_blank">惠州</a>
                                <cite>17</cite>
                            </li>
                            <li>
                                <a title="柳州" href="//www.damai.cn/lz/" target="_blank">柳州</a>
                                <cite>1</cite>
                            </li>
                            <li>
                                <a title="江门" href="//www.damai.cn/jiangmen/" target="_blank">江门</a>
                                <cite>10</cite>
                            </li>
                            <li>
                                <a title="北海" href="//www.damai.cn/beihai/" target="_blank">北海</a>
                                <cite>2</cite>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>中西部</dt>
                    <dd>
                        <ul>
                            <li>
                                <a title="成都" href="//www.damai.cn/cd/" target="_blank">成都</a>
                                <cite>151</cite>
                            </li>
                            <li>
                                <a title="重庆" href="//www.damai.cn/cq/" target="_blank">重庆</a>
                                <cite>187</cite>
                            </li>
                            <li>
                                <a title="武汉" href="//www.damai.cn/wuhan/" target="_blank">武汉</a>
                                <cite>166</cite>
                            </li>
                            <li>
                                <a title="昆明" href="//www.damai.cn/km/" target="_blank">昆明</a>
                                <cite>62</cite>
                            </li>
                            <li>
                                <a title="南昌" href="//www.damai.cn/nanchang/" target="_blank">南昌</a>
                                <cite>60</cite>
                            </li>
                            <li>
                                <a title="长沙" href="//www.damai.cn/cs/" target="_blank">长沙</a>
                                <cite>97</cite>
                            </li>
                            <li>
                                <a title="贵阳" href="//www.damai.cn/gy/" target="_blank">贵阳</a>
                                <cite>22</cite>
                            </li>
                            <li>
                                <a title="兰州" href="//www.damai.cn/lanzhou/" target="_blank">兰州</a>
                                <cite>17</cite>
                            </li>
                            <li>
                                <a title="乌鲁木齐" href="//www.damai.cn/wulumuqi/" target="_blank">乌鲁木</a>
                                <cite>4</cite>
                            </li>
                            <li>
                                <a title="洛阳" href="//www.damai.cn/luoyang/" target="_blank">洛阳</a>
                                <cite>3</cite>
                            </li>
                            <li>
                                <a title="拉萨" href="//www.damai.cn/ls/" target="_blank">拉萨</a>
                                <cite>4</cite>
                            </li>
                            <li>
                                <a title="西宁" href="//www.damai.cn/xn/" target="_blank">西宁</a>
                                <cite>10</cite>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
        <!-- 城市切换 end -->

        <!-- 导航 begin -->
        <ul class="m-nav">
            <li><a href="//www.damai.cn/wuhan/" target="_blank">武汉站</a></li>
            <li><a href="//search.damai.cn/search.html?ctl=%E6%BC%94%E5%94%B1%E4%BC%9A&cty=%e6%ad%a6%e6%b1%89&order=1"
                   target="_blank">演唱会</a></li>
            <li><a href="//search.damai.cn/search.html?ctl=%E9%9F%B3%E4%B9%90%E4%BC%9A&cty=%e6%ad%a6%e6%b1%89&order=1"
                   target="_blank">音乐会</a></li>
            <li>
                <a href="//search.damai.cn/search.html?ctl=%E8%AF%9D%E5%89%A7%E6%AD%8C%E5%89%A7&cty=%e6%ad%a6%e6%b1%89&order=1"
                   target="_blank">话剧歌剧</a></li>
            <li><a href="//sports.damai.cn/" target="_blank">体育</a></li>
        </ul>
        <!-- 导航 end -->

        <!-- 顶部栏 begin -->
        <ul class="m-topbar">
            <li class="itm first">
                <!-- 搜索 begin -->
                <div class="m-sch">
                    <input type="text" class="ipt" id="txtSearchText" placeholder="请输入演出、赛事、艺人、场馆名称..."/>
                    <a class="btn" href="javascript:;" id="btnSearch">搜索</a>
                    <div class="m-suggest" id="rlist_txtSearchText">
                        <a href="//mobile.damai.cn/" target="_blank" class="appimg">把【<span>12</span>】装进口袋</a>
                    </div>
                </div>
                <!-- 搜索 end -->
            </li>
            <li class="itm">
                <!-- 用户登录 begin -->
                <div class="m-sign m-sign-log">
                    <label id="userLoginInfo">
                        <a class="user" href="javascript:;"><img
                                original="//dui.dmcdn.cn/dm_2015/goods//concertbuy/images/user.png"/></a>
                        <span class="sign"><a href="//www.damai.cn/redirect.aspx?type=login">登录</a> | <a
                                href="//www.damai.cn/redirect.aspx?type=reg">注册</a></span>
                    </label>
                    <div class="menu" my="menu" style="display:none;">
                        <a href="//my.damai.cn/account/myinfo.aspx" target="_blank" class="first">个人信息</a>
                        <a href="//order.damai.cn/index.aspx" target="_blank">订单管理</a>
                        <a href="//my.damai.cn/trade/ewallet/myEwallet.aspx" target="_blank">我的钱包</a>
                        <a href="https://coupon.damai.cn/coupon-web-damai/mycoupon/myCoupon" target="_blank">我的优惠券</a>
                        <a href="//www.damai.cn/redirect.aspx?type=loginout" class="exit">退出</a>
                    </div>
                </div>
                <!-- 用户登录 end -->
            </li>
            <li class="itm">
                <!-- 快速导航 begin -->
                <div class="m-quicknav">
                    <div class="tt"><em></em><a href="javascript:void(0)">快速导航</a><b></b></div>
                    <div class="ct" style="width:650px;">
                        <dl class="col customer">
                            <dt>客户服务</dt>
                            <dd>
                                <ul>
                                    <li>
                                        <a href="//help.damai.cn/#selfservice" target="_blank">账户服务</a>
                                    </li>
                                    <li>
                                        <a href="//help.damai.cn/#onlineservice" target="_blank">人工服务</a>
                                    </li>
                                    <li>
                                        <a href="//help.damai.cn/#specialproducts" target="_blank">特色产品</a>
                                    </li>
                                    <li><a target="_blank" href="//help.damai.cn/" title="帮助中心">帮助中心</a></li>
                                    <li><span class="xiaonengService" style="cursor: pointer;">在线客服</span></li>
                                    <li><a target="_blank" href="//en.damai.cn" title="English version">English
                                        version</a></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl class="col">
                            <dt>演出分类</dt>
                            <dd>
                                <ul>
                                    <li><a href="//search.damai.cn/search.html?ctl=%E6%BC%94%E5%94%B1%E4%BC%9A&order=1"
                                           target="_blank" title="演唱会">演唱会</a></li>
                                    <li><a href="//search.damai.cn/search.html?ctl=%E9%9F%B3%E4%B9%90%E4%BC%9A&order=1"
                                           target="_blank" title="音乐会">音乐会</a></li>
                                    <li>
                                        <a href="//search.damai.cn/search.html?ctl=%E8%88%9E%E8%B9%88%E8%8A%AD%E8%95%BE&order=1"
                                           target="_blank" title="舞蹈芭蕾">舞蹈芭蕾</a></li>
                                    <li>
                                        <a href="//search.damai.cn/search.html?ctl=%E6%9B%B2%E8%8B%91%E6%9D%82%E5%9D%9B&order=1"
                                           target="_blank" title="曲苑杂坛">曲苑杂坛</a></li>
                                    <li>
                                        <a href="//search.damai.cn/search.html?ctl=%E5%BA%A6%E5%81%87%E4%BC%91%E9%97%B2&order=1"
                                           target="_blank" title="度假休闲">度假休闲</a></li>
                                    <li>
                                        <a href="//search.damai.cn/search.html?tn=%E5%84%BF%E7%AB%A5%E4%BA%B2%E5%AD%90&order=1"
                                           target="_blank" title="儿童亲子">儿童亲子</a></li>
                                    <li>
                                        <a href="//search.damai.cn/search.html?ctl=%E8%AF%9D%E5%89%A7%E6%AD%8C%E5%89%A7&order=1"
                                           target="_blank" title="话剧歌剧">话剧歌剧</a></li>
                                </ul>
                            </dd>
                        </dl>

                        <dl class="col">
                            <dt>赛事分类</dt>
                            <dd>
                                <ul>
                                    <li>
                                        <a title="足球" target="_blank"
                                           href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&amp;order=1&amp;sctl=%E8%B6%B3%E7%90%83">足球</a>
                                    </li>
                                    <li>
                                        <a title="篮球" target="_blank"
                                           href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&amp;order=1&amp;sctl=%E7%AF%AE%E7%90%83">篮球</a>
                                    </li>
                                    <li>
                                        <a title="电竞" target="_blank"
                                           href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&amp;order=1&amp;sctl=%E7%94%B5%E7%AB%9E">电竞</a>
                                    </li>
                                    <li>
                                        <a title="田径" target="_blank"
                                           href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&amp;order=1&amp;sctl=%E7%94%B0%E5%BE%84">田径</a>
                                    </li>
                                    <li>
                                        <a title="网球" target="_blank"
                                           href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&amp;order=1&amp;sctl=%E7%BD%91%E7%90%83">网球</a>
                                    </li>
                                    <li>
                                        <a title="赛车" target="_blank"
                                           href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&amp;order=1&amp;sctl=%E8%B5%9B%E8%BD%A6">赛车</a>
                                    </li>
                                    <li>
                                        <a title="冰雪" target="_blank"
                                           href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&amp;order=1&amp;sctl=%E5%86%B0%E9%9B%AA">冰雪</a>
                                    </li>
                                    <li>
                                        <a title="格斗" target="_blank"
                                           href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&amp;order=1&amp;sctl=%E6%A0%BC%E6%96%97">格斗</a>
                                    </li>
                                    <li>
                                        <a title="排球" target="_blank"
                                           href="//search.damai.cn/search.html?ctl=%E4%BD%93%E8%82%B2%E6%AF%94%E8%B5%9B&amp;order=1&amp;sctl=%E6%8E%92%E7%90%83">排球</a>
                                    </li>
                                    <li>
                                        <a title="其他" target="_blank" href="//sports.damai.cn/">其他</a>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <dl class="col last">
                            <dt>特色服务</dt>
                            <dd>
                                <ul>
                                    <li><a target="_blank" href="//venue.damai.cn/">场馆库</a></li>
                                    <li><a target="_blank" href="//dingyue.damai.cn/subType.do?platformId=1">演出订阅</a>
                                    </li>
                                    <li><a target="_blank" href="//i.damai.cn/">精彩专题</a></li>
                                    <li><a target="_blank" href="//mobile.damai.cn/">手机购票</a></li>
                                    <li><a target="_blank" href="//sale.damai.cn/2017dzqb/index.html">电子钱包</a></li>
                                    <li><a target="_blank" href="//en.damai.cn/">英文频道</a></li>
                                    <li><a target="_blank" href="https://anti.damai.cn/">防诈骗</a></li>
                                </ul>
                                <div class="foucs">
                                    <iframe id="wbFollowIframe_" width="136" height="24" frameborder="0"
                                            lazy-src="http://widget.weibo.com/relationship/followbutton.php?btn=light&amp;style=2&amp;uid=1802980631&amp;width=136&amp;height=24&amp;language=zh_cn"
                                            scrolling="no" marginheight="0"></iframe>
                                </div>
                            </dd>
                        </dl>

                    </div>
                </div>
                <!-- 快速导航 end -->
            </li>
        </ul>
        <!-- 顶部栏 end -->
    </div>
</div>
<div class="g-bd" data-image="" data-color="">
    <div class="g-bdc">
        <div class="g-mn">

            <!-- 终极页项目信息 begin -->
            <div class="m-box m-box-col2 m-box-goods" id="projectInfo">
                <div class="hd">
                    <!-- 面包屑 begin -->
                    <p class="m-crm">
                        <a href="//www.damai.cn/">大麦网</a>
                        <span class="arrow">&gt;</span>
                        <a href="//www.damai.cn/wuhan/" target="_blank">${cityDTO.cityName}</a>
                        <span class="arrow">&gt;</span>
                        <a href="//search.damai.cn/search.html?ctl=%e6%bc%94%e5%94%b1%e4%bc%9a&cty=%e6%ad%a6%e6%b1%89&order=1"
                           target="_blank">${assortmentDTO.sortName}</a>
                        <span class="arrow">&gt;</span>
                        <strong>${messageDTO.mesName}</strong>
                    </p>
                    <!-- 面包屑 end -->
                </div>

                <div class="mn">
                    <!-- 项目海报 begin -->
                    <div class="m-poster">
                        <!-- 项目图 begin -->
                        <div class="m-picbox">
                            <img original="<%=basePath%>/concert/img/${messageDTO.mesPhoto}"
                                 title="${messageDTO.mesName}" alt="${messageDTO.mesName}" width="277" height="373"/>

                        </div>
                        <!-- 项目图 end -->

                        <!-- 分享 begin -->
                        <div class="m-share" data-spm="click">
                            <span class="txt">分享到：</span>
                            <!-- JiaThis Button BEGIN -->
                            <div class="jiathis_style">
                                <a href="http://service.weibo.com/share/share.php?title=我在@大麦网 『www.damai.cn』发现了一个非常不错的演出:『2018周深“深空间”巡回演唱会武汉站』,时间是2018.05.29，场馆在,强烈推荐！分享一下&gt;&gt;&gt;&gt;&gt;&gt;&url=https%3a%2f%2fpiao.damai.cn%2f146408.html&source=bookmark&appkey=3588246140&pic=https%3A%2F%2Fpimg.dmcdn.cn%2Fperform%2Fproject%2F1464%2F146408_n.jpg&ralateUid=1722647874"
                                   class="jiathis_button_tsina" title="分享到微博" target="_blank"
                                   data-spm-click="gostr=/damai_pc.default.click;localid=share_0;dclicktitle=微博&ditem_id=146408"><span
                                        class="jiathis_txt jtico jtico_tsina"></span></a>
                                <a class="jiathis_button_weixin" title="分享到微信"
                                   data-spm-click="gostr=/damai_pc.default.click;localid=share_1;dclicktitle=微信&ditem_id=146408"><span
                                        class="jiathis_txt jtico jtico_weixin"></span></a>
                                <a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https%3A%2F%2Fpiao.damai.cn%2F146408.html&title=我在@大麦网 『www.damai.cn』发现了一个非常不错的演出:『2018周深“深空间”巡回演唱会武汉站』,时间是2018.05.29，场馆在,强烈推荐！分享一下&gt;&gt;&gt;&gt;&gt;&gt;&pics=http%3A%2F%2Fpimg.dmcdn.cn%2Fperform%2Fproject%2F1464%2F146408_n.jpg&summary="
                                   class="jiathis_button_qzone" title="分享到QQ空间" target="_blank"
                                   data-spm-click="gostr=/damai_pc.default.click;localid=share_2;dclicktitle=QQ空间&ditem_id=146408"><span
                                        class="jiathis_txt jtico jtico_qzone"></span></a>
                            </div>
                            <!-- JiaThis Button END -->
                        </div>
                        <!-- 分享 end -->

                        <!-- 立即订阅 begin -->
                        <a class="u-btn u-btn-rss" href="javascript:;" id="lijidy"><span class="ico"></span><span
                                class="txt">立即订阅</span></a>
                        <!-- 立即订阅 end -->

                    </div>
                    <!-- 项目海报 end -->

                    <!-- 项目模块 begin -->
                    <div class="m-goods">
                        <h2 class="tt" data-spm="click">
                            <span class="txt">${messageDTO.mesName}</span>
                            <a href="javascript:;" class="m-flowers"
                               data-spm-click="gostr=/damai_pc.default.click;localid=likebtn;ditem_id=146408">
                                <span class="ico ico-1"></span>
                                <span class="txt">送花</span>
                                <span class="num">0</span>
                                <span class="add">人气+1</span>
                            </a>
                        </h2>
                        <h3 class="stt">
                            <span class="quotl"></span>
                            <span class="txt">${messageDTO.mesExplain}</span>
                            <span class="quotr"></span>
                        </h3>
                        <!-- 时间轴 begin -->
                        <div class="m-timeline m-timeline-3" id="projectAxis">
                            <div class="wrap">
                                <div class="box">
                                    <div class="bar">
                                        <div class="line" style="width:290px"></div>
                                    </div>
                                    <div class="itm itm-1 " style="width:145px"><h3 class="txt">项目待定</h3>
                                        <div class="ico"></div>
                                        <p class="date"></p></div>
                                    <div class="itm itm-2 " style="width:145px"><h3 class="txt">预售/预订</h3>
                                        <div class="ico"></div>
                                        <p class="date"></p></div>
                                    <div class="itm itm-3 itm-crt" style="width:145px"><h3 class="txt">售票中</h3>
                                        <div class="ico"></div>
                                        <p class="date"></p></div>
                                    <div class="itm itm-4 " style="width:145px"><h3 class="txt">演出开始</h3>
                                        <div class="ico"></div>
                                        <p class="date"></p></div>
                                </div>
                            </div>
                        </div>
                        <!-- 时间轴 end -->

                        <!-- 产品模块 begin -->
                        <div class="m-product m-product-2 -m-product-1 j_goodsDetails">
                            <div class="m-goodstips m-goodstips-2" id="projectStatusDescn" style="display:none;">
                                <div class="hd">
                                    <i class="ico"></i>
						<span class="txt txt-status" data-status="售票中">
						售票中						</span>
                                </div>
                                <div class="bd">
                                    <div class="tips">
                                        <div class="box z-hide"><p class="itm">

                                        </p></div>
                                        <div class="ops"><span class="btnsel"></span></div>
                                    </div>
                                </div>
                                <div class="mark" id="jinpaiMark" style="display:none;"></div>
                            </div>

                            <div id="toBeAboutTo" class="m-countdown" data-init="false" style="display:none;">
                                <div class="ct"></div>
                                <div class="tips"><i class="ico"></i><span class="txt j_endtime"></span></div>
                            </div>

                            <!-- 促销信息模块 begin -->
                            <div class="" id="yhcx" data-row="4" data-col="1"></div>
                            <div class="m-load z-hide" id="getInfoFail"><p class="txt"><i></i>加载失败</p></div>
                            <!-- 促销信息模块 end -->
                            <!-- 选择日历模块 begin -->
                            <div class="m-choose m-choose-picker" style="display:none" data-row="3" data-col="4">
                                <h3 class="tt" style="padding-top: 6px;">选择时间：</h3>
                                <div class="ct">
                                    <div class="m-datepicker">
                                        <div class="weekbox">
                                            <div class="box"></div>
                                        </div>
                                        <div class="datebox">
                                            <div class="box"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 选择日历模块 end -->
                            <!-- 选择日期模块 begin -->
                            <div class="m-choose m-choose-date  " id="performList" data-col="4" data-spm="clicktime">
                                <h3 class="tt">
                                    演出时间：</h3>
                                <div class="ct">
                                    <ul class="lst lst-dis">
                                        <li class="itm  itm-sel" class="loading" data-performtime="${messageDTO.mesTime}" data-buycount="20" id="firstperform">
                                            <a href="javascript:;" data-spm-click="">${messageDTO.mesTime}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 选择日期模块 end -->

                            <!-- 选择票价模块 begin -->
                            <div class="m-choose m-choose-price " id="priceList" data-col="4" data-spm="clickprice">
                                <h3 class="tt">选择票价：</h3>
                                <div class="ct">
                                    <ul class="lst">
                                        <c:forEach items="${messageDTO.mesDetList}" var="mesDet">
                                            <li class="itm" data-performtime="{mesDet.mdPrice}" data-buycount="20" id="firstperform">
                                                <a href="javascript:;">${mesDet.mdPrice}
                                                    <%--color: #ed0a75;--%>
                                                </a>
                                            </li>
                                        </c:forEach>

                                    </ul>
                                    <div class="tips-warn z-hide" id="warnXiangou"><span class="txt"></span></div>
                                    <div class="tips tips-oos"><span class="ico"></span><span
                                            class="txt">暂时无货，登录试试运气~</span></div>
                                </div>
                            </div>
                            <!-- 选择票价模块 end -->

                            <!-- 购物车模块 begin -->
                            <div class="m-cart  " id="cartList" style="" data-spm="click">
                                <h3 class="tt" style="display:none;">您选择了：${messageDTO.mesTime}${mesDet.mdPrice}</h3>
                                <div class="ct" style="display:none;">
                                    <ul class="lst"></ul>
                                </div>

                                <div class="ops">
                                    <a href="/admin/setseat?msgId=${messageDTO.mesId}" class="u-btn u-btn-c1 u-btn-choose" id="btnXuanzuo" style=""
                                       data-spm-click="">选座购买</a>
                                </div>

                            </div>

                            <!-- 购物车模块 end -->

                            <div class="m-probox m-remine" id="kaishoutixingLayer" style="display:none;">
                                <input type="text" placeholder="请输入接收信息的手机号" class="u-ipt u-ipt-md"
                                       id="kaishoutixingPhone">
                                <a class="u-btn u-btn-md u-btn-remind" href="javascript:kaishoutixing;"
                                   id="btnKaishoutixing"><i class="ico"></i><span class="txt">开售提醒</span></a>
                            </div>


                            <div id="jinpaiCounter" class="m-countdown" data-init="false" style="display:none;">
                                <div class="ct"><span class="lab">距抢座开始：</span>
                                    <span class="num num-0">0</span><span class="num num-0">0</span><span
                                            class="txt">小时</span>
                                    <span class="num num-0">0</span><span class="num num-0">0</span><span
                                            class="txt">分</span>
                                    <span class="num num-0">0</span><span class="num num-0">0</span><span
                                            class="txt">秒</span></div>
                                <div class="tips"><i class="ico"></i><span class="txt"></span></div>
                            </div>
                            <div class="m-goodstab" id="jinpaiTabs" style="display:none;">
                                <div class="hd">
                                    <ul class="tab">
                                        <li class="itm itm-tab j_tabOrders f-dn">我的抢座</li>
                                        <li class="itm itm-tab z-crt j_tabLives">抢座实况</li>
                                        <li class="itm itm-tab j_tabGroups f-dn">查看分组说明</li>
                                    </ul>
                                    <div class="sort" id="jinpaiMyRanking" style="margin-right:8px;">
                                        我的排名：<strong>-</strong></div>
                                </div>
                                <div class="bd">
                                    <div class="itm itm-tab f-dn" id="jinpaiOrders">
                                        <table rules="rows" class="m-table">
                                            <thead>
                                            <tr>
                                                <th class="cola">订单号</th>
                                                <th class="colb">票价（数量）</th>
                                                <th class="cola">排名</th>
                                                <th class="cola">分组</th>
                                                <th class="colc">进场时间</th>
                                                <th>操作</th>
                                            </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                    <div class="itm itm-tab z-show" id="jinpaiLives">
                                        <!-- 抢座实况 begin -->
                                        <div class="m-grablive">
                                            <div class="inner">
                                                <ul class="lst" id="jinpaiLiveList"></ul>
                                            </div>
                                        </div>
                                        <!-- 抢座实况 end -->
                                    </div>
                                    <div class="itm itm-tab f-dn" id="jinpaiGroupList">
                                        <!-- 查看分组说明 begin -->
                                        <div class="m-groupshow">
                                            <div class="inner">
                                                <ul class="lst"></ul>
                                            </div>
                                        </div>
                                        <!-- 查看分组说明 end -->
                                    </div>
                                </div>
                            </div>


                            <a name="projectPrivilege" id="privilegeAnchor"></a>

                            <div class="m-qrcode"><!-- 大麦网客户端二维码 -->
                                <h3 class="tt"><span id="ErWeiMaTips">手机扫一扫<br/>下单更快捷</span></h3>
                                <p class="ct"><img original="//static.dmcdn.cn/Erweima/1464/146408.jpg" alt="大麦网客户端"
                                                   width="109" height="108"/></p>
                            </div>
                            <div class="m_heighlight_tip"></div>
                        </div>
                        <!-- 产品模块 end -->
                    </div>
                    <!-- 项目模块 end -->
                </div>

                <!-- 侧栏 begin -->
                <div class="sd">
                    <!-- 票务总代 begin -->
                    <div class="m-agent">
                        <div class="tt">
                            <a href="//help.damai.cn/damai/channels/343.html" target="_blank"><img
                                    original="//dui.dmcdn.cn/dm_2015/goods//concertbuy/images/m-agent-logo.png"
                                    alt="票务总代"/></a>
                        </div>
                        <div class="ct">
                            <a href="//help.damai.cn/damai/channels/343.html" class="itm" target="_blank">本项目由大麦网总代理</a>
                            <a href="//group.damai.cn/smart/" class="itm" target="_blank">MAITIX独家票务系统支持</a>
                        </div>
                    </div>
                    <!-- 票务总代 end -->


                    <div class="m-sdbox m-showtime">

                        <h2 class="tt">演出时间</h2>
                        <div class="ct">
                            <span class="txt">2018.05.29</span>
                            <a href="javascript:;" class="u-btn u-btn-cal" id="rili"
                               onClick="showcalendar(event, this); return false;"
                               onFocus="showcalendar(event, this);"><i>日历</i></a>
                        </div>

                    </div>


                    <!-- 演出场馆 begin -->
                    <div class="m-sdbox m-venue">
                        <h2 class="tt">演出场馆</h2>
                        <div class="ct">
                            <p class="txt"><a href="//venue.damai.cn/venue_59055.html" target="_blank">汉秀剧场</a></p>
                            <a href="javascript:;"
                               map-src="/map/map.html?zoom=14&marker={y:${venueInfo.Lat},x:${venueInfo.Lng},text:'${venueInfo.Name}'}"
                               id="showVenueMap" class="u-btn u-btn-traffic"><i></i>交通路线</a>
                        </div>
                    </div>
                    <!-- 演出场馆 end -->

                    <!-- 票品支持 begin -->
                    <div class="m-sdbox m-support">
                        <h2 class="tt">票品支持</h2>
                        <div class="ct">
                            <ul class="m-mantab">
                                <li class="itm"><a href="javascript:;" class="u-btn u-btn-choose"><i></i>选座</a>
                                    <div class="layer">
                                        <div class="hd"><a href="javascript:;" class="btn-close">关闭</a></div>
                                        <div class="bd">
                                            <p>本项目支持自助选座。</p>
                                            <p>1. 选择演出时间，并点击"选座购买"进入选座页面。</p>
                                            <p>2. 选座后，在15分钟内支付成功，选座生效。</p>
                                        </div>
                                        <div class="ft">
                                            <a href="//seat.damai.cn/" target="_blank">了解自助选座…</a>
                                            <a href="javascript:;" class="btn btn-close">关闭</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="itm"><a href="javascript:;" class="u-btn u-btn-super"><i></i>超级票</a>
                                    <div class="layer">
                                        <div class="hd"><a href="javascript:;" class="btn-close">关闭</a></div>
                                        <div class="bd">
                                            <p>1.本项目支持使用【电子钱包-超级票账户】消费，支付时优先扣减超级票余额。</p>
                                            <p>2.超级票成功充值电子钱包后，享受全网通兑、分次消费、无有效期限制、无使用张数限制、秒杀、抢票等服务。</p>
                                        </div>
                                        <div class="ft">
                                            <a href="//help.damai.cn/damai/channels/295.html"
                                               target="_blank">了解大麦超级票…</a>
                                            <a href="javascript:;" class="btn btn-close">关闭</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="itm"><a href="javascript:;" class="u-btn u-btn-wallet"><i></i>电子钱包</a>
                                    <div class="layer">
                                        <div class="hd"><a href="javascript:;" class="btn-close">关闭</a></div>
                                        <div class="bd">
                                            <p>本项目支持电子钱包。</p>
                                            <p>1. 电子钱包是由大麦网自主研发的第三方支付平台</p>
                                            <p>2. 为每一个用户在购票过程中提供"简单、安全、快速"的在线支付解决方案</p>
                                        </div>
                                        <div class="ft">
                                            <a href="//help.damai.cn/damai/channels/293.html"
                                               target="_blank">了解大麦电子钱包…</a>
                                            <a href="javascript:;" class="btn btn-close">关闭</a>
                                        </div>
                                    </div>
                                </li>

                                <li class="itm"><a href="javascript:;" class="u-btn u-btn-credit"><i></i>返积分</a>
                                    <div class="layer">
                                        <div class="hd"><a href="javascript:;" class="btn-close">关闭</a></div>
                                        <div class="bd">
                                            <p>【会员多倍积分】 大麦会员按不同等级可分别获得消费金额×50%到100%比例的积分返还</p>
                                            <p>您可以在积分商城兑换明星周边、演出票品、优惠卡券等商品，也可以参与抽奖活动，赢取幸运大礼。</p>
                                        </div>
                                        <div class="ft">
                                            <a href="//jf.damai.cn/" target="_blank">去大麦积分商城…</a>
                                            <a href="javascript:;" class="btn btn-close">关闭</a>
                                        </div>
                                    </div>
                                </li>
                                <!-- -->


                                <li class="itm"><a href="javascript:;" class="u-btn u-btn-express"><i></i>快递</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- 票品支持 end -->

                    <!-- 实票配送 begin -->
                    <div class="m-sdbox m-entity" id="freight">
                        <h2 class="tt"> 实票配送</h2>
                        <div class="ct">
                            <div class="u-sel u-sel-c1 u-sel-entity">
                                <div class="hd">
                                    <span class="txt">北京</span>
                                    <span class="ico"></span>
                                </div>
                                <div class="menu">
                                    <ul class="lst"></ul>
                                </div>
                            </div>
                            <p class="tips">加载中...</p>
                        </div>
                    </div>
                    <!-- 实票配送 end -->

                </div>
                <!-- 侧栏 end -->

            </div>
            <!-- 终极页项目信息 end -->

            <!-- 终极页项目详情 begin -->
            <div class="m-box m-box-col2">
                <div class="mn">
                    <!-- 项目详情 begin -->
                    <div class="m-detail">
                        <!-- 项目详情选项卡 begin -->
                        <div class="m-infonav" id="m-infonav">
                            <div class="hd">
                                <div class="nav">
                                    <ul class="tab">
                                        <li><a data-href="#m-infonav" href="javascript:;"
                                               class="itm itm-tab first z-crt"
                                               id="tabProjectDescn" data-show="1,2" data-idx="0"><i></i><span
                                                class="txt">演出信息</span></a></li>
                                        <li><a data-href="#m-infonav" href="javascript:;" class="itm itm-tab"
                                               data-idx="2"><i></i><span
                                                class="txt">客服答疑</span><strong class="num" id="reviewNum">0</strong></a>
                                        </li>
                                        <li><a data-href="#m-infonav" href="javascript:;" class="itm itm-tab"
                                               data-idx="3"><i></i><span
                                                class="txt">购买说明</span></a></li>
                                        <li><a data-href="#m-infonav" href="javascript:;" class="itm itm-tab"
                                               data-idx="4"><i></i><span
                                                class="txt">付款方式</span></a></li>
                                    </ul>

                                    <div class="buy" id="buyButtonC" style="display:none;">
                                        <a href="javascript:;" class="u-btn u-btn-buy " id="btnXuanzuo2"
                                           style="display:none;"><i
                                                class="ico"></i><span class="txt">选座购买</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="bd">
                                <div class="itm-tab z-show" rel="0">
                                    <!-- 演出信息 begin -->
                                    <div class="m-infobase m-liveinfo">
                                        <dl class="infoitm">
                                            <dt class="tt"><span class="txt">基本信息</span></dt>
                                            <dd class="ct">
                                                <div class="table-info">
                                                    <table class="m-table2">
                                                        <tbody>
                                                        <c:forEach items="${messageInfoDTOList}" var="msginfo">
                                                            <tr>
                                                                <td width="90" class="bg">${msginfo.infoName}</td>
                                                                <td>${msginfo.infoContent}</td>
                                                                <%--<td width="90" class="bg">${msginfo.infoName}</td>
                                                                <td width="200">${msginfo.infoContent}</td>--%>
                                                            </tr>
                                                        </c:forEach>


                                                        <%--<tr>
                                                            <td width="90" class="bg">演出时长</td>
                                                            <td>约90分钟</td>
                                                            <td width="90" class="bg">入场时间</td>
                                                            <td width="200">演出前30-60分钟</td>
                                                        </tr>
                                                        <tr></tr>
                                                        <tr>
                                                        </tr>
                                                        <tr></tr>
                                                        <tr>
                                                            <td class="bg">限购</td>
                                                            <td>选座购买每单限6张，立即购买每单限20张。</td>
                                                            <td class="bg">儿童入场提示</td>
                                                            <td>1.2米以下儿童谢绝入场（儿童项目除外），1.2米以上儿童需持票入场。</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="bg">禁止携带物品</td>
                                                            <td>食品、饮料、相机、充电宝、打火机等。</td>
                                                            <td class="bg">付款时效提醒</td>
                                                            <td>
                                                                购票下单成功后需在15分钟内完成支付，未支付成功的订单，将在下单15分钟后系统自动取消，所选价位将自动释放后重新点亮，大家可及时刷新购票页面进行购买。
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="bg">缺货登记提醒</td>
                                                            <td>所需票价若为灰色，说明已经售完。您可以在当前页面进行缺货登记，后期如果有票会以短信形式及时通知。</td>
                                                            <td class="bg">发票说明</td>
                                                            <td>如需发票，请您在演出前通过订单页补开，发票将在演出结束后1个月左右，统一由主办方提供。</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="bg">实名制</td>
                                                            <td>无需实名</td>

                                                            <td class="bg">座位类型</td>
                                                            <td>对号入座</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="bg">不支持退换</td>
                                                            <td>本项目不支持退换票。如无法正常观看，还请自行处理。给您带来不便敬请谅解！</td>

                                                            <td class="bg"></td>
                                                            <td></td>
                                                        </tr>--%>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </dd>
                                        </dl>


                                        <dl class="infoitm">
                                            <dt class="tt"><span class="txt">项目介绍</span></dt>
                                            <dd class="ct">
                                                <div class="pre"><h4>
                                                    演出介绍
                                                </h4>
                                                    　　2017华语流行/二次元界最热单曲《大鱼》<br/>
                                                    　　2018奥斯卡大奖得主《水形物语》中文同名主题歌<br/>
                                                    　　高晓松量体打造新作独家呈现<br/>
                                                    　　神秘华语经典曲目翻唱悬念<br/>
                                                    　　来自卡布叻的跨越次元壁音乐旅途邀约<br/>
                                                    <p>
                                                        　　这个夏天，和周深一起，寻秘“深·空间”
                                                    </p>
                                                    <p style="text-align:center;">
                                                        <img original="https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/3240d4bf-74fe-472a-bf91-24125cb484b5"
                                                             width="600" height="400" alt=""/>
                                                    </p>
                                                    　　2018年夏，人气歌手周深将跨越多个次元壁，不再只局限于电视、手机与电脑屏幕中与歌迷见面，其个人第一次巡演《深空间》将在5月中下旬起于武汉成都等地陆续与歌迷见面。<br/>
                                                    　　出道数年，对周深来说，“清澈”、“天籁”是大众的赞美，“国风”、“文艺”是小众的划分，“幽默”、“顽皮”是铁粉的共识，“二次元”是他个人的偏好。这些看似无法并存的形容词，如何有机共存？而这就是本次巡演的目的：打破文化领域间的次元壁限制，邀大家一起走进周深最本真自我的——深空间。<br/>
                                                    <p>
                                                        　　目前已公布的巡演场次分别为武汉站（5月29日/汉秀剧场）及成都站（6月16日/正火艺术中心），更多场次则有待主办方SKIRAYSPRODUCTION后续公布。
                                                    </p>
                                                    <p style="text-align:center;">
                                                        <img original="https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/f7f3f311-256b-4b54-ae29-9a13eb2be1cb"
                                                             width="600" height="646" alt=""/>
                                                    </p>
                                                    <strong>　　多维度艺术概念交互周深用音乐带你空间穿梭</strong><br/>
                                                    <p>
                                                        　　“空间无界永在”，这句空间学公理的理论基础，运用到周深个体上，似乎有了更多文化含义上的解读性。是的，本次巡演，周深将为更多的歌迷在物理距离最近的场所中献唱，把自己最想表达的那个周深用舞台的形式，直观的用听觉空间+视觉空间的方式，呈现在大家面前。
                                                    </p>
                                                    <p style="text-align:center;">
                                                        <img original="https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/f4f6b3ca-9d96-488b-8c45-0421d052cfc9"
                                                             width="600" height="338" alt=""/>
                                                    </p>
                                                    <p style="text-align:center;">
                                                        <img original="https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/04747a1c-55e8-4357-9551-1697e540e4a8"
                                                             width="600" height="373" alt=""/>
                                                    </p>
                                                    <strong>　　巡演献唱曲目备受期待：《大鱼》+《水形物语》+高晓松量身打造新作+翻唱华语经典</strong><br/>
                                                    　　那些周深已经发布广受好评的歌曲，那些周深私人颇为偏爱的歌曲，那些周深从未在电视节目上演唱过的歌曲，本次都将依他的心愿出现在巡演的歌曲列表中，不到LIVE现场，或许你无法猜测到周深将会演唱哪些深藏于你心底回忆中的歌曲，那些或许可以将你拉回到记忆中某个时空节点的心灵BGM。<br/>
                                                    　　一语双关的层面上看，你可以把本次巡演理解为“深·空间”，周深最本真地想邀你进入的那个自我空间；当然你也可以发现，其实本次巡演也是“深空·间”，也即是周深更想邀你跳跃穿梭于不同思想次元空间中，一同去发现更广阔无垠的美好。<br/>
                                                    　　而这些思绪与创意的交汇最终呈现则必将始于LIVE舞台，一起去认识那个我们熟知的周深，一起去认识那个更多可能性的周深。<br/>
                                                    　　现场见。<br/></div>
                                            </dd>
                                        </dl>


                                        <dl class="infoitm">
                                            <dt class="tt"><span class="txt">温馨提示</span></dt>
                                            <dd class="ct">
                                                <div class="table-info">
                                                    <table class="m-table2">
                                                        <tbody>
                                                        <tr>
                                                            <td class="bg">发票说明</td>
                                                            <td>如需发票，请您在演出前通过订单页补开，发票将在演出结束后1个月左右，统一由主办方提供。</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </dd>
                                        </dl>

                                    </div>
                                    <!-- 演出信息 end -->
                                </div>
                                <!-- 1 -->


                                <div class="itm-tab z-show" rel="2">

                                    <!-- 客服答疑 begin -->
                                    <div class="m-faq">
                                        <div class="hd">
                                            <h2 class="tt">客服答疑</h2>
                                            <ul class="m-asknav" qa="menu">
                                                <li class="itm first z-crt"><a class="txt" href="javascript:void(0);"
                                                                               qa="allQA">全部提问</a></li>
                                                <li class="itm"><a class="txt" href="javascript:void(0);"
                                                                   qa="myQA">我的提问</a></li>
                                            </ul>
                                        </div>
                                        <div class="bd">
                                            <!-- 问题编辑器 begin -->
                                            <div class="m-askeditor">
                                                <a href="javascript:;" class="avatar">
                                                    <img onerror='this.src="/concertbuy/picture/user_1.png";' my="head"
                                                         src="//dui.dmcdn.cn/dm_2015/goods//concertbuy/images/user.png"/>
                                                    <span class="name" my="nickname"></span>
                                                </a>
                                                <div class="editor"><textarea name="question" class="placeholder"
                                                                              rows="1"
                                                                              placeholder="请在此留下您的问题，最多只能输入100字"
                                                                              maxlength="100"></textarea></div>
                                                <a href="javascript:void(0);" class="u-btn u-btn-c1 u-btn-submit"
                                                   qa="SendQA">提交问题</a>
                                                <span class="u-btn u-btn-submit u-btn-service xiaonengService">在线客服</span>
                                            </div>
                                            <!-- 问题编辑器 end -->

                                            <!-- 温馨提示 begin -->
                                            <div class="m-asktips">
                                                <i class="ico ico-tips"></i><span class="txt">温馨提示：为了您的个人信息安全，请勿在留言中透露联系方式。对于一些常规的流程和问题您也可以通过<a
                                                    href="//help.damai.cn/" target="_blank">帮助中心</a>寻找答案</span>
                                            </div>
                                            <!-- 温馨提示 end -->

                                            <!-- 问题列表 begin -->
                                            <div class="m-asklst">
                                                <ul class="lst" qa="list" id="QAList"></ul>
                                                <div class="m-page-box" id="QAPager">
                                                    <ul class="m-page-list"></ul>
                                                </div>

                                            </div>
                                            <!-- 问题列表 end -->
                                        </div>
                                        <div class="ft"></div>
                                    </div>
                                    <!-- 客服答疑 end -->

                                </div>

                                <div class="itm-tab" rel="3">
                                    <!-- 购票说明 begin -->
                                    <div class="m-infobase m-buydesc">
                                        <dl class="infoitm">
                                            <dt class="tt"><span class="txt">特别提示</span></dt>
                                            <dd>
                                                <h3 class="stt">售前提示</h3>
                                                <p>1.为避免快递配送不能及时送达，演出距开场时间少于3天时不提供【快递配送】服务，请您谅解！您可以选择电子票或在线支付后上门自取纸质票。
                                                    <a href="//help.damai.cn/damai/contents/277/5966.html"
                                                       target="_blank" title="点击查看上门取票地址">点击查看上门取票地址&gt;&gt;</a></p>
                                            </dd>
                                            <dd>
                                                <p>2.凡演出票类商品，开票时间一般为演出前二到四周，正式开票后会第一时间短信通知您，请注意接收。</p>
                                            </dd>
                                            <dd>
                                                <p>
                                                    3.如您不是通过“选座购买”通道进行的票品购买，最终票品数量视项目主办方及场馆情况而定，正式开票后大麦网将根据用户付款先后顺序依次配票，可能存在票品不足不能为您配票的风险，如最终未能配票，大麦网承诺全额退款，但不承担其他损失。</p>
                                            </dd>
                                            <dd>
                                                <h3 class="stt">支付方式</h3>
                                                <p>网上银行（招商银行等） 支付平台（支付宝等） 转账汇款(招商银行等)　<a
                                                        href="//help.damai.cn/damai/contents/281/5740.html"
                                                        target="_blank" title="查看详情">查看详情&gt;&gt;</a></p>
                                            </dd>
                                            <dd>
                                                <h3 class="stt">退/换货说明</h3>
                                                <p>针对不可抗力和非不可抗力的退/换票情况和处理，请点击查阅<a title="大麦网退换货说明" target="_blank"
                                                                                  href="//help.damai.cn/damai/contents/299/2228.html">大麦网退换货说明&gt;&gt;</a>
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl class="infoitm">
                                            <dt class="tt"><span class="txt">无线端购票</span></dt>
                                            <dd>
                                                <p>1. 使用智能设备用户在各应用商店中搜索"大麦"下载安装客户端，购票体验更流畅</p>
                                                <p>2. 非智能设备用户可浏览器访问m.damai.cn进行演出查询，随时购票</p>
                                            </dd>
                                            <dd class="appdown">
                                                <div class="applnk">
                                                    <a href="//mapi.damai.cn/href.aspx?id=1" target="_blank"
                                                       class="iphone">iphone版</a>
                                                    <a href="//mapi.damai.cn/href.aspx?id=2" target="_blank"
                                                       class="ipad">ipad版</a>
                                                    <a href="//mapi.damai.cn/href.aspx?id=5" target="_blank"
                                                       class="android">android版</a>
                                                </div>
                                            </dd>
                                        </dl>
                                        <dl class="infoitm">
                                            <dt class="tt"><span class="txt">网上订购</span></dt>
                                            <dd><img
                                                    original="//dui.dmcdn.cn/dm_2015/goods//concertbuy/images/process.jpg"
                                                    -src="/concertbuy/picture/process_1.jpg"></dd>
                                        </dl>
                                        <dl class="infoitm">
                                            <dt class="tt"><span class="txt">电话订购</span></dt>
                                            <dd><p>全国统一服务热线：<strong class="hotline">10103721 / 4006103721</strong></p>
                                            </dd>
                                        </dl>
                                        <dl class="infoitm" id="orderOnCompany">
                                            <dt class="tt"><span class="txt">上门订购</span></dt>
                                            <dd>
                                                <p>大麦网武汉分部</p>
                                                <p>办公地址：武汉市江汉区解放大道688号武商广场写字楼2012A（原武汉广场） <a
                                                        href="//map.damai.cn/Traffic/goThere.aspx?endCity=%e6%ad%a6%e6%b1%89&to=1&end_x_y=114.27083194255829,30.581019926706656&end=%e5%a4%a7%e9%ba%a6%e7%bd%91%e6%ad%a6%e6%b1%89%e5%88%86%e9%83%a8"
                                                        class="c7" target="_blank" title="点击查看如何到达">点击查看如何到达</a></p>
                                                <p>营业时间：星期一至星期日:9:00-18:00</p>
                                                <p>支付说明：上门支持现金支付和刷卡支付 <a
                                                        href="//map.damai.cn/traffic/circumjacent.aspx?action=search&cityName=%e6%ad%a6%e6%b1%89&cityId=586&Keyword=%e5%a4%a7%e9%ba%a6%e7%bd%91%e6%ad%a6%e6%b1%89%e5%88%86%e9%83%a8&option=bank&CenterLngLat=114.27083194255829,30.581019926706656"
                                                        target="_blank" title="点击查看周边提款" class="c7">点击查看周边提款</a></p>
                                            </dd>
                                        </dl>
                                    </div>
                                    <!-- 购票说明 end -->
                                </div>
                                <div class="itm-tab" rel="4">
                                    <!-- 付款方式 begin -->
                                    <div class="m-infobase m-paymode" style="display: block;">
                                        <dl class="infoitm">
                                            <dt class="tt"><span class="txt">在线支付</span></dt>
                                            <dd><p>支持多家网上银行、支付平台（支付宝、快钱、银联、微信支付等）在线支付，<a
                                                    href="//help.damai.cn/damai/channels/281.html" target="_blank">查看详情&gt;&gt;</a>
                                            </p></dd>
                                            <dd>
                                                <h3 class="stt">支付平台：</h3>
                                                <ul class="lst">
                                                    <li><img original="//static.dmcdn.cn/PayLogo/2.jpg" alt="支付宝"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/57.jpg" alt="微信扫码支付"
                                                             style="display: inline;"/></li>
                                                </ul>
                                            </dd>
                                            <dd>
                                                <h3 class="stt">网上银行：</h3>
                                                <ul class="lst">
                                                    <li><img original="//static.dmcdn.cn/PayLogo/10.jpg" alt="招商银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/11.jpg" alt="中国建设银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/12.jpg" alt="中国工商银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/13.jpg" alt="交通银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/14.jpg" alt="中国农业银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/15.jpg" alt="广东发展银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/17.jpg" alt="中国银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/18.jpg" alt="中国光大银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/20.jpg" alt="中国民生银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/21.jpg" alt="中信银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/23.jpg" alt="上海浦东发展银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/24.jpg" alt="兴业银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/25.jpg" alt="杭州银行"
                                                             style="display: inline;"/></li>
                                                    <li><img original="//static.dmcdn.cn/PayLogo/27.jpg" alt="中国平安银行"
                                                             style="display: inline;"/></li>
                                                </ul>
                                            </dd>
                                        </dl>
                                        <dl class="infoitm">
                                            <dt class="tt"><span class="txt">柜台付款</span></dt>
                                            <dd><p>您也可以选择就近的公司网点，到柜台直接付款购买，<a
                                                    href="//help.damai.cn/damai/channels/284.html" target="_blank">查看分公司上门地址&gt;&gt;</a>
                                            </p></dd>
                                        </dl>
                                        <dl class="infoitm">
                                            <dt class="tt"><span class="txt">电子钱包</span></dt>
                                            <dd><p>电子钱包是由大麦网自主研发的第三方支付平台，为每一个用户在购票过程中提供"简单、安全、快速"的在线支付解决方案；<a
                                                    href="//sale.damai.cn/2017dzqb/index.html" target="_blank">查看详情&gt;&gt;</a>
                                            </p></dd>
                                        </dl>
                                    </div>
                                    <!-- 付款方式 end -->
                                </div>

                                <div class="itm-tab" rel="5">
                                    <!-- 先付先抢 begin -->
                                    <div class="m-infobase m-payrob">
                                        <div class="infoitm">
                                            <dt class="tt"><span class="txt">详情介绍</span></dt>
                                            <dd>
                                                <p>
                                                    1.“先付先抢”是大麦网为广大用户推出的一项全新“特权”服务。凡是标有“先付先抢”活动图标的项目，只要在预售阶段付款成功，都将在正式开票前的2-24小时，获得优先于其他用户自主选座的权利。</p>
                                                <p>
                                                    2.付款成功后，您将在付款成功页面得到一个系统分配的排号，您也可以登录订单详情页面查看该号码。排号是完全按照付款成功的先后顺序分配，不区分票价。抢座开始前，会发送短信告知抢座时间，并对所有的排号进行分组，排号越靠前，被分入提前选座分组的机会越大，最大程度确保先付款用户的利益，所以，不要犹豫哦，马上占领先机！</p>
                                                <p>3.大麦网提供所有可售座位进行抢座，由用户自行选择；相对于传统预售配票，更加透明化，保证公平、公正、公开！</p>
                                                <p>4.如果因为时间关系或其他原因，未能及时参与抢座，您也无需担心。抢座结束后，大麦网工作人员会按照付款先后顺序依次挑选座位进行配票。</p>
                                                <p><a href="//help.damai.cn/damai/contents/292/5706.html"
                                                      target="_blank"><img
                                                        original="//dui.dmcdn.cn/damai_v2/goods/img/grab-pic02.jpg"
                                                        alt=""></a></p>
                                            </dd>
                                        </div>
                                        <div class="infoitm">
                                            <dt class="tt"><span class="txt">无线端先付先抢详情</span></dt>
                                            <dd>
                                                <p>为方便用户随时随地抢票，大麦客户端同样支持先付先抢功能，且比网站更快更流畅的购买成功。</p>
                                                <p>请您按照如下提示下载大麦客户端：</p>
                                                <ul class="tab-ul-txt">
                                                    <li>iPhone、iPad、Android、Windows Phone等智能设备用户可在各应用市场（如App
                                                        Store、安卓市场等）搜索"大麦"进行下载安装
                                                    </li>
                                                    <li>无法安装客户端的用户可浏览器访问m.damai.cn进行购票。</li>
                                                </ul>
                                            </dd>
                                        </div>
                                        <div class="infoitm">
                                            <dt class="tt"><span class="txt">温馨提示</span></dt>
                                            <dd>
                                                <p>
                                                    1.现金支付、转账汇款、第三方渠道购买和上门付款的订单不支持本次抢座活动，付款成功后您将获得系统分配的排号，请您留意支付成功页面，或登录网站“订单管理-订单详情”查看排号；</p>
                                                <p>2.正式抢座从可以入场开始，直到抢座结束，期间任何时候都能进行抢座；</p>
                                                <p>3.部分手机或软件存在短信屏蔽功能，可能导致您收不到大麦网发送的短信提醒。</p>
                                                <div class="tab-grab-map-tis clear">
                                                    <a target="_blank" href="//mobile.damai.cn/" class="mtn fl"><img
                                                            style="display:inline;"
                                                            original="//dui.dmcdn.cn/damai_v2/goods/img/grab-pic03.png"></a>
                                                    <a target="_blank"
                                                       href="//news.damai.cn/trends/a/20120528/1365.shtml"
                                                       class="fr"><img style="display: inline;"
                                                                       original="//dui.dmcdn.cn/damai_v2/goods/img/grab-pic04.png"></a>
                                                </div>
                                            </dd>
                                        </div>
                                    </div>
                                    <!-- 先付先抢 end -->
                                </div>

                            </div>
                        </div>
                        <!-- 项目详情选项卡 end -->
                    </div>
                    <!-- 项目详情 end -->
                </div>
                <div class="sd">
                    <div class="subitem">
                        <ul>
                            <li class="s-ion1">
                                <a href="//mobile.damai.cn/" target="_blank">
                                    <p class="s-t1">大麦客户端</p>
                                    <p class="s-t2">抢票神器！随时随地尊享优惠</p>
                                    <span class="s-ewm" style="display: none;"><img
                                            src="/concertbuy/picture/kehuduan_1.png"><strong class="f14">比PC更迅猛</strong><br><strong>提前开抢</strong></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- 热门推荐 begin -->
                    <div class="m-sdbox2-first" id="hotProjects"></div>
                    <!-- 热门推荐 end-->

                    <!-- 抢票速度榜 begin -->
                    <!-- 抢票速度榜 end -->

                    <!-- 浏览历史 begin -->
                    <div class="m-sdbox2 m-sdbox2-first m-history" id="lishiurl" style="display:none;">
                        <div class="hd">
                            <h2 class="tt">浏览历史</h2>
                        </div>
                        <div class="bd">
                            <ul class='m-sdlst'></ul>
                        </div>
                    </div>
                    <!-- 浏览历史 end -->

                    <!-- 明星团体 begin -->
                    <div class="m-sdbox2  m-stargroup" id="mingxingtuanti">
                        <div class="hd">
                            <h2 class="tt">明星团体</h2>
                        </div>
                        <div class="bd">
                            <div class="row">
                                <div class="avatar">
                                    <a href="//www.damai.cn/artistmusic_71964.html" target="_blank">
                                        <img original="//static.dmcdn.cn/Artist/Artist/2018/3/26/18/10/95e2f7ef-686f-44ec-b98a-45d2147a8ec0.jpg"
                                             width="99" height="99" alt="周深"
                                             onerror="this.src='/concertbuy/picture/http_imgload_1.aspx';"/>
                                    </a>
                                </div>

                                <h4 class="name"><a href="//www.damai.cn/artistmusic_71964.html" target="_blank">周深</a>
                                </h4>
                                <p class="desc"></p>

                                <ul class="lnks">
                                    <li><a href="//www.damai.cn/artistmusic_71964.html"
                                           target="_blank">歌曲试听(0)</a><em>|</em><a
                                            href="//www.damai.cn/artistPic_71964.html" target="_blank">精彩照片(0)</a></li>
                                    <li><a href="//www.damai.cn/artistnews_71964.html"
                                           target="_blank">媒体新闻(0)</a><em>|</em><a
                                            href="//www.damai.cn/artistshow_71964.html" target="_blank">历史演出(1)</a></li>
                                </ul>
                                <a href="//dingyue.damai.cn/subType.do?typeId=2&subscribeObjectId=71964&subscribeObjectName=%e5%91%a8%e6%b7%b1&platformId=3"
                                   target="_blank" class="u-btn u-btn-rss">立即订阅</a>
                            </div>
                        </div>
                    </div>
                    <!-- 明星团体 end -->


                    <!-- 大麦微博 begin -->
                    <div class="m-sdbox2  m-weibo">
                        <div class="hd">
                            <h2 class="tt">大麦微博</h2>
                        </div>
                        <div class="bd">
                            <div class="player" id="weibo_con_"></div>
                        </div>
                    </div>
                    <!-- 大麦微博 end -->

                </div>
            </div>
            <!-- 终极页项目详情 end -->
        </div>

    </div>
</div>
<div class="g-ft">
    <div class="m-ft1">
        <div class="bd">
            <!-- 底部帮助 begin -->
            <div class="m-helper">
                <dl class="lst  lst-order">
                    <dt>订购方式</dt>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/269.html">在线订购</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/270.html">电话订购</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/271.html">上门订购</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/272.html">大客户团体订购</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/contents/295/5717.html">大麦超级票订购</a>
                    </dd>
                </dl>
                <dl class="lst  lst-dist">
                    <dt>配送方式</dt>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/275.html">送货上门</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/276.html">电子票</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/277.html">上门自取</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/1916.html">大麦自助机换票</a>
                    </dd>
                </dl>
                <dl class="lst  lst-pay">
                    <dt>支付方式</dt>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/281.html">在线支付</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/284.html">柜台付款</a>
                    </dd>
                </dl>
                <dl class="lst lst-weixin">
                    <dt style="margin-left:-2px;">大麦网微信</dt>
                    <dd>
                        <a class="qrcode"></a>
                    </dd>
                </dl>
                <dl class="lst lst-touch">
                    <dt style="margin-left:-8px;">大麦网触屏版</dt>
                    <dd><a class="qrcode"></a></dd>
                </dl>
                <dl class="lst  lst-safe ">
                    <dt>账户安全</dt>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/287.html">找回密码</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/288.html">账户注册</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/289.html">账户绑定</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="//help.damai.cn/damai/channels/290.html">SSL安全证书</a>
                    </dd>
                </dl>
                <dl class="lst  lst-service ">
                    <dt>售后服务</dt>
                    <dd><a target="_blank" href="//help.damai.cn/damai/channels/299.html">退换及缺货说明</a></dd>
                    <dd><a target="_blank" href="//help.damai.cn/damai/channels/300.html">发票帮助</a></dd>
                    <dd><a href="//help.damai.cn/damai/contents/1870/5676.html" target="_blank">订票服务条款</a></dd>
                </dl>
                <dl class="lst lst-feature">
                    <dt>特色服务</dt>
                    <dd>
                        <a href="//venue.damai.cn/" target="_blank">场馆库</a>
                    </dd>
                    <dd>
                        <a href="//dingyue.damai.cn/subType.do?platformId=1" target="_blank">演出订阅</a>
                    </dd>
                </dl>
            </div>
            <!-- 底部帮助 end -->

            <!-- 底部链接 begin -->
            <div class="m-lnks">
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
            <!-- 底部链接 end -->
        </div>
    </div>
    <div class="m-ft2">
        <div class="bd">
            <!-- 版权信息 begin -->
            <div class="m-cprt">
                <p>
                    <a href="http://www.miitbeian.gov.cn" target="_blank">京ICP证031057号</a><span>|</span>
                    <a href="http://www.miitbeian.gov.cn" target="_blank">京ICP备11043884号</a><span>|</span>
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102000430"
                       target="_blank">
                        <img src="/concertbuy/picture/police_1.png" class="vm"/>京公网安备11010102000430号
                    </a>
                    <a href="//dui.dmcdn.cn/dm_2014/common/img/logo/gbdsjm.jpg" target="_blank">广播电视节目制作经营许可证
                        (京)字第02253号</a>
                    <br>
                    <a href="//dui.dmcdn.cn/dm_2014/common/img/logo/wlwhjy.jpg?v2016" target="_blank">网络文化经营许可证
                        京网文[2016]3438-413号</a><span>|</span>
                    <a href="//dui.dmcdn.cn/dm_2014/common/img/logo/yyxyc.jpg" target="_blank">营业性演出许可证 京市演587号</a>
                </p>
                <p>北京红马传媒文化发展有限公司 版权所有 大麦网 Copyright 2003-2018 All Rights Reserved</p>
                <p>
                    <a rel="nofollow" title="中国票务在线" target="_blank" href="//www.damai.cn/"><img class="mr10" alt=""
                                                                                                 original="//dui.dmcdn.cn/dm_2014/common/img/logo/piao.png"></a>
                    <a href="//dui.dmcdn.cn/dm_2014/common/img/logo/dzyyzz.jpg" target="_blank" title="电子营业执照"
                       rel="nofollow"><img original="/concertbuy/picture/dzyy_1.png" alt="" class="mr10"
                                           src="//dui.dmcdn.cn/dm_2014/common/img/logo/dzyy.png"
                                           style="display: inline;"></a>
          		  <span id="siteseal">
		   <script async="" type="text/javascript">
               function verifySeal() {
                   var bgHeight = "null";
                   var bgWidth = "593";
                   var url = "https:\/\/seal.godaddy.com\/verifySeal?sealID=LU6rXPgk5BZ67ZEYpYS2JcN3AyCJOs6aD3HBo4dwA3iGeqp6csKFmqgB0zLL";
                   window.open(url, 'SealVerfication', 'menubar=no,toolbar=no,personalbar=no,location=yes,status=no,resizable=yes,fullscreen=no,scrollbars=no,width=' + bgWidth + ',height=' + bgHeight);
               }
           </script>
<img style="cursor:pointer;cursor:hand" src="/concertbuy/picture/siteseal_gd_3_h_l_m_1.gif" onclick="verifySeal();"
     alt="SSL site seal - click to verify">		  </span>
                    <a rel="nofollow" target="_blank" href="https://www.pcisecuritystandards.org/"><img
                            original="//dui.dmcdn.cn/dm_2014/common/img/logo/pci.png" class="mr10"></a>
                    <a rel="nofollow" target="_blank"
                       href="http://www.itrust.org.cn/home/index/itrust_certifi/wm/1756737221"><img
                            original="//dui.dmcdn.cn/dm_2014/common/img/logo/xin.png" class="mr10"></a>
                    <a target="_blank" href="https://search.szfw.org/cert/l/CX20130327002367002885"
                       id="___szfw_logo___"><img original="//www.damai.cn//concertbuy/images/chengxin.png"></a>
                </p>
            </div>
            <!-- 版权信息 end -->
        </div>
    </div>
</div>

<!-- 蒙版 begin -->
<div class="m-mask z-hide"></div>
<!-- 蒙版 end -->

<!-- 订阅弹层 begin -->
<div class="m-layer m-layer-rss z-hide" id="dylayer">
    <div class="hd">
        <h2 class="tt">订阅Ta的演出行程</h2>
        <a href="javascript:;" class="u-btn u-btn-close"><span class="ico"></span></a>
    </div>
    <div class="bd">
        <div class="new-mark"></div>
        <div class="new-loading"><img src="/concertbuy/picture/imgload_1.gif"></div>
        <!-- 订阅模块 begin -->
        <div class="m-rss">
            <div class="mn">
                <!-- 订阅表单 begin -->
                <div class="m-rssfm">
                    <div class="desc">
                        <p>点击“提交订阅”订阅Ta的演出行程,有新的演出<br/>上架会通知你噢！</p>
                    </div>
                    <div class="mode">
                        <h4 class="tt" style="text-align:center;">您可以选择以下方式接收订阅信息</h4>
                        <ul class="lst">
                            <li class="itm">
                                <div class="itm-hd">
                                    <input class="chk" type="checkbox" checked="checked" name="receive_mode"
                                           id="mode_client" autocomplete="off"/><label class="lab">客户端</label><a
                                        href="//mobile.damai.cn/" target="_blank">点击或者扫描下载大麦客户端</a>
                                </div>
                            </li>
                            <li class="itm">
                                <div class="itm-hd">
                                    <input class="chk" type="checkbox" name="receive_mode" id="mode_sms"
                                           autocomplete="off"/><label class="lab">短　信</label><span
                                        class="txt txt-2"><span id="dyphonenum"></span></span><span
                                        id="phoneoperate"></span>
                                </div>
                                <div class="itm-bd" style="display:none" id="phonechange">
                                    <div class="modify modify-crt">
                                        <div class="fmitm fmitm-ico"></div>
                                        <div class="fmitm">
                                            <label class="lab">手机号码：</label>
                                            <div class="ipt">
                                                <input type="text" id="changephonenum" class="u-ipt u-ipt-md"
                                                       autocomplete="off"/>
                                                <a href="javascript:;" class="u-btn u-btn-auth"
                                                   id="getcode_btnl">获取验证码</a>
                                                <div class="tips z-hide">短信已发送，验证有效期为3分钟</div>
                                            </div>
                                        </div>
                                        <div class="fmitm">
                                            <label class="lab">验证码：</label>
                                            <div class="ipt">
                                                <input type="text" id="verifyCode" class="u-ipt u-ipt-sm"
                                                       autocomplete="off"/>
                                            </div>
                                        </div>
                                        <div class="fmitm fmitm-1"><a href="javascript:setphoneChannel();"
                                                                      class="u-btn">确定</a></div>
                                    </div>
                                </div>
                            </li>
                            <li class="itm">
                                <div class="itm-hd">
                                    <input class="chk" type="checkbox" name="receive_mode" id="mode_email"
                                           autocomplete="off"/><label class="lab">邮　件</label><span
                                        class="txt txt-2"><span id="dyMail"></span></span><span id="mailoperate"></span>
                                </div>
                                <div class="itm-bd" style="display:none" id="mailchange">
                                    <div class="modify modify-crt">
                                        <div class="fmitm fmitm-ico"></div>
                                        <div class="fmitm">
                                            <label class="lab">邮箱地址：</label>
                                            <div class="ipt">
                                                <input type="text" id="changemailnum" class="u-ipt u-ipt-md"/>
                                                <a href="javascript:;" class="u-btn u-btn-auth"
                                                   id="getmail_btn">获取验证码</a>
                                                <div class="tips">邮箱已发送，验证有效期为5分钟</div>
                                            </div>
                                        </div>
                                        <div class="fmitm">
                                            <label class="lab">验证码：</label>
                                            <div class="ipt">
                                                <input type="text" id="mailverifyCode" class="u-ipt u-ipt-sm"/>
                                            </div>
                                        </div>
                                        <div class="fmitm fmitm-1"><a href="javascript:setmailChannel();" class="u-btn">确定</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ops">
                        <a href="javascript:;" id="dysbmit" class="u-btn -u-btn-dis">提交订阅</a>
                        <a href="javascript:;" id="dycancel" class="u-btn u-btn-c3">取消</a>
                    </div>
                </div>
                <!-- 订阅表单 end -->
            </div>
        </div>
        <!-- 订阅模块 end -->
    </div>
</div>
<!-- 订阅弹层 end -->

<!-- 缺货登记弹层 begin -->
<div class="m-layer m-layer-oos z-hide -m-hu" id="layerQuehuodengji">
    <form>
        <div class="hd">
            <h2 class="tt">缺货登记</h2>
            <a href="javascript:;" class="u-btn u-btn-close"><span class="ico"></span></a>
        </div>
        <div class="bd">
            <!-- 缺货登记模块 begin -->
            <div class="m-oos">
                <div class="desc">
                    <p>此价格票品暂时缺货，您可以进行缺货登记。</p>
                    <p>为了方便有票时能够按照登记顺序通知您，我们将记录您的相关信息；若始终缺货，将不做另行通知。</p>
                </div>
                <ul class="fm">
                    <li class="fmitm">
                        <label class="lab">数&nbsp;&nbsp;&nbsp;&nbsp;量：</label>
                        <div class="ipt">
                            <!-- <div class="u-sel"> -->
                            <div class="u-sel" data-context=".fmitm">
                                <div class="hd">
                                    <span class="txt">1</span>
                                    <span class="btnsel"></span>
                                </div>
                                <div class="menu">
                                    <ul class="lst j_count">
                                        <li><a class="itm z-crt" href="javascript:;">1</a></li>
                                        <script type="text/javascript">
                                            for (var i = 2; i <= 20; i++) {
                                                document.write('<li><a class="itm" href="javascript:;">' + i + '</a></li>');
                                            }
                                        </script>
                                    </ul>
                                    <input type="hidden" name="count" value="1"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="fmitm">
                        <label class="lab">手机号码：</label>
                        <div class="ipt">
                            <input type="text" name="mobilePhone" class="u-ipt u-ipt-sm" value=""/>
                            <span class="c1">*</span>
                        </div>
                    </li>
                    <li class="fmitm">
                        <label class="lab">留&nbsp;&nbsp;&nbsp;&nbsp;言：</label>
                        <div class="ipt">
                            <textarea class="u-ipt u-ipt-lg" name="notes"></textarea>
                        </div>
                    </li>
                    <li class="fmitm fmitm-1">
                        <div class="ipt"><a href="javascript:;" class="u-btn" id="btnQuehuodengji">提交</a></div>
                    </li>
                </ul>
            </div>
            <!-- 缺货登记模块 end -->
        </div>
        <input type="hidden" name="performId" value=""/>
        <input type="hidden" name="performName" value=""/>
        <input type="hidden" name="performTime" value=""/>
        <input type="hidden" name="priceId" value=""/>
        <input type="hidden" name="price" value=""/>
        <input type="hidden" name="pricename" value=""/>
        <input type="hidden" name="enStr" value=""/>
    </form>
</div>
<!-- 缺货登记弹层 end -->

<!-- 手机客户端下载弹层 begin -->
<div class="m-layer m-layer-appdown z-hide" id="appDownLayer">
    <div class="hd">
        <h2 class="tt">手机客户端下载</h2>
        <a href="javascript:;" class="u-btn u-btn-close"><span class="ico"></span></a>
    </div>
    <div class="bd">
        <div class="m-appdown">
            <div class="qrcode">
                <div class="code"></div>
                <p class="txt">手机扫描快速下载</p>
            </div>
            <ul class="lst">
                <li class="itm iphone"><a href="http://itunes.apple.com/cn/app/da-mai/id513829338?mt=8" target="_blank">iPhone版</a>
                </li>
                <li class="itm android"><a href="//mapi.damai.cn/href.aspx?id=11" target="_blank">Android版</a></li>
                <li class="itm ipad"><a href="http://itunes.apple.com/cn/app//id481947980?mt=8"
                                        target="_blank">iPad版</a></li>
            </ul>
        </div>
    </div>
</div>
<!-- 手机客户端下载弹层 end -->

<!-- 开售提醒弹层 begin -->
<div class="m-layer m-layer-remind z-hide" id="layerRemind">
    <div class="hd">
        <h2 class="tt">提示</h2>
        <a href="javascript:;" class="u-btn u-btn-close"><span class="ico"></span></a>
    </div>
    <div class="bd">
        <!-- 开售提醒模块 begin -->
        <div class="m-remind">
            <p class="tips"><i class="ico ico-succ"></i><span class="txt">成功设置项目开售提醒！</span></p>
            <p class="desc">我们将在项目开售前以短信的方式通知您</p>
            <div class="star">
                <div class="thumb"><img
                        original='//static.dmcdn.cn/Artist/Artist/2018/3/26/18/10/95e2f7ef-686f-44ec-b98a-45d2147a8ec0.jpg'
                        alt="周深"/></div>
                <div class="name">周深</div>
            </div>
            <div class="ops">
                <a href="javascript:;" class="u-btn u-btn-rss u-btn-rss-c1" id="dy2" data-artistId='71964'
                   data-artistName='周深'><i class="ico"></i><span class="txt">立即订阅接收Ta的动态消息</span></a>
            </div>
            <!-- 开售提醒模块 end -->
        </div>
    </div>
</div>
<!-- 开售提醒弹层 end -->


<!--您输入的特权码无效，请重试 begin-->
<div class="m-layer m-layer-error z-hide" id="privilege_error">
    <div class="hd">
        <a href="javascript:;" class="u-btn u-btn-close"><span class="ico"></span></a>
    </div>
    <div class="bd">
        <div class="m-error">
            <p class="tips"><i class="ico-tips"></i><span class="txt" id="privilegeErrorMsg">您输入的特权码无效，请重试</span></p>
            <div class="ops">
                <a href="javascript:;" class="u-btn j_btnOk">确定</a>
            </div>
        </div>
    </div>
</div>
<!--您输入的特权码无效，请重试 end-->

<!--您的操作过于频繁，请稍后重试 begin-->
<div class="m-layer m-layer-error z-hide" id="privilege_error_307">
    <div class="hd">
        <a href="javascript:;" class="u-btn u-btn-close"><span class="ico"></span></a>
    </div>
    <div class="bd">
        <div class="m-error">
            <p class="tips"><i class="ico-tips"></i><span class="txt">您的操作过于频繁，请稍后重试</span></p>
            <div class="ops">
                <a href="javascript:;" class="u-btn">确定</a>
            </div>
        </div>
    </div>
</div>
<!--您的操作过于频繁，请稍后重试 end-->

<!--本项目需M3、M4 会员等级用户才可购买 begin-->
<div class="m-layer m-layer-error z-hide">
    <div class="hd">
        <a href="javascript:;" class="u-btn u-btn-close"><span class="ico"></span></a>
    </div>
    <div class="bd">
        <div class="m-error">
            <p class="tips"><i class="ico-tips"></i><span class="txt">本项目需M3、M4 <br/>会员等级用户才可购买</span></p>
            <div class="ops">
                <a href="javascript:;" class="u-btn">查看等级</a>
                <a href="javascript:;" class="u-btn u-btn-c2">取消</a>
            </div>
        </div>
    </div>
</div>
<!--本项目需M3、M4 会员等级用户才可购买 end-->

<!--您的账户未完成实名认证 begin-->
<div class="m-layer m-layer-error z-hide">
    <div class="hd">
        <a href="javascript:;" class="u-btn u-btn-close"><span class="ico"></span></a>
    </div>
    <div class="bd">
        <div class="m-error">
            <p class="tips"><i class="ico-tips"></i><span class="txt">您的账户未完成实名认证</span></p>
            <div class="ops">
                <a href="javascript:;" class="u-btn">去认证</a>
                <a href="javascript:;" class="u-btn u-btn-c2">取消</a>
            </div>
        </div>
    </div>
</div>
<!--您的账户未完成实名认证 end-->

<!--请输入特权码 begin-->
<div class="m-layer m-layer-code z-hide" id="privilege_error_404">
    <div class="bd">
        <div class="m-error">
            <p class="tips"><i class="ico-tips"></i><span class="txt">请输入用户特权码</span></p>
            <div class="ops">
                <a href="javascript:;" class="u-btn">确定</a>
            </div>
        </div>
    </div>
</div>
<!--请输入特权码 end-->

<div class="m-layer z-hide" id="layerWeiShare">
    <div class="hd">
        <h2 class="tt" style="font-size:12px;">分享到微信朋友圈</h2>
        <a href="javascript:;" class="u-btn u-btn-close"><span class="ico"></span></a>
    </div>
    <div class="bd">
        <div class="m-viewseat" style="background:#fff url(/concertbuy/images/loading_1.gif) no-repeat center center;">
            <div class="seat" style="padding:20px 60px;width:220px; height: 220px;"><img
                    lazy-src="/concertbuy/picture/showbarcode.aspx" alt=""
                    style="width:220px; height: 220px; display:none;"/></div>
        </div>
    </div>
    <div style="background:#fff;border-top:1px solid #e6e6e6; padding:8px 0px 8px 20px">
        <p>打开微信，点击底部的“发现”，使用 “扫一扫”<br/>即可将网页分享到我的朋友圈。</p>
    </div>
</div>


<!-- 选择商品弹层 begin -->
<div class="m-layer m-layer-choosegoods z-hide" id="chooseGoodsLayer">
    <div class="hd">
        <h2 class="tt">请选择您要的商品信息</h2>
        <a href="javascript:;" class="u-btn u-btn-close"><span class="ico"></span></a>
    </div>
    <div class="bd">
        <div class="m-choosegoods j_goodsDetails">
            <!-- 选择日期模块 begin -->
            <div class="m-choose m-choose-date " data-row="2" data-col="4">
                <h3 class="tt">选择时间：</h3>
                <div class="ct">
                    <ul class="lst"></ul>
                </div>
            </div>
            <!-- 选择日期模块 end -->

            <!-- 选择票价模块 begin -->
            <div class="m-choose m-choose-price" data-row="3" data-col="4">
                <h3 class="tt">选择票价：</h3>
                <div class="ct">
                    <ul class="lst"></ul>
                    <div class="tips tips-oos"><span class="ico"></span><span class="txt">暂时无货，登录试试运气~</span></div>
                </div>
            </div>
            <!-- 选择票价模块 end -->

            <!-- 购物车模块 begin -->
            <div class="m-cart">
                <h3 class="tt" style="display:none;">您选择了：</h3>
                <div class="ct" style="display:none;">
                    <ul class="lst"></ul>
                </div>
                <div class="ops">
                    <a class="u-btn u-btn-c1 u-btn-choose" href="javascript:;" id="btnXuanzuo3" style="display:none;">选座购买</a>
                </div>
            </div>
            <!-- 购物车模块 end -->
        </div>

    </div>
</div>
<!-- 选择商品弹层 end -->

<!-- 固定侧栏 begin -->
<div class="m-sdfix">
    <span class="itm weixin xiaonengService" style="cursor:pointer;">在线<br/>客服</span>

    <a class="itm resch" target="_blank" href="//www.wenjuan.com/s/QV7vm2/">
        <i class="ico"></i>
        <span class="txt">调查问卷</span>
    </a>
    <a class="itm weixin" href="javascript:;" id="siteWeixinQR" style="display:none;">
        <i class="ico"></i>
        <span class="code"><img original="img/qrcode.png" alt="大麦网"/></span>
    </a>
    <a class="itm totop" href="javascript:;" id="gotop">
        <i class="ico"></i>
        <span class="txt">返回顶部</span>
    </a>
</div>
<!-- 固定侧栏 end -->
<script type="text/javascript" src="/concertbuy/js/jquery-1.8.2.min_1.js"></script>
<script type="text/javascript">
    var performCount = 1;
</script>
<iframe id="mapview" name="mapview" scrolling="no" frameborder="no" border="0" style="display:none;"></iframe>
<script type="text/javascript">
    var showCalendar = 0;
</script>
<!-- 日历插件 begin -->
<div class="m-calendar">
    <div class="hd"></div>
    <div class="bd"></div>
</div>
<!-- 日历插件 end -->
<script type="text/javascript">
    var projectDates = {};
    jQuery("#rili").attr("data-value", '2018.05.29');
    projectDates['D20180529'] = true;
    showCalendar = 1;
</script>
<script src="/concertbuy/js/common-min_1.js" type="text/javascript"></script>
<script src="/concertbuy/js/search-min_1.js" type="text/javascript"></script>
<script src="/concertbuy/js/widgetuids-min_1.js" type="text/javascript"></script>
<script src="/concertbuy/js/item-min_1.js" type="text/javascript"></script>
<script src="/concertbuy/js/calendarsettings-min_1.js" type="text/javascript"></script>
<script src="/concertbuy/js/calendar-min_1.js" type="text/javascript"></script>
<script src="/concertbuy/js/qa-min_1.js" type="text/javascript"></script>
<script src="/concertbuy/js/weixin-min_1.js" type="text/javascript"></script>
<script src="/concertbuy/js/json2-min_1.js" type="text/javascript"></script>
<script src="/concertbuy/js/datepicker-min_1.js" type="text/javascript"></script>
<script src="/concertbuy/js/app-min_1.js" type="text/javascript"></script>
<script type="text/javascript" src="/concertbuy/js/announcement_1.js"></script>
<script type="text/javascript">
    var title = $("#Title").val();
    var ShowSpeedList = 0, ShowTotalMoney = 0;
    ShowSpeedList = 0;
    ShowTotalMoney = 0;
    (function () {
        $('#showVenueMap').on('click', function () {
            $('#mapview').on('load', dm_mapview.show).attr("src", jQuery(this).attr("map-src")).show();
            return false;
        });
    })();
</script>
<script type="text/javascript" src="/concertbuy/js/jquery.playalert3_1.js" async="async"></script>
<script type="text/javascript" src="/concertbuy/js/seoflowstatistics_1.js" async="async"></script>
<script type="text/javascript" src="/concertbuy/js/mapview_1.js" async="async"></script>
<script type="text/javascript">
    $(document).on("click", ".xiaonengService", function () {
        window.open("https://online.damai.cn/alime/toalime?from=damai_itemdetail&page=" + encodeURIComponent(location.href));
    });
</script>
<!-- start Dplus -->
<script type="text/javascript">!function (a, b) {
    if (!b.__SV) {
        var c, d, e, f;
        window.dplus = b, b._i = [], b.init = function (a, c, d) {
            function g(a, b) {
                var c = b.split(".");
                2 == c.length && (a = a[c[0]], b = c[1]), a[b] = function () {
                    a.push([b].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }

            var h = b;
            for ("undefined" != typeof d ? h = b[d] = [] : d = "dplus", h.people = h.people || [], h.toString = function (a) {
                var b = "dplus";
                return "dplus" !== d && (b += "." + d), a || (b += " (stub)"), b
            }, h.people.toString = function () {
                return h.toString(1) + ".people (stub)"
            }, e = "disable track track_links track_forms register unregister get_property identify clear set_config get_config get_distinct_id track_pageview register_once track_with_tag time_event people.set people.unset people.delete_user".split(" "), f = 0; f < e.length; f++)g(h, e[f]);
            b._i.push([a, c, d])
        }, b.__SV = 1.1, c = a.createElement("script"), c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.src = "//w.cnzz.com/dplus.php?token=7415364c9dab5n09ff68", d = a.getElementsByTagName("script")[0], d.parentNode.insertBefore(c, d)
    }
}(document, window.dplus || []), dplus.init("7415364c9dab5n09ff68");</script><!-- end Dplus -->
<!-- start Dplus Define -->
<script type="text/javascript">!function (a, b) {
    var c, d;
    window.__dplusDefineCacheQueue = [], b.define = function () {
        window.__dplusDefineCacheQueue.push(Array.prototype.slice.call(arguments))
    }, c = a.createElement("script"), c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.src = "//w.cnzz.com/dplus.define.php", d = a.getElementsByTagName("script")[0], d.parentNode.insertBefore(c, d)
}(document, window.dplus);</script>
<!-- end Dplus Define -->

<script type="text/javascript">
    (function () {
        dplus.define('page', function (page) {
            page.init("7415364c9dab5n09ff68", {
                'page_duration': true, //默认不跟踪页面停留时间
                'clean_url': true //默认是clean url
            });
        });
        dplus.define('page', function (page) {
            page.setType('project');//设置页面类型
            page.setTitle("2018周深“深空间”巡回演唱会武汉站");//设置页面标题,不填默认取document.title，建议填演出名
            page.setCategory(['演唱会', '演唱会']);//该演出对应的三级类目
            page.setTags([]);//该演出的其他TAG
            page.view({
                '$avn': "汉秀剧场",
                '$alr': "周深",
                '$aad': "武汉"
            });
        });
    })();
    $(document)
            .on("click", "#gexhTuijian li a", function () {
                var $this = $(this);
                dplus.track('recclick', {
                    '$tti': 'project',
                    '$tul': location.href,
                    '$tna': '热门推荐',
                    '$tdx': $this.closest("li").index() - 0 + 1,
                    '$pid': $this.attr("data-projectId"),
                    'tag': $this.attr('id'),
                    '$na': $this.attr('title')
                });//
            }).on("click", "#dysbmit:not(.u-btn-dis)", function () {
        jQuery.getJSON("/ajax/GetUserInfo.html", {projectId: projectInfo.ProjectID, t: Math.random()}, function (rsp) {
            abc(rsp.Data.userInfo.code);
        });
        function abc(code) {
            var params = {"$tti": "project", "$pid": projectInfo.ProjectID + "", "$userid": code + ""};
            dplus.track('rssclick', params);
        }
    });
    $(document).ready(function () {
        var cityid = projectInfo.CityID;
        if (cityid != "" && cityid == "2279") {
            cityid = "2148";
        }
        var uid = getwidgetUID(cityid);
        if (location.protocol == "http:" && uid) {
            $("#weibo_con_").html("<iframe width=\"100%\" height=\"550\" class=\"share_self\"  frameborder=\"0\" scrolling=\"no\" src=\"http://service.t.sina.com.cn/widget/WeiboShow.php?width=0&height=550&fansRow=2&ptype=1&speed=0&skin=5&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=" + uid + "\"></iframe>");
            $("div.m-weibo").show();
            var uuid = uid.split('&')[0];
            $("#wbFollowIframe_").attr("src", "http://widget.weibo.com/relationship/followbutton.php?btn=light&style=2&uid={0}&width=136&height=24&language=zh_cn".format(uuid));
        } else if (location.protocol == "https:" && uid) {
            var uuid = uid.split('&')[0];
            $("#wbFollowIframe_").attr("src", "//www.damai.cn/WeiboAgent.aspx?uid={0}".format(uuid));
            $("#weibo_con_").parent().parent().remove();
        } else {
            $("#wbFollowIframe_").parent().remove();
            $("#weibo_con_").parent().parent().remove();
        }
    });
</script>
<script type="text/javascript">
    $(function () {
        $("li.item").focus(function () {
            $(this).item('border-color','#ed0a75');
        }).blur(function(){
            $(this).item('border-color','');
        })
    });
</script>
</body>
</html>

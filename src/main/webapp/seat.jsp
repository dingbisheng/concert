<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%	String basePath = request.getContextPath();%>
<html>
<head>
    <script type="text/javascript" src="<%=basePath%>/concert/js/jquery-1.7.2.min.js"></script>
    <title>Title</title>
</head>
<body>
-------------------------------------------演唱会台方向-------------------------------------------
<c:forEach items="${seatMap.keySet()}" var="key" varStatus="status">
    <div>
    ${key}
        <c:choose>
            <c:when test="${status.count >= 10}">
                --
            </c:when>
            <c:otherwise>
                ---
            </c:otherwise>
        </c:choose>
    <c:forEach items="${seatMap.get(key)}" var="seat">
        <c:choose>
            <c:when test="${seat.seatState==0}">
                <%--有座位--%>
                <img id="${seat.seatRow},${seat.seatCol}" title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   可售" name="<%=basePath %>/concert/picture/${seat.seatImg}" src="<%=basePath %>/concert/picture/${seat.seatImg}" width="20" height="20" onclick="doClickSeat(${seat.seatRow},${seat.seatCol},${seat.seatId})" />
            </c:when>
            <c:when test="${seat.seatState==-2}">
                <%--座位被锁定--%>
                <img title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   不可售" src="<%=basePath %>/concert/picture/l.png" width="20" height="20"/>
            </c:when>
            <c:when test="${seat.seatState==-1}">
                <%--没有座位--%>
                <img title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   不可售" src="<%=basePath %>/concert/picture/n.png" width="20" height="20"/>
            </c:when>
            <c:otherwise>
                <%--座位被购买--%>
                <img title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   不可售" src="<%=basePath %>/concert/picture/m.png" width="20" height="20"/>
            </c:otherwise>
        </c:choose>
    </c:forEach>
    </div>
    
</c:forEach> 

<form id="buy_form" name="buy_form" action="/admin/queryOrder" target="_parent" method="post">
    <input name="msgId" value="${msgId}">
    <input name="username" value="<shiro:principal/>">
    <input name="myseatids" id="myseatids" value="" />
    <input name="notmyseatids" id="notmyseatids" value="" />
    <button value="购买" name="button" type="button" id="button" onclick="doLockSeat('/admin/lock')">购买</button>
</form>

<div class="side">
    <div class="movie-info clearfix">
        <div class="poster">
            <img src="./选座 - 猫眼电影 - 一网打尽好电影_files/8b154402ef3ac5d59e4a89649f4f5190375170.jpg@115w_158h_1e_1c.下载">
        </div>
        <div class="content">
            <p class="name text-ellipsis">21克拉</p>
            <div class="info-item">
                <span>类型 :</span>
                <span class="value">喜剧,爱情</span>
            </div>
            <div class="info-item">
                <span>时长 :</span>
                <span class="value">96分钟</span>
            </div>
        </div>
    </div>

    <div class="show-info">
        <div class="info-item">
            <span>影院 :</span>
            <span class="value text-ellipsis">紫星影城</span>
        </div>
        <div class="info-item">
            <span>影厅 :</span>
            <span class="value text-ellipsis">派拉蒙厅</span>
        </div>
        <div class="info-item">
            <span>版本 :</span>
            <span class="value text-ellipsis">国语2D</span>
        </div>
        <div class="info-item">
            <span>场次 :</span>
            <span class="value text-ellipsis screen">今天 4月20 12:35</span>
        </div>
        <div class="info-item">
            <span>票价 :</span>
            <span class="value text-ellipsis">￥28/张</span>
        </div>
    </div>

    <div class="ticket-info">
        <div class="no-ticket" style="display: block;">
            <p class="buy-limit">座位：一次最多选4个座位</p>
            <p class="no-selected">请<span>点击左侧</span>座位图选择座位</p>
        </div>
        <div class="has-ticket" style="display: none;">
            <span class="text">座位：</span>
            <div class="ticket-container" data-limit="4"></div>
        </div>

        <div class="total-price">
            <span>总价 :</span>
            <span class="price">0</span>
        </div>
    </div>

    <div class="confirm-order">
        <form class="login-form">
            <input type="text" class="input-phone" placeholder="输入手机号">
            <div class="captcha" style="display:none">
                <input type="text" class="input-captcha" placeholder="验证码">
                <img class="captcha-pic" src="./选座 - 猫眼电影 - 一网打尽好电影_files/appcaptcha.下载">
                <span class="change-captcha">看不清楚？换一张</span>
            </div>
            <div class="code-inputer">
                <input type="text" class="input-code" placeholder="填写验证码">
                <span class="send-code disable">获取验证码</span>
            </div>
        </form>

        <div class="confirm-btn disable" data-act="confirm-click" data-bid="b_0a0ep6pp">确认选座</div>
    </div>
</div>
</div>
<div class="modal-container" style="display:none">
    <div class="modal">
        <span class="icon"></span>

        <p class="tip"></p>

        <div class="ok-btn btn">我知道了</div>
    </div>
</div>

</body>
<script>
    function doClickSeat(row,col,seatId) {
        var it = document.getElementById(row+","+col);
        if(it.getAttribute("src",2)==it.name){
            it.src="<%= basePath%>/concert/picture/my.png";
            var ids = document.getElementById("myseatids");
            ids.value=ids.value+row+","+col+","+seatId+";";
        }else{
            it.src=it.name;
            var ids = document.getElementById("notmyseatids");
            ids.value=ids.value+row+","+col+","+seatId+";";
        }
    }


    function doLockSeat(url) {
        $.post(url,
                {
                    msgId:${msgId},
                    myseatids:document.getElementById("myseatids").value,
                    notmyseatids:document.getElementById("notmyseatids").value
                },function(data,status){
                    if(data=="failed"){
                        alert("对不起，未选择座位或座位已经被其他会员锁定或购买，请刷新界面！");
                    }else{
                        $("#buy_form").submit();
                    }
                });
    }
</script>

</html>

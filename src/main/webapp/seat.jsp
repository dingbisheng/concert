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
<input type="hidden" id="seattoken" name="seattoken" value="${seattoken}" />
-------------------------------------------演唱会台方向-------------------------------------------
<c:forEach items="${seatMap.keySet()}" var="key" varStatus="status">
    <div>

        <div id="seat_area">
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
                        <img id="${seat.seatRow},${seat.seatCol}" title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   可售"
                             name="<%=basePath %>/concert/picture/${seat.seatImg}" src="<%=basePath %>/concert/picture/${seat.seatImg}" width="40" height="40"
                             onclick="doClickSeat(${seat.seatRow},${seat.seatCol},${seat.seatId},'/admin/loadseat')"/>
                    </c:when>

                    <c:when test="${seat.seatState==-2}">
                        <%--座位被锁定--%>
                        <img title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   不可售" src="<%=basePath %>/concert/picture/l.png" width="40" height="40"/>
                    </c:when>

                    <c:when test="${seat.seatState==-1}">
                        <%--没有座位--%>
                        <img title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   不可售" src="<%=basePath %>/concert/picture/n.png" width="40" height="40"/>
                    </c:when>

                    <c:otherwise>
                        <%--座位被购买--%>
                        <img title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   不可售" src="<%=basePath %>/concert/picture/m.png" width="40" height="40"/>
                    </c:otherwise>

                </c:choose>
            </c:forEach>
        </div>

        </c:forEach>
    </div>


<form id="buy_form" name="buy_form" action="/admin/queryOrder" target="_parent" method="post">
    <input name="msgId" value="${msgId}" type="hidden" >
    <input name="username" value="<shiro:principal/>" type="hidden" >
    <input name="myseatids" id="myseatids" value="" type="hidden" />
    <input name="notmyseatids" id="notmyseatids" value="" type="hidden" />
    <p>座位:</p>
    <ul id="seats_chose">

    </ul>

    <p>票数：<span id="ticket_num">0</span></p>
    <p>总价：<b>￥<span id="total_price">0</span></b></p>
    <button value="购买" name="button" type="button" id="button" onclick="doLockSeat('/admin/lock')">购买</button>
</form>
    <div id="legend">
    </div>
</body>
<script src="http://www.jq22.com/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="/back/jquery.seat-charts.min.js"></script>
<script>
    function doClickSeat(row,col,seatId,url) {
        var $cart = $('#seats_chose'); //座位区
        //清空显示区内容
        $('#seats_chose li').remove();
        $('#ticket_num').text(0);
        var it = document.getElementById(row+","+col);
        var myseatids = document.getElementById("myseatids");
        var notmyseatids = document.getElementById("notmyseatids");
        if(it.getAttribute("src",2)==it.name){
            it.src="<%= basePath%>/concert/picture/my.png";
            myseatids.value=myseatids.value+row+","+col+","+seatId+";";
        }else{
            it.src=it.name;
            notmyseatids.value=notmyseatids.value+row+","+col+","+seatId+";";
        }
        $.post(url,{
                    msgId:${msgId},
                    myseatids:myseatids.value,
                    notmyseatids:notmyseatids.value
                },function (data,status) {
                    var totalPrice = 0;
                    var resultJson = JSON.parse(data);
                    $.each(resultJson, function(index,value) {
                        $('<li>' + value.seatRow + '排' + value.seatCol +'座        价格：'+value.seatPrice+'元</li>')
                               .appendTo($cart);
                        $('#ticket_num').text(index+1);
                        totalPrice = totalPrice+value.seatPrice;
                    });
                $('#total_price').text(totalPrice);
            });
    }

    function doLockSeat(url) {
        $.post(url,
                {
                    seattoken:document.getElementById("seattoken").value,
                    msgId:${msgId},
                    myseatids:document.getElementById("myseatids").value,
                    notmyseatids:document.getElementById("notmyseatids").value
                },function (data,status){
                    var resultJson = JSON.parse(data);
                    if(resultJson.code==0){
                        alert(0);
                        window.parent.location.href="/login.html";
                    }
                    if(resultJson.code==1){
                        alert(1);
                        alert(resultJson.msg);
                    }
                    if(resultJson.code==2){
                        alert(2);
                        window.parent.location.href="/admin/queryOrder?orderNum="+resultJson.msg;
                    }
                });
    }
</script>

</html>

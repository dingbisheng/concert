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

<form id="buy_form" name="buy_form" action="/admin/buy" target="_parent" method="post">
    <input name="msgId" value="${msgId}">
    <input name="myseatids" id="myseatids" value="" />
    <input name="notmyseatids" id="notmyseatids" value="" />
    <button value="购买" name="button" type="button" id="button" onclick="doLockSeat('/admin/lock')">购买</button>
</form>

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

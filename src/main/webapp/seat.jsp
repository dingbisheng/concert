<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%	String basePath = request.getContextPath();%>
<html>
<head>
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
                <img id="${seat.seatRow},${seat.seatCol}" title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   可售" value="<%=basePath %>/concert/picture/${seat.seatImg}" src="<%=basePath %>/concert/picture/${seat.seatImg}" width="20" height="20" onclick="doClickSeat(${seat.seatRow},${seat.seatCol})" />
            </c:when>
            <c:when test="${seat.seatState==-2}">
                <%--座位被锁定--%>
                <img title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   不可售" src="<%=basePath %>/concert/picture/l.png" width="20" height="20"/>
            </c:when>
            <c:when test="${seat.seatState==-1}">
                <%--没有座位--%>
                <img title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   不可售" src="<%=basePath %>/concert/picture/${seat.seatImg}" width="20" height="20"/>
            </c:when>
            <c:otherwise>
                <%--座位被购买--%>
                <img title="${seat.seatRow}排${seat.seatCol}座  ${seat.seatPrice}元   不可售" src="<%=basePath %>/concert/picture/m.png" width="20" height="20"/>
            </c:otherwise>
        </c:choose>
    </c:forEach>
    </div>
    
</c:forEach> 

<form action="/admin/buy" target="<%= basePath%>/buy.html" method="post">
    <input name="myseatids" id="myseatids" value="" />
    <input name="notmyseatids" id="notmyseatids" value="" />

    <button value="购买" name="submit" type="submit" id="submit">购买</button>
</form>

</body>
<script>
    function doClickSeat(row,col) {
        var it = document.getElementById(row+","+col);
        if(it.getAttribute("src",2)==it.value){
            it.src="<%= basePath%>/concert/picture/my.png";
            var ids = document.getElementById("myseatids");
            ids.value=ids.value+row+","+col+";";
        }else{
            it.src=it.value;
            var ids = document.getElementById("notmyseatids");
            ids.value=ids.value+row+","+col+";";
        }
    }
</script>

</html>

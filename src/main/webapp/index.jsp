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
            <img title="${seat.row}排${seat.col}座" id="${seat.row},${seat.col}" src="<%=basePath %>/concert/picture/${seat.hasSeatImage}" width="20" height="20" onclick="doChangeYN(${seat.row},${seat.col})" />
        </c:forEach>
    </div>

    <br/>
</c:forEach>

<form method="post" target="_self" action="/admin/addfieldsteptwo">

    <input id="noneseatids" name="noneseatids" value="" />
    <input id="notnoneseatids" name="notnoneseatids" value="" />
    <input id="totalrows" name="totalrows" value="${rows}" />
    <input id="totalcols" name="totalcols" value="${cols}" />
    <input id="token" name="token" value="${token}" />
    <button type="submit"  id="submit" value="提交" />

</form>



</body>

<script>
    function doChangeYN(row,col) {
        var it = document.getElementById(row+","+col);
        if(it.getAttribute("src",2)=="<%= basePath%>/concert/picture/y.png"){
            it.src="<%= basePath%>/concert/picture/n.png";
            var ids = document.getElementById("noneseatids");
            ids.value=ids.value+row+","+col+";";
        }else{
            it.src="<%= basePath%>/concert/picture/y.png";
            var ids = document.getElementById("notnoneseatids");
            ids.value=ids.value+row+","+col+";";
        }
    }

</script>
</html>

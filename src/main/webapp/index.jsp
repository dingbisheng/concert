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


<shiro:principal/>  -----
<shiro:hasRole name="超级管理员">
    超管
</shiro:hasRole>

${rows}  //  ${cols}

<br/>
<c:forEach items="${seatMap.keySet()}" var="key" varStatus="status">
    ${key}
    <div>
        <c:forEach items="${seatMap.get(key)}" var="seat">
            <img id="${seat.row},${seat.col}" src="<%=basePath %>/concert/picture/${seat.hasSeatImage}" width="20" height="20" onclick="doChangeYN(${seat.row},${seat.col})" />
        </c:forEach>
    </div>

    <br/>
</c:forEach>



</body>

<script>
    function doChangeYN(row,col) {
        var it = document.getElementById(row+","+col);
        if(it.getAttribute("src",2)=="<%= basePath%>/concert/picture/y.png"){
            it.src="<%= basePath%>/concert/picture/n.png";
        }else{
            it.src="<%= basePath%>/concert/picture/y.png";
        }

    }

</script>
</html>

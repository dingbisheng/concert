<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%	String basePath = request.getContextPath();%>
<html>
<head>
    <script type="text/javascript" src="<%= basePath%>/concert/js/jquery-3.3.1.js"></script>
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

<form method="post" target="_self" action="/admin/addfieldsteptwo">

    <input id="seats" name="seats" value="" />
    <input id="totalrows" name="totalrows" value="${rows}" />
    <input id="totalcols" name="totalcols" value="${cols}" />

    <button type="button"  id="button" value="提交" onclick="doCollect()"/>
</form>



</body>


<script>
    function doCollect() {
        var ids = $("#seats");
        $(img).each(function(index, element) {
            if($(element).src == "<%= basePath%>/concert/picture/y.png"){
                var seatid = $(element).id;
                ids.value=ids.value+seatid+";";
            }
        });
    }
</script>


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

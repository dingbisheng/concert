<%--
  Created by IntelliJ IDEA.
  User: Teori
  Date: 2018/3/26
  Time: 19:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<% String basePath = request.getContextPath();%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>Bootstrap Admin</title>
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.css">

    <script src="lib/jquery-1.11.1.min.js" type="text/javascript"></script>



    <link rel="stylesheet" type="text/css" href="stylesheets/theme.css">
    <link rel="stylesheet" type="text/css" href="stylesheets/premium.css">

</head>
<body class=" theme-blue">

<div class="">
    <div class="header">

        <h1 class="page-title">所有场次</h1>
        <ul class="breadcrumb">
            <li><a href="index.html">主页</a> </li>
            <li class="active">所有场次</li>
        </ul>

    </div>
    <div class="main-content">

        <div class="btn-toolbar list-toolbar">
            <button class="btn btn-primary"><i class="fa fa-plus"></i> 添加场次</button>
            <button class="btn btn-default">Import</button>
            <button class="btn btn-default">Export</button>
            <div class="btn-group">
            </div>
        </div>

    <form action="">
        <table class="table" style="table-layout:fixed" >
            <%--<input type="hidden" value="<shiro:principal/>" name="userName"/>--%>
            <thead>
            <tr>
                <td>ID</td>
                <td>分类</td>
                <td>名称</td>
                <td>图片</td>
                <td>时间</td>
                <td>描述</td>
                <td>城市</td>
                <td>地点</td>
                <td>价格</td>
                <td>编辑</td>
            </tr>
            </thead>
            <c:forEach items="${rondaMessageList}" var="msg">
                <tr>
                    <td>${msg.mesId}</td>
                    <td>${msg.subName}</td>
                    <td style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;" title="${msg.mesName}">${msg.mesName}</td>
                    <td><img src="/concert/img/${msg.mesPhoto}" width="100px"/></td>
                    <td>${msg.mesTime}</td>
                    <td style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;" title="${msg.mesExplain}">${msg.mesExplain}</td>
                    <td>${msg.cityName}</td>
                    <td>${msg.placeName}</td>
                    <td>${msg.price}</td>
                    <td>
                        <input type="button" class="btn btn-default" value="删除"/>
                        <input type="button" class="btn btn-default" value="修改"/>
                      <%--  <shiro:hasPermission name="审批">
                            <input type="button" class="btn btn-default" value="审批" onclick="doApproval(${task["taskId"]},'ap_${task["taskId"]}');"/>
                        </shiro:hasPermission>--%>
                    </td>
                </tr>
            </c:forEach>



        </table>

        <%--分页--%>
        <ul class="pagination">
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">&raquo;</a></li>
        </ul>
    </form>

        <div class="modal small fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h3 id="myModalLabel">Delete Confirmation</h3>
                    </div>
                    <div class="modal-body">
                        <p class="error-text"><i class="fa fa-warning modal-icon"></i>Are you sure you want to delete the user?<br>This cannot be undone.</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cancel</button>
                        <button class="btn btn-danger" data-dismiss="modal">Delete</button>
                    </div>
                </div>
            </div>
        </div>


        <footer>
            <hr>

            <!-- Purchase a site license to remove this link from the footer: http://www.portnine.com/bootstrap-themes -->
            <p class="pull-right">A <a href="http://www.portnine.com/bootstrap-themes" target="_blank">Free Bootstrap Theme</a> by <a href="http://www.portnine.com" target="_blank">Portnine</a></p>
            <p>© 2014 <a href="http://www.portnine.com" target="_blank">Portnine</a></p>
        </footer>

    </div>
</div>


    <script src="lib/bootstrap/js/bootstrap.js"></script>
    <script type="text/javascript">
        $("[rel=tooltip]").tooltip();
        $(function() {
            $('.demo-cancel-click').click(function(){return false;});
        });
    </script>


<%--  <nav aria-label="Page navigation">
        <ul class="pagination">
            <li>
                <c:choose>
                    <c:when test="${page == 0}">
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </c:when>
                    <c:otherwise>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </c:otherwise>
                </c:choose>
            </li>

            <li>
                <c:forEach begin="0" end="${page_num - 1}" step="1" var="i">
                    <c:choose>
                        <c:when test="">
                            <a href="#">1</a>
                        </c:when>
                    </c:choose>
                    <c:otherwise>
                        <a href="#">1</a>
                    </c:otherwise>
                </c:forEach>

            </li>

            <li>
                <c:choose>
                    <c:when test="">
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </c:when>
                    <c:otherwise>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </c:otherwise>
                </c:choose>

            </li>

        </ul>
    </nav>--%>

</div>


<script type="text/javascript">
    function doApproval(taskId,tagId) {
        $.get("/leave/approvePersonnel?taskId="+taskId,function (data) {
            alert("-------" + data);
            if ("success" == data){
                alert("==" +tagId);
                $("#" + tagId).className = "btn-success";
            }
        });
    }
</script>
</body>
</html>

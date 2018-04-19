<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
<h2>Hello World!</h2>

<form action="/payment/pay" method="post">
    请输入要购买的商品：<input type="text" name="msgName"/><br>
    <input type="submit" value="提交"/>
</form>

</body>
</html>

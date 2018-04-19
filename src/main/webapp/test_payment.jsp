<%--
  Created by IntelliJ IDEA.
  User: Teori
  Date: 2018/4/18
  Time: 14:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java"  isELIgnored="false"%>
<html>
<head>
    <title>Title</title>
</head>
<body>
当前时支付页面，订单号是：${oid} <br>请扫码支付
<img src="/payment/image" onclick="abc()">
<span id="neirong">

    </span>
</body>

<script type="text/javascript">
    var websocket = null;

    function abc() {
        //获取到订单号，以此为参数，告诉服务端我是谁
        var username = ${oid}
        alert("====="+username);
        //判断当前浏览器是否支持WebSocket
        if('WebSocket' in  window){
            websocket = new WebSocket("ws://" + document.location.host
            +"/payment/websocket" + username);
        }else{
            alert('当前浏览器Not support websocket');
        }

        //连接发生错误的回调方法
        websocket.onerror = function () {
            setMessageInnerHTML("WebSocket连接发生错误");
        };

        //连接成功建立的回调方法
        websocket.onopen = function () {
            setMessageInnerHTML("WebSocket连接成功");
        };

        //接收消息的回调方法
        websocket.onmessage = function (event) {
            setMessageInnerHTML(event.data);
        };

        //连接关闭的回调方法
        websocket.onclose = function () {
            setMessageInnerHTML("WebSocket连接关闭");
        };

        //监听窗口关闭事件
        //当窗口关闭时，主动关闭websocket连接
        // 防止连接未断开就关闭窗口，server端会抛异常
        window.onbeforeunload = function () {
            closeWebSocket();
        }

        //关闭websocket连接
        function closeWebSocket() {
            if(websocket != null){
                websocket.close();
            }
        }

        /**
         * 直接将受到的数据显示到页面上
         * 此处应该根据实际业务逻辑来决定跳转页面
         * @param data
         */
        function setMessageInnerHTML(data) {
            document.getElementById("neirong").innerHTML = data;
        }
    }
</script>

<script type="text/javascript">
   var repeat =200;//限制执行次数为200次
    var timer = setInterval(function () {
        if (repeat == 0 ){
            clearInterval(timer);
        }else {
            $.ajax({
                url:"",
                type:"post",
                data:{
                    oId:oId
                },
                success:function (result) {
                    if (result == '1'){
                        clearInterval(timer);
                        window.location.href = "";
                    }
                }
            });
            repeat --;
        }
    },3000);//3秒执行一次 总共200次 10分钟

</script>

</html>

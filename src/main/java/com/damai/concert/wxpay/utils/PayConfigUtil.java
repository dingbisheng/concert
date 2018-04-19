package com.damai.concert.wxpay.utils;

/**
 * Created by Teori on 2018/4/18.
 */
public class PayConfigUtil {

    //微信号id
    public static String APP_ID = "wx632c8f211f8122c6";

    //商户id
    public static String MCH_ID = "1497984412";

    //api密钥
    public static String API_KEY = "sbNCm1JnevqI36LrEaxFwcaT0hkGxFnC";

    //统一下单
    public static String UFDOOER_URL = "https://api.mch.weixin.qq.com/pay/unifiedorder";

    //回调URL 支付成功后，微信后台点对点通知支付结果，非重定向，需要一个公网地址
    public static String NOTIFY_URL = "http://47.98.119.198:8080/_wx_pay/result/payResult";

    //支付ip
    public static String CREATE_IP = "114.242.26.51";

}
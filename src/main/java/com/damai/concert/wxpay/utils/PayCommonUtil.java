package com.damai.concert.wxpay.utils;

/**
 * Created by Teori on 2018/4/18.
 */

import org.jdom.JDOMException;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 校验支付相关内容
 * 发起微信支付获取支付二维码的字符串
 */
public class PayCommonUtil {

    /**
     * 是否钱财正确，规则时：按参数a-z排序，遇到空值的参数不参加签名
     * @param characterEncoding
     * @param packageParams
     * @param API_KEY
     * @return
     */
    public static boolean isTenpaySign(String characterEncoding, SortedMap<Object,
            Object> packageParams,String API_KEY){
        StringBuffer sb = new StringBuffer();

        Set es = packageParams.entrySet();
        Iterator it = es.iterator();
        while (it.hasNext()){
            Map.Entry entry = (Map.Entry) it.next();
            String k = (String) entry.getKey();
            String v = (String) entry.getValue();
            if (!"sign".equals(k) && null != v && !"".equals(v)){
                sb.append(k + "=" + v + "&");
            }
        }
        sb.append("key = " + API_KEY);

        //算出摘要
        String mysign = MD5Util.MD5Encode(sb.toString(),characterEncoding.toLowerCase());
        String tenpaySign = ((String)packageParams.get("sign")).toLowerCase();

        return tenpaySign.equals(mysign);
    }

    /**
     * sign 签名
     * @param characterEncoding
     * @param packageParams
     * @param API_KEY
     * @return
     */
    public static String createSign(String characterEncoding,SortedMap<Object,Object> packageParams,String API_KEY){
        StringBuffer sb = new StringBuffer();
        Set es = packageParams.entrySet();
        Iterator it =es.iterator();
        while (it.hasNext()){
            Map.Entry entry =(Map.Entry)it.next();
            String k =(String)entry.getKey();
            String v =(String)entry.getValue();
            if (null != v && !"".equals(v) && !"sign".equals(k) && !"key".equals(k)){
                sb.append(k+"="+v+"&");
            }
        }
        sb.append("key="+API_KEY);
        String sign = MD5Util.MD5Encode(sb.toString(),characterEncoding.toUpperCase());
        return sign;
    }

    /**
     * 将请求参数转换为xml格式的string
     * @param parameters
     * @return
     */
    public static String getRequestXml(SortedMap<Object,Object> parameters){
        StringBuffer sb = new StringBuffer();
        sb.append("<xml>");
        Set es = parameters.entrySet();
        Iterator it = es.iterator();
        while (it.hasNext()){
            Map.Entry entry = (Map.Entry) it.next();
            String k = (String) entry.getKey();
            String v = (String) entry.getValue();
            if ("attach".equalsIgnoreCase(k) || "body".equalsIgnoreCase(k) ||
                    "sign".equalsIgnoreCase(k)){
                sb.append("<" + k +">" + "<![CDATA[" + v + "]]></" + k + ">");
            }else {
                sb.append("<" + k + ">" + v + "</" + k + ">");
            }
        }

        sb.append("</xml>");
        return sb.toString();
    }

    /**
     * 取出以一个指定长度大小的随机正整数
     * @param length 设置所取出随机数的长度。length小于11
     * @return 返回生成的随机数
     */
    public static int buildRandom(int length){
        int num = -1;
        double random = Math.random();
        if (random < 0.1){
            random = random + 0.1;
        }
        for (int i = 0; i < length; i++) {
            num = num * 10;
        }
        return (int) (random * num);
    }

    /**
     * 获取当前书剑
     * @return
     */
    public static String getCurrTime(){
        Date now = new Date();
        SimpleDateFormat outFormat = new SimpleDateFormat("yyyyMMddHHmmss");
        String s = outFormat.format(now);
        return s;
    }

    /**
     * 统一下单，获取二维码字符串
     * @param order_price 价格
     * @param body 商品描述
     * @param out_trade_no 订单号
     * @return
     */
    public static String weixin_pay(String order_price,String body,String out_trade_no) throws JDOMException, IOException {
        //账号信息
        String appid = PayConfigUtil.APP_ID;
        String mch_id = PayConfigUtil.MCH_ID;
        String key = PayConfigUtil.API_KEY;
        System.out.println("======"+key);

        String currTime= PayCommonUtil.getCurrTime();
        String strTime = currTime.substring(8,currTime.length());
        String strRandom = PayCommonUtil.buildRandom(4) + "";
        String nonce_str = strTime + strRandom;

        //获取发起电脑的ip
        String spbill_create_ip = PayConfigUtil.CREATE_IP;

        //回调接口
        String notify_url = PayConfigUtil.NOTIFY_URL;
        String trade_type = "NATIVE";

        SortedMap<Object,Object> packageParams = new TreeMap<Object,Object>();
        packageParams.put("appid",appid);
        packageParams.put("mch_id",mch_id);
        packageParams.put("nonce_str",nonce_str);
        packageParams.put("body",body);
        packageParams.put("out_trade_no",out_trade_no);
        packageParams.put("total_fee",order_price);
        packageParams.put("spbill_create_ip",spbill_create_ip);
        packageParams.put("notify_url",notify_url);
        packageParams.put("trade_type",trade_type);

        String sign = PayCommonUtil.createSign("UTF-8",packageParams,key);
        System.out.println("====="+sign);
        packageParams.put("sign",sign);

        String requestXml = PayCommonUtil.getRequestXml(packageParams);
        System.out.println(requestXml);

        String resXml = HttpUtil.postData(PayConfigUtil.UFDOOER_URL, requestXml);

        System.out.println(resXml);

        Map map = XMLUtil.doXMLParse(resXml);
        String urlCode = (String) map.get("code_url");
        return urlCode;
    }
}
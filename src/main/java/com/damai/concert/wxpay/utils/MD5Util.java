package com.damai.concert.wxpay.utils;

/**
 * Created by Teori on 2018/4/18.
 */

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * 生成微信需要的校验数据
 */
public class MD5Util {

    private static final String hexDigits[] ={"0","1","2","3","4","5","6","7","8","9",
            "a","b", "c","d","e","f"};

    /**
     * 编码，将字节数组转换为可识别字符串
     * @param b
     * @return
     */
    public static  String byteArrayToHexString(byte b[]){
        StringBuffer resultSb = new StringBuffer();
        for (int i = 0; i < b.length ; i++) {
            resultSb.append(byteToHexString(b[i]));
        }
        return resultSb.toString();
    }

    /**
     * 将自己转换成可识别字符串
     * @param b
     * @return
     */
    public static String byteToHexString(byte b) {
        int n = b;
        if (n < 0){
            n += 256;
        }

        int d1 = n / 16;
        int d2 = n % 16;
        return hexDigits[d1] + hexDigits[d2];
    }

    /**
     * 获取指定内容的MD5值
     * @param origin 被转换的内容
     * @param charsetname 字符集
     * @return
     */
    public static String MD5Encode(String origin,String charsetname){
        String resultString = null;

        try {
            resultString = new String(origin);
            MessageDigest md = MessageDigest.getInstance("MD5");
            if (charsetname == null || "".equals(charsetname)){
                resultString = byteArrayToHexString(md.digest(resultString.getBytes()));
            }else {
                resultString = byteArrayToHexString(md.digest(resultString.getBytes(charsetname)));
            }

        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return resultString;
    }

    public static String UrlEncode(String src) throws UnsupportedEncodingException {
        return URLEncoder.encode(src,"UTF-8").replace("+","%20");
    }

}
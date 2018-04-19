package com.damai.concert.wxpay.utils;

/**
 * Created by Teori on 2018/4/18.
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.net.URLConnection;

/**
 * 用于发起网络请求
 */
public class HttpUtil {

    private final static int CONNECT_TIMEOUT = 5000;

    private final static String DEFAULT_ENCODING = "UTF-8";

    public  static String postData(String urlStr ,String data){
        return postData(urlStr,data,null);
    }

    public static String postData(String urlStr, String data, String contentType) {
        BufferedReader reader = null;
        try {
            URL url = new URL(urlStr);
            URLConnection conn = url.openConnection();
            conn.setDoOutput(true);
            conn.setConnectTimeout(CONNECT_TIMEOUT);
            conn.setReadTimeout(CONNECT_TIMEOUT);
            if (contentType != null) {
                conn.setRequestProperty("content-type", contentType);
            }
            OutputStreamWriter write = new OutputStreamWriter(conn.getOutputStream(), DEFAULT_ENCODING);
            if (data == null) {
                data = "";
            }
            write.write(data);
            write.flush();
            write.close();

            reader = new BufferedReader(new InputStreamReader(conn.getInputStream(), DEFAULT_ENCODING));
            StringBuilder sb = new StringBuilder();
            String line = null;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
                sb.append("\r\n");
            }
            return sb.toString();
        } catch (IOException e) {
//            e.printStackTrace();
            System.out.println("Error connecting to" + urlStr + ":" + e.getMessage());
        } finally {

            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException e) {
//                    e.printStackTrace();

            }
        }
        return null;
    }
}
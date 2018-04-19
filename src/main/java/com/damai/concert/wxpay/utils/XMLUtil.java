package com.damai.concert.wxpay.utils;

/**
 * Created by Teori on 2018/4/18.
 */

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;
import org.jdom.input.SAXBuilder;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * 解析微信返回的XML数据，所以需要XML
 */
public class XMLUtil {

    /**
     * 解析xml，返回以及元素键值对
     * 如果第一级元素有子节点，则此节点的值时此节点的xml数据
     * @param strxml
     * @return
     */
    public static Map doXMLParse(String strxml) throws JDOMException,IOException{
        strxml = strxml.replaceFirst("encoding=\".*\"","encoding=\"UTF-8\"");
        if (null == strxml || "".equals(strxml)){
            return null;
        }
        Map m =new HashMap<>();
        ByteArrayInputStream in = new ByteArrayInputStream(strxml.getBytes("UTF-8"));
        SAXBuilder builder = new SAXBuilder();
        Document doc = builder.build(in);
        Element root = doc.getRootElement();
        List list = root.getChildren();
        Iterator it = list.iterator();
        while (it.hasNext()){
            Element e =(Element) it.next();
            String k = e.getName();
            String v = "";
            List children = e.getChildren();
            if (children.isEmpty()){
                v =e.getTextNormalize();
            }else {
                v = XMLUtil.getChildrenText(children);
            }
            m.put(k,v);
        }
        in.close();
        return m;
    }

    /**
     * 获取子节点的xml
     * @param children
     * @return
     */
    public static String getChildrenText(List children){
        StringBuffer sb =new StringBuffer();
        if (!children.isEmpty()){
            Iterator it = children.iterator();
            while (it.hasNext()){
                Element e = (Element)it.next();
                String name = e.getName();
                String value = e.getTextNormalize();
                List list = e.getChildren();
                sb.append("<"+name+">");
                if (!list.isEmpty()){
                    sb.append(XMLUtil.getChildrenText(list));
                }
                sb.append(value);
                sb.append("</"+name+">");
            }
        }
        return sb.toString();
    }
}
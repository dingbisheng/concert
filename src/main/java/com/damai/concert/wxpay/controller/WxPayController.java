package com.damai.concert.wxpay.controller;

import com.damai.concert.wxpay.utils.PayCommonUtil;
import com.damai.concert.wxpay.utils.ZxingUtil;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import static com.github.wxpay.sdk.WXPayUtil.xmlToMap;

/**
 * Created by Teori on 2018/4/19.
 */

/**
 * 微信扫码支付
 */
@Controller
@RequestMapping("/payment")
public class WxPayController {

    /** logger */
    private static final Logger logger = Logger.getLogger(WxPayController.class);

    /**
     * 获取支付信息
     * @param session
     * @param msgName   商品名称
     * @param orderNum  订单编号
     * @param orderPrice    商品价格
     * @return
     */
    @RequestMapping("/pay")
    public ModelAndView pay(HttpSession session,String msgName,String orderNum,String orderPrice){
        ModelAndView modelAndView = new ModelAndView("test_payment");
        orderPrice = "1";
        Random random = new Random();
//        orderNum = random.nextInt(10000000) + "";
        try {
            //获取微信返回二维码对应的地址
            String url = PayCommonUtil.weixin_pay(orderPrice, msgName, orderNum);
            logger.info("=======url=" + url);
            //将地址转换为图片
            BufferedImage image = ZxingUtil.createImage(url, 300, 300);

            session.setAttribute("oid",orderNum);
            session.setAttribute("image",image);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return modelAndView;
    }

    /**
     * 获取图片
     * @param session
     * @param resp
     */
    @RequestMapping("/image")
    public void getImage(HttpSession session,HttpServletResponse resp){
        //获取存放的二维码
        BufferedImage image = (BufferedImage) session.getAttribute("image");
        if (image != null){
            try {
                ImageIO.write(image,"JPEG",resp.getOutputStream());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }


    /**
     * 验证支付状态，查询支付是否完成
     * @param req
     * @param orderNum
     * @return
     */
    @RequestMapping("/orderStatus")
    @ResponseBody
    public Map selectOrderStatus(HttpServletRequest req,String orderNum){
        Map<String,Object> map = new HashMap<>();
        //获取订单id
        int i = 0;
        if (i==1){//支付成功
            map.put("type","SUCCESS");
            return map;
        }
        map.put("type","FAIL");
        return map;
    }

    /**
     * 微信回掉函数
     * 支付成功后微信服务器调用此方法，修改数据库中订单状态
     * @param req
     * @param resp
     */
    @RequestMapping("/finishPayment")
    @ResponseBody
    public String finishPayment(HttpServletRequest req, HttpServletResponse resp){
        logger.info("=========回掉成功=======");
        try {
            InputStream inputStream = req.getInputStream();
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            byte[] buffer = new byte[1024];
            int len = 0;
            while ((len = inputStream.read(buffer)) != -1){
                outputStream.write(buffer,0,len);
            }
            outputStream.close();
            inputStream.close();
            String result = new String(outputStream.toByteArray(),"utf-8");
            Map<String,String> map = xmlToMap(result);
            if (map.get("result_code").equalsIgnoreCase("SUCCESS")){
                //返回成功后修改订单状态
                String out_trade_no = map.get("out_trade_no");
//                this.proOrdersService.updateByOrderId(out_trade_no);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return "SUCCESS";
    }


}
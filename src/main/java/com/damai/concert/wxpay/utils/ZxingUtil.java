package com.damai.concert.wxpay.utils;

/**
 * Created by Teori on 2018/4/18.
 */

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageConfig;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 生成二维码的工具类
 */
public class ZxingUtil {

    /**
     * Zxing图形码生成根据
     * @param contents 内容
     * @param format 图片格式
     * @param width 宽
     * @param height 高
     * @param saveImgFilePath 存储图片的完整位置，包含文件名
     * @return
     */
    public static Boolean encode(String contents,String format,int width,int height,String saveImgFilePath){
        Boolean bool = false;
        BufferedImage image = createImage(contents,width,height);
        if (image != null){
            bool = writeToFile(image,format,saveImgFilePath);
        }
        return  bool;
    }



    public static void encode(String contents,int width,int height){
        createImage(contents,width,height);
    }

    /**
     *
     * @param contents
     * @param width
     * @param height
     * @return
     */
    public static BufferedImage createImage(String contents, int width, int height) {
        BufferedImage bufImg = null;
        Map<EncodeHintType,Object> hints = new HashMap<EncodeHintType,Object>();
        //指定纠错等级
        hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.H);
        hints.put(EncodeHintType.MARGIN,10);
        hints.put(EncodeHintType.CHARACTER_SET,"UTF-8");
        try {
            BitMatrix bitMatrix = new MultiFormatWriter().encode(contents, BarcodeFormat.QR_CODE,width,height,hints);
            MatrixToImageConfig config = new MatrixToImageConfig(0xFF000001,0xFFFFFFFF);
            bufImg = MatrixToImageWriter.toBufferedImage(bitMatrix,config);

        } catch (WriterException e) {
            e.printStackTrace();
        }
        return bufImg;
    }

    /**
     * 将BufferedImage对象写入文件
     * @param bufImg  BufferedImage对象
     * @param format  图片格式
     * @param saveImgFilePath  存储图片的完整位置，包含文件名
     * @return
     */
    @SuppressWarnings("finally")
    public static Boolean writeToFile(BufferedImage bufImg, String format, String saveImgFilePath) {
        Boolean bool = false;
        try {
            bool = ImageIO.write(bufImg,format,new File(saveImgFilePath));

        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            return bool;
        }
    }
}
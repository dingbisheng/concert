package com.damai.concert.verificate;

import org.apache.log4j.Logger;

import java.net.URLEncoder;

/**
 * 验证码通知短信接口
 * 
 * @ClassName: IndustrySMS
 * @Description: 验证码通知短信接口
 *
 */
public class IndustrySMS {

	/** logger */
	private static final Logger logger = Logger.getLogger(IndustrySMS.class);

	private static String operation = "/industrySMS/sendSMS";

	private static String accountSid = Config.ACCOUNT_SID;

	private static String time = "5";

	/**
	 * 验证码通知短信
	 */
	public static void execute(String to,String code)
	{
		String smsContent = "【小麦网】您的验证码为{"+code+"}，请于{"+time+"}分钟内正确输入，如非本人操作，请忽略此短信。";

		String tmpSmsContent = null;
	    try{
	      tmpSmsContent = URLEncoder.encode(smsContent, "UTF-8");
	    }catch(Exception e){
	      
	    }
	    String url = Config.BASE_URL + operation;
	    String body = "accountSid=" + accountSid + "&to=" + to + "&smsContent=" + tmpSmsContent
	        + HttpUtil.createCommonParam();

	    // 提交请求
	    String result = HttpUtil.post(url, body);
	    logger.info("result:" + System.lineSeparator() + result);
	}
}

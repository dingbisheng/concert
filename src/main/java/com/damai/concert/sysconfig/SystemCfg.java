package com.damai.concert.sysconfig;

/**
 *
 * 系统配置参数
 * Created by Vincent on 2018\4\11 0011.
 */
public class SystemCfg {


    //普通用户登录使用的realm名称
    public static final String USER_LOGIN_REALM_NAME = "LoginRealm";

    //后台管理系统登录使用的realm名称
    public static final String MANAGER_LOGIN_REALM_NAME = "ManagerRealm";

    //首页喜好查询5条信息
    public static  final Integer PAGE_NUM = 5;

    //初始密码
    public static final String INIT_PWD = "123456";

    //短信登陆标识
    public static final String MSG_LOGIN = "MSG_LOGIN";

    //Ajax登录返回值成功字段
    public static final String SUCCESS_DATA = "success";

    //Ajax登录返回值失败字段
    public static final String FAILED_DATA = "failed";

    //404 页面无法异常页面
    public static final String FAILED_404 = "404";

    //增加座位第一步   有座位的图片名称
    public static final String HAS_SEAT_PNG = "y.png";

    //增加座位第一步   没有座位的图片名称
    public static final String NO_SEAT_PNG = "n.png";

    //座位锁定状态的图片
    public static final String LOCK_SEAT_PNG ="L.png";

    //前端座位分隔符
    public static final String SEAT_SPLIT = ";";

    //前端行列分割符
    public static final String SEAT_ROW_COL_SPLIT = ",";

    //Token机制  防止重复提交   使用该字符串生成随机码
    public static final String TOKEN_RANDOM_STRING = "1234567890zxcvbnmlkjhgfdsaqwertyuiop";

    //没有座位的state
    public static final int NO_SEAT_STATE = -1;

    //锁定座位state
    public static final int LOCK_SEAT_STATE=-2;

    //座位锁定状态Redis存储前缀
    public static final String SEAT_STATE_PREFIX = "LOCK_SEAT_BY_USER";

    //分页
    //pageSize 每页显示几条
    public static final Integer PAGE_SIZE =6;


    //座位被锁定时间，单位：秒
    public static final long SEAT_LOCK_TIME=60;

    //生成订单号保存redis的key
    public static final String ORDER_NUM_NAME ="damaiordernumname";

    //座位被短时锁定时间，单位：秒
    public static final long SEAT_LOCK_SORT_TIME=30;
}

package com.damai.concert.sysconfig;

import com.jagregory.shiro.freemarker.ShiroTags;
import freemarker.template.Configuration;
import freemarker.template.TemplateException;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import java.io.IOException;

/**
 * Created by Teori on 2018/4/10.
 */
public class FreeMarkerConfigExtend extends FreeMarkerConfigurer {


    @Override
    public void afterPropertiesSet() throws IOException, TemplateException {
        super.afterPropertiesSet();
        Configuration configuration = this.getConfiguration();
        //shiro标签
        configuration.setSharedVariable("shiro",new ShiroTags());
        //防止页面输出数字,变成2,000
        //configuration.setNumberFormat("#");
    }
}
package com.damai.concert.dto.msgvo;

import java.io.Serializable;

/**
 * Created by Administrator on 2018\4\18 0018.
 */
public class MsgVO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer msgId;
    private String msgName;

    public Integer getMsgId() {
        return msgId;
    }

    public void setMsgId(Integer msgId) {
        this.msgId = msgId;
    }

    public String getMsgName() {
        return msgName;
    }

    public void setMsgName(String msgName) {
        this.msgName = msgName;
    }

    @Override
    public String toString() {
        return "MsgVO{" +
                "msgId=" + msgId +
                ", msgName='" + msgName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MsgVO msgVO = (MsgVO) o;

        if (msgId != null ? !msgId.equals(msgVO.msgId) : msgVO.msgId != null) return false;
        return msgName != null ? msgName.equals(msgVO.msgName) : msgVO.msgName == null;

    }

    @Override
    public int hashCode() {
        int result = msgId != null ? msgId.hashCode() : 0;
        result = 31 * result + (msgName != null ? msgName.hashCode() : 0);
        return result;
    }
}

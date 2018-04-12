package com.damai.concert.dto;

import java.io.Serializable;

/**
 * Created by Teori on 2018/4/12.
 */
public class SortDetailsDTO implements Serializable {
    private String name;
    private String price;
    private String img;

    @Override
    public String toString() {
        return "SortDetailsDTO{" +
                "img='" + img + '\'' +
                ", name='" + name + '\'' +
                ", price='" + price + '\'' +
                '}';
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
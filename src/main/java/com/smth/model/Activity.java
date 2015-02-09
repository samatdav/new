package com.smth.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

/**
 * @author devtur.
 */

@Document(collection = Activity.COLLECTION_NAME)
public class Activity implements Serializable {

    public static final String COLLECTION_NAME = "activities"; // collection name for activities.

    @Id
    private Long id;

    private String author; // activity author
    private String content; // activity content
    private String title; // title of activity
    private String price; // price assigned to activity
    private boolean completed; // status of activity.

    public Activity() {}

    public Activity(Long id, String author, String content, String title, String price) {

        this.id = id;
        this.author = author;
        this.content = content;
        this.title = title;
        this.price = price;
    }

    /*
    * Getters and setters
     */

    public void setId(Long id) {

        this.id = id;
    }

    public Long getId() {

        return id;
    }

    public void setAuthor(String author) {

        this.author = author;
    }

    public String getAuthor() {

        return author;
    }

    public void setContent(String content) {

        this.content = content;
    }

    public String getContent() {

        return content;
    }

    public void setTitle(String title) {

        this.title = title;
    }

    public String getTitle() {

        return title;
    }

    public void setPrice(String price) {

        this.price = price;
    }

    public String getPrice() {

        return price;
    }
}

package com.smth.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

/**
 * @author devtur.
 */

@Document(collection = User.COLLECTION_NAME)
public class User implements Serializable {
    public static final String COLLECTION_NAME = "users";

    @Id
    private Long id;

    private String name;

    public User() {}

    public User(String name) {

        this.name = name;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Long getId() {

        return id;
    }

    public void setName(String name) {

        this.name = name;
    }

    public String getName() {

        return name;
    }
}

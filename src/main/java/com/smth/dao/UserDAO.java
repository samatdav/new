package com.smth.dao;

import com.smth.model.User;

import java.util.List;

/**
 * @author devtur.
 */
public interface UserDAO {

    public void save(User user);

    public User get(Long id);

    public List<User> getAll();

    public void remove(Long id);
}

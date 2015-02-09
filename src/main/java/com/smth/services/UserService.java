package com.smth.services;

import com.smth.dao.SequenceDAO;
import com.smth.dao.UserDAO;
import com.smth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author devtur.
 */

@Service
public class UserService {

    @Autowired
    private SequenceDAO sequenceDAO;

    @Autowired
    private UserDAO userDAO;

    /*
    * Basic operations
     */

    public void addUser(User user) {

        user.setId(sequenceDAO.getNextSequenceId(user.COLLECTION_NAME));
        userDAO.save(user);
    }

    public void update(User user) {

        userDAO.save(user);
    }

    public User get(Long id) {

        return userDAO.get(id);
    }

    public List<User> getAll() {

        return userDAO.getAll();
    }

    public void remove(Long id) {

        userDAO.remove(id);
    }

}

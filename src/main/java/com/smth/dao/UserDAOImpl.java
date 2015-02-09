package com.smth.dao;

import com.smth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author devtur.
 */

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    private MongoOperations mongoOperations;

    @Override
    public void save(User user) {

        mongoOperations.save(user);
    }

    @Override
    public User get(Long id) {

        return mongoOperations.findOne(Query.query(Criteria.where("id").is(id)), User.class);
    }

    @Override
    public List<User> getAll() {

        return mongoOperations.findAll(User.class);
    }

    @Override
    public void remove(Long id) {

        mongoOperations.remove(Query.query(Criteria.where("id").is(id)), User.class);
    }
}

package com.smth.dao;

import com.smth.model.Activity;
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
public class ActivityDAOImpl implements ActivityDAO {

    @Autowired
    public MongoOperations mongoOperations;


    @Override
    public void save(Activity activity) {

        mongoOperations.save(activity);
    }

    @Override
    public Activity get(Long id) {

        return mongoOperations.findOne(Query.query(Criteria.where("id").is(id)), Activity.class);
    }

    @Override
    public List<Activity> getAll() {

        return mongoOperations.findAll(Activity.class);
    }

    @Override
    public void remove(Long id) {

        mongoOperations.remove(Query.query(Criteria.where("is").is(id)), Activity.class);
    }
}

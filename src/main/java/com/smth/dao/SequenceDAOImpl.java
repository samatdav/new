package com.smth.dao;

import com.smth.exceptions.SequenceException;
import com.smth.model.Sequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

/**
 * @author devtur.
 */

@Repository
public class SequenceDAOImpl implements SequenceDAO {

    @Autowired
    private MongoOperations mongoOperations;

    @Override
    public Long getNextSequenceId(String key) {

        Query query = new Query(Criteria.where("id").is(key));

        Update update = new Update();
        update.inc("sequence", 1);

        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);

        Sequence sequence = mongoOperations.findAndModify(query, update, options, Sequence.class);

        if(sequence == null)
            throw new SequenceException("Unable to get sequence for key: " + key);

        return sequence.getSequence();
    }
}

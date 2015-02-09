package com.smth.dao;

/**
 * @author devtur.
 */
public interface SequenceDAO {

    public Long getNextSequenceId(String key);
}

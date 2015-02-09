package com.smth.dao;

import com.smth.model.Activity;

import java.util.List;

/**
 * @author devtur.
 */

public interface ActivityDAO {

    public void save(Activity activity);

    public Activity get(Long id);

    public List<Activity> getAll();

    public void remove(Long id);
}

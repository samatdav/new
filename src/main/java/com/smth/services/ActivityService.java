package com.smth.services;

import com.smth.dao.ActivityDAO;
import com.smth.dao.SequenceDAO;
import com.smth.model.Activity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author devtur.
 */

@Service
public class ActivityService {

    @Autowired
    private SequenceDAO sequenceDAO;


    @Autowired
    private ActivityDAO activityDAO;

    /*
    * Add new activity.
     */
    public void addActivity(Activity activity) {

        activity.setId(sequenceDAO.getNextSequenceId(activity.COLLECTION_NAME));
        activityDAO.save(activity);
    }

    /*
    * Update activity.
     */
    public void update(Activity activity) {

        activityDAO.save(activity);
    }

    /*
    * Get activity.
     */
    public Activity get(Long id) {

        return activityDAO.get(id);
    }

    /*
    * Get all activities.
     */
    public List<Activity> getAll() {

        return activityDAO.getAll();
    }

    /*
    * Remove activity.
     */
    public void remove(Long id) {

        activityDAO.remove(id);
    }


}

package com.smth.web;

import com.smth.model.Activity;
import com.smth.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author devtur.
 */
@Controller
public class MainController {

    @Autowired
    private ActivityService activityService;

    @RequestMapping(value = "/add", method = RequestMethod.GET)
    public ModelAndView showAddForm() {

        return new ModelAndView("add_form", "activity", new Activity());
    }
}

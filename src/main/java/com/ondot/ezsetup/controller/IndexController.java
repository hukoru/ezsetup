package com.ondot.ezsetup.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


@Slf4j
@Controller
public class IndexController {

    @RequestMapping(value = {"", "/", "/index"}, method = RequestMethod.GET)
    public ModelAndView getIndexPage(Model model) {

        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");
        return mav;
    }

    @RequestMapping(value = "/welcome",  method = { RequestMethod.GET, RequestMethod.POST })
    public ModelAndView getWelcomePage(Model model) {

        ModelAndView mav = new ModelAndView();
        mav.setViewName("welcome");
        return mav;
    }
}

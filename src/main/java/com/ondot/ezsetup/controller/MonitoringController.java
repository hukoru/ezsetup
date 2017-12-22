package com.ondot.ezsetup.controller;

import com.ondot.ezsetup.service.ConfigurationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


@Slf4j
@Controller
public class MonitoringController {

    private final ConfigurationService configurationService;

    public MonitoringController(ConfigurationService configurationService) {
        this.configurationService = configurationService;
    }

    @RequestMapping(value = "/monitoring/index", method = { RequestMethod.GET, RequestMethod.POST })
    public ModelAndView getConfigurationArchitecturePage(Model model) {

        ModelAndView mav = new ModelAndView();
        mav.setViewName("configuration/architecture");
        return mav;
    }

}

package com.ondot.ezsetup.controller;

import com.ondot.ezsetup.service.ConfigurationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


@Slf4j
@Controller
public class InstallerController {

    private final ConfigurationService configurationService;

    public InstallerController(ConfigurationService configurationService) {
        this.configurationService = configurationService;
    }

    @RequestMapping(value = "/update/index", method = { RequestMethod.GET, RequestMethod.POST })
    public ModelAndView getConfigurationArchitecturePage(Model model) {

        ModelAndView mav = new ModelAndView();
        mav.setViewName("update/index");
        return mav;
    }

}

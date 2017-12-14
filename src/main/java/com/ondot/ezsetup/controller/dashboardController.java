package com.ondot.ezsetup.controller;

import com.ondot.ezsetup.service.ConfigurationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Slf4j
@Controller
public class dashboardController {

    private final ConfigurationService configurationService;

    public dashboardController(ConfigurationService configurationService) {
        this.configurationService = configurationService;
    }

    @RequestMapping({"dashboard"})
    public String getIndexPage(Model model) {


        return "dashboard";
    }
}

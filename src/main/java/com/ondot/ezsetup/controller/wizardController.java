package com.ondot.ezsetup.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Slf4j
@Controller
public class wizardController {
    @RequestMapping({"wizard"})
    public String getIndexPage(Model model) {
        return "wizard";
    }
}

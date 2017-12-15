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
public class ConfigurationController {

    private final ConfigurationService configurationService;

    public ConfigurationController(ConfigurationService configurationService) {
        this.configurationService = configurationService;
    }

    @RequestMapping(value = "/configuration/architecture", method = RequestMethod.GET)
    public ModelAndView getConfigurationArchitecturePage(Model model) {

        ModelAndView mav = new ModelAndView();
        mav.setViewName("configuration/architecture");
        return mav;
    }

    @RequestMapping(value = "/configuration/environment", method = RequestMethod.GET)
    public ModelAndView getConfigurationEnvironmentPage(Model model) {

        ModelAndView mav = new ModelAndView();
        mav.setViewName("configuration/environment");
        return mav;
    }

    @RequestMapping(value = "/configuration/interface", method = RequestMethod.GET)
    public ModelAndView getConfigurationInterfacePage(Model model) {

        ModelAndView mav = new ModelAndView();
        mav.setViewName("configuration/interface");
        return mav;
    }

    @RequestMapping(value = "/configuration/endpoint", method = RequestMethod.GET)
    public ModelAndView getConfigurationEndpointPage(Model model) {

        ModelAndView mav = new ModelAndView();
        mav.setViewName("configuration/endpoint");
        return mav;
    }

    @RequestMapping(value = "/configuration/review", method = RequestMethod.GET)
    public ModelAndView getConfigurationReviewPage(Model model) {

        ModelAndView mav = new ModelAndView();
        mav.setViewName("configuration/review");
        return mav;
    }

    @RequestMapping(value = "/configuration/review/expert", method = RequestMethod.GET)
    public ModelAndView getConfigurationReviewExpertPage(Model model) {

        ModelAndView mav = new ModelAndView();
        mav.setViewName("configuration/review_expert");
        return mav;
    }

    @GetMapping("/ReferenceArchitecture")
    public @ResponseBody
    String getIndexPage(Model model) {

        String test = "{\n" +
                "  \"responseDataList\": [\n" +
                "    {\n" +
                "      \"ref_model\": \"4vm\",\n" +
                "      \"host_count\": 4,\n" +
                "      \"image\": \"4vm.gif\",\n" +
                "      \"description\": \"Host Active-Active depicts what kind of components run in each of four hosts. This model is intended for customers who:\\nExternal LB and Authorization Switch can support Load Balancing\\nwant to have zero service downtime when a component or a host fails\\nwant a higher scale for current or future load\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"ref_model\": \"1vm\",\n" +
                "      \"host_count\": 1,\n" +
                "      \"image\": \"1vm.gif\",\n" +
                "      \"description\": \"One can ask why Redis runs in this model given the fact that there is only one component instance.The answer for the question is that when FIServer or ISAgent get restarted due to unknown reasons,It can use states stored in Redis so that a service disruption can get reduced. \"\n" +
                "    },\n" +
                "    {\n" +
                "      \"ref_model\": \"8vm\",\n" +
                "      \"host_count\": 8,\n" +
                "      \"image\": \"8vm.gif\",\n" +
                "      \"description\": \"In order to make clustering solution more reliable, Redis-based caching layer is not shared between sites. Components across sites communicates using RabbitMQ Federation\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"ref_model\": \"2vm-ha\",\n" +
                "      \"host_count\": 2,\n" +
                "      \"image\": \"2vm-ha.gif\",\n" +
                "      \"description\": \"This model is intended for customers who: \\nthe external LB or Authorization Switch is not capable of doing load balancing.\\nA customer wants to upgrade to a clustering-supported release from a older release in HA setup.\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"ref_model\": \"2vm\",\n" +
                "      \"host_count\": 2,\n" +
                "      \"image\": \"2vm.gif\",\n" +
                "      \"description\": \"This model is intended for customers who: \\nExternal LB and Authorization Switch can support Load Balancing \\nwant to have zero service downtime when a component or a host fails\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"responseStatus\": {\n" +
                "    \"responseCode\": 0\n" +
                "  }\n" +
                "}\n";
        //return configurationService.getReferenceArchitecture();
        return test;
    }
}

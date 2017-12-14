package com.ondot.ezsetup.controller;

import com.ondot.ezsetup.service.ConfigurationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Slf4j
@Controller
public class configurationController {

    private final ConfigurationService configurationService;

    public configurationController(ConfigurationService configurationService) {
        this.configurationService = configurationService;
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

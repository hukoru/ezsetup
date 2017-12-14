package com.ondot.ezsetup.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public interface ConfigurationService {
    public  String executeCommand(String cmd) ;

    public  String getReferenceArchitecture() ;

    public  boolean executeTrueFalseCommand(String cmd);
}
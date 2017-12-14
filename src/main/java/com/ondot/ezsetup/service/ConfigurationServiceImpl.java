package com.ondot.ezsetup.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Optional;

@Slf4j
@Service
public class ConfigurationServiceImpl implements ConfigurationService {

    public String getReferenceArchitecture(){
        String result = this.executeCommand("/usr/bin/python " + " /home/ondotapp/ezsetup/api/api_proxy.py " + "get_ref_architecture");
        System.out.println("result : " + result);

        return result;

    }

    private StringBuffer runCommand(String command) throws IOException, InterruptedException {

        StringBuffer output = new StringBuffer();

        Process p;
        p = Runtime.getRuntime().exec(command);
        p.waitFor();
        BufferedReader reader =
                new BufferedReader(new InputStreamReader(p.getInputStream()));

        String line = "";
        while ((line = reader.readLine()) != null) {
            output.append(line + "\n");
        }
        return output;

    }

    @Override
    public String executeCommand(String command) {

        StringBuffer output = null;
        try {
            output = runCommand(command);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return output.toString();

    }

    @Override
    public boolean executeTrueFalseCommand(String command) {
        try {
            StringBuffer output = runCommand(command);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return false;
    }

}

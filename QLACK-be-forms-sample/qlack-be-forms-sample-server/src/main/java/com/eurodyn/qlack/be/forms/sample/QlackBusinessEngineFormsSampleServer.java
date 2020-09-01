package com.eurodyn.qlack.be.forms.sample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@EnableZuulProxy
@SpringBootApplication
public class QlackBusinessEngineFormsSampleServer {

  public static void main(String[] args) {
    SpringApplication.run(QlackBusinessEngineFormsSampleServer.class, args);
  }

}

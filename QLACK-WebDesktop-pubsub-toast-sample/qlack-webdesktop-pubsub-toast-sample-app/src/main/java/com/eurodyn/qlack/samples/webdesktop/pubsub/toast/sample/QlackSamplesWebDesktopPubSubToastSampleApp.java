package com.eurodyn.qlack.samples.webdesktop.pubsub.toast.sample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * The main class of the Spring Boot application.
 *
 * @author EUROPEAN DYNAMICS SA
 */
@SpringBootApplication
@ComponentScan(basePackages = {
    "com.eurodyn.qlack.samples.webdesktop.pubsub.toast"
})
public class QlackSamplesWebDesktopPubSubToastSampleApp {

  /**
   * This method runs the application.
   *
   * @param args the command line arguments
   */
  public static void main(String[] args) {
    SpringApplication.run(QlackSamplesWebDesktopPubSubToastSampleApp.class, args);
  }
}

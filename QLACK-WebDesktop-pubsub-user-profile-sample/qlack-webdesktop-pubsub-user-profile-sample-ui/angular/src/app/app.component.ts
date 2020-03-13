import { Component } from '@angular/core';
import {QngPubsubService} from '@qlack/qng-pubsub';
import {QPubSub} from '@qlack/qpubsub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qlack-webdesktop-pubsub-user-profile-sample-ui';

  private qPubSubService: QngPubsubService;

  constructor(qPubSubService: QngPubsubService) {
    this.qPubSubService = qPubSubService;
    this.qPubSubService.init('client-' + Math.floor(Math.random() * 9000), false);

    // Subscribe to a predefined topic to read messages from WebDesktop
    this.qPubSubService.subscribe('QUserInformationResponse', (message: QPubSub.Message) => {
      console.log(message);
    });
  }

  retrieveUserInformation() {
    this.qPubSubService.publish('QUserInformationRequest', "PLEASE!");
  }
}

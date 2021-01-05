import {Component} from '@angular/core';
import {QNgPubSubService} from '@qlack/qng-pubsub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qlack-webdesktop-pubsub-toast-sample-ui';
  private qPubSubService: QNgPubSubService;

  constructor(qPubSubService: QNgPubSubService) {
    this.qPubSubService = qPubSubService;
    this.qPubSubService.init('client-' + Math.floor(Math.random() * 9000), false);
  }

  publishToastMessage() {
    this.qPubSubService.publish('QNotifications', 'A test message with version 1.0.1!!!');
  }
}

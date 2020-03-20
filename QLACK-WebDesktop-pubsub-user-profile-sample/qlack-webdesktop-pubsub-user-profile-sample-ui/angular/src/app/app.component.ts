import {Component, OnInit} from '@angular/core';
import {QngPubsubService} from '@qlack/qng-pubsub';
import {QPubSub} from '@qlack/qpubsub';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'qlack-webdesktop-pubsub-user-profile-sample-ui';
  private qPubSubService: QngPubsubService;
  form: FormGroup;

  constructor(qPubSubService: QngPubsubService, private fb: FormBuilder){
    this.qPubSubService = qPubSubService;
    this.qPubSubService.init('client-' + Math.floor(Math.random() * 9000), false);
  }

  retrieveUserInformation() {
    this.qPubSubService.publish('QUserInformationRequest', " ");
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      firstName: [{value: "", disabled: true}],
      lastName: [{value: "", disabled: true}],
      defaultLanguage: [{value: "",  disabled: true}],
      profileImage: [undefined]
    });
    // Subscribe to a predefined topic to read messages from WebDesktop
    this.qPubSubService.subscribe('QUserInformationResponse', (message: QPubSub.Message) => {
      this.form = this.fb.group({
        id: [''],
        firstName: [{value: message.clientID, disabled: true}],
        lastName: [{value: message.originalClientID, disabled: true}],
        defaultLanguage: [{value: message.topic,  disabled: true}],
        profileImage: [undefined]
      });
    });
  }
}

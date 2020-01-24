import {Component} from '@angular/core';
import {Log} from 'ng2-logger/browser';
import {environment} from '../environments/environment';

import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Message} from '../types/message';
import {QngPubsubService} from '@qlack/qng-pubsub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private logger = Log.create('AppComponent');
  title = 'Qlack3-angular-pubsub-test';

  private readonly isClient: boolean;
  private readonly allowedOrigins: string[] = environment.allowedOrigins;
  private clientIframeUrl: SafeResourceUrl;
  private message: string;
  private messageObject: string;
  private clientInstanceId: string = 'client-' + Math.floor(Math.random() * 9000);

  static getParamValue(paramName: string) {
    const url = window.location.search.substring(1);
    const qArray = url.split('&');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < qArray.length; i++) {
      const pArr = qArray[i].split('=');
      if (pArr[0] === paramName) {
        return pArr[1];
      }
    }
  }

  constructor(private qPubSubService: QngPubsubService, private sanitizer: DomSanitizer) {
    this.isClient = AppComponent.getParamValue('isClient') === 'true';
    this.allowedOrigins = environment.allowedOrigins;

    if (!this.isClient) {
      qPubSubService.init('server', !this.isClient, this.allowedOrigins);
      this.clientIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:4200?isClient=true');
    } else {
      qPubSubService.init(this.clientInstanceId, !this.isClient);
    }
  }

  subscribeToChannel(channel: string) {
    this.qPubSubService.subscribe(channel, (message: Message) => {
      this.message = message.msg;
      this.messageObject = JSON.stringify({message});
      this.logger.data(message.msg);
    });
  }

  unsubscribeFromChannel(channel: string) {
    this.qPubSubService.unsubscribe(channel);
  }

  sendMessage(channel: string, message: string) {
    this.qPubSubService.publish(channel, message);
  }
}

import {MessageType} from './messagetype';

export class Message {
  topic: string;
  clientID: string;
  originalClientID: string;
  msgType: MessageType;
  msg: string;
}

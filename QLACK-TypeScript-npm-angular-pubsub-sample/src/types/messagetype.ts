export enum MessageType {
  CONTROL = 1,  // A control message, to initiate the PING/PONG sequence.
  PUB = 2,      // A request to publish.
  SUB = 3,      // A request to subscribe.
  CALLBACK = 4, // A callback to a client.
  UNSUB = 5// A request to unsubscribe.
}

export enum ControlMessage {
  PING = 'ping',  // A ping message to initiate the PING/PONG sequence between a client and the server.
  PONG = 'pong', // A pong message to confirm the server instance and communication with the client.
}

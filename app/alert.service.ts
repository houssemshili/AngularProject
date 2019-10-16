import { Injectable } from '@angular/core';
import { Message} from './message';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
messages : Message[] = [];
  constructor() { }

  AddMessage(type : string, message : string)
  {
    this.messages.push(new Message(type,message));
  }
  getMessage() : Message{
    return this.messages.pop();
  }
  clear() : void {
    this.messages = [];
  }
}

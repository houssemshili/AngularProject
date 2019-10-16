import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { AlertService } from '../alert.service';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private alertservice : AlertService) { 
  }

  @Input() selectedContact : Contact;
  ngOnInit() {
    
  }
  
DisableSelectedContact(){
  this.selectedContact = null;
}
addWarning(){
  this.alertservice.AddMessage("warning","un message");
}
addError(){
  this.alertservice.AddMessage("error","un message");
}

clearAlert(){
  this.alertservice.clear();
}
}

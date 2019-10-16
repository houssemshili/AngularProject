import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts : Contact[] = [];
  currentContact : Contact;
  constructor(private contactService : ContactService) { }
  UpdateSelectedContact(contact:Contact)
  {
    this.currentContact = contact;
  }
  ngOnInit() {  
    this.contactService.getUsers().subscribe(a => this.contacts = a);
  }

}

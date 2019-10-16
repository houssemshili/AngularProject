import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts : Contact[] = [];
  private usersUrl;
  constructor(private http: HttpClient) { }

  getContacts()
  {
    return this.contacts;
  }

  getContactById(id:number)
  {
    return this.contacts;
  }

  getUsers(): Observable<Contact[]> {
    this.usersUrl = 'https://jsonplaceholder.typicode.com/users';  // URL to web api
    return this.http.get<Contact[]>(this.usersUrl);
  }
}

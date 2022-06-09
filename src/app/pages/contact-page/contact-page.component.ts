import { Contact } from './../../models/contact.model';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  contacts$: Observable<Contact[]>;

  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contacts$  = this.contactService.contacts$;
  }
}

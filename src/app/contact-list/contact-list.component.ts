import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

interface Contact {
    name: String;
    email: String;
    phoneNumber: String;
    image: String ;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];

  newContact: Contact={
    name: "",
    email: "",
    phoneNumber: "",
    image: ""

  };


  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    // add contact to contacts list

    //primero se pone la imagen antes que el push, sino no se verá

    this.newContact.image = 'https://images.unsplash.com/photo-1616578853146-cb0b5e732b83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=498&q=80';

    let addContact = {...this.newContact};
    this.contacts.push(addContact);

    // clear inputs

    this.newContact.image=null;
    this.newContact.name=null;
    this.newContact.email=null;
    this.newContact.phoneNumber=null;

    console.log('Nuevo Contacto creado',this.newContact);
  }

  deleteContact(){
   this.contacts.pop();
    
  }


}
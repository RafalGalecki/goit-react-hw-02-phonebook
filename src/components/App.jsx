import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import ContactsListElement from './ContactslistElement/ContactsListElement';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
    console.log('CONTACTS:', this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
          onSubmit={values => console.log('VALUES:', values)}
        />
        <h2>Contacts</h2>
        <ContactsList>
          <ContactsListElement contacts={this.state.contacts} />
        </ContactsList>
      </div>
    );
  }
}

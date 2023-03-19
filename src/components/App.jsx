import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import ContactsListElement from './ContactslistElement/ContactsListElement';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
    console.log('CONTACTS:', this.state.contacts);
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  filter = element => {
    this.setState({
      filter: element.currentTarget.value,
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => contact.name.includes(filter));
  };

  render() {
    const value = this.state.filter;
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
          // onSubmit={values => console.log('VALUES:', values)}
        />
        <h2>Contacts</h2>
        <Filter value={value} filterContacts={this.filterContacts} onChange={this.filter } />
        <ContactsList>
          <ContactsListElement
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </ContactsList>
      </div>
    );
  }
}

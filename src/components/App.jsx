import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={values => console.log('VALUES:', values)} />
      </div>
    );
  }
}

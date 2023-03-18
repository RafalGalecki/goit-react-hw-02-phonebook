import { Component } from 'react';
import css from './ContactsListElement.module.css';
import PropTypes from 'prop-types';

class ContactsListElement extends Component {
  render() {
    const { contacts } = this.props;
    return contacts.map(({ name, number, id }) => (
      <li key={id}>
        <span className={css.contactName}>{name}: </span>
            <span className={css.contactNumber}>{number}</span>
            <button type="button" >Delete</button>
      </li>
    ));
  }
}

export default ContactsListElement;

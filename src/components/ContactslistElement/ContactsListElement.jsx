import { Component } from 'react';
import css from './ContactsListElement.module.css';
import PropTypes from 'prop-types';

class ContactsListElement extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return contacts.map(({ name, number, id }) => (
      <li key={id}>
        <span className={css.contactName}>{name}: </span>
        <span className={css.contactNumber}>{number}</span>
        <button
          key={id}
          type="button"
          className={css.btnDelete}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ));
  }
}

ContactsListElement.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactsListElement;

import { Component } from 'react';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

class ContactsList extends Component {
  render() {
    const { children } = this.props;
    return <ul className={css.ContactsList}>{children}</ul>;
  }
}

export default ContactsList;

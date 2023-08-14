import React from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

const ContactList = ({ contacts, onRemove }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button className={styles.deleteButton} onClick={() => onRemove(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;



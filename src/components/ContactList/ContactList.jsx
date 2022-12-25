import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
      {contacts.length <= 0 ? (
        <p>No contacts were found for this request</p>
      ) : (
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                deleteContacts={deleteContacts}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContacts: PropTypes.func.isRequired,
};

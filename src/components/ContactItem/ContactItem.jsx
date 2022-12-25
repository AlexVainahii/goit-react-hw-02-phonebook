import PropTypes from 'prop-types';
export const ContactItem = ({ id, name, number, deleteContacts }) => {
  return (
    <li>
      {name}:{number}
      <button
        type="button"
        onClick={() => {
          deleteContacts(id);
        }}
      >
        Delete contacts
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

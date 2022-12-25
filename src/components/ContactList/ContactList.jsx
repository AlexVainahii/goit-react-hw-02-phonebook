import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
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
};

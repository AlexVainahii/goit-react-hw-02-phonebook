import PropTypes from 'prop-types';
export const Filter = ({ filterContacts }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        onChange={e => {
          filterContacts(e);
        }}
      />
    </>
  );
};
Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};

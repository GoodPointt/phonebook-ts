import PropTypes from 'prop-types';
import { StyledInput } from '../Styled';

export const Filter = ({ handleChange, filter }) => {
  return (
    <StyledInput
      onChange={handleChange}
      value={filter}
      type="text"
      name="filter"
      placeholder="Search by Name / Phone"
      title="Search contacts by NAME and PHONE_NUMBER"
      required
    />
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

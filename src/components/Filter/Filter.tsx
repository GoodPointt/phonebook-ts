import { StyledInput } from '../Styled.styled';
import { ThandleChange } from 'components/App';

interface IFilter {
  handleChange: (evt: ThandleChange) => void;
  filter: string;
}

export const Filter = ({ handleChange, filter }: IFilter) => {
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

import {
  StyledItem,
  StyledItemBtn,
  StyledList,
  StyledText,
} from 'components/Styled';
import PropTypes from 'prop-types';

export const Contacts = ({
  contacts,
  filteredContacts,
  filter,
  deleteContact,
}) => {
  return (
    <>
      {filter ? (
        <>
          <h4>Search result:</h4>
          {filteredContacts.length ? (
            <StyledList>
              {filteredContacts.map(filteredContact => (
                <StyledItem key={filteredContact.id}>
                  <StyledText>
                    {filteredContact.name} {filteredContact.number}
                  </StyledText>
                  <StyledItemBtn
                    onClick={() => deleteContact(filteredContact.id)}
                  >
                    &#x2716;
                  </StyledItemBtn>
                </StyledItem>
              ))}
            </StyledList>
          ) : (
            <StyledText>
              Sorry, friend, but you have no contacts matching your search
              querry 😒
            </StyledText>
          )}
        </>
      ) : (
        <>
          <StyledList>
            {contacts.map(contact => (
              <StyledItem key={contact.id}>
                <StyledText>
                  {contact.name} {contact.number}
                </StyledText>
                <StyledItemBtn onClick={() => deleteContact(contact.id)}>
                  &#x2716;
                </StyledItemBtn>
              </StyledItem>
            ))}
          </StyledList>
        </>
      )}
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};

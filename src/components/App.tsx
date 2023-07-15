import * as React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { StyledBtn, StyledContainer, StyledItemBtn } from './Styled.styled';
import { Modal } from './Modal/Modal';

export interface INewContact {
  id: string;
  name: string;
  number: string;
}

export type ThandleChange = React.ChangeEvent<HTMLInputElement>;

export const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts') || 'null') || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const toggleModal = () => {
    setShowModal(!showModal);
    setFilter('');
  };

  const isExist = (newContact: INewContact): boolean => {
    return contacts.find(
      (contact: INewContact) =>
        contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? true
      : false;
  };

  const addNewContact = (newContact: INewContact): void | boolean => {
    if (isExist(newContact)) {
      toast.warn(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts((prevState: INewContact[]) => [...prevState, newContact]);
    toast.success(`${newContact.name} succesfully added to your contacts`);
    toggleModal();
  };

  const deleteContact = (contactId: string) => {
    setContacts((prevState: INewContact[]) => {
      const afterDelContcts = prevState.filter(
        contact => contactId !== contact.id
      );
      if (prevState.length > afterDelContcts.length) {
        toast.info(
          `${
            prevState.find(contact => contactId === contact.id)?.name
          } was successfuly deleted from your contacts`
        );
        return afterDelContcts;
      }
    });
  };

  const handleChange = (evt: ThandleChange): void => {
    let { value, name } = evt.target;
    if (name === 'filter') setFilter(value);
  };

  const filteredContacts: INewContact[] = contacts.filter(
    (contact: INewContact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <StyledContainer>
      <h1>Phonebook</h1>
      <StyledBtn
        type="button"
        onClick={toggleModal}
        style={{
          display: 'block',
          margin: '0 auto',
          fontSize: '32px',
        }}
      >
        Add new contact
      </StyledBtn>
      <h2>
        There
        {contacts.length === 1 ? (
          <span> is {contacts.length} contact </span>
        ) : (
          <span> are {contacts.length} contacts </span>
        )}
        in your phonebook
      </h2>

      {contacts.length > 0 && (
        <Filter handleChange={handleChange} filter={filter} />
      )}

      <Contacts
        contacts={contacts}
        filteredContacts={filteredContacts}
        filter={filter}
        deleteContact={deleteContact}
      />

      {showModal && (
        <Modal closeModal={toggleModal}>
          <StyledItemBtn type="button" onClick={toggleModal}>
            X
          </StyledItemBtn>
          <ContactForm addNewContact={addNewContact} />
        </Modal>
      )}
      <ToastContainer
        position="top-right"
        autoClose={1700}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </StyledContainer>
  );
};

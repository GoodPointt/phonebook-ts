import { nanoid } from 'nanoid';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

import { StyledBtn, ErrorMsg, StyledInput } from 'components/Styled.styled';
import { INewContact } from 'components/App';

interface IContactForm {
  addNewContact: (addNewContact: INewContact) => void | boolean;
}

export const ContactForm = ({ addNewContact }: IContactForm) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Z'-\s]+$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /^[0-9\s+()-]+$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Number is required'),
  });

  const handleSubmit = (values: { name: string; number: string }) => {
    const id = nanoid();
    const newContact = {
      id,
      ...values,
    };
    addNewContact(newContact);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field
          type="text"
          name="name"
          as={StyledInput}
          placeholder="Enter name..."
          autoFocus
        />
        <ErrorMessage name="name" component={ErrorMsg} />

        <Field
          type="tel"
          name="number"
          as={StyledInput}
          placeholder="Enter phone..."
        />
        <ErrorMessage name="number" component={ErrorMsg} />

        <StyledBtn type="submit">Add contact</StyledBtn>
      </Form>
    </Formik>
  );
};

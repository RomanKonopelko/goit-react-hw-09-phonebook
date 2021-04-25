import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Components/Contacts/Form';
import Filter from '../Components/Contacts/Filter';
import operations from '../redux/contacts/contacts-operations';
import Container from '../Components/Contacts/Container';
import s from '../form.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Container className={s.form__container} title="Phonebook">
      <Form />
      <Container className={s.list__container} title="Contacts">
        <Filter />
      </Container>
    </Container>
  );
}

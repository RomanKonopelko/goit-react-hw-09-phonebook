import s from '../../form.module.css'
import Contact from './Contact'
import { v4 as randomID } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions'
import * as selectors from '../../redux/contacts/contacts-selectors'
import operations from '../../redux/contacts/contacts-operations'


export default function Filter() {
    const filteredContacts = useSelector(selectors.getFilteredContacts)
    const isLoading = useSelector(selectors.getLoading)

    const dispatch = useDispatch();
    const onDeleteContact = id => dispatch(operations.deleteContact(id));
    const getFilter = value => dispatch(actions.getFilter(value))

    return (<>
        <label htmlFor="filter">Search contact by number or name</label>
        {isLoading && <h2>LOADING...</h2>}
        <br />
        <input
            type="text"
            name="filter"
            id="filter"
            onChange={(e) => getFilter(e.currentTarget.value)} />
        <ul className={s.form}>
            {filteredContacts.map(({ id, name, number }) => {
                return <Contact key={randomID()} id={id} name={name} number={number} onDeleteContact={() => {
                    onDeleteContact(id)
                }} s={s} />
            })}
        </ul>
    </>
    )
}


import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as randomID } from 'uuid';
import s from '../../form.module.css'
import operations from '../../redux/contacts/contacts-operations'

export default function Form() {
    const dispatch = useDispatch();
    const onSubmit = (data) => dispatch(operations.addContact(data))

    const [userName, setName] = useState('');
    const [userNumber, setNumber] = useState('');

    const isValidPhonenumber = (input) => {
        const phoneRegex = /^\d{10}$/;
        return input.match(phoneRegex) ? true : false
    };
    let nameInputId = randomID();
    let numberInputId = randomID();

    const reset = () => {
        setNumber('');
        setName('');
    };



    const handleChange = e => {
        const { value, name } = e.currentTarget;
        console.log(value);
        if (name === 'number') {
            if (isNaN(value)) {
                return
            }
            setNumber(value)
        }
        if (name === 'name') {
            const letters = /^[a-zA-Z ]+(?:\s[a-zA-Z]+)?$/
            if (!value.match(letters) && value.length > 0) {
                return
            }
            setName(value)
        }

        // this.setState({
        //     [name]: value,
        // });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (userName === 0) {
            return alert('Write your name')

        }
        if (!isValidPhonenumber(userNumber)) {
            return alert('An invalid number')
        }
        onSubmit({
            name: userName,
            number: userNumber,
        })

        reset();
    }


    return (<form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId} className={s.label}>Name</label>
        <input
            type="text"
            id={nameInputId}
            className={s.input}
            name="name"
            value={userName}
            onChange={handleChange}
            placeholder='your name'
        />
        <br />
        <label htmlFor={numberInputId} className={s.label}>Number</label>
        <input
            type="text"
            id={numberInputId}
            className={s.input}
            name="number"
            value={userNumber}
            onChange={handleChange}
            placeholder="1234567890"
        />
        <br />
        <button type="submit" className={s.button}>Add contact</button>
    </form>)
}
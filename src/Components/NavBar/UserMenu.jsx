import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors'
import authOperations from '../../redux/auth/auth-operations'
import s from '../../form.module.css'
import defaultAvatar from '../../avatar.jpg';

const { getUserName } = authSelectors


const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 30px'
    },
    avatar: {
        marginRight: 4,
        width: '60px',
        borderRadius: '50%'

    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};

export default function UserMenu() {
    const avatar = defaultAvatar;
    const name = useSelector(getUserName);

    const dispatch = useDispatch();
    const onLogout = () => dispatch(authOperations.logout)

    return (
        <div style={styles.container}>
            <img src={avatar} alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Добро пожаловать, {name}</span>
            <button type="button" className={s.button} onClick={onLogout}>
                Выйти
      </button>
        </div>
    );
}


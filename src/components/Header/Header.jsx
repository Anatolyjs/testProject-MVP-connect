import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setEventType } from '../../redux/slices/bets';
import cn from 'classnames';


const items = [
    {
        i: 'fa fa-calendar-check-o',
        a: 'Live events'
    },
    {
        i: 'fa fa-calendar',
        a: 'Future events' 
    }
]

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const eventType = useSelector(state => state.bets.eventType);
    const onItemClick = (type) => {
        dispatch(setEventType(type));
    }
    const menuItems = items.map((item, index) => (
      <div
        key={index}
        onClick={() => {
          onItemClick(item.a);
          navigate('/');
        }}
        className={cn(styles.item, item.a === eventType && styles.active)}
      >
        <i className={item.i} aria-hidden="true"></i>
        <NavLink>{item.a}</NavLink>
      </div>
    ));
    return <header className={styles.header}>
        <div className='container'>
            <div className={styles.header__body}>
                <nav className={styles.header__nav}>
                    {menuItems}
                </nav>
                {/* <div className={styles.header__auth}>
                    <button className={styles.auth__login}>Login</button>
                    <button className={styles.auth__register}>Register</button>
                </div> */}
            </div>
        </div>
    </header>
}


const MenuItem = ({ i, a, onItemClick }) => {
  return (
    <div onClick={() => {onItemClick(a)}} className={styles.item}>
      <i class={i} aria-hidden="true"></i>
      <NavLink>{a}</NavLink>
    </div>
  );
};

export default Header;
import { useNavigate } from 'react-router-dom';

import cn from 'classnames';

import styles from '../Home.module.scss';


const Event = ({event}) => {
    const navigate = useNavigate();
    return <div onClick={() => {navigate(`/event/${event.id}`)}} className={styles.event}>
        <div className={styles.event__title}>{event.title}</div>
        <div className={styles.event__members}>
            <div className={cn(styles.event__member, styles.item)}>{event.member1}</div>
            {event.date ?   <div className={cn(styles.event__time, styles.item)}>
                <div className={styles.date}>{event.date}</div>
                <div className={styles.time}>{event.time}</div>
            </div> : <div className={cn(styles.event__time, styles.item)}>
                <div>{event.type}</div>
            </div>}
           
            <div className={cn(styles.event__member, styles.item)}>{event.member2}</div>
        </div>
    </div>
}

export default Event;
import styles from './Details.module.scss';
import EventDetails from './EventDetails/EventDetails';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveEvent } from '../../../redux/slices/bets';

const Details = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const event = useSelector(state => state.bets.activeEvent)
    useEffect(() => {
        dispatch(setActiveEvent(id));
    }, [])
    
    if (!event) {
        return <div>Loading...</div>
    }
    return <section className={styles.details}>
       <EventDetails event={event}/>
    </section>
}

export default Details;
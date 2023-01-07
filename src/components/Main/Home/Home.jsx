import styles from './Home.module.scss';
import Event from './Event/Event';
import { useSelector } from 'react-redux';

const Home = () => {
    const events = useSelector(state => state.bets.activeEvents);
    const eventsList = events.map(el => <Event  key={el.id} event={el}/>);

    const activeBet = useSelector(state => state.bets.activeBets[state.bets.activeBets.length - 1]);
    const betStatus = useSelector(state => state.bets.isBetActive);

    return <section className={styles.home}>
        {betStatus && activeBet && <div className={styles.notification}>Thanks you! <br/> Your bet <span>{activeBet.title}, {activeBet.selectedBet}</span> just accepted</div>}
        <div className={styles.home__body}>
            {eventsList}
        </div>
    </section>
}


export default Home;
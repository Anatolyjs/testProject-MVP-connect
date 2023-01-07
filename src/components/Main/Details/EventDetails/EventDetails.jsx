import cn from "classnames";

import styles from "../Details.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveBets, setStatus } from "../../../../redux/slices/bets";

const coefficients = [
  {
    id: 1,
    title: "Home win",
  },
  {
    id: 2,
    title: "Draw",
  },
  {
    id: 3,
    title: "Away win",
  },
];

const EventDetails = ({ event }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  const coefficientsList = coefficients.map((el) => (
    <div
      onClick={() => {
        setSelectedButton((prev) => (prev === el.id ? 0 : el.id));
      }}
      key={el.id}
      className={cn(
        styles.coefficient,
        selectedButton === el.id && styles.active
      )}
    >
      <div className={styles.coefficient__body}>{el.title}</div>
    </div>
  ));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {title} = event;
  const onButtonClick = () => {
    dispatch(setActiveBets({title, selectedBet: coefficients[selectedButton - 1].title}));
    dispatch(setStatus(true));
    setTimeout(() => {
        dispatch(setStatus(false));
    }, 3000);
    return navigate("/");
  };

  return (
    <div className={styles.eventDetails}>
      <div className={styles.eventDetails__title}>{event.title}</div>
      <div className={styles.eventDetails__members}>
        <div className={cn(styles.eventDetails__member, styles.item)}>
          {event.member1}
        </div>
        <div className={cn(styles.eventDetails__time, styles.item)}>
          <div className={styles.date}>{event.date}</div>
          <div className={styles.time}>{event.time}</div>
        </div>
        <div className={cn(styles.eventDetails__member, styles.item)}>
          {event.member2}
        </div>
      </div>
      <div className={styles.eventDetails__coefficients}>
        {coefficientsList}
      </div>
      <button
        onClick={onButtonClick}
        disabled={!selectedButton}
        className={styles.eventDetails__btn}
      >
        Place a bet
      </button>
    </div>
  );
};

export default EventDetails;

import { useDispatch } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useEffect } from 'react';
import { setEventType } from './redux/slices/bets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEventType('Live events'));
  }, [])
  return (
    <div className='app'>
      <Header />
      <Main />
    </div>
  );
}

export default App;

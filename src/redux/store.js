import {configureStore} from '@reduxjs/toolkit';

import { betsReducer } from './slices/bets';


const store = configureStore({
    reducer: {
        bets: betsReducer
    }
})

export default store;
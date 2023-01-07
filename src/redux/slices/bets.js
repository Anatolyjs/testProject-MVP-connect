import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    events: [
        {
            id: 0,
            title: 'Champions League',
            member1: 'Portugal',
            coefficient1: '1.5',
            member2: 'France',
            coefficient2: '2.5',
            date: '30 January',
            time: '20:00',
            type: 'Future events' 
        },
        {
            id: 1,
            title: 'Champions League',
            member1: 'Germany',
            coefficient1: '1.5',
            member2: 'Belarus',
            coefficient2: '2.5',
            date: '31 January',
            time: '20:00',
            type: 'Future events' 
        },
        {
            id: 2,
            title: 'Champions League',
            member1: 'Italy',
            coefficient1: '1.5',
            member2: 'Portugal',
            coefficient2: '2.5',
            date: '2 February',
            time: '20:00',
            type: 'Future events' 
        },
        {
            id: 3,
            title: 'Champions League',
            member1: 'England',
            coefficient1: '1.5',
            member2: 'France',
            coefficient2: '2.5',
            date: '5 February',
            time: '20:00',
            type: 'Future events' 
        },
        {
            id: 4,
            title: 'Champions League',
            member1: 'Portugal',
            coefficient1: '1.5',
            member2: 'France',
            coefficient2: '2.5',
            type: 'Live events' 
        },
        {
            id: 5,
            title: 'Champions League',
            member1: 'Germany',
            coefficient1: '1.5',
            member2: 'Belarus',
            coefficient2: '2.5',
            type: 'Live events' 
        },
        {
            id: 6,
            title: 'Champions League',
            member1: 'Italy',
            coefficient1: '1.5',
            member2: 'Portugal',
            coefficient2: '2.5',
            type: 'Live events' 
        },
        {
            id: 7,
            title: 'Champions League',
            member1: 'England',
            coefficient1: '1.5',
            member2: 'France',
            coefficient2: '2.5',
            type: 'Live events' 
        },
        
    ],
    activeEvent: {},
    activeBets: [],
    activeEvents: [
        {
            id: 0,
            title: 'Champions League',
            member1: 'Portugal',
            coefficient1: '1.5',
            member2: 'France',
            coefficient2: '2.5',
            date: '30 January',
            time: '20:00',
        },
        {
            id: 1,
            title: 'Champions League',
            member1: 'Germany',
            coefficient1: '1.5',
            member2: 'Belarus',
            coefficient2: '2.5',
            date: '31 January',
            time: '20:00'
        },
        {
            id: 2,
            title: 'Champions League',
            member1: 'Italy',
            coefficient1: '1.5',
            member2: 'Portugal',
            coefficient2: '2.5',
            date: '2 February',
            time: '20:00'
        },
        {
            id: 3,
            title: 'Champions League',
            member1: 'England',
            coefficient1: '1.5',
            member2: 'France',
            coefficient2: '2.5',
            date: '5 February',
            time: '20:00'
            
        },
    ],
    eventType: 'live events',
    isBetActive: false
}

const betsSlice = createSlice({
    name: 'bets',
    initialState,
    reducers: {
        setActiveEvent: (state, action) => {
            state.activeEvent = state.events[action.payload];
        },
        setActiveBets: (state, action) => {
            state.activeBets.push(action.payload);
        },
        setStatus: (state, action) => {
            state.isBetActive = action.payload;
        },
        setEventType: (state, action) => {
            state.eventType = action.payload;
            state.activeEvents = state.events.filter(event => event.type === action.payload);
        }
    }
})

export const betsReducer = betsSlice.reducer;

export const { setActiveEvent, setActiveBets, setStatus, setEventType } = betsSlice.actions;




import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Types
const AIRPORTS_SETTED = "AIRPORTS_SETTED";
const AIRLINES_SETTED = "AIRLINES_SETTED";
const FLIGHTS_SETTED = "FLIGHTS_SETTED";
// Models


// State
const initialState = {
	airports: [],
	airlines: [],
	flights: []
}

// Actions
export const airportsSettedAction = (value: []) => ({
	type: AIRPORTS_SETTED,
	value
});

export const airlinesSettedAction = (value: []) => ({
	type: AIRLINES_SETTED,
	value
});

export const flightsSettedAction = (value: []) => ({
	type: FLIGHTS_SETTED,
	value
});

// Reducers
const root = (state = initialState, action: any) => {
	switch (action.type) {
		case AIRPORTS_SETTED:
			return {
				...state,
				airports: action.value,
			};
		case AIRLINES_SETTED:
			return {
				...state,
				airlines: action.value,
			};
		case FLIGHTS_SETTED:
			return {
				...state,
				flights: action.value,
			};
		default:
			return state;
	}
};

const store = createStore(
	root,
	composeWithDevTools()
);

export default store;
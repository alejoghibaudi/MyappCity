//ACtual state go here in reducers
import { GET_ITEMS, ADD_IDEM, DELETE_IDEM } from '../Actions/types';

const initialState = {
	cities: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS:
			return {
				...state,
				cities: action.payload
			};
		default:
			return state;
	}
}

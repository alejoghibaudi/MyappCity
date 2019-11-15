import axios from 'axios';
import { GET_ITEMS, ADD_IDEM, DELETE_IDEM } from './types';

export const getItems = () => dispatch => {
	axios.get('http://localhost:4000/api/city').then(res =>
		dispatch({
			type: GET_ITEMS,
			payload: res.data.Respuesta
		})
	);
};

//ACtual state go here in reducers
import {GET_ITEMS,ADD_IDEM,DELETE_IDEM} from '../Actions/types';

const initialState={
    items:[
        {id:123, name:'Alejo'},
        {id:1234, name:'Alejodete'}
        
    ]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
            default:
                return state;
    }
}
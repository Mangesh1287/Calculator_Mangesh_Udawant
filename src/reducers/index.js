import { ADD_ELEM, EQUAL, CLEAR } from '../constants';

const calcState = {
    value: 0,
    btns: [ "1", "2", "3", "C", "4", "5", "6", "/", "7", "8", "9", "*", "+", "0", "-", "=" ]
} 

const reducer = (state = calcState, action) => {
    switch(action.type){
        case ADD_ELEM:
            return{
                ...state,
                value: state.value === 0 ? action.text : state.value + action.text
            }
        case EQUAL:
            return{
                ...state,
                value: eval(action.value)
            }
        case CLEAR:
            return{
                ...state,
                value: 0
            }
        default:
            return state;
    }
}

export default reducer;
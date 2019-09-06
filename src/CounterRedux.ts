interface CounterAction {
    type: 'INC' | 'DEC'
}

const initialState : number = 0;

const counterReducer = (state = initialState, action: CounterAction) => {
    switch (action.type) {
        case 'INC' : return state + 1;
        case 'DEC' : return state - 1;
        default    : return state;
    }
}

export const incrementCounter = () : CounterAction => {
    return {
        type: 'INC'
    };
}

export const decrementCounter = () : CounterAction => {
    return {
        type: 'DEC'
    };
}

export default counterReducer;
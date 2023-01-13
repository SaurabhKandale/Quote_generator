const initialState={
    bookmarks:[]
}

export const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'ADD_TO_BOOK':
            return {
                ...state,
                bookmarks:[...state.bookmarks,actions.payLoad.new]
            };

        default: return state;
    }
}


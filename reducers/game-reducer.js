const initialState = {
  going: true,
  round: 1,
}

function gameReducer(state=initialState, action) {
  switch (action.type) {

    case 'END_GAME':
      return {...state, going: false};

    case 'NEXT_ROUND':
      return {...state, round: action.round + 1};

    default:
      return state;
  }
}

export default gameReducer;

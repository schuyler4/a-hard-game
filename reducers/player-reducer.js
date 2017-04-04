const initialState = {
  x: 275,
  y: 150,
  direction: 'UP',
  shots: []
}

export default function playerReducer(state=initialState, action) {
  switch (action.type) {
    case 'MOVE':
      return {...state, x: state.x + action.x, y: state.y + action.y};

    case 'CHANGE_DIRECTION':
      return {...state, direction: action.direction};

    case 'SHOOT':
      const shot = {
        xOne: action.xOne,
        yOne: action.yOne,
        xTwo: action.xOne,
        yTwo: action.yTwo
      };
      return {...state, shots: [...state.shots, shot]};

    case 'MOVE_SHOOT':
      return {...state, shots: state.shots.map((shot) => {
        return {yOne: shot.yOne - 5, yTwo: shot.yTwo - 5};
      })};

    default:
      return state;
  }
}

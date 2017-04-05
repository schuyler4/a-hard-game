const initialState = {
  x: 275,
  y: 150,
  direction: 'UP',
  shots: []
}
const shotSpeed = 5;

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
        xTwo: action.xTwo,
        yTwo: action.yTwo
      };
      return {...state, shots: [...state.shots, shot]};

    case 'MOVE_SHOOT':
      return {...state, shots: state.shots.map((shot) => {
        return {...shot,
          yOne: shot.yOne - shotSpeed,
          yTwo: shot.yTwo - shotSpeed};
      })};
      
    default:
      return state;
  }
}

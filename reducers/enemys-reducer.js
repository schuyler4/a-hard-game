const initialState = {
  entitys: [],
  shots: []
};

function enemysReducer(state=initialState, action) {
  switch (action.type) {

    case 'ADD_ENEMY':
      const enemy = {x: action.x, y: action.y };
      return {...state, entitys: [...state.entitys, enemy]};

    case 'MOVE_ENEMY':
    return {
      ...state,
      entitys: state.entitys.map((enemy, index) => {
        if(action.index)
          if(index !== action.index)
            return enemy;

          return {...enemy, x: action.x, y: action.y};
        return {...enemy, x: action.x, y: action.y};
      })
    };

    case 'ENEMY_SHOOT':
      //return updateXandY(state, 'shots', action)
      /*return state.map((item, index) => {
        if(index !== action.index) {
          return item;
        }

        return {...item, shots: [...state, shot]};
      });*/
      const shot = {x: action.startX, y: action.startY};
      return {...state, shots: [...state.shots, shot]};

    case 'ENEMY_MOVE_SHOOT':
      return {
        ...state,
        shots: state.shots.map((shot) => {
          return {...shot, y: shot.y + 5};
        })
      };
      /*return state.map((item, index) => {
        return item.shots.map((shot, index) => {
          return {...shot, y: shot.y + 5};
        });
      });*/

    default:
      return state;
  }
}

export default enemysReducer;

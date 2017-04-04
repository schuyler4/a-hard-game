export function move(x, y) {
  return {
    type: 'MOVE',
    x,
    y
  };
}

export function changeDirection(direction) {
  return {
    type: 'CHANGE_DIRECTION',
    direction
  };
}

export function shoot() {
  return {
    type: 'SHOOT'
  };
}

export function moveShoot(xOne, yOne, xTwo, yTwo) {
  return {
    type: 'MOVE_SHOOT',
    xOne,
    yOne,
    xTwo,
    yTwo
  };
}

export function removeShoot(index) {
  return {
    type: 'REMOVE_SHOOT',
    index
  };
}

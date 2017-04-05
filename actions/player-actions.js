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

export function shoot(xOne, yOne, xTwo, yTwo) {
  return {
    type: 'SHOOT',
    xOne,
    yOne,
    xTwo,
    yTwo
  };
}

export function moveShoot() {
  return {
    type: 'MOVE_SHOOT'
  };
}

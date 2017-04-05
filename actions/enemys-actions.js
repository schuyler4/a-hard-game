export function addEnemy(x, y) {
  return {
    type: 'ADD_ENEMY',
    x,
    y
  }
}

export function moveEnemy(x, y, index) {
  return {
    type: 'MOVE_ENEMY',
    x,
    y,
    index
  }
}

export function enemyShoot(startX, startY, index) {
  return {
    type: 'ENEMY_SHOOT',
    startX,
    startY
  }
}

export function enemyMoveShoot() {
  return {
    type: 'ENEMY_MOVE_SHOOT',
  }
}

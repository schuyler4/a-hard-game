export function endGame() {
  return {
    type: 'END_GAME'
  }
}

export function nextRound(round) {
  return {
    type: 'NEXT_ROUND',
    round
  }
}

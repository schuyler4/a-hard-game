import reducers from './reducers';
import { createStore } from 'redux';
import { move,
  changeDirection, shoot, moveShoot } from './actions/player-actions'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const playerImage = new Image();
playerImage.src = 'player.png'

const enemyImage = new Image();
enemyImage.src = 'enemy.png';
const playerSpeed = 0;

const store = createStore(reducers);

document.addEventListener('keydown', (event) => {
  if(event.key === 'w')
    store.dispatch(changeDirection('UP'));
  if(event.key === 's')
    store.dispatch(changeDirection('DOWN'));
  if(event.key === 'd')
    store.dispatch(changeDirection('RIGHT'));
  if(event.key === 'a')
    store.dispatch(changeDirection('LEFT'));
  if(event.code === 'Space')
    const { x, y } = store.getState().playerReducer;
    store.dispatch(shoot());
}, false);

function movePlayer() {
  const { direction } = store.getState().playerReducer
  if(direction === 'UP')
    store.dispatch(move(0, -playerSpeed));
  else if(direction === 'DOWN')
    store.dispatch(move(0, playerSpeed));
  else if(direction === 'RIGHT')
    store.dispatch(move(playerSpeed, 0));
  else if(direction === 'LEFT')
    store.dispatch(move(-playerSpeed, 0));
}

function drawPlayer() {
  const { x, y } = store.getState().playerReducer;
  ctx.drawImage(playerImage, x, y);
  movePlayer();
}

function drawShoot() {
  const { x, y, shots } = store.getState().playerReducer;
  shots.forEach((shot) => {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(x + 6, y + shot.yOne, 5, 10);
    ctx.fillRect(x + 40, y + shot.yTwo, 5, 10);
    ctx.closePath();
  });
  store.dispatch(moveShoot());
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawShoot();
  drawPlayer();
}

setInterval(draw, 10)

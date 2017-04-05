import reducers from './reducers';
import { createStore } from 'redux';
import { move,
  changeDirection, shoot, moveShoot } from './actions/player-actions';
import { addEnemy, enemyShoot, moveEnemy,
  enemyMoveShoot } from './actions/enemys-actions';

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

  if(event.code === 'Space') {
    const { x, y } = store.getState().playerReducer;
    store.dispatch(shoot(x + 6, y, x + 40, y));
  }
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
    ctx.fillRect(shot.xOne, shot.yOne, 5, 10);
    ctx.fillRect(shot.xTwo, shot.yTwo, 5, 10);
    ctx.closePath();
  });
  store.dispatch(moveShoot());
}

function drawEnemy() {
  store.getState().enemysReducer.entitys.forEach((enemy) => {
    ctx.drawImage(enemyImage, enemy.x, enemy.y);
  });
  store.getState().enemysReducer.shots.forEach((shot) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(shot.x, shot.y, 5, 10);
  });
}

function addEnemys() {
  for(let i = 0; i < store.getState().gameReducer.round; i++) {
    const randomX = Math.floor(Math.random() * (600 - 0 + 1));
    store.dispatch(addEnemy(randomX, -50));
  }
}

function updateEnemy() {
  const { playerReducer, enemysReducer } = store.getState();
  enemysReducer.entitys.forEach((enemy, i) => {
    if(enemy.y < playerReducer.y)
      store.dispatch(moveEnemy(enemy.x, enemy.y + 3, i));
      store.dispatch(enemyShoot(enemy.x + enemyImage.width / 2 - 4,
        enemy.y + 35));
    if(enemy.x > playerReducer.x)
      store.dispatch(moveEnemy(enemy.x - 3, enemy.y, i));
    else if(enemy.x < playerReducer.x)
      store.dispatch(moveEnemy(enemy.x + 3, enemy.y, i));

  });

  store.dispatch(enemyMoveShoot());
}

addEnemys();
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawShoot();
  drawPlayer();
  drawEnemy();
  updateEnemy();
}

setInterval(draw, 10)

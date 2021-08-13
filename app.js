const among = document.querySelector('.among')
const blocks = [...document.getElementsByClassName('block')]
// const button = [...document.querySelectorAll('button')]
const startButton = document.querySelector('.start')
const replayButton = document.querySelector('.replay')
const quitButton = document.querySelector('.quit')

let running = false

function startGame() {
  let interval = 2
  blocks.forEach((block) => {
    const css = 'blockanimation ' + interval + 's infinite linear'
    block.style.animation = css
    console.log(css)
    interval = interval + 1
  })
  checkCollision()
}

function endGame() {
  blocks.forEach((block) => {
    block.style.animation = ''
  })
  interval = 2
}

function quitGame() {
  window.close()
}

// fucntion for jump
//when upper key pressed change the top to 300px and 1 sec later
// bring the player back down to 320px

function jump() {
  among.style.top = `230px`

  // adding a timeOut method for the character, sets the duration of the jump for the character
  setTimeout(() => {
    among.style.top = `330px`
  }, 300)
}

function down() {
  among.style.top = `330px`
}

// function to see if the block and the character collided
function checkCollision() {
  setInterval(function () {
    //getting among current position
    let amongTop = parseInt(
      window.getComputedStyle(among).getPropertyValue('top')
    )
    blocks.forEach((block) => {
      let blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue('left')
      )
      if (blockLeft < 40 && blockLeft > 0 && amongTop >= 330) {
        running = false

        replayButton.classList.remove('hide')
        endGame()

        // alert('Game Over')
      }
    }) // getting blocks current position
  }, 10)
}
// addEventListener for pressing the key
// keyDOWN means the key is pressed
// number 38 is the number for the upper key
window.addEventListener('keydown', handleKeyPress)
function handleKeyPress(e) {
  if (e.keyCode === 38) {
    jump()
  }
}

startButton.addEventListener('click', startGame)

replayButton.addEventListener('click', startGame)

quitButton.addEventListener('click', quitGame)

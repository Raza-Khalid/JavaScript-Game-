const among = document.querySelector('.among')
const blocks = [...document.getElementsByClassName('block')]
const startButton = document.getElementById('btnStart')
const replayButton = document.getElementById('btnReplay')
const quitButton = document.getElementById('btnQuit')
let running = false

// start game function
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
//end game function
function endGame() {
  blocks.forEach((block) => {
    block.style.animation = ''
  })
  interval = 2
}
//Quit Game function
function quitGame() {
  window.history.back()
}

//when up key pressed, change the top to 300px and 300ms sec later bring the player back down to 320px
function jump() {
  among.style.top = `230px`
  //duration of the jump
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
      }
    }) // getting blocks current position
  }, 10)
}
// addEventListener
window.addEventListener('keydown', handleKeyPress)
function handleKeyPress(e) {
  if (e.keyCode === 38) {
    jump()
  }
}

startButton.addEventListener('click', startGame)
replayButton.addEventListener('click', startGame)
quitButton.addEventListener('click', quitGame)

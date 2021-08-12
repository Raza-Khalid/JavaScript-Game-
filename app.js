const among = document.querySelector('.among')
const blocks = [...document.getElementsByClassName('block')]
// const buttons = [...document.querySelector('button')]
let interval = 2
let running = true

function start() {
  blocks.forEach((block) => {
    block.style.animation = 'block ' + interval + 's infinite linear'
    interval = interval + 1
  })
  // buttons.forEach(buttons => {

  // });
}

function end() {
  blocks.forEach((block) => {
    block.style.animation = ''
  })
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
let checkCollision = setInterval(function () {
  //getting among current position
  let amongTop = parseInt(
    window.getComputedStyle(among).getPropertyValue('top')
  )
  // getting blocks current position
  blocks.forEach((block) => {
    let blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue('left')
    )
    if (blockLeft < 40 && blockLeft > 0 && amongTop >= 330) {
      console.log(blockLeft, amongTop)
      running = false
      end()
      // alert('Game Over')
    }
  })
}, 10)

// addEventListener for pressing the key
// keyDOWN means the key is pressed
// number 38 is the number for the upper key
window.addEventListener('keydown', handleKeyPress)
function handleKeyPress(e) {
  if (e.keyCode === 38) {
    jump()
  }
}

// //keyUP means the key is NOT pressed
// window.addEventListener('keyup', handleRelease)
// function handleRelease(e) {
//   if (e.keyCode === 38) {
//     down()
//   }
// }

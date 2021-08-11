//variable for  character
// variable for block
const among = document.querySelector('.among')
const block = document.getElementsByClassName('block')

// fucntion for jump
//when upper key pressed change the top to 300px and 1 sec later
// bring the player back down to 320px

function jump() {
  among.style.top = `210px`

  function down() {
    among.style.bottom = `330px`
  }
  // adding a timeOut method for the character, sets the duration of the jump for the character
  setTimeout(() => {
    among.style.top = `330px`
  }, 500)
}

// function to see if the block and the character collided
let colision = setInterval(function () {
  let amongTop = parseInt(
    window.getComputedStyle(among).getPropertyValue('top')
  )
}, 5)

// addEventListener for pressing the key
// keyDOWN means the key is pressed
// number 38 is the number for the upper key
window.addEventListener('keydown', handleKeyPress)
function handleKeyPress(e) {
  if (e.keyCode === 38) {
    jump()
  }
}

//keyUP means the key is NOT pressed
window.addEventListener('keyup', handleRelease)
function handleRelease(e) {
  if (e.keyCode === 38) {
    down()
  }
}

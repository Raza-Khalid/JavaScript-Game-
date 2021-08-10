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
  // adding a timeOut method for the character, sets the duration for the character
  setTimeout(() => {
    among.style.top = `330px`
  }, 500)
}

// addEventListener for for pressing the key
// keydown means the key is pressed
// number 38 is the number for the upper key
window.addEventListener('keydown', handleKeyPress)
function handleKeyPress(e) {
  if (e.keyCode === 38) {
    jump()
  }
}

//keyup means the key is NOT pressed
window.addEventListener('keyup', handleRelease)
function handleRelease(e) {
  if (e.keyCode === 38) {
    down()
  }
}

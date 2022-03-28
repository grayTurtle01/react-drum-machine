import React from 'react'

import './App.css'
import './Animations.css'
import './Switch.css'
import DrumMachine from './components/DrumMachine'


function App(props) {

  // return
  return (
   <div>
     <DrumMachine />
   </div> 
  )
}


export default App;

// KeyBoard
document.addEventListener('keydown', foo)

function foo(event){
  let code = event.code
  let letter = code.slice(3)
 
  try {
    let audio = document.querySelector(`#${letter}`)
    let volume = document.querySelector('#slider').value
    audio.volume = volume/100

    let check = document.querySelector('#on_off')
    if( check.checked){
      audio.play()
      let display = document.querySelector('#display')
      display.innerText = letter

      // Animation
      let button = document.querySelector(`#${letter}-button`)
      
      button.classList.add('click-animation')
      button.addEventListener('animationend', function(){
          this.classList.remove('click-animation')
      })

    }

    

  } catch (error) {
    
  }

}

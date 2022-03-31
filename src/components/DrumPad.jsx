import React, {useContext} from 'react'

import {Contexto} from './DrumMachine'

function DrumPad(props){
    let state = useContext(Contexto)
   
    const cloud_path = "https://s3.amazonaws.com/freecodecamp/drums/"
                       
      
    const handleClick = (e) => {
      
      if( state.is_on ){
      
          let button = e.target;

          // play audio
          let audio = button.querySelector('audio')
          audio.volume = state.volume/100
          audio.play()

          // show message    
          let display = document.querySelector('#display')
          display.innerText = props.sound

          // run animation
          button.classList.add('click-animation')
          button.addEventListener('animationend', function(){
              this.classList.remove('click-animation')
          })
      }

    }

    
    return(
        <button className="drum-pad" 
                id={props.letter + '-button'}
                onClick={handleClick}
                >

            {props.letter}

            <audio  id={props.letter}
                    className="clip" 
                    src={cloud_path + props.sound + '.mp3'}
                    sound={props.sound}
                    >

            </audio>
        </button> )

}

export default DrumPad;
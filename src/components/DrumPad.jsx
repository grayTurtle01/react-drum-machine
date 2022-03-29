import React from 'react'

function DrumPad(props){

   
    const cloud_path = "https://s3.amazonaws.com/freecodecamp/drums/"
                       
      
    const handleClick = (e) => {
      
      if( props.is_on ){
      
          let button = e.target;

          // play audio
          let audio = button.querySelector('audio')
          audio.volume = props.volume/100
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
                id={props.name + '-button'}
                onClick={handleClick}
                >

            {props.name}

            <audio id={props.name}
                    className="clip" 
                    src={cloud_path + props.sound + '.mp3'}
                    >

            </audio>
        </button> )

}

export default DrumPad;
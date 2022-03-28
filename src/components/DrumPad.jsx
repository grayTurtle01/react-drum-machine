import React from 'react'

class DrumPad extends React.Component{
    constructor(props){
      super(props)

      this.state = {
          cloud_path : "https://s3.amazonaws.com/freecodecamp/drums/"
      }
    }
      

    handleClick = (e) => {
      
      if( this.props.is_on){
      
          let button = e.target;

          // play audio
          let audio = button.querySelector('audio')
          audio.volume = this.props.volume/100
          audio.play()

          // show message    
          let display = document.querySelector('#display')
          display.innerText = this.props.sound

          // run animation
          button.classList.add('click-animation')
          button.addEventListener('animationend', function(){
              this.classList.remove('click-animation')
          })
      }

    }

    render(){
        return(
          <button className="drum-pad" 
                  id={this.props.name + '-button'}
                  onClick={this.handleClick}
                  >

              {this.props.name}

              <audio id={this.props.name}
                     className="clip" 
                     src={this.state.cloud_path + this.props.sound + '.mp3'}
                     >

              </audio>
          </button> )
    }  
}

export default DrumPad;
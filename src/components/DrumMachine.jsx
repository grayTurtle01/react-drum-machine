import React from 'react';
import DrumPad from './DrumPad'

class DrumMachine extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            is_on: true,
            volume: 50
        }
    }     

 
    on_off = (e) => {
        this.setState( (state, props) =>( {
            is_on: !state.is_on
        }))

    }

    changeVolume = (e) => {
       let slider = e.target
       this.setState({
           volume: slider.value
       })     
    }

    render(){
        return(
            <div id="drum-machine">

               <div id="buttons"> 
                <DrumPad name="Q" sound="Heater-1" is_on={this.state.is_on} volume={this.state.volume}/>
                <DrumPad name="W" sound="Heater-2"  is_on={this.state.is_on} volume={this.state.volume}/>
                <DrumPad name="E" sound="Heater-3" is_on={this.state.is_on} volume={this.state.volume}/>

                <DrumPad name="A" sound="Heater-4_1" is_on={this.state.is_on} volume={this.state.volume}/>
                <DrumPad name="S" sound="Heater-6" is_on={this.state.is_on} volume={this.state.volume}/>
                <DrumPad name="D" sound="Dsc_Oh" is_on={this.state.is_on} volume={this.state.volume}/>

                <DrumPad name="Z" sound="Kick_n_Hat" is_on={this.state.is_on} volume={this.state.volume}/>
                <DrumPad name="X" sound="RP4_KICK_1" is_on={this.state.is_on} volume={this.state.volume}/>
                <DrumPad name="C" sound="Cev_H2" is_on={this.state.is_on} volume={this.state.volume}/>
               </div>
                
                <div id="controls">
                    <div>
                        Power:{ this.state.is_on ? 'On': 'Off'} <br/>
                        <label className="switch">
                            <input type="checkbox" id="on_off" 
                            onChange={this.on_off} 
                            checked={this.state.is_on}/>
                            <span className="slider"></span>
                        </label>
                    </div>

                    <div id="display"></div>

                    <div>
                        <input type="range" id="slider" onChange={this.changeVolume} 
                               min="0" max="100"  value={this.state.volume}/>
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default DrumMachine;
import React from 'react';
import DrumPad from './DrumPad'
import {useState} from 'react'

function DrumMachine(){

    const [is_on, toggle] = useState(true)
    const [volume, setVolume] = useState(50) 
    
 
    const on_off = (e) => {
        toggle(!is_on)
        
    }

    const changeVolume = (e) => {
       let slider = e.target
        setVolume(slider.value)
            
    }

  
    return(
        <div id="drum-machine">

            <div id="buttons"> 
                <DrumPad name="Q" sound="Heater-1" is_on={is_on} volume={volume}/>
                <DrumPad name="W" sound="Heater-2"  is_on={is_on} volume={volume}/>
                <DrumPad name="E" sound="Heater-3" is_on={is_on} volume={volume}/>

                <DrumPad name="A" sound="Heater-4_1" is_on={is_on} volume={volume}/>
                <DrumPad name="S" sound="Heater-6" is_on={is_on} volume={volume}/>
                <DrumPad name="D" sound="Dsc_Oh" is_on={is_on} volume={volume}/>

                <DrumPad name="Z" sound="Kick_n_Hat" is_on={is_on} volume={volume}/>
                <DrumPad name="X" sound="RP4_KICK_1" is_on={is_on} volume={volume}/>
                <DrumPad name="C" sound="Cev_H2" is_on={is_on} volume={volume}/>
            </div>
            
            <div id="controls">
                <div>
                    Power:{ is_on ? 'On': 'Off'} <br/>
                    <label className="switch">
                        <input type="checkbox" id="on_off" 
                        onChange={on_off} 
                        checked={is_on}/>
                        <span className="slider"></span>
                    </label>
                </div>

                <div id="display"></div>

                <div>
                    <input type="range" id="slider" onChange={changeVolume} 
                            min="0" max="100"  value={volume}/>
                </div>
                

            </div>
        </div>
    )
    
}

export default DrumMachine;
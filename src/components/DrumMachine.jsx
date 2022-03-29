import React from 'react';
import DrumPad from './DrumPad'
import {useState} from 'react'

import {keys, keys2} from '../helpers'

function DrumMachine(){

    const [is_on, toggle] = useState(true)
    const [volume, setVolume] = useState(50)
    const [bank, setBank] = useState('1')
    
 
    const on_off = (e) => {
        toggle(!is_on)
        
    }

    const changeVolume = (e) => {
       let slider = e.target
        setVolume(slider.value)
            
    }

    const selectBank = (e) => {
        let radio = e.target
        let bank_number = radio.value
        setBank(bank_number)
    }
    

    let botones = keys.map( (boton, index) => <DrumPad  key={index} 
                                                        name={boton.letter} 
                                                        sound={boton.sound}
                                                        is_on={is_on}
                                                        volume={volume}></DrumPad>)

    let botones2 = keys2.map( (boton, index) => <DrumPad  key={index} 
                                                        name={boton.letter} 
                                                        sound={boton.sound}
                                                        is_on={is_on}
                                                        volume={volume}></DrumPad>)


    return(
        <div id="drum-machine">
           
      
            <div id="buttons"> 
                { bank === '1'? botones: botones2}
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
                
                Select Bank:
                <div>
                    Bank 1:
                    <input type="radio" name="bank" value="1"  onChange={selectBank} defaultChecked={true}/>

                    Bank 2:
                    <input type="radio" name="bank" value="2"  onChange={selectBank}/>
                </div>    


            </div>
        </div>
    )
    
}

export default DrumMachine;
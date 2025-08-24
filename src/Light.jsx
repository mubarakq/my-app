import { useState } from "react";


function Light (){

    const [lightState, setLight] = useState('red');

    function changeState(color){
        setLight(color)
    }

    // helping function 
    function checkState () {
        if(lightState == 'red'){
            return 'Red is On'
        } else if (lightState == 'green'){
            return 'Green is On'
        } else{
            return 'Yello id On'
        }
    }

    return(
        <>
            <h2>{checkState()}</h2>
            <button onClick={()=> changeState('red')}>red {lightState == 'red' ? 'LightOn 🔆' : 'LightOff 🌑' }</button><br /><br />
            <button onClick={()=> changeState('yellow')}>yellow {lightState =='yellow' ? 'LightOn 🔆' : 'LightOff 🌑' }</button><br /><br />
            <button onClick={()=> changeState('green')}>green {lightState == 'green' ? 'LightOn 🔆' : 'LightOff 🌑' }</button><br /><br />
        </>
    )
}
export default Light
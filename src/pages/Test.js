import {React, useState} from 'react'

function Test () {
    
    const [color, setColor] = useState(false)
    
    function handleColor(e) {
        setColor(!color)
        console.log(e);
    }

    return(
        <div>
            <button
            onClick={handleColor}
            style={{backgroundColor:color? 'red':'blue'}}>change color</button>
        </div>
    )
}

export default Test;
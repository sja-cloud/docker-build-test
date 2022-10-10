import React from 'react'
import {useState} from 'react'
import Tab1 from '../components/Tab1'
import Tab2 from '../components/Tab2'

export default function Maintab () {

// boolean of false 
    const [show, setShow] = useState(false)

    // the tabs you wish to render
const [tab1, setTab1] = useState(<Tab1/>)
const [tab2, setTab2] = useState(<Tab2/>)


const [color, setColor] = useState(false)


// handle the boolean switch by setting state to true
const handleTab =  () => {
   
    setShow(!show)
}


    return (
        <div>

            <button onClick={handleTab}>tab1 </button>
            <button onClick={handleTab}>tab2</button>


            <div>
                {/* conditional render, if the state is true then show tab one or tab two */}
             {show? <Tab1/> : <Tab2/>}
                
            </div>
        </div>
    )
}
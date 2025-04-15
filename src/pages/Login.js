import React from 'react'
import {useState} from 'react'
import Loggedin from '../components/Loggedin'
import Loggedout from '../components/Loggedout'

export default function Login () {
    
    const [Login, setLogin] = useState(<Loggedin/>)
    const [Logout, setLogout] = useState(<Loggedout/>)
    
    const [logginIn, setLoggedIn] = useState(false)

    const handleLogin = () => {
        setLoggedIn(!logginIn)

    }
    

    return (
        <div>
            <button id='Login' onClick={handleLogin}> {logginIn? <Loggedin/> : <Loggedout/>}</button>
           

               
        </div>
    )
}
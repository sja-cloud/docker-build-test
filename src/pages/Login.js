import React from 'react'
import {useState} from 'react'
import Loggedin from '../components/Loggedin'
import Loggedout from '../components/Loggedout'

export default function Login () {
    
    const [Login, setLogin] = useState(<Loggedin/>)
    const [Logout, setLogout] = useState(<Loggedout/>)
    
    const [logginIn, setLoggedIn] = useState(false)

    // 
    
    
    const handleLogin = () => {
        setLoggedIn(!logginIn)
    }

    const handleLogout = () => {
        setLoggedIn(!logginIn)
    }

    return (
        <div>
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleLogout} >Log out</button>

                {logginIn? <Loggedin/> : <Loggedout/>}
        </div>
    )
}
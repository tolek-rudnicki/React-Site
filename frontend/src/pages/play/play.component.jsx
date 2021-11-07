import React from 'react'
import './play.styles.css'
import * as utils from '../../utils'

export const Play = () => (
    <div className="Main">
        <div className='buttons'>
            <button id='Home' onClick={utils.home}>Home</button>
            <button id='Play' onClick={utils.play}>Play</button>
            <button id='Whitelist' onClick={utils.whitelist}>Whitelist</button>
            <button id='Signup' onClick={utils.sign}>Signup</button>
            <button id='Login' onClick={utils.login}>Login</button>
        </div>
        <div className="text">
            <h1 id="h1">TEXT</h1>
            <p id="p">IP: undefined</p>
        </div>
    </div>
)

export default Play;
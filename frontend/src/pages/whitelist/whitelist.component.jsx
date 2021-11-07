import React from 'react'
import * as utils from '../../utils'
import { send_info } from '../../backend-stuff/communication/Comunication'

export const Whitelist = () => (
    <div className="Main">
        <div className='buttons'>
            <button id='Home' onClick={utils.home}>Home</button>
            <button id='Play' onClick={utils.play}>Play</button>
            <button id='Whitelist' onClick={utils.whitelist}>Whitelist</button>
            <button id='Signup' onClick={utils.sign}>Signup</button>
            <button id='Login' onClick={utils.login}>Login</button>
        </div>
        <div className="text">
            <h1>The nick will be sent when you click off the input box</h1>
            <div className="input">
                <input type='search' onBlur={send_info} placeholder="Please enter MC nick"></input>
            </div>
        </div>
    </div>
)
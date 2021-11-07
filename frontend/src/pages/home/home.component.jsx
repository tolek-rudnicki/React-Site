import React from 'react'
import * as utils from '../../utils'

export const Home = () => (
    <div>
        <div className='buttons'>
            <button id='Home' onClick={utils.home}>Home</button>
            <button id='Play' onClick={utils.play}>Play</button>
            <button id='Whitelist' onClick={utils.whitelist}>Whitelist</button>
            <button id='Signup' onClick={utils.sign}>Signup</button>
            <button id='Login' onClick={utils.login}>Login</button>
        </div>
   </div>
)

export default Home;
import React from 'react'
import { signup } from '../../backend-stuff/communication/Comunication'
import * as utils from '../../utils'

function send_data() {
    var nk = document.getElementById("nick").value
    var em = document.getElementById("email").value
    var pswd = document.getElementById("password").value
    //console.log(em)
    //console.log(pswd)
    signup(em, pswd, nk)
    //signup_p(pswd)

    WebSocketTest("check=" + nk + "|" + em + "|" + pswd)
}

function WebSocketTest(msg) {
            
    if ("WebSocket" in window) {
       
       // Let us open a web socket
       var ws = new WebSocket("ws://localhost:6789/");
        
       ws.onopen = function() {
         ws.send(msg)
       };
        
       ws.onmessage = function (evt) { 
          var received_msg = evt.data;
          if(received_msg === "NC_ERR") {
            alert("The signup process did not work, please try again!")
          }
       };
        
       ws.onclose = function() { 
          
       };
    } else {
      
       // The browser doesn't support WebSocket
       alert("WebSocket NOT supported by your Browser!");
    }
 }

export const Singup = () => (
    <div className="Main">
        <div className='buttons'>
            <button id='Home' onClick={utils.home}>Home</button>
            <button id='Play' onClick={utils.play}>Play</button>
            <button id='Whitelist' onClick={utils.whitelist}>Whitelist</button>
            <button id='Signup' onClick={utils.sign}>Signup</button>
            <button id='Login' onClick={utils.login}>Login</button>
        </div>
        <div className="text">
            <h1>Your account will be sent when you click "submit"</h1>
            <h2>Please enter you nick</h2>
            <input id='nick'></input>
            <h1>Please enter email</h1>
            <input id='email' type='email'></input>
            <h2>Please enter password</h2>
            <input id='password' type='password'></input>
            <button id='Submit' onClick={send_data}>Submit</button>
        </div>
    </div>
)
import React from 'react'
import * as utils from '../../utils'
import { signup } from '../../backend-stuff/communication/Comunication'

function send_data() {
    //var nk = document.getElementById("nick").value
    var em = document.getElementById("email").value
    var pswd = document.getElementById("password").value
    //console.log(em)
    //console.log(pswd)
    signup(em, pswd)
    //signup_p(pswd)

    WebSocketTest("l-check=" + em + "|" + pswd)
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
          alert(received_msg)
       };
        
       ws.onclose = function() { 
          
       };
    } else {
      
       // The browser doesn't support WebSocket
       alert("WebSocket NOT supported by your Browser!");
    }
 }

export const Login = () => (
    <div className='Main'>
        <div className='buttons'>
            <button id='Home' onClick={utils.home}>Home</button>
            <button id='Play' onClick={utils.play}>Play</button>
            <button id='Whitelist' onClick={utils.whitelist}>Whitelist</button>
            <button id='Signup' onClick={utils.sign}>Signup</button>
            <button id='Login' onClick={utils.login}>Login</button>
        </div>
        <div className="text">
            
            <h1>Please enter email</h1>
            <input id='email' type='email'></input>
            <h2>Please enter password</h2>
            <input id='password' type='password'></input>
            <button id='Submit' onClick={send_data}>Login</button>
        </div>
    </div>
)
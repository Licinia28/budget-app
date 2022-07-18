import React from 'react';
import {useHistory} from 'react-router-dom';
import {link} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';

import {auth} from '../firebase/auth'; 

function Login(){
    const[Email,setEmail] = useState('')
    const[Password,setPassword] = useState('');

 

let history = useHistory();

const login =(()=>{
    signInWithEmailAndPassword(auth, email, password).then()=>{
        history.push("/Home");
    
    }).catch((err)=>{
        console.log(err);
    })
    
})

return(
    <div className="container">
        <h1>Welcome Back</h1>
        <p></p>
        <div className="content">
            <label htmlFor="email">Email:</label><br></br>
            <input type="text" placeholder="" id="email" onChange={e => setEmail(e.target.value)} /><br></br>
        </div>

        <div className="content">
            <label htmlFor="password">Password:</label><br></br>
            <input type="text" placeholder="" id="Password" onChange={e => setPassword(e.target.value)} /><br></br>
        </div>

        <button style={btn} onClick={Login}>Login{" "}</button>
        <button>
            <span>Do not have an account?</span>{""}
            <span></span>
            <Link to="Register">Create account here</Link>
        </button>
        
    
        
        
        
    </div>

)
}
export default Login();
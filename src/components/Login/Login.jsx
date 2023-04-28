import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleLogin=()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            const user = result.user;
            console.log(user)
        }).catch(error =>{
            console.log('mamam kothai',error)
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
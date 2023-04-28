import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';

const Login = () => {
    const [user,setUser] = useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleLogin=()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            const userLog = result.user;
           setUser(userLog)
           console.log(userLog)
        }).catch(error =>{
            console.log('mamam kothai',error)
        })
    }

    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result)
            setUser(null)
        }).catch(error=>{
            console.log(error.message)
        })
    }

    const handleGithub=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const hub = result.user
            console.log(result)
            setUser(user)
        }).catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
            {user ? <button onClick={handleSignOut}>SignOut</button> :
            <div>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleGithub}>Github</button>
            </div>

            }
            {user && <div>
                <h3>User:{user.displayName}</h3>
                <p>Email:{user.email}</p>
               <img src={user.photoURL} alt="" />
            </div>}
            
        </div>
    );
};

export default Login;
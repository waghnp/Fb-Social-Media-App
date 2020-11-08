import { Button } from '@material-ui/core';
import React from 'react';
import { actionTypes } from '../ContextAPI/Reducer';
import { useStateValue } from '../ContextAPI/StateProvider';
import {auth,provider} from '../firebase';
import './Login.css'

const Login=()=>{
    const [state,dispatch]=useStateValue();   
    const signIn=()=>{
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    return(
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo"/>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="Facebook name logo"/>

            </div> 
            <Button type="submit" onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login;
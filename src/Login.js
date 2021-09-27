import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./Login.css"
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profile, setProfile] = useState("");
    const dispatch = useDispatch()

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!');
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profile
            })
                .then(() => {
                    dispatch(login(
                        {
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profile
                        }
                    ))
                })
        }).catch((error) => alert(error));
    };
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }))
        }).catch((error) => alert(error));
    };

    return (
        <div className='login'>
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="" />
            <form action="">
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)' type="text" name="" id="" />
                <input value={profile} onChange={e => setProfile(e.target.value)} type="text" placeholder='Profile pic URL (optional)' />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="" id="" placeholder='Email' />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="" id="" placeholder='Password' />
                <button type='submit' onClick={loginToApp}>Sign In</button>

                <p>Not a member?{" "}
                    <span className='login__register' onClick={register}>Register Now</span>
                </p>
            </form>
        </div>
    )
}

export default Login

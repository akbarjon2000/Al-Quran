import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Container } from './sign_in_style'
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCFI59CNAVEYaosfRtSGjqWZ449wsTTB4k",
    authDomain: "al-quran-auth.firebaseapp.com",
    projectId: "al-quran-auth",
    storageBucket: "al-quran-auth.appspot.com",
    messagingSenderId: "475933303491",
    appId: "1:475933303491:web:848f78860e5b4d69b37876",
    measurementId: "G-0PYPB34TJ5"
};
const SignIn = () => {
    const [signForm, setSignForm] = useState({ email: "", password: "" });
    const [error, setError] = useState(null)
    initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const auth = getAuth();
    const dispatch = useDispatch();
    const state = useSelector(store => store.isLoggedIn);

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, signForm.email, signForm.password)
            .then((cred) => {
                console.log(cred.user);
                dispatch({
                    type: "SIGN_UP", payload: { isLoggedIn: true }
                })

            })
            .then(() => {
                navigate("/listen")
            })
            .catch((err) => {
                // let error = err?.message?.splice(0, 15)
                // console.log(error)
                setError(err.message)
                console.log(err.message)
            })
    }

    const handleChange = (e) => {
        let name = e.target.name;
        setSignForm(prevState => ({ ...prevState, [name]: e.target.value }));
    }
    return (
        <Container >
            <div className='sign_up'>
                <h1>Sign In</h1>
                <form id='form'>
                    <label htmlFor='email' className='label'>Email:</label>
                    <input name='email' id='email' type="email" className='input' value={signForm.email} onChange={handleChange} required />
                    <label htmlFor='password' className='label' style={{ marginTop: "10px" }} >Password:</label>
                    <input name='password' id='password' type="password" className='input' required value={signForm.password} onChange={handleChange} />
                    <p onClick={() => navigate("/sign_up")}>Don't have an account?</p>
                    <button onClick={handleSubmit}>Sign In</button>
                    {error &&
                        <p className='error'>{error} </p>
                    }

                </form>
            </div>
        </Container>
    )
}

export default SignIn
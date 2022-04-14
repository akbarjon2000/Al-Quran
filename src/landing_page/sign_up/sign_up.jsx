import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Container } from './sign_up_style'
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { AuthContext } from '../../context/authContext'
const firebaseConfig = {
    apiKey: "AIzaSyCFI59CNAVEYaosfRtSGjqWZ449wsTTB4k",
    authDomain: "al-quran-auth.firebaseapp.com",
    projectId: "al-quran-auth",
    storageBucket: "al-quran-auth.appspot.com",
    messagingSenderId: "475933303491",
    appId: "1:475933303491:web:848f78860e5b4d69b37876",
    measurementId: "G-0PYPB34TJ5"
};
const SignUp = () => {
    const [signForm, setSignForm] = useState({ email: "", password: "" })
    const [error, setError] = useState(null)
    initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    console.log(auth)
    const dispatch = useDispatch();
    const state = useSelector(store => store.isLoggedIn)
    console.log(state)

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, signForm.email, signForm.password)
            .then((cred) => {
                console.log(cred.user);
                navigate("/listen")
                dispatch({
                    type: "SIGN_UP", payload: { isLoggedIn: true }
                })
            })
            .catch((err) => {
                setError(err.message)
                console.log(err)
            })
    }

    const handleChange = (e) => {
        let name = e.target.name;
        setSignForm(prevState => ({ ...prevState, [name]: e.target.value }));
    }
    return (
        <Container >
            <div className='sign_up'>
                <h1>Sign Up</h1>
                <form id='form'>
                    <label htmlFor='email' className='label'>Email:</label>
                    <input name='email' id='email' type="email" className='input' value={signForm.email} onChange={handleChange} required />
                    <label htmlFor='password' className='label' style={{ marginTop: "10px" }} >Password:</label>
                    <input name='password' id='password' type="password" className='input' required value={signForm.password} onChange={handleChange} minLength="6" />
                    <label htmlFor='confirm' className='label' style={{ marginTop: "10px" }}>Confirm your password:</label>
                    <input name='confirm' id='confirm' type="password" className='input' required />
                    <p onClick={() => navigate("/sign_in")}>Already have an account?</p>
                    <button onClick={handleSubmit}>Sign Up</button>
                    {error &&
                        <p className='error'>{error} </p>
                    }


                </form>
                {/* <button onClick={Logout}>logout</button> */}
            </div>
        </Container>
    )
}

export default SignUp
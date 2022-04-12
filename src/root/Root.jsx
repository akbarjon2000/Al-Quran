import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthContextProver from "../context/authContext"
import Recitation from '../components/recitation/Recitation';
import Sidebar from '../components/sidebar/Sidebar';
import { sidebarObj } from '../utils/sidebar';
import Surah from '../components/recitation/Surah';
import { useSelector } from "react-redux"
import SignUp from '../landing_page/sign_up/sign_up';
import SignIn from '../landing_page/sign_in/sign_in';

function Root() {
    const isLoggedIn = useSelector(state => state.Login).isLoggedIn
    console.log("isLoggedIn", isLoggedIn)
    // const [start, setStart] = useContext(StartContext);
    return (
        <div style={{ display: "flex", height: "100%" }}>
            <AuthContextProver>
                <BrowserRouter>
                    {isLoggedIn ?
                        <>
                            <Sidebar />
                            <Routes>
                                {sidebarObj.map(({ path, Component, id }) => (
                                    <Route key={id} path={path} element={<Component />} />
                                ))}
                                <Route index element={<Recitation />} />
                            </Routes>
                        </>
                        : <Routes>
                            <Route path='/' element={<SignUp />} />
                            <Route path='/sign_up' element={<SignUp />} />
                            <Route path="/sign_in" element={<SignIn />} />
                        </Routes>
                    }
                </BrowserRouter>
            </AuthContextProver>
        </div>

    )
}

export default Root
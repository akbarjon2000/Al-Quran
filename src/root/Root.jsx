import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StartContext } from "../context/startContext";
import Recitation from '../components/recitation/Recitation';
import Sidebar from '../components/sidebar/Sidebar';
import { sidebarObj } from '../utils/sidebar';
import Surah from '../components/recitation/Surah';
import { useSelector } from "react-redux"
import SignUp from '../landing_page/sign_up/sign_up';

function Root() {
    const isLoggedIn = useSelector(state => state.Login).isLoggedIn
    console.log("isLoggedIn", isLoggedIn)
    const [start, setStart] = useContext(StartContext);
    return (
        <div style={{ display: "flex", height: "100%" }}>
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
                    : <>
                        <SignUp />
                    </>
                }
            </BrowserRouter>
        </div>

    )
}

export default Root
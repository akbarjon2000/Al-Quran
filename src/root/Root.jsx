import React, { useContext } from 'react'
import LandingPage from '../components/landing page/LandingPage'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StartContext } from "../context/startContext";
import Recitation from '../components/recitation/Recitation';
function Root() {
    const [start, setStart] = useContext(StartContext);
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/recitation" element={<Recitation />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Root
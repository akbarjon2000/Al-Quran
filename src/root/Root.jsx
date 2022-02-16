import React, { useContext } from 'react'
import LandingPage from '../components/landing page/LandingPage'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StartContext } from "../context/startContext";
import Recitation from '../components/recitation/Recitation';
import Navbar from '../components/navbar/Navbar';
function Root() {
    const [start, setStart] = useContext(StartContext);
    return (

        <BrowserRouter>
            {
                start ?
                    <div>
                        <Navbar />
                        <Routes>
                            <Route path="/recitation" element={<Recitation />} />
                        </Routes>
                    </div>
                    :
                    <LandingPage />
            }
        </BrowserRouter>

    )
}

export default Root
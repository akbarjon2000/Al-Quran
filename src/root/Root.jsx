import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StartContext } from "../context/startContext";
import Recitation from '../components/recitation';
import Sidebar from '../components/sidebar/Sidebar';
function Root() {
    const [start, setStart] = useContext(StartContext);
    return (
        <div style={{ display: "flex" }}>
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path="/recitation" element={<Recitation />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default Root
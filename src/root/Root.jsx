import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StartContext } from "../context/startContext";
import Recitation from '../components/recitation/Recitation';
import Sidebar from '../components/sidebar/Sidebar';
import { sidebarObj } from '../utils/sidebar';
import Surah from '../components/recitation/Surah';

function Root() {
    const [start, setStart] = useContext(StartContext);
    return (
        <div style={{ display: "flex" }}>
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    {sidebarObj.map(({ path, Component }) => (
                        <Route path={path} element={<Component />} />
                    ))}
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default Root
import React, { useState } from 'react'
import { Container } from './NavStyle'
import goldenIslam from "../../assets/images/goldenIslam.webp"
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom"
const Navbar = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.navReducer)
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const [nav, setNav] = useState({
        read: false,
        recitation: true,
        translation: false,
        setting: false
    })
    const handlePagination = ({ target }) => {
        console.log(target.id)
        console.log(store)
        dispatch({
            type: "CHANGE", payload: { [target.id]: true },
        })
        navigate(`/${target.id}`)
        console.log(location)
    }
    return (
        <Container>
            <img src={goldenIslam} alt="golden islam" className="goldenIslam" />
            <div className='align__center' style={{ gap: "20px" }}>
                <p
                    className='navText read'
                    id='read'
                    onClick={(e) => handlePagination(e)}
                    style={{ color: `${(location === "/read") ? "#ffd000" : "white"}` }}
                >
                    Read
                </p>
                <p
                    className='navText recite'
                    id="recitation"
                    onClick={(e) => handlePagination(e)}
                    style={{ color: `${(location === "/recitation") ? "#ffd000" : "white"}` }}
                >
                    Recite
                </p>
                <p
                    className='navText translate'
                    id="translation"
                    onClick={(e) => handlePagination(e)}
                    style={{ color: `${(location === "/translation") ? "#ffd000" : "white"}` }}
                >
                    Translation
                </p>
                <IoSettingsOutline
                    className='settings'
                    id='setting'
                    onClick={(e) => handlePagination(e)}
                    style={{ color: `${(location == "/setting") ? "FFD000" : "white"}` }}

                />
            </div>
        </Container>
    )
}

export default Navbar
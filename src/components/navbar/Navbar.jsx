import React, { useState } from 'react'
import { Container } from './NavStyle'
import goldenIslam from "../../assets/images/goldenIslam.webp"
import { IoSettingsOutline } from "react-icons/io5";
const Navbar = () => {
    const [nav, setNav] = useState({
        read: false,
        recitation: true,
        translation: false,
        setting: false
    })
    return (
        <Container>
            <img src={goldenIslam} alt="golden islam" className="goldenIslam" />
            <div className='align__center' style={{ gap: "20px" }}>
                <p className='navText read'>Read</p>
                <p className='navText recite'>Recite</p>
                <p className='navText translate'>Translation</p>
                <IoSettingsOutline className='settings' />
            </div>
        </Container>
    )
}

export default Navbar
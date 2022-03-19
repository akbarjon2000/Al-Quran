import React, { useState } from 'react'
import { Container } from './SettingStyle'
import { IoIosArrowForward } from "react-icons/io"
const Setting = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <Container showModal={showModal}>
            <div className='center title'><p>Settings</p></div>
            <div className='align__center set'>
                <div >
                    <p style={{ fontWeight: "600", margin: "0" }}>Languages</p>
                    <p style={{ margin: "0", fontSize: "20px" }}>Choose your languages</p>
                </div>
                <div className='align__center langModal' onClick={() => setShowModal(!showModal)}>
                    <div className='Modal'></div>
                    <p>English</p>
                    <div style={{ backgroundColor: "#52B788", width: '50px', height: "50px", color: "white" }} className="center"  >
                        <IoIosArrowForward className='arrow' />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Setting
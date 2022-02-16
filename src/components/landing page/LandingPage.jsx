import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { LandingStyle, Modal } from './LandingStyle'
import UZB from "../../assets/images/UzFlag.png"
import UAE from "../../assets/images/UAE.webp"
import USA from "../../assets/images/USA.webp"
import { RiArrowDownSLine } from "react-icons/ri";
import { StartContext } from "../../context/startContext"

const LandingPage = () => {
    const [lang, setLang] = useState("UZB");
    const [choose, setChoose] = useState(false);
    const [start, setStart] = useContext(StartContext);
    const navigate = useNavigate();
    const Lang = () => {
        if (lang === "UZB") {
            return UZB;
        } else if (lang === "USA") {
            return USA;
        } else {
            return UAE;
        }
    }
    const Start = () => {
        navigate("/recitation");
        setStart(true);
    }
    return (
        <LandingStyle choose={choose}>
            <h1 className='title'>القرآن الكريم</h1>
            <div className='align__center langContainer'>
                <p style={{ fontSize: "30px", color: "white", marginLeft: "10px" }}>Lang: </p>
                <img
                    src={Lang()}
                    alt={lang}
                    className='flag uzFlag' />
                <RiArrowDownSLine className='arrowDown' onClick={() => setChoose(!choose)} />
                <Modal lang={lang} choose={choose} onClick={() => setChoose(false)} className="slide-left">
                    <div
                        className='align__center modal__item'
                        style={{ backgroundColor: `${lang === "UAE" ? "#9BF6FF" : ""}` }}
                        onClick={() => setLang("UAE")}
                    >
                        <p style={{ fontSize: "1.5rem" }}>العربية</p>
                        <img src={UAE} alt="UAE flag" className='flag' />
                    </div>
                    <div
                        className='align__center modal__item'
                        style={{ backgroundColor: `${lang === "UZB" ? "#9BF6FF" : ""}` }}
                        onClick={() => setLang("UZB")}
                    >
                        <p style={{ fontSize: "1.5rem" }}>O'zbek</p>
                        <img src={UZB} alt="Uzb flag" className='flag' />
                    </div>
                    <div
                        className='align__center modal__item'
                        style={{ backgroundColor: `${lang === "USA" ? "#9BF6FF" : ""}` }}
                        onClick={() => setLang("USA")}
                    >
                        <p style={{ fontSize: "1.5rem" }}>English</p>
                        <img src={USA} alt="USA flag" className='flag' />
                    </div>
                </Modal >
            </div>
            <div className='center startButton' onClick={Start} >
                <p>Bismillah</p>
            </div>
        </LandingStyle>
    )
}

export default LandingPage
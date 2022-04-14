import React, { useState, useEffect, useContext } from 'react'

import { createUserWithEmailAndPassword } from "firebase/auth"


import { useNavigate } from "react-router-dom"
import { Container } from './SettingStyle'
import { IoIosArrowForward } from "react-icons/io"
import i18next from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from "i18next-http-backend";
import { useSelector, useDispatch } from "react-redux"
import { signOut, getAuth } from "firebase/auth"
//ICONS:
import uae from "../../assets/images/UAE.webp"
import uzb from "../../assets/images/UzFlag.png"
import usa from "../../assets/images/USA.webp"
import { FiMenu, } from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { AuthContext } from '../../context/authContext';


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['ar', 'uz', 'en'],
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie']
        },
        fallbackLng: 'en',
        debug: true,
        backend: {
            loadPath: '/assets/locals/{{lng}}/translations.json'
        },
        react: { useSuspense: false }
    });
const Setting = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [lang, setLang] = useState("English");
    const [fontName, setFontName] = useState("Medium");
    const [font, setFont] = useState(30);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const toggler = useSelector(state => state.ToggleSidebar).toggle;
    const loggedin = useSelector(state => state.Login).isLoggedIn;
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const languages = [
        {
            code: 'ar',
            name: 'العربية',
            flag: uae,
            dir: 'rtl'
        },
        {
            code: 'uz',
            name: "O'zbek",
            flag: uzb

        },
        {
            code: 'en',
            name: 'English',
            flag: usa

        },
    ]
    const fonts = [
        {
            name: "Small",
            font: 20,
        },
        {
            name: "Medium",
            font: 25,
        },
        {
            name: "Large",
            font: 30,
        }
    ];
    const currentLangCode = i18next.language
    console.log(currentLangCode)
    const currentLang = languages.find(l => l.code === currentLangCode);
    console.log(currentLang)
    const handleLang = (name, code) => {
        setLang(name)
        i18next.changeLanguage(code);
    }
    const handleFont = (name, font) => {
        setFontName(name);
        // document.body.style.fontSize = font + "px" || "30px";
        console.log(document.body.style.fontSize)
        setFont(font)
    }

    const handleToggle = () => {
        dispatch({
            type: "TOGGLE", payload: { toggle: true }
        })
    }

    const SignOut = () => {
        signOut(auth)
            .then((cred) => {
                dispatch({
                    type: "SIGN_OUT", payload: { isLoggedIn: false }
                })
                console.log("cred:", cred)
                navigate("/");
            })
            .then(() => {
                console.log("user signed out");
            })
    }
    return (
        <Container showModal={showModal} showModal2={showModal2} toggle={toggler}>
            <FiMenu className="menu" onClick={handleToggle} />
            <div className='center title'><p>{t('Settings')}</p>
                <AiOutlinePoweroff className='align__center sign_out' onClick={SignOut} />
            </div>
            <div className='align__center set'>
                <div >
                    <p style={{ fontWeight: "600", margin: "0" }} className="langTitle">{t('languages')}</p>
                    <p style={{
                        margin: "0",
                        fontSize: '20px'
                    }}
                        className="langText"
                    >
                        {t('choice')}
                    </p>
                </div>

                <div className='align__center langModal'
                    onClick={() => { setShowModal(!showModal); setShowModal2(false) }}>
                    <p>{lang}</p>
                    <div style={{ backgroundColor: "#52B788", width: '50px', height: "50px", color: "white" }} className="center arrowContainer"  >
                        <IoIosArrowForward className='arrow' />
                    </div>
                    <div className='Modal'>
                        {languages.map((value) => (
                            <button
                                key={value.code}
                                className="align__center flag__con"
                                id={value.name}
                                onClick={() => handleLang(value.name, value.code)}
                                disabled={value.code === currentLangCode}
                            >
                                <p> {value.name}</p>
                                <img src={value.flag} className="flag" />
                            </button>
                        ))}
                    </div>
                </div>
            </div >

            <div className='divider'></div>

            <div className='align__center set2'>
                <div >
                    <p style={{ fontWeight: "600", margin: "0" }} className="fontTitle">{t('font_size')}</p>
                    <p style={{
                        margin: "0",
                        fontSize: '20px'
                    }}
                        className="fontText"
                    >
                        {t('comfort_font')}
                    </p>
                </div>
                <div
                    className='align__center fontModal'
                    onClick={() => { setShowModal2(!showModal2); setShowModal(false) }}
                >
                    <div className='Modal2'>
                        {fonts.map((value, index) => (
                            <button
                                style={{ fontSize: `${value.font}px` }}
                                className="align__center flag__con"
                                id={index}
                                onClick={() => handleFont(value.name, value.font)}
                            >
                                {t(value.name)}
                            </button>
                        ))}
                    </div>
                    <p>{t(fontName)}</p>
                    <div style={{ backgroundColor: "#52B788", width: '50px', height: "50px", color: "white" }} className="center arrowContainer"  >
                        <IoIosArrowForward className='arrow' />
                    </div>
                </div>
            </div >

            <div className='divider'></div>

            <div className='set3'>
                <a href='d:/workplace/alquran/README.md' style={{ fontWeight: "600", margin: "0" }}>{t('help')}</a>
                <p style={{
                    margin: "0",
                    fontSize: '20px'
                }}>{t('comment')}</p>
            </div>
        </Container >
    )
}

export default Setting
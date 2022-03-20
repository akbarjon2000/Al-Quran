import React, { useState } from 'react'
import { Container, Item } from './SidebarStyle'
import { sidebarObj } from '../../utils/sidebar'
import { NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import { MdDeveloperMode } from "react-icons/md";
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
const Sidebar = () => {
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(true)
    const dispatch = useDispatch();
    const store = useSelector(state => state.ToggleSidebar).toggle
    const handleToggle = () => {
        // setToggle(!toggle);
        dispatch({ type: "TOGGLE", payload: { toggle: false } })
    }
    return (
        <Container toggle={store}>
            <div className='align__center'>
                <p className='title'>Love Quran</p>
                <FiMenu className="menu" onClick={handleToggle} />
            </div>
            <div className='devider'></div>
            {
                sidebarObj.map(({ icon: Icon, title, path, id, devider }) => (
                    <div key={id}>
                        <NavLink
                            to={path}
                            className={({ isActive }) => isActive ? "align__center test" : "align__center catalog"}
                        >
                            <Icon />
                            <p>{t(`${title}`)}</p>
                        </NavLink>
                        {devider && <div className='devider'></div>}
                    </div>
                ))
            }
            <div className='aboutDev'>
                <a href='https://portfolioakbarjon.netlify.app/' color='white' className='link'><MdDeveloperMode /> {t('dev')}</a>
            </div>

        </Container >
    )
}

export default Sidebar
import React from 'react'
import { Container, Item } from './SidebarStyle'
import { sidebarObj } from '../../utils/sidebar'
import { NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import { MdDeveloperMode } from "react-icons/md";

const Sidebar = () => {
    return (
        <Container>
            <div>
                <p className='title'>Love Quran</p>
                <FiMenu className="menu" />
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
                            <p>{title}</p>
                        </NavLink>
                        {devider && <div className='devider'></div>}
                    </div>
                ))
            }
            <div className='aboutDev'>
                <a href='https://portfolioakbarjon.netlify.app/' color='white' className='link'><MdDeveloperMode /> About Developer</a>
            </div>

        </Container >
    )
}

export default Sidebar
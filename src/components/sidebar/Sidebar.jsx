import React from 'react'
import { Container } from './SidebarStyle'
import { sidebarObj } from '../../utils/sidebar'
import { Link, NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
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
                            className='align__center catalog'
                        >
                            <Icon />
                            <p>{title}</p>
                        </NavLink>
                        {devider && <div className='devider'></div>}
                    </div>
                ))
            }


        </Container>
    )
}

export default Sidebar
import React from 'react'
import { Container } from './SidebarStyle'
import { sidebarObj } from '../../utils/sidebar'
import { Link, NavLink } from "react-router-dom"
const Sidebar = () => {
    return (
        <Container>
            <p className='title'>Love Quran</p>
            <div className='devider'></div>
            {
                sidebarObj.map(({ icon: Icon, title, path, id, devider }) => (
                    <>

                        <NavLink
                            key={id}
                            to={path}
                            className='align__center catalog'
                        >
                            <Icon />
                            <p>{title}</p>
                        </NavLink>
                        {devider && <div className='devider'></div>}
                    </>
                ))
            }


        </Container>
    )
}

export default Sidebar
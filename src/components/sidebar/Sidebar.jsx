import React from 'react'
import { Container, Item } from './SidebarStyle'
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
                            className={({ isActive }) => isActive ? "align__center test" : "align__center catalog"}
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? 'white' : '#2D3A45',
                                    textDecoration: "none",
                                    backgroundColor: isActive ? "#0a9396 !important" : "#ae2012",


                                    transition: 'all 0.3s',

                                    width: '300px',
                                }
                            }}
                        >
                            <Icon />
                            <p>{title}</p>
                        </NavLink>
                        {devider && <div className='devider'></div>}
                    </div>
                ))
            }


        </Container >
    )
}

export default Sidebar
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 md:place-content-between p-4 border-b'>
            <div className='w-full md:w-[10rem] text-[#4286f5] font-bold text-2xl text-center md:text-left'>
                <NavLink to='/'>Notes Saver</NavLink>
            </div>
            <div className='flex flex-col md:flex-row gap-4 place-content-center md:place-content-end'>
                <NavLink
                    to="/"
                    className="text-center"
                >
                    Home
                </NavLink>

                <NavLink
                    to="/pastes"
                    className="text-center"
                >
                    Pastes
                </NavLink>
                <NavLink 
                    to="/developer" 
                    className="text-center"
                >
                    Developer
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar

import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ children, img, to }) => {
    const activeClassName = 'lg:text-base 2xl:text-2xl flex items-center gap-2 lg:gap-4 2xl:gap-11 py-3.5 font-bold text-white';
    const defaultClassName = 'lg:text-base 2xl:text-2xl text-[#9A9A9A] flex items-center gap-2 lg:gap-4 2xl:gap-11 py-3.5';
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? activeClassName : defaultClassName}>
            <img className='w-5 xl:w-7 2xl:w-14 h-auto' src={img} alt='' />
            {children}
        </NavLink>
    );
}

export default CustomNavLink;

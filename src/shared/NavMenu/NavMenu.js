import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    const className = 'font-semibold block 2xl:font-bold text-base 2xl:text-2xl bg-[#d9d9d933] rounded-lg text-slate-50 px-3 2xl:px-5 py-2';
    const activeClassName = 'font-semibold block 2xl:font-bold text-base 2xl:text-2xl bg-violet-500 rounded-lg text-slate-50 px-3 2xl:px-5 py-2';
    return (
        <div className='mb-8'>
            <ul className='flex flex-wrap gap-2 justify-center xl:justify-start'>
                <li><NavLink to='/' className={({ isActive }) => isActive ? activeClassName : className} >Matches</NavLink></li>
                <li><NavLink to='/schedules' className={({ isActive }) => isActive ? activeClassName : className} >Schedules</NavLink></li>
                <li><NavLink to='/series' className={({ isActive }) => isActive ? activeClassName : className} >Series</NavLink></li>
                <li><NavLink to='/teams' className={({ isActive }) => isActive ? activeClassName : className} >Teams</NavLink></li>
                <li><NavLink to='/players' className={({ isActive }) => isActive ? activeClassName : className} >Players</NavLink></li>
                <li><NavLink to='/news' className={({ isActive }) => isActive ? activeClassName : className} >News</NavLink></li>
                <li><NavLink to='/stats' className={({ isActive }) => isActive ? activeClassName : className} >Stats</NavLink></li>
            </ul>
        </div>
    );
}

export default NavMenu;

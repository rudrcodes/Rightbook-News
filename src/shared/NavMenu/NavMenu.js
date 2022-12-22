import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    const className = 'font-bold 3xl bg-[#d9d9d933] rounded-lg text-slate-50 px-5 py-2';
    const activeClassName = 'font-bold 3xl bg-violet-500 rounded-lg text-slate-50 px-5 py-2';
    return (
        <div className='mb-8'>
            <ul className='flex'>
                <li className='mr-2.5'><NavLink to='/' className={({ isActive }) => isActive ? activeClassName : className} >Matches</NavLink></li>
                <li className='mr-2.5'><NavLink to='/schedules' className={({ isActive }) => isActive ? activeClassName : className} >Schedules</NavLink></li>
                <li className='mr-2.5'><NavLink to='/series' className={({ isActive }) => isActive ? activeClassName : className} >Series</NavLink></li>
                <li className='mr-2.5'><NavLink to='/teams' className={({ isActive }) => isActive ? activeClassName : className} >Teams</NavLink></li>
                <li className='mr-2.5'><NavLink to='/players' className={({ isActive }) => isActive ? activeClassName : className} >Players</NavLink></li>
                <li className='mr-2.5'><NavLink to='/news' className={({ isActive }) => isActive ? activeClassName : className} >News</NavLink></li>
                <li className='mr-2.5'><NavLink to='/stats' className={({ isActive }) => isActive ? activeClassName : className} >Stats</NavLink></li>
            </ul>
        </div>
    );
}

export default NavMenu;

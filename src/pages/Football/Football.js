import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from '../../shared/NavMenu/NavMenu';

const Football = () => {
    return (
        <div className='px-3 py-5 2xl:px-14 lg:py-10 2xl:py-16'>
            <NavMenu rootRoute='/football' />
            <div className='py-13'>
                <Outlet />
            </div>
        </div>
    );
}

export default Football;

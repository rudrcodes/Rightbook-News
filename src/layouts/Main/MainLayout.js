import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Sidebar from '../../shared/Sidebar/Sidebar';

const MainLayout = () => {
    const [alertClose, setAlertClose] = useState(false);
    return (
        <>
            {!alertClose && <div className={`px-10 bg-[#35D2AC]`}>
                <div className='grid grid-rows-2 md:grid-rows-none grid-flow-col md:grid-cols-4 py-3 gap-2'>
                    <div className='md:col-span-1'>
                        <p className='text-base 2xl:text-xl inline border-b border-black'>Contact Us Now</p>
                    </div>
                    <div className='md:col-span-2'>
                        <p className='text-base 2xl:text-xl'>WhatsApp Contact: +91 9682976540</p>
                    </div>
                    <div className='row-span-2 md:row-auto md:col-span-1 flex justify-end items-center'>
                        <button onClick={() => setAlertClose(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <div className='md:col-span-3 lg:col-span-1'>
                    <Navbar />
                </div>
                <div className='md:col-span-2'>
                    <Outlet />
                </div>
                <div className='md:col-span-1'>
                    <Sidebar />
                </div>
            </div>
        </>
    );
}

export default MainLayout;

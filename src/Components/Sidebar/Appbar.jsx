/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const Appbar = () => {
    const [sidebarToggle, setSidebarToggle] = useState(() => window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 768) {
            setSidebarToggle(true);
        } else {
            setSidebarToggle(false);
        }
        };

        handleResize();
    }, []);

    // const [sidebarToggle, setSidebarToggle] = useState(false)
    return (
        <div className='flex '>
            <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
            <Dashboard sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}/>
        </div>
    );
};

export default Appbar;
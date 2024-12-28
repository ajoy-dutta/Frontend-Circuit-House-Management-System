/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const Appbar = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    return (
        <div className='flex'>
            <Sidebar sidebarToggle={sidebarToggle}/>
            <Dashboard sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}/>
        </div>
    );
};

export default Appbar;
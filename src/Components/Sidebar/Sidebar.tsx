import React from 'react';

import './Sidebar.scss';
import SidebarRoutes from './Sidebar Routes/SidebarRoutes';
import SidebarLogo from './Sidebar Logo/SidebarLogo';
import SidebarNotifications from './Sidebar Notifications/SidebarNotifications';
import SidebarTarif from './Sidebar Tarif/SidebarTarif';

const Sidebar: React.FunctionComponent = () => {
    return (
        <div className="sidebar">
            <SidebarLogo />
            <SidebarRoutes />
            <SidebarNotifications />
            <SidebarTarif />
        </div>
    );
};

export default Sidebar;

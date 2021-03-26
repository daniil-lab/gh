import React from 'react';
import { ReactComponent as BrandLogo } from '../../../assets/images/logo.svg';

import './SidebarLogo.scss';

const SidebarLogo: React.FunctionComponent = () => {
    return (
        <div className="sidebar-logo-block">
            <BrandLogo className="sidebar-logo" />
        </div>
    );
};

export default SidebarLogo;

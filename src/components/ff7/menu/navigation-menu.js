import React from 'react';
import Menu from './menu';
import styled from 'styled-components';

function NavigationMenu({className, children, ...props}) {
    return (
        <Menu {...props}>
            <div className={className}>
                {children}
            </div>
        </Menu>
    )
}


const StyledNavigationMenu = styled(NavigationMenu)`
    padding: 5px 5px 5px 10px;
    display: flex;
    align-content: center;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 2px;
`;

export default StyledNavigationMenu

export {StyledNavigationMenu as NavigationMenu}
import React from 'react';
import Menu from './menu';
import styled from 'styled-components';

function Character({className, children, ...props}) {
    return (
        <Menu {...props}>
            <div className={className}>
                {children}
            </div>
        </Menu>
    )
}

    /*
    border-width: ${props => props.theme.background.borderWidth};
    border-style: solid;
    border-image: ${props => props.theme.background.borderHorizontalBackground};
    border-image-repeat: stretch;
    border-left: none;
    border-right: none;
    */


const StyledCharacterMenu = styled(Character)`
    padding: 20px 80px 20px 25px;
    display: flex;
    align-content: center;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 12px;
`;

export default StyledCharacterMenu

export { StyledCharacterMenu as CharacterMenu }

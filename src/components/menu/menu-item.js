import React from 'react';
import styled from 'styled-components';


function MenuItem({className, children, ...props}) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

const StyledMenu = styled(MenuItem)`
    color: ${props => props.theme.normalBackground.primaryColor};
    &:hover {
        
    }
    &:hover {
        cursor: pointer;
        &:before {
            content: " > "
        }
    }
`;

export default StyledMenu

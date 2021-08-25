import React from 'react';
import styled from 'styled-components';

function Menu({className, children, ...props}) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

    /*
    border-width: ${props => props.theme.normalBackground.borderWidth};
    border-style: solid;
    border-image: ${props => props.theme.normalBackground.borderHorizontalBackground};
    border-image-repeat: stretch;
    border-left: none;
    border-right: none;
    */


const StyledMenu = styled(Menu).attrs(props => ({
    width: props.width || "100%",
    height: props.height || "100%",
}))`
    border: 1px solid #cfcfcf;
    box-shadow: ${props => props.theme.normalBackground.boxShadow};
    border-radius: 5px;
    padding: 5px;
    background: ${props => props.theme.normalBackground.background};
    width: ${props => props.width};
    height: ${props => props.height};
    font-family: Verdana, sans-serif;
    font-size: 20px;
    font-weight: normal;
  

`;

export default StyledMenu

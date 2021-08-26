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
    border-width: ${props => props.theme.background.borderWidth};
    border-style: solid;
    border-image: ${props => props.theme.background.borderHorizontalBackground};
    border-image-repeat: stretch;
    border-left: none;
    border-right: none;
    */


const StyledMenu = styled(Menu).attrs(props => ({
    width: props.width || "100%",
    height: props.height || "100%",
}))`
    border: 1px solid #727272;
    box-shadow: ${props => props.theme.background.boxShadow};
    border-radius: 4px;
    padding: 5px;
    margin-left: 5px;
    background: ${props => props.theme.background.background};
    width: ${props => props.width};
    height: ${props => props.height};
    font-family: Verdana, sans-serif;
    font-size: 20px;
    font-weight: normal;
  

`;

export default StyledMenu

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
    width: props.width || "100%"
}))`
    border: 1px solid #cfcfcf;
    box-shadow: 1px 1px #c5c5c5,
        -1px -1px #c5c5c5,
        -1px 1px #c5c5c5,
        1px -1px #c5c5c5,
        2px 2px #818181,
        -2px -2px #818181,
        -2px 2px #818181,
        2px -2px #818181,
        0px 3px #727272,
        -3px -3px #727272,
        -3px 3px #727272,
        3px -3px #727272;
    border-radius: 5px;
    padding: 5px;
    background: ${props => props.theme.normalBackground.background};
    width: ${props => props.width};
    font-family: Verdana, sans-serif;
    font-size: 20px;
    font-weight: normal;
  

`;

export default StyledMenu

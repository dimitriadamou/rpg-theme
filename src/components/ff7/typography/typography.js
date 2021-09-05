import React from 'react';
import styled from 'styled-components';

const Component = ({as="span", children, style, className, ...props}) => {
    const Element = as || "span";


    return (
        <Element className={className} style={style}>
            {children}
        </Element>
    )
}

const propSizeMap = {
    "small": "1rem",
    "normal": "1.5rem",
    "large": "3rem",
    "extra-large": "4rem"
};

const getPropSize = (size) => {
    return typeof propSizeMap[size] === "undefined" ? size : propSizeMap[size];
}

const getTransformScale = (props) => {
    let defaultX = '1';
    let defaultY = '1.4';

    if(props.stretchX) defaultX = props.stretchX;
    if(props.stretchY) defaultY = props.stretchY;

    return `transform: scale(${defaultX}, ${defaultY});`;
}

const StyledComponent = styled(Component).attrs(
    (props) => ({
        stretch:  getTransformScale(props),
        size: props.size ? getPropSize(props.size) : "1.5rem",
        lineHeight: props.lineHeight ? getPropSize(props.lineHeight) : "1.5rem",
        weight: props.bold ? "font-weight: bold;" : '',
        spacing: props.spacing ? `letter-spacing: ${props.spacing}`: '',
        color: props.theme.variants.color[props.color] || props.color || props.theme.background.primaryColor
    })
)`
    font-size: ${props => props.size};
    display: inline-block;
    color: ${props => props.color};
    line-height: ${props => props.lineHeight};
    ${props => props.stretch}
    ${props => props.weight}
    ${props => props.spacing}
`;

export default StyledComponent;
export { 
    StyledComponent as Typography
}
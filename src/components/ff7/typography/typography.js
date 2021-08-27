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
    "normal": "2rem",
    "large": "3rem",
    "extra-large": "4rem"
};

const getPropSize = (size) => {
    return typeof propSizeMap[size] === "undefined" ? size : propSizeMap[size];
}

const StyledComponent = styled(Component).attrs(
    props => ({
        stretch: props.stretch ? "" : "transform: scale(1, 1.4);",
        size: props.size ? getPropSize(props.size) : "1.5rem",
        color: props.theme.background.primaryColor
    })
)`
    font-size: ${props => props.size};
    display: inline-block;
    font-color: ${props => props.color};
    line-height: 2rem;
    ${props => props.stretch}
`;

export default StyledComponent;
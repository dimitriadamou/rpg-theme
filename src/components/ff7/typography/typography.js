import React from 'react';
import styled from 'styled-components';

const Component = ({as="span", children, className, ...props}) => {
    const Element = as || "span";


    return (
        <Element className={className}>
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
        stretch: props.stretch ? "" : "transform: scale(0.7, 1.0);",
        size: props.size ? getPropSize(props.size) : "2rem"
    })
)`
    font-size: ${props => props.size};
    ${props => props.stretch}
`;

export default StyledComponent;
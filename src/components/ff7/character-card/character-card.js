import React from 'react';
import styled from 'styled-components';

const CharacterCard = ({className, children, ...props}) => {
    return (<div className={className}>
        {children}
    </div>)
}

const StyledCharacterCard = styled(CharacterCard).attrs(props => ({
    width: props.width || "100%",
    height: props.height || "100%",
}))`
    display: grid;
    grid-template-areas: 
        'icon icon stats stats bars bars'
        'icon icon stats stats bars bars'
        'icon icon stats stats bars bars';
`;

export default StyledCharacterCard

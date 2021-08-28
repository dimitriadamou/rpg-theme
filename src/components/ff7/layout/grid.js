import React from 'react';
import styled from 'styled-components';

const Component = ({className, children, ...props}) => {
    return <div className={className}>
        {children}
    </div>
};

const justifyMap = {
    "start": "flex-start",
    "end": "flex-end"
};

const getJustifyContent = (props) => justifyMap[props.justify] || props.justify || 'space-between';

const StyledGrid = styled(Component).attrs(
    props => ({
        gridArea: props.area,
        justifyContent: getJustifyContent(props),
        alignContent: props.align ? props.align : "start",
        
    })
)`
    display: flex;
    align-content: ${props => props.alignContent};
    justify-content: ${props => props.justifyContent};
    ${props => props.gridArea ? `grid-area: ${props.gridArea};` : ''}
`;

export default StyledGrid;

export { StyledGrid as Grid}
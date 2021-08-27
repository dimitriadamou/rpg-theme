import React from 'react';
import styled from 'styled-components';

const Component = ({className, children}) => (<div className={className}>{children}</div>);
const StyledComponent = styled(Component)`
    grid-area: bars;
    display: grid;
    align-items: end;
`;

export default StyledComponent;

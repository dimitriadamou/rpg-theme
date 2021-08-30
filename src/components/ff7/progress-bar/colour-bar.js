import React from 'react';
import styled from 'styled-components';

import Typography from '../typography/typography';

const typographySpecial = {
    stretchX: "1.3",
    stretchY: "1.1",
    bold: true,
    spacing: "-1px"
}

const Component = ({className, value, max, ...props}) => {
    const percentage = (1 - (value / max)) * 100;
    return (<div className={className}>
        <div style={{
            width: `${percentage}%`,
            height: '100%',
            float: 'right',
            background: `#f00`
        }}>
        </div>
    </div>)
};

const StyledBar = styled(Component).attrs(
    props => ({
        barColor: props.barColor || "#007dff"
        //00ff7b
    })
)`
    width: 100%;
    box-shadow: 0px 2px #00000066, 0px 4px #00000011;
    height: 2px;
    background: linear-gradient(to right, ${props => props.barColor}, #c6c9c7 125%);
`;

export default StyledBar;

export {
    StyledBar as TextBar
}
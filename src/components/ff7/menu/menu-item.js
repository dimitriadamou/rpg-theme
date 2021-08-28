import React from 'react';
import styled from 'styled-components';
import Typography from '../typography/typography';

function MenuItem({className, children, ...props}) {
    return (
        <div className={className}>
            <Typography size="normal">{children}</Typography>
        </div>
    )
}

const StyledMenu = styled(MenuItem)`
    color: ${props => props.theme.background.primaryColor};
    padding-left: 10px;
    &:hover {
        cursor: pointer;
        &:before {
            display: inline-block;
            position: absolute;
            margin-left: -55px;
            background-image: url("resources/ff7/img/cursor.png");
            background-size: 40px 30px;
            background-repeat: no-repeat;
            background-position: center 5px;
            background-origin: content-box;
            content: " ";
            width: 40px;
            height: 50px;
        }
    }
`;

export default StyledMenu

export { StyledMenu as MenuItem }

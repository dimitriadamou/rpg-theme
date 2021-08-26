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
        padding-left: 20px;
        &:before {
            display: inline-block;
            position: absolute;
            margin-left: -45px;
            background-image: url("resources/ff7/img/cursor.png");
            background-size: auto 17px;
            background-repeat: no-repeat;
            background-position: center 5px;
            background-origin: content-box;
            content: " ";
            width: 40px;
            height: 30px;
        }
    }
`;

export default StyledMenu

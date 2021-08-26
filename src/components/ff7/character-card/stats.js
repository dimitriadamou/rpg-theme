import React from 'react';
import styled from 'styled-components';
import Typography from '../typography/typography';
/*
          name="cloud"
          level="15"
          maxHP="548"
          currentHP="400"
          maxMP="121"
          currentMP="121"
*/

const Name = styled.div`
    font-size: 4rem;
    color: ${props => props.theme.background.primaryColor};
`

const Component = ({name, level, maxHP, currentHP, maxMP, currentMP}) => {
    return (<div>
        <Name>
            <Typography>{name}</Typography>
        </Name>
    </div>)
}



export default Component

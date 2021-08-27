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
    color: ${props => props.theme.background.primaryColor};
`

const Component = ({name, level, maxHP, currentHP, maxMP, currentMP}) => {
    return (<div>
        <Name>
            <Typography>{name}</Typography>
        </Name>
        <div>
            <Typography>
                LV                
            </Typography>
            <Typography>
                {level}                
            </Typography>
        </div>
        <div>
            <Typography>
                HP                
            </Typography>
        </div>
        <div>
            <Typography>
                MP         
            </Typography>
        </div>
    </div>)
}



export default Component

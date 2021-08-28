import React from 'react';
import styled from 'styled-components';
import Typography from '../typography/typography';
import TextBar from '../progress-bar/text-bar';
import Grid from '../layout/grid';
/*
          name="cloud"
          level="15"
          maxHP="548"
          currentHP="400"
          maxMP="121"
          currentMP="121"
*/

const typographySpecial = {
    stretchX: "1.3",
    stretchY: "1.1",
    bold: true,
    color: "special",
    spacing: "-1px"
}

const Component = ({name, level, maxHP, currentHP, maxMP, currentMP}) => {
    return (<div>
        <div>
            <Typography>{name}</Typography>
        </div>
        <Grid justify="start">
            <Typography {...typographySpecial}>
                LV                
            </Typography>

            <div style={{paddingLeft: "3px"}}>
                <Typography bold style={{marginLeft: "0.5rem"}}>
                    {level}                
                </Typography>
            </div>
        </Grid>
        <Grid justify="start">
            <Typography {...typographySpecial}>
                HP                
            </Typography>

            <div style={{paddingLeft: "20px"}}>
                <TextBar 
                    barColor="#007dff"
                    value={currentHP}
                    max={maxHP}
                />
            </div>

        </Grid>
        <Grid justify="start">
            <Typography {...typographySpecial}>
                MP         
            </Typography>

            <div style={{paddingLeft: "20px"}}>
                <TextBar 
                    barColor="#00ff7b"
                    value={currentMP}
                    max={maxMP}
                />
            </div>
        </Grid>
    </div>)
}



export default Component

import React from 'react';
import styled from 'styled-components';
import Typography from '../typography/typography';
import ColourBar from '../progress-bar/colour-bar';
/*
          name="cloud"
          level="15"
          maxHP="548"
          currentHP="400"
          maxMP="121"
          currentMP="121"
*/


const typographyStatBar = {
    stretchX: "1.3",
    stretchY: "1.1",
    bold: true,
    spacing: "-1px"
}

const typographySpecial = {
    ...typographyStatBar,
    stretchY: "1.4",
    color: "special",
}

const typographyName = {
    ...typographyStatBar,
    stretchY: "1.4",
    bold: false
}



const GridText = styled.div`
    grid-area: text;
`;

const GridBar = styled.div`
    grid-area: bar;
`;

const TextBar = styled.div`
    display: grid;
    grid-template-rows: 1fr 0.01fr;
    grid-template-columns: 1fr;
    grid-template-areas: 
        'text'
        'bar';
`;

const Component = ({className, name, level, maxHP, currentHP, maxMP, currentMP}) => {
    return (<div>
        <Typography {...typographyName}>{name}</Typography>
        <div className={className}>
            <GridText style={{gridRow: "1 / 3"}}>
                <Typography {...typographySpecial}>
                    LV
                </Typography>
            </GridText>

            <GridBar style={{gridRow: "1 / 3"}}>
                <Typography bold style={{marginLeft: "0.5rem"}}>
                    {level}                
                </Typography>
            </GridBar>            

            <GridText style={{gridRow: "2 / 3"}}>
                <Typography {...typographySpecial} style={{flexGrow: "0.1"}}>
                    HP                
                </Typography>
            </GridText>

            <GridBar style={{gridRow: "2 / 3"}}>
                <TextBar>
                    <GridText style={{gridRow: "1 / 2", textAlign: "right"}}>
                        <Typography {...typographyStatBar}>
                            {currentHP}/ {maxHP}
                        </Typography>
                    </GridText>
                </TextBar>
                <GridBar style={{gridRow: "2 / 2", marginTop: "-3px"}}>
                    <ColourBar 
                        barColor="#007dff"
                        value={currentHP}
                        max={maxHP}
                    />
                </GridBar>
            </GridBar>

            <GridText style={{gridRow: "3 / 3"}}>
                <Typography {...typographySpecial} style={{flexGrow: "0.1"}}>
                    MP         
                </Typography>   
            </GridText>

            <GridBar style={{gridRow: "3 / 3"}}>
                <TextBar>
                    <GridText style={{gridRow: "1 / 2", textAlign: "right"}}>
                        <Typography {...typographyStatBar}>
                            {currentMP}/ {maxMP}
                        </Typography>
                    </GridText>
                    <GridBar style={{gridRow: "2 / 2", marginTop: "-3px"}}>
                        <ColourBar 
                            barColor="#00ff7b"
                            value={currentMP}
                            max={maxMP}
                        />
                    </GridBar>
                </TextBar>
            </GridBar>
        </div>
    </div>)
}

const StyledStats = styled(Component)`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 0.2fr 1fr;
    grid-template-areas: 
        'text bar'
        'text bar'
        'text bar';
`;


export default StyledStats

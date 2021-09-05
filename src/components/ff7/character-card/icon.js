import React from 'react';
import styled from 'styled-components';

import Grid from '../layout/grid';

const zoom = 2.5;

const SpritesheetWidth = () => 244 * zoom;
const SpritesheetHeight = () => 157 * zoom;

const SpriteWidth = () => 48 * zoom;
const SpriteHeight = () => 48 * zoom;

//sprite-sheet has a 1px transparent border between each sprite.
const SpriteXOffset = (x) => (SpriteWidth() * (x))  + (x*zoom);
const SpriteYOffset = (y) => (SpriteHeight() * (y)) + (y*zoom);

const CSSSpritesheetWidth = () => `${SpritesheetWidth()}px`;
const CSSSpritesheetHeight = () => `${SpritesheetHeight()}px`;

const CSSSpriteXOffset = (x) => -SpriteXOffset(x) + "px";
const CSSSpriteYOffset = (y) => SpriteYOffset(y) + "px";

const CSSSpriteWidth = () => SpriteWidth() + "px";
const CSSSpriteHeight = () => SpriteHeight() + "px";


const Component = ({className, row = "front", ...props}) => {
    return (<Grid area="icon" justify={row === "front" ? "start" : "end"}>
        <div className={className} />
    </Grid>)
}


const CharacterSpritesheet = {
    'cloud': {
        'backgroundPosition': `${CSSSpriteXOffset(0)} ${CSSSpriteYOffset(0)}`
    },
    'sephiroth': {
        'backgroundPosition': `${CSSSpriteXOffset(1)} ${CSSSpriteYOffset(0)}` //1 left, 0 top.
    },
    'barret': {
        'backgroundPosition': `${CSSSpriteXOffset(3)} ${CSSSpriteYOffset(0)}` //3 left, 0 top.
    },
    'tifa': {
        'backgroundPosition': `${CSSSpriteXOffset(4)} ${CSSSpriteYOffset(0)}` //4 left, 0 top.
    }
}

const StyledCharacterIcon = styled(Component).attrs(props => ({
    width: props.width || "100%",
    height: props.height || "100%",
    character: props.character || "cloud"
}))`
    width: ${CSSSpriteWidth()};
    height: ${CSSSpriteHeight()};
    background: url('/resources/ff7/img/portraits.png') no-repeat 0px 0px / ${CSSSpritesheetWidth()} ${CSSSpritesheetHeight()};
    background-position: ${props => CharacterSpritesheet[props.character].backgroundPosition};
    transform: scaleX(0.9);
    margin-right: 10px;
`;

export default StyledCharacterIcon

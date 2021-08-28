import React from 'react';

import { BarsGroup, CharacterCard, CharacterIcon, StatsGroup, Stats } from './index';
import { CharacterMenu } from '../menu';

const component = {
  title: 'ff7/Character Card',
  component: CharacterCard,
};

export default component;


const characters = [
  {
    icon: "cloud",
    name: "Cloud",
    level: "15",
    maxHP: "500",
    currentHP: "300",
    maxMP: "100",
    currentMP: "100"
  },
  {
    icon: "barret",
    name: "Barret",
    level: "15",
    maxHP: "500",
    currentHP: "300",
    maxMP: "50",
    currentMP: "100"
  },
  {
    icon: "tifa",
    name: "Tifa",
    level: "15",
    maxHP: "500",
    currentHP: "300",
    maxMP: "25",
    currentMP: "100"
  }
]

const WithMenu = (args) => <CharacterMenu width='600px'>
  {characters.map(
    (character) => <CharacterCard key={character.name}>
      <CharacterIcon character={character.icon} alt={character.icon} />
      <BarsGroup>
      </BarsGroup>
      <StatsGroup> 
      <Stats 
        name={character.name}
        level={character.level}
        maxHP={character.maxHP}
        currentHP={character.currentHP}
        maxMP={character.maxMP}
        currentMP={character.currentMP}
      />
    </StatsGroup>

    </CharacterCard>
  )}
</CharacterMenu>;

export const CardWithMenu = WithMenu.bind({});
CardWithMenu.args = {
};
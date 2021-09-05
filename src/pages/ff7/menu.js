import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

import { useHistory } from 'react-router-dom';

import { Menu, MenuItem, CharacterMenu, CharacterCard, CharacterIcon, 
        BarsGroup, StatsGroup, Stats, 
        NavigationMenu, Grid, Typography } from '../../components/ff7';

const characters = [
    {
      icon: "cloud",
      name: "Cloud",
      level: "15",
      maxHP: "500",
      currentHP: "500",
      maxMP: "100",
      currentMP: "100"
    },
    {
      icon: "barret",
      name: "Barret",
      row: "back",
      level: "15",
      maxHP: "500",
      currentHP: "400",
      maxMP: "100",
      currentMP: "50"
    },
    {
      icon: "tifa",
      name: "Tifa",
      level: "15",
      maxHP: "500",
      currentHP: "300",
      maxMP: "100",
      currentMP: "25"
    }
  ]

const MenuSection = () => {
    return (<NavigationMenu>
        <MenuItem>Item</MenuItem>
        <MenuItem>Magic</MenuItem>
        <MenuItem>Materia</MenuItem>
        <MenuItem>Equip</MenuItem>
        <MenuItem>Order</MenuItem>
        <MenuItem>Limit</MenuItem>
        <MenuItem>Config</MenuItem>
        <br />
        <MenuItem>Save</MenuItem>
        <MenuItem>Quit</MenuItem>
    </NavigationMenu>);
}

const GameLocationSection = () => {
    return (<Menu>
        <Typography>
        Midgard Area
        </Typography>
    </Menu>);
}

const GameTimeSection = () => {
    return (<Menu>
        <Grid>
            <Typography>
            Time
            </Typography>
            <Typography>
            8:41:41
            </Typography>
        </Grid>
        <Grid>
            <Typography>
            Gil
            </Typography>
            <Typography>
            9000
            </Typography>
        </Grid>
    </Menu>);    
}

const CharacterSection = () => {
    return (<CharacterMenu>
        {characters.map(
        (character) => <CharacterCard key={character.name}>
            <CharacterIcon row={character.row} character={character.icon} alt={character.icon} />
            <BarsGroup>
                <div style={{width: "75px"}}>

                </div>
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
    </CharacterMenu>);    
}

const DURATION = 0.5;

const MenuCard = ({animate = "open", onAnimationComplete}) => {
    return (<>
        <motion.div 
            style={{
                width: "100%",
                x: "200vw",
                opacity: 0
            }}
            variants={{
                open: {
                    x: 0,
                    opacity: 1
                },
                close: {
                    x: "100vw",
                    opacity: 0
                }

            }}
            onAnimationComplete={onAnimationComplete}
            animate={animate}
            transition={{ ease: "easeOut", duration: DURATION }}
        >
            <CharacterSection />
        </motion.div>
        <motion.div 
            style={{position: 'absolute', width: "25%", top: "200vh", left: "90%", opacity: 0}}
            variants={{
                open: {
                    top: "-20px",
                    opacity: 1
                },
                close: {
                    top: "100vh",
                    opacity: 0
                }

            }}
            animate={animate}
            transition={{ ease: "easeOut", duration: DURATION }}
        >
            <MenuSection />
        </motion.div>
        <motion.div 
            style={{position: 'absolute', width: "25%", top: "80%", left: "-200vw", opacity: 0}}
            transition={{ ease: "easeOut", duration: DURATION}}
            variants={{
                open: {
                    left: "90%",
                    opacity: 1
                },
                close: {
                    left: "-100vw",
                    opacity: 0
                }
            }}
            animate={animate}            
        >
            <GameTimeSection />
        </motion.div>
        <motion.div 
            style={{position: 'absolute', width: "50%", top: "-500px", left: "65%", opacity: 0}}
            animate={animate}
            variants={{
                open: {
                    top: "420px",
                    opacity: 1
                },
                close: {
                    top: "-500px",
                    opacity: 0
                }

            }}
            transition={{ ease: "easeOut", duration: DURATION }}            
        >
            <GameLocationSection />
        </motion.div>
    </>);
}

const MenuPage = () => {
    const history = useHistory();

    const [
        animation, setAnimation
    ] = useState("open");

    const onAnimationComplete = (definition) => {
        switch(definition) {
            case 'close':
                history.push("/ff7/");
                break;
            default:
                break;
        }
    }

    useEffect(
        () => {
            const eventListener = (event) => {
                if(event.key === "Escape" || event.keyCode === 27) {
                    setAnimation("close");
                }
            }

            window.addEventListener("keydown", eventListener);

            return () => {
                window.removeEventListener("keydown", eventListener);
            }
        },
        [history]
    )

    return <>
        <MenuCard animate={animation} onAnimationComplete={onAnimationComplete} />
    </>;
}

export default MenuPage;
export { MenuPage } 
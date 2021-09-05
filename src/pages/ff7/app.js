import { Routes } from './routes';
import { 
    Switch, Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import FF7Theme from '../../theme/ff7';
import GameScreen from './game-screen';

const FF7App = () => {
    return <>
        <FF7Theme.GlobalStyle />
        <ThemeProvider theme={FF7Theme}>
            <GameScreen>
                <Switch>
                    {Routes.map( (route, key) => <Route {...route} key={key} />)}
                </Switch>
            </GameScreen>
        </ThemeProvider>
    </>
}

export default FF7App;
export { FF7App } 
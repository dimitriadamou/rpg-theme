import styled from 'styled-components';
import { useEffect } from 'react';

const Background = styled.div`
    background-color: #000;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden; 
    color: #fff;
    min-height: 100vh;
    width: 100vw;
    display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;    
`;

const GameScreen = ({children}) => {
    window.document.body.style.overflow = "hidden";

    useEffect(
        () => {
            return () => {
                window.document.body.style.overflow = "";
            }
        },
        []
    )

    return <>
        <Background>
            <div style={{
                position: 'absolute', 
                "width": "520px"
            }}>
                {children}
            </div>
        </Background>
    </>;
}

export default GameScreen;
export { GameScreen } 
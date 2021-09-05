import React from 'react';
import Menu from './menu';
import styled from 'styled-components';

function ChatBubble({className, children, ...props}) {
    return (
        <Menu {...props}>
            {children}
        </Menu>
    )
}

    /*
    border-width: ${props => props.theme.background.borderWidth};
    border-style: solid;
    border-image: ${props => props.theme.background.borderHorizontalBackground};
    border-image-repeat: stretch;
    border-left: none;
    border-right: none;
    */


const StyledChatBubble = styled(ChatBubble)`
`;

export default StyledChatBubble

export { StyledChatBubble }

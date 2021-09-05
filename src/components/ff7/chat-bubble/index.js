import { forwardRef } from 'react';
import styled from 'styled-components';


const ChatBubble = forwardRef( 
    (
        {className, children, ...props}, 
        ref
    )  => {
    return (
        <div style={{overflow: "hidden", "padding": "6px 5px 6px 0px", "margin": "0px 0px 0px 0px"}}>
            <div ref={ref} className={className} {...props}>
                {children}
            </div>
        </div>
    );
});

const StyledChatBubble = styled(ChatBubble).attrs(props => ({
    width: props.width || "calc(100% - 20px)",
    height: props.height || "calc(100% - 20px)",
}))`
    border: ${props => props.theme.background.border};
    box-shadow: ${props => props.theme.background.boxShadow};
    border-radius: 4px;
    padding: 5px;
    margin-left: 5px;
    background: ${props => props.theme.background.background};
    width: ${props => props.width};
    height: ${props => props.height};
    font-family: Verdana, sans-serif;
    font-size: 20px;
    font-weight: normal;
`;

export default StyledChatBubble;
export { StyledChatBubble as ChatBubble };
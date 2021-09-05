import { useEffect, useState } from 'react';
import ChatBubble from '../../components/ff7/chat-bubble';
import Typography from '../../components/ff7/typography/typography';

import { motion } from 'framer-motion';

import { useHistory } from 'react-router-dom';

const MotionChatBubble = motion(ChatBubble);

const IndexPage = () => {
    let history = useHistory();
    const [animation, setAnimation] = useState("open");


    useEffect(
        () => {
            const eventListener = (event) => {
                if(event.key === "Escape" || event.keyCode === 27) {
                    //next-page-desu.
                    setAnimation("close");

                    setTimeout(
                        () => {
                            history.push("menu");
                        },
                        500
                    )
                }
            };

            window.addEventListener("keydown", eventListener);
            return () => window.removeEventListener("keydown", eventListener);
        },
        [history]
    )

    return <>
        <MotionChatBubble style={{textAlign: "center", opacity: 0}} 
        variants={{
            close: {
                opacity: 0
            },
            open: {
                opacity: 1
            }
        }}
        animate={animation}
        >
            <Typography>
                Press escape to open the menu.
            </Typography>
        </MotionChatBubble>
    </>;
}

export default IndexPage;
export { IndexPage } 
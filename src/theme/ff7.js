import { createGlobalStyle } from 'styled-components';
import theme from './base';

const ff7Theme = {...theme};

const globalStyle = createGlobalStyle`
        @font-face {
            font-family:'Reactor7';
                src:url('resources/ff7/font/Reactor7.eot');
                src:url('resources/ff7/font//Reactor7.eot?#iefix') format('embedded-opentype'),
                        url('resources/ff7/font//Reactor7.woff') format('woff'),
                        url('resources/ff7/font//Reactor7.ttf') format('truetype'),
                        url('resources/ff7/font//Reactor7.svg#Reactor7') format('svg');
            font-weight:normal;
            font-style:normal;
        }

        @media screen and (-webkit-min-device-pixel-ratio:0) {
            @font-face {
                font-family:'Reactor7';
                src: url('resources/ff7/font//Reactor7.svg') format('svg');
                font-weight:normal;
                font-style:normal;
            }
        }

        * {
            font-family: "Reactor7", "Verdana";
            font-size: 16px;
            text-shadow:    0px 2px #222,
                            2px 1px #222;
            // CSS you want global. 
        }
        
        .ff7-font-stretch {
            transform: scal(1.2, 0.85);
        }
    `;

ff7Theme.globalStyle = globalStyle;

export { globalStyle };

export default ff7Theme;

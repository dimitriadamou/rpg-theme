import { createGlobalStyle } from 'styled-components';
import theme from './base';

const ff7Theme = {...theme};

const GlobalStyle = createGlobalStyle`
        @font-face {
            font-family:'Reactor7';
                src:url('/resources/ff7/font/Reactor7.eot');
                src:url('/resources/ff7/font//Reactor7.eot?#iefix') format('embedded-opentype'),
                        url('/resources/ff7/font//Reactor7.woff') format('woff'),
                        url('/resources/ff7/font//Reactor7.ttf') format('truetype'),
                        url('/resources/ff7/font//Reactor7.svg#Reactor7') format('svg');
            font-weight:normal;
            font-style:normal;
        }

        @media screen and (-webkit-min-device-pixel-ratio:0) {
            @font-face {
                font-family:'Reactor7';
                src: url('/resources/ff7/font//Reactor7.svg') format('svg');
                font-weight:normal;
                font-style:normal;
            }
        }

        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            vertical-align: baseline;      
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

        * {
            font-family: "Reactor7", "Verdana";
            font-size: 16px;
            text-shadow:    0px 2px #222,
                            2px 1px #222;            
        }

        .ff7-font-stretch {
            transform: scal(1.2, 0.85);
        }
    `;

ff7Theme.GlobalStyle = GlobalStyle;

export { GlobalStyle };

export default ff7Theme;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

`;

const boxShadowBuilder = (px, color, unit = "px") => [
    `${px}${unit} ${px}${unit} ${color}`,
    `-${px}${unit} ${px}${unit} ${color}`,
    `${px}${unit} -${px}${unit} ${color}`,
    `-${px}${unit} -${px}${unit} ${color}`
].join(", ");

const theme = {
    GlobalStyle,
    variants: {
        color: {
            special: "#00e6e7"
        }
    },
    background: {
        primaryColor: "#fff",
        border: '1px solid #24354f',
        boxShadow: `${boxShadowBuilder(1, "#313131")},
                    ${boxShadowBuilder(2, "#7b7b7b")},
                    ${boxShadowBuilder(3, "#c5c5c5")},
                    ${boxShadowBuilder(4, "#b2b2b2")},
                    ${boxShadowBuilder(6, "#7b7b7b")}
        `,
        background: `
        linear-gradient(135deg, #0054b2, #000022 100.71%),
        linear-gradient(45deg, #0053b1, #000022 50.71%),
        linear-gradient(0deg, #0053ff, #000022 100.71%)
        `,
        borderWidth: "5px",
    }
}

export { GlobalStyle }

export default theme;
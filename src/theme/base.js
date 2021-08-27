import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`

`;

const theme = {
    globalStyle,
    background: {
        primaryColor: "#fff",
        boxShadow: `1px 1px #c5c5c5,
                    -1px -1px #c5c5c5,
                    -1px 1px #c5c5c5,
                    1px -1px #c5c5c5,
                    2px 2px #818181,
                    -2px -2px #818181,
                    -2px 2px #818181,
                    2px -2px #818181,
                    3px 3px #727272,
                    -3px -3px #727272,
                    -3px 3px #727272,
                    3px -3px #727272`,
        background: `
        linear-gradient(135deg, #0054b2, #000022 100.71%),
        linear-gradient(45deg, #0053b1, #000022 50.71%),
        linear-gradient(0deg, #0053ff, #000022 100.71%)
        `,
        borderWidth: "5px",
    }
}

export { globalStyle }

export default theme;
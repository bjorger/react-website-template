import { css, SimpleInterpolation } from "styled-components/macro";

interface Breakpoints {
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

interface Palette {}

interface Fonts {}

interface Theme {
    breakpoints: Breakpoints;
    palette: Palette;
    fonts: Fonts;
    boxShadow: SimpleInterpolation;
}

const breakpoints: Breakpoints = {
    sm: 600,
    md: 1200,
    lg: 1460,
    xl: 1600,
};

const theme: Theme = {
    breakpoints,
    palette: {},
    fonts: {},
    boxShadow: css`
        box-shadow: 5px 5px 12px -2px #000000;
    `,
};

export default theme;

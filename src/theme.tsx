import { createTheme } from '@mui/material/styles';
import { red, blue, green } from '@mui/material/colors';

const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: blue.A400,
        },
        secondary: {
            main: green['700'],
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;

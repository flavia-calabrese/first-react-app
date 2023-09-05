import { createTheme, experimental_extendTheme } from "@mui/material";



export const themeOptions = experimental_extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                  main: '#95d65d',
                },
                secondary: {
                  main: '#ffbf00',
                },
                background: {
                  paper: '#C0EF96',
                },
                warning: {
                  main: '#dcc803',
                },
                info: {
                  main: '#0dcbbb',
                },
                success: {
                  main: '#2e7d32',
                },
              },
    
        },
       
    },
    typography: {
        fontFamily: 'Lato',
      },
});
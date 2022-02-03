import React from 'react';
import { createTheme, useMediaQuery } from '@mui/material';
// import { dark, light } from '../lib/theme';

export default function useSystemTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // TODO: theme 전체 바꾸기
    // const theme = React.useMemo(
    // 	() => {
    //         const which: Object = prefersDarkMode ? { ...dark } : { ...light }
    //         console.log('hooks', which);
    // 		return createTheme(which)
    //     },
    // 	[prefersDarkMode]
    // );

    // TODO: mode만 바꾸기
    // 이렇게 하면 모드만 뒤집어 써진다 => Object.assign(A, { mode: dark }) 와 같음
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light'
                }
                // breakpoints: {
                //     values: {
                //         mobile: 0,
                //         tablet: 640,
                //         laptop: 1024,
                //         desktop: 1280
                //     }
                // }
            }),
        [prefersDarkMode]
    );
    console.log('theme: ', theme);

    return { theme };
}

// use this function to check system darkmode change other than useMediaQuery
// function setDarkLightModeChangeEventOnWindow() {
//     let theme;
//     window
//         .matchMedia('(prefers-color-scheme: dark)')
//         .addEventListener('change', (e) => {
//             var isDark = e.matches;
//             theme = isDark ? 'dark' : 'light'
//         });
//     return theme
// }

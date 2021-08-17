import React from 'react';
import { createTheme, useMediaQuery } from '@material-ui/core';
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
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode]
	);
    console.log('theme: ', theme)

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
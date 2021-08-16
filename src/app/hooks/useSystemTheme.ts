import { createTheme, useMediaQuery } from '@material-ui/core';
import React from 'react';

export default function useSystemTheme() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode]
	);

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
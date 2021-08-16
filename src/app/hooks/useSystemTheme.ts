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

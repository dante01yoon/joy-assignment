import {ThemeProvider, createGlobalStyle, css} from 'styled-components';
import React, { FC, ReactNode } from 'react';
import {reset} from 'styled-reset'
import { 
	Theme, 
	colors,
	typography
} from './index'; 

export const joyTheme: Theme<
	typeof colors,
	typeof typography
> = {
	colors : colors,
	typo: typography
}
export const globalStyle = css`
	${reset};
	
	body {
		background-color: ${p => p.theme.colors.background};
		height: 100vh;
	}
	a, ul,li {
		text-decoration: none; 
		list-style: none; 
		color: black; 
	}
`
export const JoyGlobalStyle = createGlobalStyle`
	${globalStyle};
`
export const JoyThemeProvider: FC<{
	children: ReactNode
}> = ({
	children
}) => {
	return(
		<ThemeProvider theme={joyTheme} >
			<JoyGlobalStyle /> 
			{children}
		</ThemeProvider>
	)
}


export default JoyThemeProvider; 
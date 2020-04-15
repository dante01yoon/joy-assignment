import React, { FC }  from 'react';
import ReactDOM  from 'react-dom'; 
import { JoyThemeProvider } from './theme/provider';
import { JoyView } from 'views'; 
import { JoyReduxProvider } from 'store';

export const App:FC = () => {
	return (
		<JoyReduxProvider>
			<JoyThemeProvider>
				<JoyView />
			</JoyThemeProvider>
		</JoyReduxProvider>
	)
}

ReactDOM.render(
		<App/>,
	document.getElementById('app')
); 
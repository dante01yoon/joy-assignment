import React, { FC }  from 'react';
import ReactDOM  from 'react-dom'; 
import { JoyThemeProvider } from './theme/provider';
export const App:FC = () => {
	return (
		<>
			<JoyThemeProvider>
				App
			</JoyThemeProvider>
		</>
	)
}

ReactDOM.render(<App/>, document.getElementById('app')); 
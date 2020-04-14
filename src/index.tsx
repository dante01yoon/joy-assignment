import React, { FC }  from 'react';
import ReactDOM  from 'react-dom'; 
import { JoyThemeProvider } from './theme/provider';
import { JoyView } from 'views'; 
export const App:FC = () => {
	return (
		<>
			<JoyThemeProvider>
				<JoyView />
			</JoyThemeProvider>
		</>
	)
}

ReactDOM.render(<App/>, document.getElementById('app')); 
import React, { FC ,useState, useCallback, ChangeEvent} from 'react';
import { useSelector } from 'react-redux';
import {
	searchDataAsync
} from 'reducers/dataSearch'; 
import { 
	StyledInputContainer,
	StyledInput 
} from './style';
export const SmartInput = () => {
	const [input, setInput] = useState('');
	const onChange = (e:ChangeEvent<HTMLInputElement>) => {
		const modifiedInput = e.target.value; 
		setInput(modifiedInput);
		searchDataAsync(modifiedInput); 
	}
	return (
		<StyledInputContainer>
			<StyledInput value={input} onChange={useCallback(onChange,[])}/>
		</StyledInputContainer>
	)
}

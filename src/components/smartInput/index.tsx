import React, { FC ,useState, useCallback, ChangeEvent, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'; 
import { getSelector } from 'libs'; 
import {
	searchDataAsync
} from 'actions/dataSearch'; 
import { 
	StyledInputContainer,
	StyledInput 
} from './style';
export const SmartInput: FC = () => {
	const [input, setInput] = useState('');
	const { data } = getSelector('data');
	const dispatch = useDispatch();
	useEffect(() => {
		data && dispatch(searchDataAsync(input, data));
		
	},[input])

	const onChange = (e:ChangeEvent<HTMLInputElement>) => {
		const modifiedInput = e.target.value; 
		setInput(modifiedInput);
	}

	return (
		<StyledInputContainer>
			<StyledInput value={input} onChange={useCallback(onChange,[])}/>
		</StyledInputContainer>
	)
}

import React, { FC , useState, ChangeEvent} from 'react';
import { useDispatch } from 'react-redux';
import { getSelector } from 'libs'; 
import { NationalData } from 'models';
import  {
	StyledContainer,
	StyledRow,
	StyledColumn,
	StyledTitle,
	StyledInput,
	StyledSelect,
	StyledError
} from './style';
import { 
	addDataAsync
} from 'actions/dataEdit';
import { BlueButton } from 'components/button';
export const AddCard: FC<{
	nationalData?: NationalData[]
}> = ({
	nationalData = [] 
}) => {
	const [disabled, setDisabled] = useState(true); 
	const [state, setState] = useState({
		name: "",
		alpha2Code: "",
		callingCodes: "",
		capital: "",
		region: ""
	});
	const [error,setError] = useState("");
	const dispatch = useDispatch(); 
	const { data } = getSelector('data');
	const checkValid = (key: keyof NationalData, check: string | string[]):boolean => {
		var flag = false 
		for(let i = 0; i< nationalData.length; i++){
			if(typeof(nationalData[i][key]) === "string" && 
					(nationalData[i][key] as string).toLowerCase() === (check as string).toLowerCase()){
				flag = true; 
				break; 
			} else if(
				nationalData[i][key] === check
			){
				flag = true;
				break; 
			}
		}
		return flag; 
	}
	const onChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const value = e.target.value; 
		const flag = checkValid(e.target.name as keyof NationalData, value);
		setState({
			...state,
			[e.target.name] : value 
		});
		if(flag){
			setDisabled(true);
			setError(e.target.name); 
		} else {
			setDisabled(false);
			setError("");
		} 
	}
	const addNewNationalData = (state:NationalData) => {
		data && dispatch(addDataAsync(state, data));
		console.log(state);
	}
	return(
		<StyledContainer>
			<StyledRow>
				<StyledColumn>
					<StyledTitle>
						name
					</StyledTitle>
					<StyledInput name="name" value={state.name} onChange={onChange}/> 
				</StyledColumn>
				<StyledColumn>
					<StyledTitle>
						alpha2Code
					</StyledTitle>
					<StyledInput name="alpha2Code" value={state.alpha2Code} onChange={onChange}/> 
				</StyledColumn>
				<StyledColumn>
					<StyledTitle>
						callingCodes
					</StyledTitle>
					<StyledInput name="callingCodes" value={state.callingCodes} onChange={onChange}/> 
				</StyledColumn>
				<StyledColumn>
					<StyledTitle>
						capital
					</StyledTitle>
					<StyledInput name="capital" value={state.capital} onChange={onChange}/> 
				</StyledColumn>
				<StyledColumn>
					<StyledTitle>
						region
					</StyledTitle>
					<StyledSelect name="region" value={state.region} onChange={onChange}>
						<option value="Asia" selected>Asia</option>
						<option value="Europe">Europe</option>
						<option value="Americas">Americas</option>
						<option value="Africa">Africa</option>
						<option value="Oseania">Oseania</option>
					</StyledSelect>
				</StyledColumn>
			</StyledRow>
			<BlueButton disabled={disabled} onClick ={addNewNationalData({
				name: state.name,
				alpha2Code: state.alpha2Code,
				callingCodes: [state.callingCodes],
				capital: state.capital,
				region: state.region
			})} >추가</BlueButton>
			<StyledError disabled={!!error}>
				{error} value is already exist
			</StyledError>
		</StyledContainer>	
		
	)
}
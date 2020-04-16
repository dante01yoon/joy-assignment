import React, { FC } from 'react'; 
import { getSelector } from 'libs';
import { useDispatch } from 'react-redux';
import { removeDataAsync } from 'actions/dataEdit';
import { 
	StyledCard,
	StyledTitleBox,
	StyledTitle,
	StyledTypeName,
	StyledButtonBox,
	StyledTitleNestedBox,
	StyledContentBox,
	StyledContentColumnFirst,
	StyledContentColumnSecond,
	StyledNumber
 } from './style';
import { NationalData } from 'models';
import { BlueButton } from 'components/button';
import { removeData } from 'actions';
 export const Card: FC<{
	 	buttonExist?: boolean 
	 	search?: boolean,
	 	index: number,
	  nationalData : NationalData
 }> = ({
	 buttonExist = true,
	 search = false, 
	 index,
	 nationalData
 }) => {
	 const dispatch= useDispatch();
	 const {
		 name,
		 alpha2Code,
		 callingCodes,
		 capital,
		 region
	 } = nationalData; 
	 const { data } = getSelector('data');
	 const removeNationalData = (state:NationalData) => {
		data && dispatch(removeDataAsync(state, data));
		console.log(state);
	}
	return (
		<StyledCard>
			<StyledTitleBox>
					<StyledTypeName>{ alpha2Code }</StyledTypeName>
					<StyledTitleNestedBox>
						<StyledTitle>
							{ name }
						</StyledTitle>
					</StyledTitleNestedBox>
					{buttonExist && 
						<StyledButtonBox>
							{search ? 
								<BlueButton isActive={false} > 추가 </BlueButton>
											:
								<BlueButton isActive={false} onClick={removeNationalData(nationalData)}> 삭제 </BlueButton>
							}	
						</StyledButtonBox>
 					}
			</StyledTitleBox>
			<StyledContentBox>
				<StyledContentColumnFirst>
					<StyledNumber>
						{ index+1 }
					</StyledNumber>
				</StyledContentColumnFirst>
				<StyledContentColumnSecond>
					<StyledTitle>callingCodes: </StyledTitle>
					{
						callingCodes.map((value:string, index:number) => {
							return <StyledTitle key={index}> {value} </StyledTitle>
						})
					}
					<StyledTitle>
						capital: {capital}
					</StyledTitle>
					<StyledTitle>
						region: {region}
					</StyledTitle>
				</StyledContentColumnSecond>
			</StyledContentBox>	
		</StyledCard>
	)
 }

 
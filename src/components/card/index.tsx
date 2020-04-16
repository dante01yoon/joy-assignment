import React, { FC } from 'react'; 
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
	 const {
		 name,
		 alpha2Code,
		 callingCodes,
		 capital,
		 region
	 } = nationalData; 
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
								<BlueButton isActive={false} > 삭제 </BlueButton>
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
						callingCodes.map((value:number, index:number) => {
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

 
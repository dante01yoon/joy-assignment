import React, { FC, ReactNode } from 'react';
import { 
	StyledGnbLeft,
	StyledGnbRight,
	TitleRight,
	TitleLeft,
} from './style'; 
import { SmartInput } from 'components/smartInput'; 
import { BlueButton } from 'components/button';
export const Gnb: FC<{
}> = ({}) => {
	return(
		<>
			<StyledGnbLeft>
				<TitleRight>
						검색결과 국가 리스트 
				</TitleRight> 
			</StyledGnbLeft>
			<StyledGnbRight>
				<TitleLeft>
						국가 검색/추가
				</TitleLeft>
				<SmartInput/>
				<BlueButton> 추가 </BlueButton>
			</StyledGnbRight>
		</>
	)	
}


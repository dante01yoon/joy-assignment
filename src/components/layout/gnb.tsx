import React, { FC, ReactNode } from 'react';
import { 
	StyledGnbLeft,
	StyledGnbRight,
	TitleRight,
	TitleLeft,
} from './style'; 

export const Gnb: FC<{
}> = ({}) => {
	return(
		<>
			<StyledGnbLeft>
				<TitleRight>
						국가 리스트 
				</TitleRight> 
			</StyledGnbLeft>
			<StyledGnbRight>
				<TitleLeft>
						국가 검색/추가
				</TitleLeft>
			</StyledGnbRight>
		</>
	)	
}


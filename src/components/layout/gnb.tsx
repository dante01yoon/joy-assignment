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
				<TitleLeft>
						국가 리스트 
				</TitleLeft> 
			</StyledGnbLeft>
			<StyledGnbRight>
				<TitleRight>
						국가 검색/추가
				</TitleRight>
			</StyledGnbRight>
		</>
	)	
}


import React, { FC } from 'react';
import { getSelector } from 'libs'; 
import { Card } from 'components/card';
import { 
	SearchListContainer
} from './style';
import Placeholder from 'components/placeholder';

export const SearchList: FC = () => {
	const { data } = getSelector('search');
	
	return(
		<>
			<SearchListContainer>
				{
					data && data.length > 0 ?
						data.map((value,index) => {
							return (
							<Card 
								search={false}
								nationalData={value} 
								index={index}/>
							)
						})
						:
					<Placeholder/>
				}
			</SearchListContainer>
		</>
	)
} 
import React, { FC, useEffect } from 'react';
import {
	ListContainer,
	StyledColumn,
} from './style';
import { LoadingView } from 'components/loading';
export const ListView = () => {

	useEffect(() => {
		
	})
	const listData = []; 
	return(
	<>
		<ListContainer>
			{
				listData.length > 0 
					?
					<div>data</div>
					:
					<LoadingView />
			}
		</ListContainer>

		
		
	</>
	)
}


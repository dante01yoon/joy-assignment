import React, { FC } from 'react';
import { 
	LayoutContainer,
	GnbContainer,
	Main,
	StyledLeftColumn
} from './style';
import ListView from 'components/list';
import { Gnb } from 'components/layout/gnb';  
import Placeholder from 'components/placeholder';
export const JoyView: FC = ({
}) => {
	const searchData = [] ; 
	return(
		<LayoutContainer>
			<GnbContainer>
				<Gnb/>
			</GnbContainer>
			<Main>
				<ListView/>
			</Main>
		</LayoutContainer>
	)
}

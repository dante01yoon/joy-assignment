import React, { FC } from 'react';
import { 
	LayoutContainer,
	GnbContainer,
	Main,
	StyledLeftColumn,
	StyledRightColumn
} from './style';
import ListView from 'components/list';
import { Gnb } from 'components/layout/gnb';  
import { SearchList } from 'components/searchList';
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
				<StyledLeftColumn>
				<ListView/>
				</StyledLeftColumn>
				<StyledRightColumn>
					<SearchList /> 
				</StyledRightColumn>
			</Main>
		</LayoutContainer>
	)
}

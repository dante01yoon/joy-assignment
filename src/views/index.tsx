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
					<StyledLeftColumn>
						{
							searchData.length > 0 
								?
									<div>data가 있습니다.</div>
								:
									<Placeholder /> 
						}					
					</StyledLeftColumn>
					<ListView/>
				</Main>
		</LayoutContainer>
	)
}

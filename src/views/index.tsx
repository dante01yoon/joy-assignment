import React, { FC } from 'react';
import { 
	LayoutContainer,
	GnbContainer,
	Main,
	StyledRightColumn
} from './style';
import { ListView } from 'components/list';
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
					<StyledRightColumn>
						{
							searchData.length > 0 
								?
									<div>data가 있습니다.</div>
								:
									<Placeholder /> 
						}					
					</StyledRightColumn>
				</Main>
		</LayoutContainer>
	)
}

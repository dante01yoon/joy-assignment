import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataAync } from 'actions/dataFetch';
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
import { AddCard } from 'components/addCard';
import { getSelector } from 'libs';
export const JoyView: FC = ({
}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDataAync());
	},[]); 
	const {data} = getSelector('data'); 
	return(
		<LayoutContainer>
			<GnbContainer>
				<Gnb/>
			</GnbContainer>
			<Main>
				<StyledLeftColumn>
					<SearchList /> 
				</StyledLeftColumn>
				<StyledRightColumn>
					<AddCard nationalData={data}/> 
				</StyledRightColumn>
			</Main>
		</LayoutContainer>
	)
}


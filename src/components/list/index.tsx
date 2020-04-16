import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import {
	ListContainer
} from './style';
import { LoadingView } from 'components/loading';
import { fetchDataAync } from 'actions';
import { RootState } from 'reducers';
import { NationalData } from 'models'; 
import { Card } from 'components/card';
const ListView:FC = () => {
	const dispatch = useDispatch(); 
	const fetchData = useSelector((state: RootState) => state.data);
	const listData =  fetchData?.data ?? [] as NationalData[]; 

	useEffect(() => {
		dispatch(fetchDataAync());
	},[]); 
	return(
	<>
		<ListContainer>
			{
				listData && listData?.length > 0 
					?
					listData.map((value,index) => {
						return <Card key={index} index={index} search={false} nationalData={value}/>
					})
					:
					<LoadingView />
			}
		</ListContainer>

		
		
	</>
	)
}


export default ListView;
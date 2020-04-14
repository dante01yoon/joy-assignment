import { useSelector } from 'react-redux';
import { RootState } from 'reducers';

export type StoreKeys = keyof RootState;
export function useStore< K extends StoreKeys>(key : K) {
	const store = useSelector(key)
}



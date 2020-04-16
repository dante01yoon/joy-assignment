import { useSelector } from 'react-redux';
import { RootState } from 'reducers';

export type StoreKeys = keyof RootState;

export const getSelector= (key: StoreKeys ):RootState[StoreKeys] => useSelector((state:RootState) => state[key]);
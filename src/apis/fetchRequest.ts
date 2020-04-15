import { http } from './useHttpModuels';
import {
	APIResponse
} from './types';
import { ViewModel } from 'models';

export const fetchRequest = ():Promise<APIResponse<ViewModel>> => {
	return http.GET<ViewModel>(''); 
}
import React, { FC, ReactNode } from 'react';
import {
	StyledBlueButton
} from './style';
import { NationalData } from 'models';
export const BlueButton:FC<{
	disabled?: boolean
	children?: ReactNode,
	isActive?: boolean,
	onClick?: any
}> = ({
	disabled = false,  
	isActive = false,
	children = '',
	onClick
}) => {
	const handleOnClick = onClick;
	return(
		<StyledBlueButton isActive={isActive} onClick={handleOnClick} disabled={disabled}>
			{children}
		</StyledBlueButton>
	)
};

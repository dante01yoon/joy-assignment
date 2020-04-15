import React, { FC, ReactNode } from 'react';
import {
	StyledBlueButton
} from './style';
export const BlueButton:FC<{
	children?: ReactNode,
	isActive?: boolean,
	onClick?: () => void
}> = ({
	isActive = false,
	children = '',
	onClick
}) => {
	const handleOnClick = onClick;
	return(
		<StyledBlueButton isActive={isActive} onClick={handleOnClick}>
			{children}
		</StyledBlueButton>
	)
};

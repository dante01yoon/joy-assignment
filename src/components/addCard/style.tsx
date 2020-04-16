import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
	height: 400px;
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyledRow = styled.div`
	display:flex;
	flex-direction: column;
	margin: 16px; 
`;

export const StyledColumn = styled.div`
	display: flex;
	
`;

export const StyledTitle = styled.div`
	display: flex;
	align-items: center;
	${ p => p.theme.typo.title14skyGray};
	width: 100px;
`

export const StyledInput = styled.input`
	padding: 0 16px; 
	*:focus{
		outline: none; 
	}
	border: 2px solid ${p => p.theme.colors.border};
	outline: 0;  
	border-radius: 8px; 
	width: 240px;
	height: 32px; 
	${p => p.theme.typo.button14skyBlue};
`

export const StyledSelect = styled.select`
	${ p => p.theme.typo.title14skyGray};
	padding: 0 16px; 
	width: 276px;
	height: 32px; 
	border-radius: 8px; 
	background: ${p => p.theme.colors.white}; 
	border: 2px solid ${p => p.theme.colors.border}; 
	
	option {
		color: black;
		background: ${p => p.theme.colors.white}; 
		display: flex;
		white-space: pre; 
		min-height: 32px;
		padding: 0px 2px 1px; 
	}
` ;

export const StyledError = styled.div<{
	disabled: boolean
}>`
	${ p => p.disabled 
			?
				css`
					display: flex;
				`
			:
				css`				
					display: none; 
				`
	}	
	margin: 16px;
	width: 248px;
	align-items: center;
	justify-content: center; 
	${p => p.theme.typo.title14skyGray };
	color: red;
`;
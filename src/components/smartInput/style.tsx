import styled from 'styled-components';

export const StyledInputContainer = styled.div`
	padding: 0 16px; 
	& textarea:focus, input:focus {
		outline: none;
	}
`;
export const StyledInput= styled.input`
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
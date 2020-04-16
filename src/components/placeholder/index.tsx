import React, { FC } from 'react';
import {
	StyledPlaceholder,
	StyledParagraph,
	StyledTextBox,
	EditBlueButton
} from './style';

const Placeholder: FC = () => {

	return (
		<StyledPlaceholder>
			<StyledTextBox>
				<StyledParagraph>
					<EditBlueButton > 
						검색  
					</EditBlueButton>
					창을 이용해  
				</StyledParagraph>
				<StyledParagraph>
					찾고자 하는 국가를 검색해보세요.
				</StyledParagraph>
			</StyledTextBox>
		</StyledPlaceholder>
	)
}	

export default Placeholder; 
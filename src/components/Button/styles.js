import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #CDCDCD;
  background-color: #00AAF0;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 700;
  flex:1;
	-webkit-box-shadow: -35px 32px 14px rgba(29, 140, 231, 0.45);
		-moz-box-shadow:    -35px 32px 14px rgba(29, 140, 231, 0.45);
		box-shadow:         -35px 32px 14px rgba(29, 140, 231, 0.45);	

  &:hover {
    opacity: 0.6;
  }
`
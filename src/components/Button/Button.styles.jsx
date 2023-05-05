import styled from 'styled-components';

const StyledButton = styled.button`
  width: 120px;
  height: 30px;
  left: 1400px;
  top: 10px;
  position: relative;
  margin-left: 50px;
  background: #d9d9d9;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
  font-size: ${({ theme }) => theme.fontSize.s};

  color: ${({ theme }) => theme.colors.darkBlue};

  :active {
    transform: translateY(0.25em);
    outline: none;
  }
  :focus {
    outline: none;
  }
`;

export default StyledButton;

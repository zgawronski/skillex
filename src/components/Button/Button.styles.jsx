import styled from 'styled-components';

const StyledButton = styled.button`
  width: 120px;
  height: 30px;

  background: #d9d9d9;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 15px;
  cursor: pointer;

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

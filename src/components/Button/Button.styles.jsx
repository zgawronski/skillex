import styled from 'styled-components';

const StyledButton = styled.button`
  width: 7.5rem;
  height: 1.875rem;
  left: 87.5rem;
  top: 0.625rem;
  position: relative;
  margin-left: 3.125rem;
  background: #d9d9d9;
  border: 1px solid ${({ theme }) => theme.colors.skillLvl3};
  border-radius: 0.9375rem;
  cursor: pointer;
  box-shadow: 0 0.1875rem 0.5rem rgba(0, 0, 0, 0.3);
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.skillLvl3};

  :active {
    transform: translateY(0.25rem);
    outline: none;
  }
  :focus {
    outline: none;
  }
`;

export default StyledButton;

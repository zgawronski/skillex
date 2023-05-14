import styled from 'styled-components';

const StyledButton = styled.button`
  width: 7.5em;
  height: 1.875em;
  background: ${({ theme }) => theme.colors.formStroke};
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

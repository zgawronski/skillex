import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 7.5em;
  height: 1.875em;
  background: ${({ theme }) => theme.colors.skillLvl3};
  border: 1px solid ${({ theme }) => theme.colors.skillLvl3};
  cursor: pointer;
  box-shadow: 0 0.1875rem 0.5rem rgba(0, 0, 0, 0.3);
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  :active {
    transform: translateY(0.25rem);
    outline: none;
  }
  :focus {
    outline: none;
  }
`;

import styled from 'styled-components';

export const Input = styled.input`
  width: 9.375rem;
  height: 1.5rem;
  margin-bottom: 0.625rem;
  padding: 0.1875rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;

  text-align: center;
  background: ${({ theme }) => theme.colors.formBackground};
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
`;
// export const SearchButton = styled.button`

// `

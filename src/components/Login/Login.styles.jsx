import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 5rem;
  position: absolute;
  width: 17.5rem;
  height: 20.75rem;
  top: 100%;
  left: 50%;

  background: #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  button {
    position: relative;
    width: 9.375rem;
  }
`;

export const LoginInput = styled.input`
  width: 9.375rem;
  height: 1.5rem;
  margin-bottom: 0.625rem;
  padding: 0.1875rem;
  font-size: ${({ theme }) => theme.fontSize.s};

  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
`;

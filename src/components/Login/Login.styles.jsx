import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 17.5rem;
  height: 20.75rem;
  padding: 5rem;
  margin: 20vh auto 5vh auto;
  background: #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  * {
    outline: none;
  }
  button {
    position: relative;
    width: 9.375rem;
  }
  @media ${({ theme }) => theme.breakpoints.mobileOnly && theme.breakpoints.notDesktop} {
    top: 0;
  }
`;

export const LoginInput = styled.input`
  width: 9.375rem;
  height: 1.5rem;
  margin-bottom: 0.625rem;
  padding: 0.1875rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
`;

export const LoginCheckbox = styled.input``;

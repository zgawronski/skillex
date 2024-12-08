import styled from 'styled-components';

export const WorkerDataFrame = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: 9.75rem;
  left: 4.5rem;
  top: 25rem;
`;

export const Input = styled.input`
  width: 9.375rem;
  height: 1.5rem;
  margin-bottom: 0.625rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.commonText};
  text-align: center;
  border: none;
  background: ${({ theme }) => theme.colors.formBackground};
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
`;

export const SubmitButton = styled.button`
  width: 9.375rem;
  height: 1.5rem;
  background: ${({ theme }) => theme.colors.commonText};
  border: 1px solid ${({ theme }) => theme.colors.commonText};
  cursor: pointer;
  box-shadow: 0 0.1875rem 0.5rem rgba(0, 0, 0, 0.3);
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.white};
  :active {
    transform: translateY(0.25rem);
    outline: none;
  }
  :focus {
    outline: none;
  }
`;

export const Skiller = styled.div`
  display: grid;
  height: 12.5rem;
`;

export const SkillSelection = styled.select`
  width: 3rem;
  height: 1.3rem;
  flex: none;
  flex-grow: 0;
  margin-right: 1.625rem;
  margin-left: -5.625rem;
  mix-blend-mode: normal;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.commonText};
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
`;

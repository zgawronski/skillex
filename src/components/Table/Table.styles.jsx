import styled from 'styled-components';

export const Wrapper = styled.div``;
export const SkillFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  width: 56.25rem;
  height: auto;
  left: 28.75rem;
  top: 18.75rem;
`;

export const SkillLabel = styled.div`
  width: 9.375rem;
  height: 1.5rem;
  padding: 0.1875rem;
  padiing-left: 0.3125rem;
  flex: none;
  flex-grow: 0;
  margin-left: -6.25rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBlue};
  background: ${({ theme }) => theme.colors.formBackground};
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
  transform: rotate(-43.55deg);
`;

export const WorkerFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: 9.75rem;
  left: 12.5rem;
  top: 25rem;
`;

export const WorkerLabel = styled.div`
  width: 9.375rem;
  height: 1.5rem;
  margin-bottom: 0.625rem;
  padding: 0.1875rem;
  padiing-left: 0.3125rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBlue};

  background: ${({ theme }) => theme.colors.formBackground};
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
`;
export const WorkerSkillWrapper = styled.div`
  width: 95.75rem;
  display: flex;
`;

export const LevelFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  width: 85rem;
  height: 1.5rem;
  left: 10.75rem;
`;

export const LevelMarker = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  flex: none;
  flex-grow: 0;
  margin-right: 1.625rem;
  background: ${({ theme }) => theme.colors.formBackground};
  mix-blend-mode: normal;
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
  border-radius: 0.9375rem;
`;

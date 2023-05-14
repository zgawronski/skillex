import styled from 'styled-components';

export const Wrapper = styled.div``;
export const SkillFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  width: 56.25rem;
  height: auto;
  left: 20.7rem;
  top: 18.75rem;
`;

export const SkillLabel = styled.div`
  width: 9.375rem;
  height: 1.5rem;
  padding: 0.1875rem;
  padding-left: 0.65rem;
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
  left: 4.5rem;
  top: 25rem;
`;

export const WorkerSkillWrapper = styled.div`
  width: 95.75rem;
  display: flex;
`;

export const WorkerLabel = styled.div`
  width: 9.375rem;
  height: 1.5rem;
  margin-bottom: 0.625rem;
  padding: 0.1875rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  background: ${({ theme }) => theme.colors.formBackground};
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
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
  background-color: ${({ name, theme }) => {
    if (name == 0) return theme.colors.white;
    if (name == 1) return theme.colors.lightBlue;
    if (name == 2) return theme.colors.blue;
    if (name == 3) return theme.colors.darkBlue;
  }};
  mix-blend-mode: normal;
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
  border-radius: 0.9375rem;
`;

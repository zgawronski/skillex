import styled from 'styled-components';

export const Wrapper = styled.div``;
export const WorkerFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 1225px;
  left: 395px;
  top: 300px;
`;

export const WorkerLabel = styled.div`
  width: 150px;
  height: 24px;
  padding: 3px;
  padding-left: 5px;
  flex: none;
  flex-grow: 0;
  margin-left: -35px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBlue};
  background: ${({ theme }) => theme.colors.formBackground};
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
  transform: rotate(-43.55deg);
`;

export const SkillFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  width: 1400px;

  left: 200px;
  top: 400px;
`;

export const SkillLabel = styled.div`
  width: 150px;
  height: 24px;
  margin-bottom: 10px;
  padding: 3px;
  padiing-left: 5px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBlue};

  background: ${({ theme }) => theme.colors.formBackground};
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
`;

export const LevelFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: 1115px;
  height: 24px;
  left: 372px;
  top: 400px;
`;

export const LevelMarker = styled.div`
  width: 24px;
  height: 24px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  flex: none;
  flex-grow: 0;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.colors.formBackground};
  mix-blend-mode: normal;
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
  border-radius: 15px;
`;

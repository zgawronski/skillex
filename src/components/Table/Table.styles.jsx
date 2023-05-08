import styled from 'styled-components';

export const Wrapper = styled.div``;
export const SkillFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 1211px;
  height: 125px;
  left: 397px;
  top: 300px;
`;

export const SkillBox = styled.div`
  width: 125.24px;
  height: 120.75px;
  flex: none;
  flex-grow: 0;
  margin: 0px -35px;
`;
export const SkillLabel = styled.div`
  width: 150px;
  height: 24px;
  padding: 3px;
  padding-left: 5px;
  left: 0;
  right: -19.77%;
  top: 85.6%;
  bottom: -5.47%;
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
  width: 150px;
  height: 704px;
  left: 200px;
  top: 400px;
`;
export const WorkerBox = styled.div``;

export const WorkerLabel = styled.div`
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
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  width: 1115px;
  height: 24px;
  left: 372px;
  top: 400px;
`;

export const LevelBox = styled.div`
  flex: none;
  flex-grow: 0;
  margin: 0 31px 0 0;
`;
export const LevelMarker = styled.div`
  width: 24px;
  height: 24px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: ${({ theme }) => theme.colors.formBackground};
  mix-blend-mode: normal;
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
  border-radius: 15px;
`;

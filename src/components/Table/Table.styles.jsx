import styled from 'styled-components';

export const TableWrapper = styled.div`
  /* display: flex;
  width: 1550px;
  height: 600px;
  margin-left: 20px;
  border-radius: 0.3125rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25); */
`;
export const SkillFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  //width: 56.25rem;
  width: auto;
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
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;

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
    if (name == 1) return theme.colors.skillJunior;
    if (name == 2) return theme.colors.skillMid;
    if (name == 3) return theme.colors.skillSenior;
  }};
  mix-blend-mode: normal;
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
  border-radius: 0.9375rem;
`;
export const SearchInput = styled.div`
  display: flex;
  width: 9.375rem;
  height: 1.5rem;
  margin-bottom: 0.625rem;
  padding: 0.1875rem;
  border: 1px solid ${({ theme }) => theme.colors.formStroke};
  background: ${({ theme }) => theme.colors.formBackground};
`;
export const Input = styled.input`
  width: 90%;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.commonText};
  text-align: center;
  border: none;
`;
export const Magnifier = styled.img`
  width: 1rem;
  height: 1rem;
  border: none;
  cursor: pointer;
`;

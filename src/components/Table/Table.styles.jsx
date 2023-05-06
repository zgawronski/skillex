import styled from 'styled-components';

export const Wrapper = styled.div``;
export const SkillFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 1211px;
  left: 397px;
  top: 138px;
`;
export const SkillLabel = styled.div`
  width: 400px;
  height: 25px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.colors.formBackground};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  transform: rotate(-43.55deg);
`;

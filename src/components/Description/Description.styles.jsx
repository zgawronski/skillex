import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  position: absolute;
  top: 25rem;
  left: 100rem;
  width: 15rem;
  height: 16.25rem;
  border-radius: 0.3125rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
`;

export const DescriptionText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1.875rem;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const SkillLvlContainer = styled.div`
  align-items: center;
  display: flex;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.625rem;
`;

export const SkillLvl = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ name, theme }) => {
    if (name == 0) return theme.colors.white;
    if (name == 1) return theme.colors.skillJunior;
    if (name == 2) return theme.colors.skillMid;
  }};
`;

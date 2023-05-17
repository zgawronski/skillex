import styled from 'styled-components';

export const StyledDepartmentName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.skillLvl3};

  @media ${({ theme }) => theme.breakpoints.mobileOnly && theme.breakpoints.notDesktop} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

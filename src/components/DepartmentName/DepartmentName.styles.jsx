import styled from 'styled-components';

export const StyledDepartmentName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.commonText};

  @media ${({ theme }) => theme.breakpoints.mobileOnly && theme.breakpoints.notDesktop} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

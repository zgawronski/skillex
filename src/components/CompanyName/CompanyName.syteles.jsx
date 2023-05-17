import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.mobileOnly && theme.breakpoints.notDesktop} {
    width: 100%;
  }
`;
export const StyledName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  text-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);

  @media ${({ theme }) => theme.breakpoints.mobileOnly && theme.breakpoints.notDesktop} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

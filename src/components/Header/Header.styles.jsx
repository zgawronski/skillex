import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  position: relative;

  width: 100vw;
  height: 20vh;
  margin: 0;

  @media ${({ theme }) => theme.breakpoints.mobileOnly && theme.breakpoints.notDesktop} {
    gap: 1rem;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: auto;
    padding-bottom: 1rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.mobileOnly && theme.breakpoints.notDesktop} {
    width: 100%;
  }
`;

export const ButtonsSection = styled.div`
  display: flex;
  width: 25%;
  padding-top: 5vh;
  gap: 4rem;
  justify-content: right;
  @media ${({ theme }) => theme.breakpoints.mobileOnly && theme.breakpoints.notDesktop} {
    gap: 1rem;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 0;
  }
`;

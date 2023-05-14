import styled from 'styled-components';

const StyledName = styled.span`
  position: absolute;
  width: 26.8125rem;
  height: 4.375rem;
  left: 3.125rem;
  top: 10vh;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
`;

export default StyledName;

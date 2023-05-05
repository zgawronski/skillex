import styled from 'styled-components';

const StyledName = styled.span`
  position: absolute;
  width: 429px;
  height: 70px;
  left: 92px;
  top: 5vh;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
  color: #2e6da7;
`;

export default StyledName;

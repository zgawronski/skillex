import styled from 'styled-components';

const StyledName = styled.span`
  position: absolute;
  width: 429px;
  height: 70px;
  left: 92px;
  top: 5vh;

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: 70px;

  color: #2e6da7;
`;

export default StyledName;

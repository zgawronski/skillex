import styled from 'styled-components';

const StyledDepartmentName = styled.span`
  position: absolute;
  width: 253px;
  height: 56px;
  left: 1151px;
  top: 5vh;

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 56px;

  color: #2e6da7;
`;

export default StyledDepartmentName;

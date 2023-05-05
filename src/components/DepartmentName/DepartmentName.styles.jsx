import styled from 'styled-components';

const StyledDepartmentName = styled.span`
  position: absolute;
  width: 253px;
  height: 56px;
  left: 1151px;
  top: 5vh;

  font-size: ${({ theme }) => theme.fontSize.xl};
  text-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
  color: #2e6da7;
`;

export default StyledDepartmentName;

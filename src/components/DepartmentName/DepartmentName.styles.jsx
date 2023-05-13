import styled from 'styled-components';

const StyledDepartmentName = styled.span`
  position: absolute;
  width: 15.875rem;
  height: 3.5rem;
  left: 71.875rem;
  top: 10vh;

  font-size: ${({ theme }) => theme.fontSize.xl};

  color: #2e6da7;
`;

export default StyledDepartmentName;

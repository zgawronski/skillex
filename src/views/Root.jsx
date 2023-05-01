import  {GlobalStyle}  from "../assets/styles/GlobalStyle";
import  {Wrapper}  from "./Root.styles";

import { CompanyName } from "../components/CompanyName/CompanyName";
import  {LogoutButton}  from "../components/Button/LogoutButton"
import { DepartmentName } from "../components/DepartmentName/DepartmentName";

export const Root = () => {
  return (

    <Wrapper>
      <GlobalStyle />
      <CompanyName />
      <DepartmentName />
      <LogoutButton />
    </Wrapper>
  )
};
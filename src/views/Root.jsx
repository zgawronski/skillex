import  {GlobalStyle}  from "../assets/styles/GlobalStyle";
import  {Wrapper}  from "./Root.styles";

import { CompanyName } from "../components/CompanyName/CompanyName";
import  {LogoutButton}  from "../components/Button/LogoutButton"

export const Root = () => {
  return (

    <Wrapper>
      <GlobalStyle />
      <CompanyName />
      <LogoutButton />
    </Wrapper>
  )
};
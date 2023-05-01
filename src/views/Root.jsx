import  {GlobalStyle}  from "../assets/styles/GlobalStyle";
import  {LogoutButton}  from "../components/Button/LogoutButton"
import  {Wrapper}  from "./Root.styles";

export const Root = () => {
  return (

    <Wrapper>
      <GlobalStyle />
      <LogoutButton />
    </Wrapper>
  )
};
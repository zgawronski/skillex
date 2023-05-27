import { useState } from 'react';
import { LoginWrapper, LoginInput, LoginCheckbox } from './Login.styles';
import { StyledButton } from '../Button/Button.styles';

export const Login = () => {
  const [passwordType, setPasswordType] = useState(false);

  const TogglePW = () => {
    setPasswordType((passwordType) => !passwordType);
  };

  return (
    <LoginWrapper>
      <LoginInput placeholder="E-mail" type="text" />
      <LoginInput placeholder="Password" type={passwordType ? 'text' : 'password'} />
      <div>
        <LoginCheckbox type="checkbox" onChange={TogglePW} checked={passwordType} />
        Show Password
      </div>
      <StyledButton>Login</StyledButton>
    </LoginWrapper>
  );
};

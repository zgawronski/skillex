import { HeaderWrapper, ButtonsSection } from './Header.styles';

import { CompanyName } from '../CompanyName/CompanyName';
import { LogoutButton } from '../Button/LogoutButton';
import { BackButton } from '../Button/BackButton';
import { DepartmentName } from '../DepartmentName/DepartmentName';

export const Header = () => {
  return (
    <HeaderWrapper>
      <CompanyName />
      <DepartmentName />
      <ButtonsSection>
        <BackButton />
        <LogoutButton />
      </ButtonsSection>
    </HeaderWrapper>
  );
};

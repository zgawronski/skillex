import { HeaderWrapper, TitleWrapper, ButtonsSection } from './Header.styles';

import { CompanyName } from '../CompanyName/CompanyName';
import { LogoutButton } from '../Button/LogoutButton';
import { BackButton } from '../Button/BackButton';
import { DepartmentName } from '../DepartmentName/DepartmentName';

export const Header = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <CompanyName />
      </TitleWrapper>
      <TitleWrapper>
        <DepartmentName />
      </TitleWrapper>
      <ButtonsSection>
        <BackButton />
        <LogoutButton />
      </ButtonsSection>
    </HeaderWrapper>
  );
};

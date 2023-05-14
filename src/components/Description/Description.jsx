import { DescriptionWrapper, DescriptionText, SkillLvlContainer, SkillLvl } from './Description.styles';

import { LevelMarker } from '../Table/Table.styles';

export const Description = () => {
  return (
    <DescriptionWrapper>
      <DescriptionText>Description</DescriptionText>
      <SkillLvlContainer>
        <LevelMarker name={1}></LevelMarker>
        <SkillLvl name={1}>Junior</SkillLvl>
      </SkillLvlContainer>
      <SkillLvlContainer>
        <LevelMarker name={2}></LevelMarker>
        <SkillLvl name={2}>Mid</SkillLvl>
      </SkillLvlContainer>
      <SkillLvlContainer>
        <LevelMarker name={3}></LevelMarker>
        <SkillLvl name={3}>Senior</SkillLvl>
      </SkillLvlContainer>
      <SkillLvlContainer>
        <LevelMarker name={0}></LevelMarker>
        <SkillLvl>N/A</SkillLvl>
      </SkillLvlContainer>
    </DescriptionWrapper>
  );
};

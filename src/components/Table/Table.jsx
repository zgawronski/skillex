// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Wrapper, SkillFrame, SkillLabel } from './Table.styles';

export const Table = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/skills')
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  const skillsBox = skills.map((skill) => skill);

  return (
    <Wrapper>
      <SkillFrame>
        {skillsBox.map((skill, index) => (
          <SkillLabel key={index}>{Object.values(skill)}</SkillLabel>
        ))}
      </SkillFrame>
    </Wrapper>
  );
};

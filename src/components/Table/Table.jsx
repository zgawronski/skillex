// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Wrapper, SkillFrame, SkillLabel, SkillBox, WorkerFrame, WorkerBox, WorkerLabel, LevelFrame, LevelBox, LevelMarker } from './Table.styles';

export const Table = () => {
  const [skills, setSkills] = useState([]);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/skills')
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/workers')
      .then((res) => res.json())
      .then((data) => setWorkers(data));
  }, []);

  const skillsArray = skills.map((skill) => skill);
  const workersArray = workers.map((worker) => worker);
  console.log(workersArray);

  return (
    <Wrapper>
      <SkillFrame>
        {skillsArray.map((skill, index) => (
          <SkillBox style={{ order: index }} key={index}>
            <SkillLabel key={index}>{Object.values(skill)}</SkillLabel>
          </SkillBox>
        ))}
      </SkillFrame>
      <WorkerFrame>
        {workersArray.map((worker, index) => (
          <WorkerBox style={{ order: index }} key={index}>
            <WorkerLabel key={index}>{Object.values(worker)} </WorkerLabel>
          </WorkerBox>
        ))}
      </WorkerFrame>
      {skillsArray.map((skillsMarkers, index) => (
        <LevelFrame key={index}>
          <LevelBox tyle={{ order: index }} key={index}>
            <LevelMarker key={index} />
          </LevelBox>
        </LevelFrame>
      ))}
    </Wrapper>
  );
};

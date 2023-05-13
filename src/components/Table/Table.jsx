// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Wrapper, WorkerFrame, WorkerLabel, WorkerSkillWrapper, SkillFrame, SkillLabel, LevelFrame, LevelMarker } from './Table.styles';

export const Table = () => {
  const [skills, setSkills] = useState([]);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/workers')
      .then((res) => res.json())
      .then((data) => setWorkers(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/skills')
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  const skillsArray = skills.map((skill) => skill);
  const workersArray = workers.map((worker) => worker);

  return (
    <Wrapper>
      <WorkerFrame>
        {workersArray.map((worker, index) => (
          <WorkerSkillWrapper key={index}>
            <WorkerLabel style={{ order: index }} key={index + 100}>
              {Object.values(worker.firstname)} {Object.values(worker.lastname)}
            </WorkerLabel>
            <LevelFrame key={index + 100000} style={{ order: index }}>
              {skillsArray.map((skillsMarkers, index) => (
                <LevelMarker style={{ order: index }} key={index + 1000}></LevelMarker>
              ))}
            </LevelFrame>
          </WorkerSkillWrapper>
        ))}
      </WorkerFrame>
      <SkillFrame>
        {skillsArray.map((skill, index) => (
          <SkillLabel style={{ order: index }} key={index + 10000}>
            {Object.values(skill)}
          </SkillLabel>
        ))}
      </SkillFrame>
    </Wrapper>
  );
};

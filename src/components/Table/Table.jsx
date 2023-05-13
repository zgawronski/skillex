// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Wrapper, WorkerFrame, WorkerLabel, SkillFrame, SkillLabel, LevelFrame, LevelMarker } from './Table.styles';

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
          <>
            <WorkerLabel style={{ order: index }} key={index}>
              {Object.values(worker.firstname)} {Object.values(worker.lastname)}
            </WorkerLabel>
            <LevelFrame key={index} style={{ order: index }}>
              {skillsArray.map((skillsMarkers, index) => (
                <LevelMarker style={{ order: index }} key={index + 100}></LevelMarker>
              ))}
            </LevelFrame>
          </>
        ))}
      </WorkerFrame>
      <SkillFrame>
        {skillsArray.map((skill, index) => (
          <SkillLabel style={{ order: index }} key={index}>
            {Object.values(skill)}
          </SkillLabel>
        ))}
      </SkillFrame>
    </Wrapper>
  );
};

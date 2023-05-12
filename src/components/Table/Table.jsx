// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Wrapper, SkillFrame, SkillLabel, WorkerFrame, WorkerLabel, LevelFrame, LevelMarker } from './Table.styles';

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
      <SkillFrame>
        {workersArray.map((worker, index) => (
          <>
            <SkillLabel style={{ order: index }} key={index}>
              {Object.values(worker.firstname)} {Object.values(worker.lastname)}
            </SkillLabel>
            <LevelFrame key={index} style={{ order: index }}>
              {skillsArray.map((skillsMarkers, index) => (
                <LevelMarker style={{ order: index }} key={index + 100}></LevelMarker>
              ))}
            </LevelFrame>
          </>
        ))}
      </SkillFrame>
      <WorkerFrame>
        {skillsArray.map((skill, index) => (
          <WorkerLabel style={{ order: index }} key={index}>
            {Object.values(skill)}
          </WorkerLabel>
        ))}
      </WorkerFrame>
    </Wrapper>
  );
};

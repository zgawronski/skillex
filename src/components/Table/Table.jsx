// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export const Table = () => {
  const [skills, setSkills] = useState();

  useEffect(() => {
    fetch('http://localhost:8000/skills')
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  console.log(skills);
  return <div></div>;
};

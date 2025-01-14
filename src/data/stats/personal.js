import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2001-07-19T15:30:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Orbits around the center of the Solar System',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current Page',
    value: 'Toronto, Canada',
  },
  {
    key: 'birthplace',
    label: 'Entrypoint',
    value: 'Chongqing, China (重庆， 江北 district)',
    link: 'https://en.wikipedia.org/wiki/Chongqing',
  },
  {
    key: 'personality',
    label: 'MBTI Personality Type',
    value: 'INTJ-A (94I, 66N, 100T, 100J)',
    link: 'https://www.16personalities.com/intj-personality',
  },
  {
    key: 'relationship',
    label: 'Relationship Status',
    value: 'Taken',
    link: 'https://www.linkedin.com/in/melissama-uoft/',
  },
  {
    key: 'height',
    label: 'Vertical Length',
    value: "5'9 (in the morning)",
  },
  {
    key: 'weight',
    label: 'Gravitational Force on Earth',
    value: '150 lbs',
  },
  {
    key: 'bench press',
    label: 'Bench Press',
    value: '210 lbs',
  },
  {
    key: 'chinups',
    label: 'Consecutive Chin-ups',
    value: '35',
  },
  {
    key: 'mile',
    label: 'One Mile Run',
    value: '4:40',
  },
];

export default data;

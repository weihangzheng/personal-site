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
    value: 'Chongqing, China',
    link: 'https://en.wikipedia.org/wiki/Chongqing',
  },
];

export default data;

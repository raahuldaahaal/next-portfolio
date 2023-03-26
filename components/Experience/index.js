import Button from '@components/Button';
import isScreenLargerThan from '@utils/screenSize';
import React, { useEffect, useState } from 'react';
import { fulltime, hobby } from './experience';

export default function Experience() {
  const [type, setType] = useState('fulltime');
  const [widerThan1024, setWiderThan1024] = useState(false);

  useEffect(() => {
    if (isScreenLargerThan(1025)) {
      setWiderThan1024(true);
    }
  }, []);

  return (
    <section className="experience">
      <h2>Where I&apos;ve Worked</h2>
      <div className="experience__contentWrap">
        <div className="experience__type">
          <Button
            fill={type === 'fulltime' ? 'filled' : 'outline'}
            type="button"
            textContent="FullTime"
            onClick={() => setType('fulltime')}
          />
          <Button
            fill={type === 'hobby' ? 'filled' : 'outline'}
            type="button"
            textContent="Hobby/Part-Time"
            onClick={() => setType('hobby')}
          />
          <div className="experience__list">
            {type === 'fulltime' ? (
              <Works type={type} list={fulltime} />
            ) : (
              <Works type={type} list={hobby} />
            )}
          </div>
        </div>
        {widerThan1024 ? (
          <img
            src="/svgs/works.svg"
            alt="Tasks completed in vector format"
            className="experience__image"
          />
        ) : null}
      </div>
    </section>
  );
}

function Works({ type, list }) {
  return (
    <ul className={`experience__${type}`}>
      {list.map((work, index) => {
        const { company, url, designation, duration, responsibilities } = work;
        return (
          <li key={index} className="experience__work">
            <h4 className="experience__company">{company}</h4>
            <div className="experience__details">
              <strong className="experience__jobTitle">{designation}</strong>
              <div className="experience__duration">
                <em className="experience__start">{duration.start}</em>
                <span>-</span>
                <em className="experience__end">{duration.end}</em>
              </div>
              <ul className="experience__responsibilities">
                {responsibilities.map((responsibility, indexR) => (
                  <li key={indexR}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main
    description={"Weihang Zheng's personal website. Toronto based UofT Computering Engineering Coop student "
    + 'ex software intern at Cerebras System and undergraduate researcher at UofT Multimedia Lab.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            React application written with modern Javascript.
          </p>
          <img src={`${PUBLIC_URL}/images/js.png`} width="100" height="100" alt="" />
          <img src={`${PUBLIC_URL}/images/react.png`} width="100" height="100" alt="" />
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        <Link to="/stats">stats</Link>. {' '}
      </p>
      <p> Source available <a href="https://github.com/weihangzheng/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;

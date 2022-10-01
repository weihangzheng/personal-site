import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Weihang Zheng</h2>
        <p><a href="mailto:weihang.zheng@mail.toronto.ca">weihang.zheng@mail.toronto.ca</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey everyone, I&apos;m Weihang.
        I&apos;m a post 3rd year coop student in my <a href="https://www.ece.utoronto.ca/">Computer Engineering</a> undergraduate degree at University of Toronto,
        minoring in Artificial Intellgience and Business. I have previously interned at <a href="https://www.cerebras.net/">Cerebras Systems</a> as a Software Engineer on ML Frameworks team,
        and <a href="https://www.dsp.utoronto.ca/">UofT Multimedia Lab</a> as a Undergraduate Researcher  on the topic of Neural Architecture Search,
        where I published <a href="https://ieeexplore.ieee.org/document/9679989">CONetV2</a> under Professor Kostas Plataniotis.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Weihang Zheng <Link to="/">weihangzheng.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;

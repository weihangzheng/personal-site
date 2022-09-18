import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Weihang Zheng via email @ weihang.zheng@mail.utoronto.ca"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Email me at weihang.zheng@mail.utoronto.ca or call me at 778-917-6809</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;

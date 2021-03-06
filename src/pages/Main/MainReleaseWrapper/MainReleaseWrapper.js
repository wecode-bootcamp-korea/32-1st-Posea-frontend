import React from 'react';
import SectionContext from '../MainContext/SectionContext';
import './MainReleaseWrapper.scss';

const MainReleaseWrapper = () => (
  <section className="mainReleaseWrapper">
    <div className="mainRelease">
      <div className="mainReleaseImgBox">
        <img
          className="mainReleaseImg"
          alt="releaseImg"
          src="images/mainRelease.jpg"
        />
      </div>
      <SectionContext />
    </div>
  </section>
);

export default MainReleaseWrapper;

import React, { useState, useEffect } from 'react';
import MainBannerWrapper from './MainBannerWrapper/MainBannerWrapper';
import MainBlockquote from './MainBlockquote/MainBlockquote';
import MainCarouselWrapper from './MainCarouselWrapper/MainCarouselWrapper';
import MainHistoryWrapper from './MainHistoryWrapper/MainHistoryWrapper';
import MainReleaseWrapper from './MainReleaseWrapper/MainReleaseWrapper';
import { API_OBJ } from '../../config';
import './Main.scss';

const Main = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    fetch(API_OBJ.PRODUCTS)
      .then(res => res.json())
      .then(data => setCarouselData(data.result));
  }, []);

  return (
    <div className="main">
      <MainBannerWrapper />
      <MainCarouselWrapper itemList={carouselData.slice(0, 7)} />
      <MainHistoryWrapper />
      <MainReleaseWrapper />
      <header className="mainTransitionHeader">탁월한 셀렉션</header>
      <MainCarouselWrapper itemList={carouselData.slice(7, 14)} />
      <MainBlockquote />
    </div>
  );
};

export default Main;

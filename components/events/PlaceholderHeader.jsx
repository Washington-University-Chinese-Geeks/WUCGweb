'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

function PlaceholderHeader({ title, subtitle, background }) {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );
    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-project bg-img d-flex align-items-end"
      data-background={background}
      data-overlay-dark="9"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="caption">
              <h1>{title}</h1>
              {subtitle ? <h6 className="mt-15 opacity-8">{subtitle}</h6> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderHeader;

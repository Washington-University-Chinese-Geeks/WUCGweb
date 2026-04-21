/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function Challenge() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="info mb-80 pb-20 bord-thin-bottom">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Prizes :</span>
                <h6>$500</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Where At :</span>
                <h6>Onsite</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Start Date :</span>
                <h6>21 September 2024</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item">
                <span className="opacity-8 mb-5">participants :</span>
                <h6>58</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <div className="img1 sm-mb50">
                  <img src="/assets/imgs/events/hackathon2024/5.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <h5 className="mb-30 fw-400 line-height-40">
                  Welcome to WUCG Hackathon 2024! This challenge is all about 
                  pushing your creativity, innovation, and technical skills to the next level. 
                  Whether you're a seasoned coder or a newbie, we invite you to join us 
                  in building impactful solutions to real-world problems. You'll have 
                  48 hours to brainstorm, collaborate, and bring your ideas to life. 
                  </h5>
                  <p className="fz-18">
                  Get ready for coding sprints, workshops, 
                  and the opportunity to network with like-minded innovators!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;

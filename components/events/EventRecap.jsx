import React from 'react';

function EventRecap({ date, location, attendance, description, photos = [] }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="info mb-80 pb-20 bord-thin-bottom">
          <div className="row">
            {date ? (
              <div className="col-md-6 col-lg-4">
                <div className="item mb-30">
                  <span className="opacity-8 mb-5">When :</span>
                  <h6>{date}</h6>
                </div>
              </div>
            ) : null}
            {location ? (
              <div className="col-md-6 col-lg-4">
                <div className="item mb-30">
                  <span className="opacity-8 mb-5">Where :</span>
                  <h6>{location}</h6>
                </div>
              </div>
            ) : null}
            {attendance ? (
              <div className="col-md-6 col-lg-4">
                <div className="item mb-30">
                  <span className="opacity-8 mb-5">Attendance :</span>
                  <h6>{attendance}</h6>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {description ? (
          <div className="row justify-content-center mb-80">
            <div className="col-lg-10">
              <div className="text">
                <h5 className="mb-30 fw-400 line-height-40">{description}</h5>
              </div>
            </div>
          </div>
        ) : null}

        {photos.length ? (
          <div className="row">
            {photos.map((p) => {
              const cls =
                photos.length === 1
                  ? 'col-lg-12 mb-30'
                  : photos.length === 2
                  ? 'col-lg-6 mb-30'
                  : 'col-lg-4 col-md-6 mb-30';
              return (
                <div className={cls} key={p.src}>
                  <div className="img">
                    <img src={p.src} alt={p.alt || ''} />
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default EventRecap;

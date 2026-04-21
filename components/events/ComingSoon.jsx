import React from 'react';

function ComingSoon({ description }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center">
            <h2 className="fw-600 mb-30">Coming Soon</h2>
            <p className="fz-18 opacity-8">
              {description ||
                'Event details are being finalized. Check back soon for schedule, speakers, and registration.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;

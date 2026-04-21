import React from 'react';

const events = [
  {
    href: '/clubfair-fall-2025',
    title: 'Club Fair — Fall 2025',
    date: 'Fall 2025',
    blurb: 'Kicking off the year at the WashU Fall Activities Fair.',
    img: '/assets/imgs/events/clubfair-fall-2025/cover.jpg',
    status: 'past',
  },
  {
    href: '/course-intro-lectures-fall-2025',
    title: 'Course Intro Lectures — Fall 2025',
    date: 'Fall 2025',
    blurb: "Peer-led walkthroughs of WashU's core CS courses.",
    img: '/assets/imgs/events/course-intro-lectures-fall-2025/cover.jpg',
    status: 'past',
  },
  {
    href: '/clubfair-spring-2025',
    title: 'Club Fair — Spring 2025',
    date: 'Spring 2025',
    blurb: 'WUCG at the WashU Spring Activities Fair.',
    img: '/assets/imgs/events/clubfair-spring-2025/cover.jpg',
    status: 'past',
  },
  {
    href: '/research-info-sessions-spring-2025',
    title: 'Research Info Sessions — Spring 2025',
    date: 'Spring 2025',
    blurb: 'Faculty and student researchers introduced WashU CSE labs.',
    img: '/assets/imgs/events/research-info-sessions-spring-2025/cover.jpg',
    status: 'past',
  },
  {
    href: '/hackathon2024',
    title: 'Hackathon 2024',
    date: '21 September 2024',
    blurb: 'Journey To The West — 48 hours of building, learning, and networking.',
    img: '/assets/imgs/events/hackathon2024/1.jpg',
    status: 'past',
  },
];

function EventsIndex() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-15">Events</h6>
          <h2 className="fw-600">WUCG Events</h2>
        </div>
        <div className="row">
          {events.map((e) => (
            <div className="col-lg-6 mb-50" key={e.href}>
              <a href={e.href} className="d-block">
                <div className="item">
                  <div className="img mb-30">
                    <img src={e.img} alt={e.title} />
                  </div>
                  <div className="cont">
                    <span className="opacity-8 mb-5">
                      {e.date}
                      {e.status === 'upcoming' ? ' · Upcoming' : ''}
                    </span>
                    <h4 className="fw-600 mb-15">{e.title}</h4>
                    <p className="fz-16 opacity-8">{e.blurb}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsIndex;

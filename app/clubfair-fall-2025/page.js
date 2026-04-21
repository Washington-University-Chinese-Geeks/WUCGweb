import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import PlaceholderHeader from '@/components/events/PlaceholderHeader';
import EventRecap from '@/components/events/EventRecap';

export const metadata = {
  title: 'WUCG — Club Fair Fall 2025',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function Home() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <PlaceholderHeader
              title="Club Fair — Fall 2025"
              subtitle="WashU Fall Activities Fair"
              background="/assets/imgs/events/clubfair-fall-2025/cover.jpg"
            />
            <EventRecap
              date="Fall 2025"
              location="Washington University in St. Louis"
              description="WUCG kicked off the academic year at the Fall 2025 Activities Fair. We welcomed incoming first-years and returning members, introduced our course-help channels and upcoming hackathon, and grew our community past 300 members."
              photos={[
                {
                  src: '/assets/imgs/events/clubfair-fall-2025/cover.jpg',
                  alt: 'WUCG booth at the Fall 2025 Activities Fair',
                },
                {
                  src: '/assets/imgs/events/clubfair-fall-2025/photo1.jpg',
                  alt: 'WUCG team at the Fall 2025 Activities Fair',
                },
              ]}
            />
          </main>
          <Footer />
        </div>
      </div>

      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/TweenMax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/charming.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/countdown.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/gsap.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/isotope.pkgd.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>
      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}

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
  title: 'WUCG — Research Info Sessions (Spring 2025)',
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
              title="Research Info Sessions — Spring 2025"
              subtitle="Meet faculty and student researchers across WashU CSE labs"
              background="/assets/imgs/events/research-info-sessions-spring-2025/cover.jpg"
            />
            <EventRecap
              date="Spring 2025"
              location="Washington University in St. Louis"
              description="WUCG brought together faculty and student researchers from across WashU CSE to introduce their labs to undergraduates. Sessions covered active projects, how to reach out to PIs, and what a realistic first research experience looks like — giving members a head start on applying for positions."
              photos={[
                {
                  src: '/assets/imgs/events/research-info-sessions-spring-2025/cover.jpg',
                  alt: 'WUCG Spring 2025 Research Info Session',
                },
                {
                  src: '/assets/imgs/events/research-info-sessions-spring-2025/photo1.jpg',
                  alt: 'Research Info Session — speaker',
                },
                {
                  src: '/assets/imgs/events/research-info-sessions-spring-2025/photo2.jpg',
                  alt: 'Research Info Session — audience',
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

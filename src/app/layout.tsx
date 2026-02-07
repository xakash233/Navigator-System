import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';

import '@/assets/css/animate.css';
import '@/assets/css/font-awesome.css';
import '@/assets/css/flaticon-set.css';
import '@/assets/css/elegant-icons.css';

import '@/assets/css/gallery.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/style.css'
import '@/assets/css/partner-scroll.css';
import '@/assets/css/service-scroll.css';
import '@/assets/css/industries.css';
import '@/assets/css/how-we-work.css';
import '@/assets/css/what-we-do.css';
import '@/assets/css/footer-custom.css';
import '@/assets/css/sidebar-custom.css';
import '@/assets/css/service-details-enhanced.css';
import '@/assets/css/header-hover.css';
import '@/assets/css/header-logo.css';

import type { Metadata } from "next";
import Dependency from '@/components/utilities/Dependency';
import ScrollUpBtn from '@/components/utilities/ScrollUpBtn';

export const metadata: Metadata = {
  title: "Navigator System - Reliable IT Support & Modern Engineering",
  description: "Navigator System helps organizations maintain critical server, storage, and network infrastructure with maximum uptime — while also delivering web, mobile, cloud, and automation solutions.",
  icons: {
    icon: '/assets/img/navigator-logo-favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Dependency />
        {children}
        <ScrollUpBtn />
      </body>
    </html>
  );
}

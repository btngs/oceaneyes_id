// import CompanySection from "./section/company-section";
// import AboutHeroSection from "./section/hero-section";
// import MisionSection from "./section/mision-section";
// import TimelineSection from "./section/timeline-section";
// import ValueSection from "./section/value-section";
// import VisionSection from "./section/vision-section";

import { lazy, useEffect } from "react"
import { Helmet } from "react-helmet-async";

const CompanySection = lazy(() => import("./section/company-section"));
const AboutHeroSection = lazy(() => import("./section/hero-section"))
const MisionSection = lazy(() => import("./section/mision-section"))
const TimelineSection = lazy(() => import("./section/timeline-section"))
const ValueSection = lazy(() => import("./section/value-section"))
const VisionSection = lazy(() => import("./section/vision-section"))
const MemberSection = lazy(() => import("./section/member-section"))

export default function AboutPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <Helmet>
        <title>Tentang Kami | Oceaneyes Indonesia</title>
      </Helmet>
      <div className="flex flex-col w-full">
        <AboutHeroSection />
        <CompanySection />
        <div className="flex w-full flex-col lg:flex-row">
          <VisionSection />
          <MisionSection />
        </div>
        <TimelineSection />
        <ValueSection />
        <MemberSection />
      </div>
    </>
  )
}
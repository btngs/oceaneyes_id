import { useEffect } from "react";
import FNaviHeader from "./section/FNavi-header";
import AppInfoSection from "./section/app-info";
import FeatureSection from "./section/feature-section";
import TrialInfoSection from "./section/trial-info";
import { Helmet } from "react-helmet-async";

export default function FNaviPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>FNavi | Oceaneyes Indonesia</title>
      </Helmet>
      <div className="flex flex-col w-full">
        <FNaviHeader />
        <FeatureSection />
        <AppInfoSection />
        <TrialInfoSection />
      </div>
    </>
  )
}
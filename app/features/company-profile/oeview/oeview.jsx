import React from "react";
import OEViewHeader from "./section/oeview-header";
import OEViewAboutSection from "./section/oeview-about";
import FeatureSection from "../fNavi/section/feature-section";
import OEViewFeature from "./section/oeview-feature";
import OEViewValue from "./section/oeview-value";

function OEView() {
  return (
    <div className="flex flex-col w-screen overflow-x-hidden">
      <OEViewHeader />
      <OEViewAboutSection />
      <OEViewFeature />
      <OEViewValue />
    </div>
  );
}

export default OEView;

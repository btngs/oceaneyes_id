import React from "react";
import SectionLayout from "../../../../components/layout/section-layout";
import { GiCrosshairArrow } from "react-icons/gi";
import { CiGlobe } from "react-icons/ci";

function OEViewAboutSection() {
  return (
    <SectionLayout>
      <div className="flex flex-col w-full gap-y-4 lg:gap-y-10">
        <h5 className="text-cyan-900 text-base text-center">About OEView</h5>
        <h1 className="font-bold text-2xl lg:text-4xl text-center">
          One platform for all your ocean insights
        </h1>
        <h5 className="text-gray-500 text-center">
          Hilangkan semua gangguan yang menghalangi akses Anda pada informasi
          laut yang akurat.
        </h5>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-y-5 gap-x-10">
          <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[934px] gap-y-5 gap-x-2">
            <div className="flex w-full flex-col bg-sky-950 p-4 rounded-xl lg:rounded-none gap-y-8 lg:w-[350px]">
              <GiCrosshairArrow color="white" size={32} />
              <h3 className="text-lg font-bold text-white">
                Pantau Laut Lebih Presisi
              </h3>
              <h4 className="text-base text-white">
                Dengan teknologi AI Cloud Removal, OEView membersihkan awan dari
                citra satelit sehingga data jadi jauh lebih jernih dan akurat.
              </h4>
            </div>
            <div className="flex w-full flex-col bg-teal-50 p-4 rounded-xl lg:rounded-none lg:rounded-bl-[100px] gap-y-8 lg:w-grow lg:h-[276px]">
              <CiGlobe className="text-teal-900" size={32} />
              <h3 className="text-lg font-bold text-teal-900">
                Akses mudah di lautan global
              </h3>
              <h4 className="text-base text-teal-900">
                Didesain untuk nelayan, pelaut, peneliti, dan industri kelautan,
                OEView memberi akses cepat pada informasi penting untuk
                keselamatan, perencanaan, dan optimasi aktivitas laut.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default OEViewAboutSection;

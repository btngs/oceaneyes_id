import React from "react";
import SectionLayout from "../../../../components/layout/section-layout";
import { arrow } from "react-icons/ai";
import { BsArrowUpLeftCircle } from "react-icons/bs";

function OEViewHeader() {
  return (
    <SectionLayout>
      {/* Desktop View */}
      <div className="hidden lg:flex w-full justify-between mt-[90px]">
        <div className="flex flex-col gap-y-4 max-w-[50%]">
          <h5 className="text-cyan-900 text-base">Try it now</h5>
          <h1 className="font-bold text-4xl">
            Pantau Kondisi Laut dengan Presisi, Kapan Saja dan di Mana Saja
          </h1>
          <h5 className="mt-10 text-gray-500">
            Akses data laut akurat berbasis teknologi AI Cloud Removal dari
            OceanEyes. Temukan informasi suhu, arus, klorofil, dan anomali laut
            secara cepat, bahkan saat Anda berada di tengah samudra tanpa sinyal
            internet.
          </h5>
          <div className="mt-8 gap-x-4 flex">
            <button className="flex justify-center items-center text-base text-center py-2 bg-cyan-900 px-4 text-white rounded-full gap-x-4 w-[250px]">
              <BsArrowUpLeftCircle color="white" />
              Download for Android
            </button>
            <button className="flex justify-center items-center text-base text-center py-2 bg-cyan-900 px-4 text-white rounded-full gap-x-4 w-[250px]">
              <BsArrowUpLeftCircle color="white" />
              Download for iOS
            </button>
          </div>
        </div>
        <div className="flex w-1/2 justify-center">
          <img
            src="https://storage.oceaneyes.co.id/oceaneyes/web/get-app.png"
            className="w-[300px]"
          />
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex w-full lg:hidden flex-col items-center mt-10">
        <h5 className="text-cyan-900 text-base text-center">Try it now</h5>
        <h1 className="font-bold text-2xl text-center">
          Pantau Kondisi Laut dengan Presisi, Kapan Saja dan di Mana Saja
        </h1>
        <div className="flex w-full justify-center mt-4">
          <img
            src="https://storage.oceaneyes.co.id/oceaneyes/web/get-app.png"
            className="w-full md:max-w-[300px]"
          />
        </div>
        <h5 className="mt-10 text-gray-500 text-center">
          Akses data laut akurat berbasis teknologi AI Cloud Removal dari
          OceanEyes. Temukan informasi suhu, arus, klorofil, dan anomali laut
          secara cepat, bahkan saat Anda berada di tengah samudra tanpa sinyal
          internet.
        </h5>
        <div className="mt-4 gap-y-4 flex flex-col justify-center w-full">
          <button className="flex justify-center items-center text-sm text-center py-2 bg-cyan-900 px-4 text-white rounded-full gap-x-4">
            <BsArrowUpLeftCircle color="white" />
            Download for Android
          </button>
          <button className="flex justify-center items-center text-sm text-center py-2 bg-cyan-900 px-4 text-white rounded-full gap-x-4">
            <BsArrowUpLeftCircle color="white" />
            Download for iOS
          </button>
        </div>
      </div>
    </SectionLayout>
  );
}

export default OEViewHeader;

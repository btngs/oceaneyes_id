import CountUp from "react-countup";
import SectionLayout from "../../../../components/layout/section-layout";
import { FaUserLarge } from "react-icons/fa6";
import { IoHardwareChip } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";

export default function ValueSection() {
  return (
    <SectionLayout classNames={`bg-[url('/products-banner.png')] bg-cover bg-center mt-[90px] !p-0`}>
      <SectionLayout classNames="!py-20 lg:!py-[90px] bg-black bg-opacity-40">
        <div className="flex flex-col justify-center items-center py-4 lg:py-10 gap-y-2">
          <h2 className="font-semibold text-white text-[25px] xl:text-[40px] text-center">We are</h2>
          <h2 className="font-bold text-white text-[25px] xl:text-[40px] text-center">Leading in AI technology for Fishing Industry</h2>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-y-10 mt-10">
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-y-10 md:gap-x-[80px] xl:gap-x-[250px]">
            <div className="flex flex-col justify-center items-center gap-y-1 max-w-[138px]">
              <FaUserLarge
                className="text-white text-[40px] xl:text-[70px]"
              />
              <CountUp
                className="font-extrabold text-white text-[30px] xl:text-[50px]"
                start={536}
                end={1000}
              />
              <span className="font-semibold text-white text-base text-center xl:text-[20px]">and more fishermen in Japan used our technology</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-5 max-w-[138px]">
              <FaUniversity
                className="text-white text-[40px] xl:text-[70px]"
              />
              <span className="font-semibold text-white text-base text-center xl:text-[20px]">The Technology Designed by Experts in Japan Universities</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-1 max-w-[138px]">
              <IoHardwareChip
                className="text-white text-[40px] xl:text-[70px]"
              />
              <span className="font-extrabold text-white text-[30px] xl:text-[50px]">1st</span>
              <span className="font-semibold text-white text-base text-center xl:text-[20px]">Fishing platform that uses AI as Main Base Technology</span>
            </div>
          </div>
        </div>
      </SectionLayout>
    </SectionLayout>
  )
}
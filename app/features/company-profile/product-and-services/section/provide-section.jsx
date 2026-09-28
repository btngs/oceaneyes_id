/* eslint-disable react/no-unescaped-entities */
import SectionLayout from "../../../../components/layout/section-layout";
import { PiShieldStar } from "react-icons/pi";
import { BsShieldCheck } from "react-icons/bs";
import { HiArrowsPointingIn } from "react-icons/hi2";
import SectionTitle from "../../../../components/atoms/section-title";

export default function ProvideSection() {
    return (
        <div className="flex flex-col w-full lg:bg-primaryLGray">
            <SectionLayout>
                <SectionTitle 
                    text={"Your Trust is Our Commitment"}
                />
            </SectionLayout>
            <SectionLayout>
                <div className="flex flex-col w-full justify-center items-center gap-y-[30px] lg:hidden">
                    <div className="flex flex-col w-full justify-center items-center gap-y-[30px] lg:grid lg:grid-cols-3 lg:gap-[30px] xl:max-w-[1000px]">
                        <div className="flex flex-col h-full justify-start items-center gap-y-4 max-w-[331px]">
                            <img src="/exclusivity.svg" className="text-primary w-[59px] lg:w-[50px]"/>
                            <h5 className="text-secondary font-bold text-[20px] text-center">Exclusivity</h5>
                            <h6 className="text-foreground text-base text-center">The model will be developed for a single company, tailored to analyze its fish catch data and ensure accuracy based on its unique operations.</h6>
                        </div>
                        <div className="flex flex-col h-full justify-start items-center gap-y-4 max-w-[331px]">
                            <img src="/data-safety.svg" className="text-primary w-[59px] lg:w-[50px]"/>
                            <h5 className="text-secondary font-bold text-[20px] text-center">Data Security</h5>
                            <h6 className="text-foreground text-base text-center">Each dataset will be used exclusively to develop the respective company's model. We guarantee that the data will not be shared or utilized for any other purposes.</h6>
                        </div>
                        <div className="flex flex-col h-full justify-start items-center gap-y-4 max-w-[331px]">
                            <img src="/accuracy.svg" className="text-primary w-[59px] lg:w-[50px]"/>
                            <h5 className="text-secondary font-bold text-[20px] text-center">Accuracy</h5>
                            <h6 className="text-foreground text-base text-center">The accuracy of the results improves with the quantity of collected data. Coverage areas are limited to regions with data collection history and customer requests.</h6>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex flex-col w-full justify-center items-center gap-y-[30px]">
                    <div className="flex flex-col w-full justify-center items-center lg:grid lg:grid-cols-3 lg:gap-[2px] xl:max-w-[1000px]">
                        <div className="flex flex-col h-full justify-start items-start gap-y-4 max-w-[331px] bg-white p-6 shadow-md rounded-l-md">
                            <img src="/exclusivity.svg" className="w-[28px]"/>
                            <h5 className="text-foreground font-bold text-[20px] text-left">Exclusivity</h5>
                            <h6 className="text-textGray text-base text-left">The model will be developed for a single company, tailored to analyze its fish catch data and ensure accuracy based on its unique operations.</h6>
                        </div>
                        <div className="flex flex-col h-full justify-start items-start gap-y-4 max-w-[331px] bg-white p-6 shadow-md">
                            <img src="/data-safety.svg" className="w-[28px]"/>
                            <h5 className="text-foreground font-bold text-[20px] text-left">Data Security</h5>
                            <h6 className="text-textGray text-base text-left">Each dataset will be used exclusively to develop the respective company's model. We guarantee that the data will not be shared or utilized for any other purposes.</h6>
                        </div>
                        <div className="flex flex-col h-full justify-start items-start gap-y-4 max-w-[331px] bg-white p-6 shadow-md rounded-r-md">
                            <img src="/accuracy.svg" className="w-[28px]"/>
                            <h5 className="text-foreground font-bold text-[20px] text-left">Accuracy</h5>
                            <h6 className="text-textGray text-base text-left">The accuracy of the results improves with the quantity of collected data. Coverage areas are limited to regions with data collection history and customer requests.</h6>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}
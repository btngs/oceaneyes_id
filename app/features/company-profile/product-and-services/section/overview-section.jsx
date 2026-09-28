import SectionTitle from "../../../../components/atoms/section-title";
import SectionLayout from "../../../../components/layout/section-layout";
import CustomCarousel from "../../../../components/molecules/custom-carousel/carousel";
import { GiAvoidance } from "react-icons/gi";
import { GoGraph } from "react-icons/go";

export default function OverviewSection() {

    // const carouselItems = [
    //     {
    //         element: (
    //             <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
    //                 <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px]" src="/card-placeholder.jpg"/>
    //                 <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center pb-4">
    //                     <h5 className="font-extrabold font-foreground text-base">Avoid Risk and Increase your Safety</h5>
    //                     <h5 className="font-semibold text-textGray text-base">Dengan teknologi canggih dan akses data satelit, kami mampu membuat pemodelan yang presisi dengan berbagai indikator. Pemodelan ini memberikan informasi lengkap tentang kondisi laut terkini hingga perkiraan hingga 5 hari ke depan. Informasi tersebut dapat dimanfaatkan oleh nelayan untuk merancang rute, mengambil keputusan, atau mempertimbangkan faktor keamanan selama melaut.</h5>
    //                 </div>
    //             </div>
    //         ),
    //         title: "Safety",
    //     },
    //     {
    //         element: (
    //             <div className="bg-white w-[277px] h-[545px] md:w-[650px] md:h-[250px] lg:w-[800px] xl:w-[1200px] flex flex-col md:flex-row rounded-[16px] gap-y-4 shadow-md">
    //                 <img className="rounded-t-[16px] md:rounded-tr-none md:rounded-l-[16px] md:w-[300px]" src="/card-placeholder.jpg"/>
    //                 <div className="flex w-full px-4 flex-col gap-y-3 md:justify-center pb-4">
    //                     <h5 className="font-extrabold font-foreground text-base">More Efficient with Lower Effort, Time and Cost</h5>
    //                     <h5 className="font-semibold text-textGray text-base">Perubahan kondisi laut yang cepat, akibat berbagai faktor, turut memengaruhi kebiasaan ikan. Oleh karena itu, melalui pemodelan kami, informasi akurat terkait kondisi laut dan lokasi terbaik untuk menangkap ikan dapat diperoleh. Dengan teknologi ini, waktu yang dibutuhkan untuk menangkap ikan berkurang signifikan, sehingga secara langsung menekan biaya operasional.</h5>
    //                 </div>
    //             </div>
    //         ),
    //         title: "Efficiency",
    //     }
    // ]


    return (
        <div className="flex flex-col w-full lg:pb-[60px] relative">
            <SectionLayout classNames={`lg:hidden bg-white`}>
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <SectionTitle 
                        text={"Elevate Your Bussiness to the Next Level and Make More with Us"}
                        className={`lg:text-white`}
                    />
                </div>
            </SectionLayout>
            <SectionLayout classNames={`lg:hidden bg-primary lg:bg-gradient-to-b lg:from-white lg:to-primaryL !py-[60px] lg:!py-5`}>
                <div className="flex flex-col w-full gap-y-7 justify-center items-center lg:items-start lg:p-10">
                    <h3 className="font-bold text-white text-base">Avoid Risk and Increase your Safety</h3>
                    <img src="/avoid_risk-removebg-preview.svg" className="w-[59px]"/>
                    <h4 className="text-white text-base font-normal text-center">Dengan teknologi canggih dan akses data satelit, kami mampu membuat pemodelan yang presisi dengan berbagai indikator. Pemodelan ini memberikan informasi lengkap tentang kondisi laut terkini hingga perkiraan hingga 5 hari ke depan. Informasi tersebut dapat dimanfaatkan oleh nelayan untuk merancang rute, mengambil keputusan, atau mempertimbangkan faktor keamanan selama melaut.</h4>
                </div>
            </SectionLayout>
            <SectionLayout classNames={`lg:hidden bg-white lg:bg-gradient-to-b lg:from-primaryL lg:to-white !py-[60px] lg:!py-5`}>
                <div className="flex flex-col w-full gap-y-7 justify-center items-center lg:items-end md:p-10">
                    <h3 className="font-bold text-foreground text-base text-center">More Efficient with Lower Effort, Time and Cost </h3>
                    <img src="/efficiency-removebg-preview.svg" className="w-[59px]"/>
                    <h4 className="text-foreground text-base font-normal text-center">Perubahan kondisi laut yang cepat, akibat berbagai faktor, turut memengaruhi kebiasaan ikan. Oleh karena itu, melalui pemodelan kami, informasi akurat terkait kondisi laut dan lokasi terbaik untuk menangkap ikan dapat diperoleh. Dengan teknologi ini, waktu yang dibutuhkan untuk menangkap ikan berkurang signifikan, sehingga secara langsung menekan biaya operasional.</h4>
                </div>
            </SectionLayout>
            {/* <SectionLayout classNames={`!hidden lg:!flex bg-white lg:bg-gradient-to-b lg:via-primaryL lg:from-primary lg:to-white !py-[60px] lg:!py-5`}>
                <div className="flex justify-center items-center">
                    <CustomCarousel
                        items={carouselItems}
                        autoSlide={true}
                        autoSlideInterval={8000}
                    />
                </div>
            </SectionLayout> */}
            <SectionLayout classNames={`!py-0 w-full justify-center items-center`}>
                <div className="hidden lg:flex flex-col w-full bg-white max-w-[934px] xl:max-w-[1024px] mt-[-187px] min-h-[240px] rounded-[16px] shadow-md lg:p-10">
                    <div className="flex w-[60%] mb-10">
                        <SectionTitle
                            className={`!text-left`} 
                            text={"Elevate Your Bussiness to the Next Level and Make More with Us"}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-y-6 lg:grid lg:grid-cols-2 lg:gap-10">
                        <div className="flex w-full flex-col gap-y-4 justify-start items-center lg:items-start">
                            <img src="/avoid_risk-removebg-preview.svg" className="w-[59px]"/>
                            <h5 className="font-semibold font-foreground text-base">Avoid Risk and Increase your Safety</h5>
                            <h5 className="font-normal text-textGray text-base">Dengan teknologi satelit, kami menghadirkan pemodelan presisi kondisi laut hingga 5 hari ke depan untuk mendukung nelayan dalam perencanaan dan keselamatan.</h5>
                        </div>
                        <div className="flex w-full flex-col gap-y-4 justify-start items-center lg:items-start">
                            <img src="/efficiency-removebg-preview.svg" className="w-[59px]"/>
                            <h5 className="font-semibold font-foreground text-base">More Efficient with Lower Effort, Time and Cost</h5>
                            <h5 className="font-normal text-textGray text-base">Perubahan laut memengaruhi kebiasaan ikan. Pemodelan kami memberikan informasi akurat lokasi penangkapan, mengurangi waktu dan biaya operasional secara signifikan.</h5>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import SectionTitle from "../../../../components/atoms/section-title";
import SectionLayout from "../../../../components/layout/section-layout";
import { useRouter } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";

export default function PSProductSection() {

  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  return (
    <div className="flex flex-col w-full py-10 xl:pt-[90px]">
      {/* <SectionLayout classNames={`!py-7 lg:hidden`}>
        <div className="flex flex-col w-full gap-y-5 lg:hidden">
          <h2 className="font-bold text-foreground text-[25px] xl:text-[40px]">FNavi</h2>
          <h3 className="font-semibold text-primary text-base">Fnavi, We See The Future of Ocean </h3>
          <div className="flex w-full md:justify-center md:items-center">
            <img src="/product-placeholder.png" className="md:w-[300px]" />
          </div>
          <h3 className="font-medium text-textGray text-base">mengurangi resiko baik itu keamanan ataupun kerugian operasional dalam proses memancing. dikarenakan oceaneyes bisa memberikan gambaran menyeluruh terkait kondisi laut sekitar dan yang ingin dituju oleh nelayan baik itu historikal nya atau forecasting sampai 5 hari dimasa depantampilan yang sangat mudah difahami serta kebebasan dalam setting, memungkinkan nelayan untuk menyesuaikan dengan kebutuhan masing masing Fnavi akan segera hadir disemua system smartphone baik andoroid ataupun IOS Bagaimana Fnavi bisa Memberikan Anda gambaran Kondisi Laut Paling Tepat</h3>
          <button
            className="bg-secondary rounded-[50px] py-3 flex justify-center items-center w-[141px] text-white font-bold text-sm lg:text-[20px]"
          >
            See More
          </button>
        </div>
        <div className="hidden justify-between w-full gap-x-5 lg:flex">
          <div className="flex md:justify-center md:items-center">
            <img src="/product-placeholder.png" className="md:w-[300px]" />
          </div>
          <div className="flex flex-col gap-y-5 w-[65%] lg:items-end">
            <h2 className="font-bold text-foreground text-[25px] xl:text-[40px] lg:text-right">FNavi</h2>
            <h3 className="font-semibold text-primary text-base lg:text-right">Fnavi, We See The Future of Ocean </h3>
            <h3 className="font-medium text-textGray text-base lg:text-right">mengurangi resiko baik itu keamanan ataupun kerugian operasional dalam proses memancing. dikarenakan oceaneyes bisa memberikan gambaran menyeluruh terkait kondisi laut sekitar dan yang ingin dituju oleh nelayan baik itu historikal nya atau forecasting sampai 5 hari dimasa depantampilan yang sangat mudah difahami serta kebebasan dalam setting, memungkinkan nelayan untuk menyesuaikan dengan kebutuhan masing masing Fnavi akan segera hadir disemua system smartphone baik andoroid ataupun IOS Bagaimana Fnavi bisa Memberikan Anda gambaran Kondisi Laut Paling Tepat</h3>
            <button
              className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
            >
              See More
            </button>
          </div>
        </div>
      </SectionLayout> */}
      {/* <SectionLayout classNames={`!py-7 bg-[#F9F9F9] lg:hidden`}>
        <div className="flex flex-col w-full gap-y-5 lg:hidden">
          <h2 className="font-bold text-foreground text-[25px] xl:text-[40px]">Fishing Ground Map</h2>
          <h3 className="font-semibold text-primary text-base">We Bring your Fishing Process to be more Efficient and Safe</h3>
          <div className="flex w-full md:justify-center md:items-center">
            <img src="/product-placeholder.png" className="md:w-[300px]" />
          </div>
          <h3 className="font-medium text-textGray text-base">Fishing Ground Map adalah peta berbasis teknologi canggih yang dirancang untuk membantu nelayan dan pelaku industri perikanan mengidentifikasi lokasi dan waktu terbaik untuk menangkap jenis ikan tertentu. Peta ini dibuat melalui analisis mendalam terhadap data kondisi laut, perilaku alami ikan, dan data historis penangkapan yang diproses dengan teknologi AI OceanEyes.</h3>
          <button
            className="bg-secondary rounded-[50px] py-3 flex justify-center items-center w-[141px] text-white font-bold text-sm lg:text-[20px]"
          >
            See More
          </button>
        </div>
        <div className="hidden justify-between w-full gap-x-5 lg:flex">
          <div className="flex flex-col gap-y-5 w-[65%]">
            <h2 className="font-bold text-foreground text-[25px] xl:text-[40px]">Fishing Ground Map</h2>
            <h3 className="font-semibold text-primary text-base">We Bring your Fishing Process to be more Efficient and Safe</h3>
            <h3 className="font-medium text-textGray text-base">Dapatkan gambaran lengkap kondisi laut, baik historikal maupun prediksi hingga 5 hari ke depan. Dengan tampilan yang mudah dipahami dan pengaturan fleksibel, Fnavi membantu nelayan menyesuaikan informasi sesuai kebutuhan. Segera hadir di semua sistem smartphone, Android maupun iOS. Temukan cara Fnavi memberikan gambaran laut paling tepat untuk Anda!"</h3>
            <button
              className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
            >
              See More
            </button>
          </div>
          <div className="flex md:justify-center md:items-center">
            <img src="/product-placeholder.png" className="md:w-[300px]" />
          </div>
        </div>
      </SectionLayout> */}
      <SectionLayout classNames={`!py-7 flex !flex-col lg:!flex-row !justify-center`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[934px]">
          <div className="flex w-full flex-col justify-start gap-y-10">
            <SectionTitle
              text={"Trusted Services for Your Various Fishery Bussiness"}
              className={`lg:!text-left`}
            />
            <div className="flex flex-col gap-y-4 gap-x-4 justify-start items-center">
              <div onClick={() => setActiveTab(0)} className={`flex gap-y-4 p-5 ${activeTab == 0 ? `bg-sky-950 shadow-lg` : `bg-sky-50`} w-full justify-between rounded-lg min-w-[188.75px] hover:cursor-pointer`}>
                <h3 className={`text-base font-semibold ${activeTab == 0 ? `text-white` : `text-foreground`}`}>FNavi</h3>
                <div className={`w-fit flex`}>
                  <MdArrowOutward size={24} className={`text-base font-semibold ${activeTab == 0 ? `text-white border-white` : `text-foreground border-foreground`} border-[1px] rounded-full p-1`}/>
                </div>
              </div>
              <div onClick={() => setActiveTab(1)} className={`flex gap-y-4 p-5 ${activeTab == 1 ? `bg-sky-950 shadow-lg` : `bg-sky-50`} w-full justify-between rounded-lg min-w-[188.75px] hover:cursor-pointer`}>
                <h3 className={`text-base font-semibold ${activeTab == 1 ? `text-white` : `text-foreground`}`}>Fishing Ground Map</h3>
                <div className={`w-fit flex`}>
                  <MdArrowOutward size={24} className={`text-base font-semibold ${activeTab == 1 ? `text-white border-white` : `text-foreground border-foreground`} border-[1px] rounded-full p-1`}/>
                </div>
              </div>
              {/* <div onClick={() => setActiveTab(1)} className={`flex flex-col gap-y-4 p-5 ${activeTab == 1 ? `bg-sky-950 shadow-lg` : `bg-sky-50`} rounded-lg min-w-[188.75px] hover:cursor-pointer`}>
                <h3 className={`text-base font-semibold ${activeTab == 1 ? `text-foreground` : `text-textGray`}`}>Fishing Ground Map</h3>
              </div> */}
            </div>
          </div>
          <div className="flex w-full justify-center items-center lg:justify-start lg:items-start">
            <div className={`${activeTab == 0 ? `opacity-100 visible translate-x-0 transition-all duration-300 flex w-full md:w-[447px]` : `opacity-0 invisible translate-x-10 w-full md:w-[447px] transition-all duration-300 absolute`} h-[500px] flex-col rounded-xl shadow-lg bg-[url('https://storage.oceaneyes.co.id/oceaneyes/web/pre-removal.webp')] bg-center bg-cover bg-no-repeat`}>
              <div className="flex w-full flex-col bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-5 gap-y-8 h-[500px] justify-between">
                <div className="flex flex-col gap-y-5 w-full">
                  <h2 className="font-bold text-white text-[25px] text-left">FNavi</h2>
                  <h3 className="font-semibold text-white text-base">Fnavi, We See The Future of Ocean </h3>
                  <h3 className="font-medium text-white text-base">Dapatkan gambaran lengkap kondisi laut, baik historikal maupun prediksi hingga 5 hari ke depan. Dengan tampilan yang mudah dipahami dan pengaturan fleksibel, Fnavi membantu nelayan menyesuaikan informasi sesuai kebutuhan. Segera hadir di semua sistem smartphone, Android maupun iOS. Temukan cara Fnavi memberikan gambaran laut paling tepat untuk Anda!"</h3>
                </div>
                <button
                  onClick={() => router.push('/fnavi')}
                  className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
            <div className={`${activeTab == 1 ? `opacity-100 visible translate-x-0 transition-all duration-300 flex w-full md:w-[447px]` : `opacity-0 invisible translate-x-10 w-full md:w-[447px] transition-all duration-300 absolute`} h-[500px] flex-col rounded-xl shadow-lg bg-[url('https://storage.oceaneyes.co.id/oceaneyes/web/fishing-ground.webp')] bg-center bg-cover bg-no-repeat`}>
              <div className="flex w-full flex-col bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-5 gap-y-8 h-[500px] justify-between">
                <div className="flex flex-col gap-y-5 w-full">
                  <h2 className="font-bold text-white text-[25px] text-left">Fishing Ground Map</h2>
                  <h3 className="font-semibold text-white text-base">We Bring your Fishing Process to be more Efficient and Safe</h3>
                  <h3 className="font-medium text-white text-base">Fishing Ground Map adalah peta berbasis teknologi canggih yang dirancang untuk membantu nelayan dan pelaku industri perikanan mengidentifikasi lokasi dan waktu terbaik untuk menangkap jenis ikan tertentu. Peta ini dibuat melalui analisis mendalam terhadap data kondisi laut, perilaku alami ikan, dan data historis penangkapan yang diproses dengan teknologi AI OceanEyes.</h3>
                </div>
                <button
                  onClick={() => router.push('/fishing-ground-map')}
                  className="bg-secondary rounded-2xl py-2 flex justify-center items-center w-[141px] text-white font-bold text-sm"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}
import HeroTitle from "../../../../components/atoms/hero-title"
import SectionTitle from "../../../../components/atoms/section-title"
import SectionLayout from "../../../../components/layout/section-layout"
import { LuArrowUpRight } from "react-icons/lu";

export default function FNaviHeader() {
  return (
    <SectionLayout classNames={`!pt-[86px] pb-10 bg-teal-50 relative overflow-hidden`}>
      <div className="hidden lg:block right-0 bottom-[50%] translate-x-[20%] translate-y-[50%] w-[500px] absolute z-10">
        <img src="/sprites.png" className="opacity-50" />
      </div>
      <div className="flex w-full justify-center items-center relative z-20">
        <div className="grid w-full lg:max-w-[1320px] grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="flex w-full flex-col gap-y-[50px]">
            <div className="flex flex-col w-full gap-y-2">
              <SectionTitle
                text={"FNavi"}
                className={`!text-foreground drop-shadow-lg lg:!text-left`}
              />
              <HeroTitle
                className={`!text-foreground drop-shadow-lg !text-center lg:!text-left`}
                text={"We See the Future of Ocean"}
              />
              <h4 className="text-center lg:text-left text-base font-normal text-gray-500">Dengan FNavi, anda akan dengan mudah memahami kondisi laut baik hari ini atau masa depan secara presisi dan lengkap. sehingga ini akan memudahkan dalam pengambilan keputusan dan menghindarkan dari kondisi-kondisi yang tidak di inginkan, terutama potensi dan resiko melaut bai itu keamanan ataupun kerugian operasional.</h4>
            </div>
            <div className="flex w-full justify-center lg:justify-start items-center">
              <button className='flex justify-center items-center rounded-xl bg-primary px-4 py-2 w-[180px] shadow-lg'>
                <h4 className='text-white text-base'>Get Started</h4>
              </button>
            </div>
            <div className="flex flex-col lg:flex-row w-full items-center gap-y-4 gap-x-4">
              <div className="lg:flex flex-col gap-y-5 p-4 rounded-lg bg-sky-950">
                <div className="flex w-full justify-end items-center">
                  <div className="bg-transparent border-[1px] border-white rounded-full p-1">
                    <LuArrowUpRight className="text-white font-light text-2xl" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 w-[200px]">
                  <h4 className="text-white text-[32px] font-semibold">1000+</h4>
                  <h5 className="text-white">Nelayan di Jepang pengguna tetap FNavi</h5>
                </div>
              </div>
              <div className="lg:flex flex-col gap-y-5 p-4 rounded-lg bg-sky-950">
                <div className="flex w-full justify-end items-center">
                  <div className="bg-transparent border-[1px] border-white rounded-full p-1">
                    <LuArrowUpRight className="text-white font-light text-2xl" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 w-[200px]">
                  <h4 className="text-white text-[32px] font-semibold">100+</h4>
                  <h5 className="text-white">Nelayan di Indonesia Telah Mencoba</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <img src="/mock-complex.png" className="hidden lg:block w-[500px]" />
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-between w-full h-[calc(100vh-86px)] lg:h-[90vh] rounded-3xl p-4 lg:p-10 bg-[url('/fnavi.jpg')] bg-cover bg-no-repeat relative">
        <div className="flex w-fit flex-col gap-y-2">
          <SectionTitle
            className={`!flex !text-white drop-shadow-lg`}
            text={"FNavi"}
          />
          <HeroTitle
            className={`!flex !text-white drop-shadow-lg`}
            text={"We See the Future of Ocean"}
          />
        </div>
        <div className="hidden lg:flex flex-col gap-y-10 p-4 rounded-lg bg-white bg-opacity-20 backdrop-blur-md w-[300px]">
          <div className="flex w-[70%]">
            <img src="/card-placeholder.jpg" className="w-full rounded-lg" />
          </div>
          <div className="flex w-full justify-between items-center">
            <button className="bg-transparent border-[1px] border-white rounded-full p-1">
              <LuArrowUpRight className="text-white font-light text-2xl" />
            </button>
            <h5 className="text-white font-semibold">Learn More about FNavi</h5>
          </div>
        </div>
        <div className="hidden lg:flex absolute bottom-0 right-0 bg-white w-fit gap-x-10 p-10 rounded-tl-3xl">
          <div className="flex flex-col gap-y-2 w-[200px]">
            <h4 className="text-foreground text-[32px] font-semibold">1000+</h4>
            <h5 className="text-textGray">Nelayan di Jepang pengguna tetap FNavi</h5>
          </div>
          <div className="flex flex-col gap-y-2 w-[200px]">
            <h4 className="text-foreground text-[32px] font-semibold">100+</h4>
            <h5 className="text-textGray">Nelayan di Indonesia telah mencoba</h5>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-y-10 w-full mt-[40px]">
        <div className="flex flex-col gap-y-2 w-full items-center">
          <h4 className="text-foreground text-[32px] font-semibold text-center">1000+</h4>
          <h5 className="text-textGray text-center">Nelayan di Jepang pengguna tetap FNavi</h5>
        </div>
        <div className="flex flex-col gap-y-2 w-full items-center">
          <h4 className="text-foreground text-[32px] font-semibold text-center">100+</h4>
          <h5 className="text-textGray text-center">Nelayan di Indonesia telah mencoba</h5>
        </div>
      </div> */}
    </SectionLayout>
  )
}
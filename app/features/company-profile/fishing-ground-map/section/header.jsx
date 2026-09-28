import React from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import SectionTitle from '../../../../components/atoms/section-title'
import HeroTitle from '../../../../components/atoms/hero-title'
import { VscGraph } from "react-icons/vsc";
import { GrGraphQl } from "react-icons/gr";
import { MdOutlineStars } from "react-icons/md";

function FishingGroundMapHeader({scrollToFeature, scrollToCTA}) {

  return (
    <div
      className="w-full flex justify-center items-center bg-primaryLGray bg-center lg:bg-center bg-cover bg-no-repeat"
    >
      <div className='w-full h-full flex flex-col items-center px-[22px] md:px-[45px] xl:px-[67px] pt-[86px] pb-[60px] relative'>
        <SectionTitle
          text={"Fishing Ground Map"}
          className={`!text-foreground drop-shadow-lg !font-normal !text-2xl`}
        />
        <div className='pt-8 w-full flex flex-col justify-center items-center lg:w-[800px] gap-y-10'>
          <HeroTitle
            text={"We Bring Your Fishing Process to be more Efficient and Safe"}
            className={`!text-primary drop-shadow-lg !text-center`}
          />
          <h4 className='text-foreground text-center'>Peta canggih berbasis AI OceanEyes yang membantu nelayan dan industri perikanan menemukan lokasi dan waktu terbaik untuk menangkap ikan, dengan analisis data laut, perilaku ikan, dan rekam jejak penangkapan.</h4>
          <div className='flex flex-col md:flex-row w-full gap-x-4 gap-y-4 justify-center items-center'>
            <button onClick={scrollToFeature} className='flex justify-center items-center rounded-full bg-white px-4 py-2 w-[180px] shadow-lg'>
              <h4 className='text-primary text-base'>Learn More</h4>
            </button>
            <button onClick={scrollToCTA} className='flex justify-center items-center rounded-full bg-primary px-4 py-2 w-[180px] shadow-lg'>
              <h4 className='text-white text-base'>Get Started</h4>
            </button>
          </div>
        </div>
        <div className='hidden flex w-full lg:flex w-full justify-center gap-x-4 xl:gap-x-8 items-end pt-8'>
          <div className="rounded-xl bg-sky-950 w-[250px] h-[350px] flex flex-col justify-center items-center p-4 gap-y-4">
            <MdOutlineStars className='text-white' size={30}/>
            <h5 className="text-white text-center text-sm">Fishing Ground Map dibuat secara khusus untuk setiap pesanan, memastikan setiap peta yang dihasilkan bersifat unik dan sesuai dengan kebutuhan Anda.</h5>
          </div>
          <div className="rounded-xl bg-primary bg-cover bg-center bg-no-repeat w-[200px] h-[300px] flex flex-col justify-center items-center p-4 gap-y-4">
            <h4 className="text-white font-semibold text-[32px] text-center">1000+</h4>
            <h5 className="text-white text-center text-sm">Nelayan di Jepang menggunakan Fishing Ground Map</h5>
          </div>
          <div className="rounded-xl bg-white bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center w-[300px] h-[200px] p-4 gap-y-4">
            <h5 className="text-foreground text-center text-sm">Prediksi Akurat hingga</h5>
            <h4 className="text-foreground font-semibold text-[32px] text-center">5 hari</h4>
            <h5 className="text-foreground text-center text-sm">Kedepan untuk Lokasi dan Waktu</h5>
          </div>
          <div className="rounded-xl bg-sky-100 w-[200px] h-[300px] flex flex-col justify-center items-center p-4 gap-y-4">
            <VscGraph size={30} />
            <h5 className="text-foreground text-center text-sm">Menggunakan Data Historis Nelayan dan Kondisi Laut</h5>
          </div>
          <div className="rounded-xl bg-cyan-950 w-[250px] h-[350px] flex flex-col justify-center items-center p-4 gap-y-4">
            <GrGraphQl size={30} className='text-white' />
            <h5 className="text-white text-center text-sm">Memanfaatkan teknologi kecerdasan buatan untuk memberikan hasil yang akurat dan efisien</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FishingGroundMapHeader
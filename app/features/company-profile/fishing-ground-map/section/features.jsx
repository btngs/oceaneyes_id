import React, { forwardRef } from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import SectionTitle from '../../../../components/atoms/section-title'
import { GiCrosshairArrow } from "react-icons/gi";
import { TbHistory } from "react-icons/tb";
import { GiDoubleFish } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";

const FishingGroundMapFeatures = forwardRef((props, ref) => {
  return (
    <SectionLayout classNames={`!bg-cyan-950 lg:!py-[80px]`}>
      <div className='flex w-full flex-col gap-y-10 justify-center items-center'>
        <div ref={ref} className='flex w-full lg:w-[800px]'>
          <SectionTitle
            text={`"Teknologi kami memahami lebih banyak dari nelayan, dengan 20 tahun Pengalaman"`}
            className={`!text-white !font-hero`}
          />
        </div>
        <div className='grid w-full xl:max-w-[1320px] grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full bg-white bg-opacity-15 backdrop-blur-md gap-y-10 p-6 rounded-xl'>
            <GiCrosshairArrow size={32} className='text-white' />
            <div className='flex flex-col gap-y-2'>
              <h4 className='text-white font-semibold text-xl'>Prediksi Akurat Lokasi dan Waktu</h4>
              <h4 className='text-white font-normal text-base'>Menyediakan koordinat lokasi yang tepat dan rekomendasi waktu terbaik hingga 5 hari ke depan untuk memastikan hasil tangkapan maksimal.</h4>
            </div>
          </div>
          <div className='flex flex-col w-full bg-white bg-opacity-15 backdrop-blur-md gap-y-10 p-6 rounded-xl'>
            <GiDoubleFish size={32} className='text-white' />
            <div className='flex flex-col gap-y-2'>
              <h4 className='text-white font-semibold text-xl'>Peta Membaca Spesifik per Jenis Ikan</h4>
              <h4 className='text-white font-normal text-base'>Setiap peta dirancang khusus untuk menangkap satu jenis ikan tertentu.</h4>
            </div>
          </div>
          <div className='flex flex-col w-full bg-white bg-opacity-15 backdrop-blur-md gap-y-10 p-6 rounded-xl'>
            <TbHistory size={32} className='text-white' />
            <div className='flex flex-col gap-y-2'>
              <h4 className='text-white font-semibold text-xl'>Penggunaan Data Historis Nelayan dan Data Kondisi Laut</h4>
              <h4 className='text-white font-normal text-base'>Mengintegrasikan lebih dari 10 tahun data historis kondisi laut  dan data tangkap dari nelayan itu sendiri untuk meningkatkan akurasi dan menyesuaikan dengan kebiasaan nelayan itu sendiri.</h4>
            </div>
          </div>
          <div className='flex flex-col w-full bg-white bg-opacity-15 backdrop-blur-md gap-y-10 p-6 rounded-xl'>
            <GrTechnology size={32} className='text-white' />
            <div className='flex flex-col gap-y-2'>
              <h4 className='text-white font-semibold text-xl'>Didukung AI Presisi Tinggi</h4>
              <h4 className='text-white font-normal text-base'>Memanfaatkan teknologi kecerdasan buatan untuk memberikan hasil yang akurat dan efisien.
                Solusi ini membantu mengurangi waktu pencarian ikan, menekan biaya operasional, dan mendukung keberlanjutan sumber daya laut.</h4>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
})


export default FishingGroundMapFeatures
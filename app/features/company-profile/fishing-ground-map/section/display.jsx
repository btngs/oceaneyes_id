import React from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import SectionTitle from '../../../../components/atoms/section-title'
import { FaCheckCircle } from "react-icons/fa";

function FishingGroundMapDisplay() {
  return (
    <SectionLayout classNames={`items-center`}>
      <div className='flex w-full flex-col lg:flex-row lg:max-w-[1320px] lg:gap-x-10 gap-y-6 justify-center items-center lg:items-start'>
        <div className='flex flex-col w-full lg:w-fit gap-y-4 lg:gap-y-6 lg:items-start'>
          <SectionTitle
            text={`Fishing Ground Display`}
            className='text-center lg:!text-left lg:hidden'
          />
          <div className='flex w-full lg:hidden justify-center'>
            <div className='flex w-full md:w-[200px] lg:hidden rounded-lg'>
              <img src='/fishing-ground-map.jpg' className='rounded-lg lg:hidden' />
            </div>
          </div>
          <div className='hidden lg:flex w-[400px] xl:w-[600px] bg-sky-100 rounded-lg p-8 justify-center items-center'>
            <div className='flex w-full rounded-lg w-[350px]'>
              <img src='/fishing-ground-map.jpg' className='rounded-lg' />
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full gap-y-6'>
          <SectionTitle
            text={`Fishing Ground Display`}
            className='text-center lg:!text-left hidden lg:block'
          />
          <div className='flex flex-col w-full gap-y-4'>
            <div className='flex flex-col w-full gap-y-2'>
              <div className='flex w-full gap-x-4 items-center'>
                <FaCheckCircle size={20} className='text-secondary' />
                <h6 className='font-bold text-lg'>Selalu Diperbaharui</h6>
              </div>
              <h7 className='text-gray-500'>Peta ini akan diperbarui setiap hari, dimana petanya akan tersedia dalam 5 hari forecasting dimasa depan.</h7>
            </div>
            <div className='flex flex-col w-full gap-y-2'>
              <div className='flex w-full gap-x-4 items-center'>
                <FaCheckCircle size={20} className='text-secondary' />
                <h6 className='font-bold text-lg'>Display on Request</h6>
              </div>
              <h7 className='text-gray-500'>area yang di tampilkan bisa menyesuaikan dengan permintaan. di rekomendasikan area dengan data histori tangkap padat sehingga datanya bisa menjadi lebih akurat</h7>
            </div>
            <div className='flex flex-col w-full gap-y-2'>
              <div className='flex w-full gap-x-4 items-center'>
                <FaCheckCircle size={20} className='text-secondary' />
                <h6 className='font-bold text-lg'>Utilisasi dari Fishing Ground Map :</h6>
              </div>
              <h7 className='text-gray-500'>- Penentuan lokasi dan waktu sehingga tidak menhabiskan cost dan waktu mencari area yang potensial</h7>
              <h7 className='text-gray-500'>- Pembuatan rute sehingga proses penangkapan ikan akan semakin efisien </h7>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default FishingGroundMapDisplay
import React from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import HeroTitle from '../../../../components/atoms/hero-title'
import { Avatar, Carousel } from 'antd'
import { testimoni, testimoniLarge } from '../constants/testimoni'
import CustomCarousel from '../../../../components/molecules/custom-carousel/carousel'

function TestimoniHeader() {

  const items = testimoni.map((item, index) => ({
    title: '',
    element: (
      <div className='!flex !flex-col w-[277px] h-[500px] md:w-[670px] md:h-[300px] lg:w-[960px] rounded-[25px] bg-black bg-opacity-10 backdrop-blur-md shadow-sm p-6 gap-y-10'>
        <div className='flex w-full'>
          <Avatar src={item.image} size={70} />
        </div>
        <div className='flex flex-col w-full gap-y-4'>
          <h3 className='font-hero text-lg text-white font-semibold'>{item.name}</h3>
          <p className='font-hero text-base text-white font-normal drop-shadow-lg'>{item.description}</p>
        </div>
      </div>
    )} 
  ))

  return (
    <div className='flex flex-col w-screen lg:min-h-[90vh] bg-[url("https://storage.oceaneyes.co.id/oceaneyes/web/2024.jpeg")] bg-center bg-cover justify-center items-center'>
      <SectionLayout classNames={`!justify-center !items-center gap-y-8 lg:!gap-y-10 !pt-[86px] bg-black bg-opacity-30 min-h-[90vh]`}>
        <div className='flex flex-col w-full justify-center items-center gap-y-4 lg:max-w-[1320px]'>
          <HeroTitle
            text={`Fishermen Testimoni`}
            className={`text-center !text-white !drop-shadow-lg`}
          />
          <h3 className='font-hero text-lg text-white font-semibold !text-center !drop-shadow-lg'>Apa yang dikatakan nelayan tentang pengalaman mereka dengan produk dan layanan kami</h3>
        </div>
        <div className='w-full mt-[80px]'>
          <CustomCarousel
            items={items}
            autoSlideInterval={5000}
            withNavigation
            autoSlide={true}
          />
        </div>
      </SectionLayout>
    </div>
  )
}

export default TestimoniHeader
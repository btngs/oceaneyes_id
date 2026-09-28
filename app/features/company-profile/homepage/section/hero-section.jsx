import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import ScreenCarousel from '../../../../components/molecules/custom-carousel/screen-carousel'

function HeroSection() {

  const router = useRouter()

  const items = [
    {
      element: (
        <div className="relative w-screen h-screen lg:h-[90vh] overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src={`https://storage.oceaneyes.co.id/oceaneyes/home/VideoWebsites.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Above Video */}
          <div
            className="w-full h-screen lg:h-[90vh] flex justify-center items-center"
          >
            <div className='w-full h-full flex flex-col justify-center md:justify-end bg-black bg-opacity-30 px-[22px] md:px-[45px] xl:px-[67px] gap-y-[66px] md:gap-y-[40px] lg:gap-y-[71px] py-[60px]'>
              <div className='flex max-w-[1120px]'>
                <h1 className='font-hero font-semibold text-[36px] xl:text-[45px] text-white text-left drop-shadow-xl'>Oceaneyes for Your Bussiness and Ocean Sustainability</h1>
              </div>
              <button
                onClick={() => router.push('/product-and-services')}
                className='w-fit flex justify-center items-center py-2 px-4 rounded-[50px] text-white font-bold bg-secondary text-sm'
              >
                Our Products
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      element: (
        <div
          className="w-full h-screen lg:h-[90vh] flex justify-center items-center bg-[url('/banner.webp')] bg-center lg:bg-center bg-cover bg-no-repeat"
        >
          <div className='w-full h-full flex flex-col justify-center md:justify-end bg-black bg-opacity-30 px-[22px] md:px-[45px] xl:px-[67px] gap-y-[66px] md:gap-y-[40px] lg:gap-y-[71px] py-[60px]'>
            <div className='flex max-w-[1120px]'>
              <h1 className='font-hero font-semibold text-[36px] xl:text-[45px] text-white text-left drop-shadow-xl'>Oceaneyes for Your Bussiness and Ocean Sustainability</h1>
            </div>
            <button
              onClick={() => router.push('/product-and-services')}
              className='w-fit flex justify-center items-center py-2 px-4 rounded-[50px] text-white font-bold bg-secondary text-sm'
            >
              Our Products
            </button>
          </div>
        </div>
      )
    },
  ]

  return (
    <ScreenCarousel
      items={items}
      autoSlide
      autoSlideInterval={15000}
      colorScheme='secondary'
    />
  )
}

export default HeroSection
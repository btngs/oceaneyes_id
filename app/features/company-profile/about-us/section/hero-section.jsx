import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import HeroTitle from '../../../../components/atoms/hero-title';

function AboutHeroSection() {

  const router = useRouter();

  return (
    <div
      className="w-full h-screen lg:h-[90vh] flex justify-center items-center bg-[url('https://storage.oceaneyes.co.id/oceaneyes/web/about_header.webp')] bg-center lg:bg-center bg-cover bg-no-repeat"
    >
      <div className='w-full h-full flex flex-col justify-end py-[60px] bg-[rgba(0,0,0,0.5)] px-[22px] md:px-[45px] xl:px-[67px] gap-y-[66px] md:gap-y-[40px] lg:gap-y-[71px]'>
        <div className='flex max-w-[1120px]'>
          <HeroTitle
            text={<>
              We Bring Fishery Industry<br />
              to the Next Level
            </>}
          />
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
}

export default AboutHeroSection
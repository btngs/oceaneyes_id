import React from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import HeroTitle from '../../../../components/atoms/hero-title'
import { useRouter } from 'next/navigation'

function TestimoniCTA() {

  const router = useRouter();

  return (
    <SectionLayout classNames={`items-center`}>
      <div className='flex flex-col gap-y-10 lg:flex-row w-full lg:max-w-[1024px] lg:justify-between'>
        <div className='flex flex-col w-full lg:max-w-[500px] gap-y-6 lg:gap-y-10'>
          <HeroTitle
            text={`Are You The Next One ?`}
            className={`!text-center lg:!text-left !text-foreground !drop-shadow-lg`}
          />
          <h4 className='text-gray-500'>Dapatkan produk dan layanan kami sebagai solusi tepat untuk hasil tangkapan maksimal. Klik untuk memulai pengalaman Anda.</h4>
          <button onClick={() => router.push('/contact-us')} className='flex justify-center items-center rounded-full bg-sky-950 px-6 py-2 w-fit drop-shadow-sm hover:drop-shadow-xl text-white hover:text-cyan-500'>
            <h4 className='text-base'>Bergabung Sekarang</h4>
          </button>
        </div>
        <div className='w-full lg:w-[400px]'>
          <img src='/next.png' alt='testimonial call to action' className='' />
        </div>
      </div>

    </SectionLayout>
  )
}

export default TestimoniCTA
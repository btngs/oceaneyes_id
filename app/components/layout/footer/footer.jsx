import { Image, Typography } from 'antd'
import React, { useRef } from 'react'
import Contacts from '../../atoms/contacts';
import Separator from '../../atoms/separator/separator';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer({
  id,
  ref
}) {

  const { Text } = Typography;

  const router = useRouter()

  const onLinkedinClick = () => {
    window.open('https://www.linkedin.com/company/oceaneyes/')
  }

  return (
    <footer className='flex flex-col w-full bg-primary px-[22px] md:px-8 xl:px-[67px] py-12 gap-y-10'>
      <Separator />
      <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8 xl:gap-10'>
        <div className='flex flex-col gap-y-4 w-full'>
          <div className='flex flex-col'>
            <h3 className='font-bold text-secondary text-[20px]'>Ocean Eyes,.co.Ltd</h3>
            <h4 className='font-light text-white text-base'>
              OceanEyes menghadirkan analitik berbasis AI, big data, dan satelit untuk mendukung pengelolaan sumber daya laut yang efisien dan berkelanjutan.</h4>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-bold text-secondary text-[20px]'>Alamat</h3>
          <ul className='flex flex-col gap-y-4'>
            <li className='font-light text-white text-base'>Bella Terra Lifestyle Center Kelapa Gading, Jl. Boulevard Raya UG Floor, 1, 2 & 3, East Kelapa Gading, Kelapa Gading, Jakarta, 14240</li>
          </ul>
        </div>
        <div className='flex flex-col gap-y-4 w-full'>
          <h3 className='font-bold text-secondary text-[20px]'>Quick Links</h3>
          <div className='flex flex-col gap-y-2'>
            <h5 onClick={() => router.push('/contact-us')} className='font-light text-base text-white hover:cursor-pointer hover:text-primaryL'>Hubungi Kami</h5>
            <h5 onClick={() => router.push('/')} className='font-light text-base text-white hover:cursor-pointer hover:text-primaryL'>Profil Perusahaan</h5>
            <h5 onClick={() => router.push('/product-and-services')} className='font-light text-base text-white hover:cursor-pointer hover:text-primaryL'>Product Kami</h5>
          </div>
        </div>
        <div className='flex w-full items-start'>
          <video className='w-2/3 md:w-1/2 lg:w-[200px]' autoPlay muted loop>
            <source src='https://storage.oceaneyes.co.id/oceaneyes/footage/Adventure%20Instagram%20Post.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='w-full flex flex-col gap-y-4 justify-center items-center border-t-[1px] border-gray-300 pt-4'>
        <h3 className='font-bold text-secondary text-[20px]'>Temukan Kami</h3>
        <div className='flex gap-x-4 justify-center items-center w-full'>
          <FaYoutube size={25} className='text-white hover:text-cyan-200 hover:cursor-pointer'/>
          <FaLinkedin size={25} onClick={() => onLinkedinClick()} className='text-white hover:text-cyan-200 hover:cursor-pointer'/>
          <FaInstagram size={25} className='text-white hover:text-cyan-200 hover:cursor-pointer'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
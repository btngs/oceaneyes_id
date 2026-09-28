import React, { useEffect } from 'react'
import SectionTitle from '../../../../components/atoms/section-title'
import useNewsDTL from '../hook/useNewsDetail'
import { useSearchParams } from 'next/navigation';
import { formatDate } from '../../../../utils/dateFormat';
import { Helmet } from 'react-helmet-async';

function Detail() {

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const {
    loading,
    articleDTL,
  } = useNewsDTL({ id: id })

  return (
    <>
      <Helmet>
        {
          articleDTL?.title ? (
            <title>{`${articleDTL.title} | Oceaneyes Indonesia`}</title>
          ) : (
            <title>Oceaneyes Indonesia</title>
          )
        }
      </Helmet>
      <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-[84px]'>
        <div className='flex flex-col w-full justify-center items-center lg:w-[960px] py-10'>
          <div className='flex flex-col w-full justify-center items-center gap-y-2'>
            <h4 className='text-gray-400 font-semibold text-base text-center'>{formatDate(articleDTL.createdAt)}</h4>
            <SectionTitle
              text={articleDTL.title}
              className={"!text-center"}
            />
            <h4 className='text-gray-400 font-semibold text-base text-center text-lg'>{articleDTL.shortDesc}</h4>
          </div>
          <div className='flex flex-col w-full justify-center items-center gap-y-6 pt-10'>
            <img src={articleDTL.imageUrl || '/card-placeholder.jpg'} className='w-full' />
            <div className='flex flex-col w-full gap-y-2 pb-10 px-4 lg:px-0'>
              <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: articleDTL.text }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
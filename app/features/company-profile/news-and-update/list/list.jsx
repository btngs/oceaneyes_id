import React from 'react'
import SectionLayout from '../../../../components/layout/section-layout'
import SectionTitle from '../../../../components/atoms/section-title'
import { Input, Pagination } from 'antd'
import SearchInput from '../../../../components/atoms/input/input'
import { useRouter, useSearchParams } from 'next/navigation'
import useNewsData from '../hook/useNewsData'
import HeroTitle from '../../../../components/atoms/hero-title'
import { formatDate } from '../../../../utils/dateFormat'

function List() {

  const searchParams = useSearchParams();
  const router = useRouter()

  const handleNavigateToDetail = (id) => {
    router.push(`/news?id=${id}`)
  }

  const {
    paginationFilter,
    onPageChange,
    spotlightData,
    listData,
    setKeyword,
    keyword,
    searchResultFilter,
    setSearchResultFilter,
    searchResultPagination,
    onSearchResultPageChange,
    searchResultData,
    listSpotlight,
  } = useNewsData()

  return (
    <div className='flex flex-col w-full'>
      {!searchParams.get('keyword') && (
        <SectionLayout classNames={`!p-0 bg-[url('https://storage.oceaneyes.co.id/oceaneyes/web/news_header.webp')] bg-cover bg-center bg-no-repeat`}>
          <div className="flex pt-[86px] bg-black bg-opacity-50 items-center justify-between w-full h-[calc(100vh-86px)] lg:min-h-[90vh] relative">
            <div className='p-4 lg:p-10 w-full h-full flex items-center'>
              <div className="flex flex-col gap-y-2">
                <HeroTitle
                  className={`!flex !text-white drop-shadow-lg`}
                  text={"Our Activities"}
                />
                <div className='flex justify-center items-center w-full w-[300px] lg:w-[600px]'>
                  <SearchInput
                    className={`!w-[300px] lg:!w-[600px]`}
                    onChange={(e) => setKeyword(e.target.value)}
                    onSearch={() => setSearchResultFilter({
                      ...searchResultFilter,
                      page: 1,
                      search: keyword,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionLayout>
      )}
      <SectionLayout classNames={`${searchParams.get('keyword') ? `!pt-[86px]` : ``} pb-10 w-full min-h-[70vh] items-center`}>
        {searchResultFilter.search.length > 0 && (
          <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-10 lg:mt-[60px]'>
            <div className='flex w-full lg:w-[960px]'>
              <SectionTitle
                text={`Search Result for "${searchResultFilter.search}"`}
                classNames={"!text-left"}
              />
            </div>
            <div className='grid w-full lg:w-[960px] grid-cols-1 lg:grid-cols-3 gap-4'>
              {
                searchResultData.map((result, index) => (
                  <div onClick={() => handleNavigateToDetail(result._id)} className='flex flex-col w-full gap-y-2 hover:cursor-pointer'>
                    <img
                      src={result.imageUrl || '/card-placeholder.jpg'}
                      className='w-full'
                    />
                    <div className='flex flex-col gap-y-2 w-fit'>
                      <h5 className='text-sm text-gray-400'>{formatDate(result.createdAt)}</h5>
                      <SectionTitle
                        className={`!text-left !font-semibold !text-lg`}
                        text={result.title}
                      />
                    </div>
                  </div>
                ))
              }
            </div>
            <Pagination
              current={searchResultPagination.currentPage}
              total={searchResultPagination.totalItems}
              onChange={onSearchResultPageChange}
            />
          </div>
        )}
        {
          spotlightData.length > 0 && (
            <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-10 lg:mt-[60px]'>
              <div className='flex w-full lg:w-[960px]'>
                <SectionTitle
                  text={"Popular News"}
                  classNames={"!text-left"}
                />
              </div>
              <div className='grid w-full lg:w-[960px] grid-cols-1 lg:grid-cols-2 gap-4'>
                <div onClick={() => handleNavigateToDetail(spotlightData[0]._id)} className='lg:row-span-3 flex flex-col w-full gap-y-2 hover:cursor-pointer'>
                  <img
                    src={spotlightData[0].imageUrl || '/card-placeholder.jpg'}
                    className='w-full'
                  />
                  <h5 className='text-sm text-gray-400'>{formatDate(spotlightData[0].createdAt)}</h5>
                  <SectionTitle
                    className={`!text-left !font-semibold !text-xl`}
                    text={spotlightData[0].title}
                  />
                  <h4 className='text-gray-400 text-base font-normal'>{spotlightData[0].shortDesc}</h4>
                </div>
                <div className='lg:col-start-2 flex w-full flex-col gap-6'>
                  {
                    listSpotlight.length > 0 && (
                      <div onClick={() => handleNavigateToDetail(listSpotlight[0]._id)} className='lg:col-start-2 flex w-full items-start gap-x-2 hover:cursor-pointer !h-fit hover:shadow-md'>
                        <img
                          src={listSpotlight[0].imageUrl || '/card-placeholder.jpg'}
                          className='w-1/2 h-auto object-contain'
                        />
                        <div className='flex flex-col gap-y-2 w-fit'>
                          <h5 className='text-sm text-gray-400'>{formatDate(listSpotlight[0].createdAt)}</h5>
                          <SectionTitle
                            className={`!text-left !font-semibold !text-sm lg:!text-lg`}
                            text={listSpotlight[0].title}
                          />
                        </div>
                      </div>
                    )
                  }
                  {
                    listSpotlight.length > 1 && (
                      <div onClick={() => handleNavigateToDetail(listSpotlight[1]._id)} className='flex w-full items-start gap-x-2 hover:cursor-pointer !h-fit hover:shadow-md'>
                        <img
                          src={listSpotlight[1].imageUrl || '/card-placeholder.jpg'}
                          className='w-1/2 h-auto object-contain'
                        />
                        <div className='flex flex-col gap-y-2 w-fit'>
                          <h5 className='text-sm text-gray-400'>{formatDate(listSpotlight[1].createdAt)}</h5>
                          <SectionTitle
                            className={`!text-left !font-semibold !text-sm lg:!text-lg`}
                            text={listSpotlight[1].title}
                          />
                        </div>
                      </div>
                    )
                  }
                  {
                    listSpotlight.length > 2 && (
                      <div onClick={() => handleNavigateToDetail(listSpotlight[2]._id)} className='flex w-full items-start gap-x-2 hover:cursor-pointer !h-fit hover:shadow-md'>
                        <img
                          src={listSpotlight[2].imageUrl || '/card-placeholder.jpg'}
                          className='w-1/2 h-auto object-contain'
                        />
                        <div className='flex flex-col gap-y-2 w-fit'>
                          <h5 className='text-sm text-gray-400'>{formatDate(listSpotlight[2].createdAt)}</h5>
                          <SectionTitle
                            className={`!text-left !font-semibold !text-sm lg:!text-lg`}
                            text={listSpotlight[2].title}
                          />
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          )
        }
        <div className='flex w-full flex-col gap-y-8 justify-center items-center mt-10 lg:mt-[60px]'>
          <div className='flex w-full lg:w-[960px]'>
            <SectionTitle
              text={"Latest News"}
              classNames={"!text-left"}
            />
          </div>
          <div className='grid w-full lg:w-[960px] grid-cols-1 lg:grid-cols-3 gap-4'>
            {
              listData.map((article, index) => (
                <div onClick={() => handleNavigateToDetail(article._id)} className='flex flex-col w-full gap-y-2 hover:cursor-pointer'>
                  <img
                    src={article.imageUrl || '/card-placeholder.jpg'}
                    className='w-full'
                  />
                  <div className='flex flex-col gap-y-2 w-fit'>
                    <h5 className='text-sm text-gray-400'>{formatDate(article.createdAt)}</h5>
                    <SectionTitle
                      className={`!text-left !font-semibold !text-lg`}
                      text={article.title}
                    />
                  </div>
                </div>
              ))
            }
          </div>
          <Pagination
            current={paginationFilter.currentPage}
            total={paginationFilter.totalItems}
            onChange={onPageChange}
          />
        </div>
      </SectionLayout>
    </div>
  )
}

export default List
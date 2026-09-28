import React, { useEffect, useState } from 'react'
import { getListArticle, getSpotlightArticle } from '../../../../service/article/api';

function useNewsData() {

  const [loading, setLoading] = useState(false);

  const [listData, setListData] = useState([]);
  const [listSpotlight, setListSpotlight] = useState([]);
  const [spotlightData, setSpotlightData] = useState([]);
  const [searchResultData, setSearchResultData] = useState([]);
  const [keyword, setKeyword] = useState('');

  const [paginationFilter, setPaginationFilter] = useState({
    currentPage: 1,
    totalItems: 0,
    totalPage: 0,
  })

  const [searchFilter, setSearchFilter] = useState({
    size: 6,
    page: 1,
  })

  const [searchResultFilter, setSearchResultFilter] = useState({
    size: 6,
    page: 1,
    search: '',
  })

  const [searchResultPagination, setSearchResultPagination] = useState({
    currentPage: 1,
    totalItems: 0,
    totalPage: 0,
  })

  const fetchListArticle = async() => {
    let finalParam = {
      page: searchFilter.page,
      size: searchFilter.size,
    }
    try {
      const response = await getListArticle(finalParam);
      if(response.data) {
        setListData(response.data)
        setPaginationFilter({
          currentPage: response.meta.page,
          totalItems: response.meta.totalData,
          totalPage: response.meta.totalPage,
        })
        listSpotlight.length < 1 && setListSpotlight(response.data);
      } 
    } catch (error) {
      console.error("error getting list article:", error)
    }
  }

  const fetchSearchResult = async() => {
    let finalParam = {
      page: searchResultFilter.page,
      size: searchResultFilter.size,
      search: searchResultFilter.search,
    }
    try {
      const response = await getListArticle(finalParam);
      if(response.data) {
        setSearchResultData(response.data)
        setSearchResultPagination({
          currentPage: response.meta.page,
          totalItems: response.meta.totalData,
          totalPage: response.meta.totalPage,
        })
      } 
    } catch (error) {
      console.error("error getting list article:", error)
    }
  }

  const fetchSpotlightArticle = async() => {
    try {
      const response = await getSpotlightArticle();
      if(response.data) {
        setSpotlightData(response.data)
      }
    } catch (error) {
      console.error("error getting spotlight data:", error)
    }
  }

  const initArticleData = async() => {
    setLoading(true)
    try {
      fetchListArticle().then(() => fetchSpotlightArticle())
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    initArticleData()
  }, [searchFilter])

  useEffect(() => {
    if(searchResultFilter.search.length > 0) {
      fetchSearchResult();
    }
  }, [searchResultFilter])

  const onPageChange = (page) => {
    setPaginationFilter({
      ...paginationFilter,
      currentPage: page,
    })
    setSearchFilter({
      ...searchFilter,
      page: page,
    })
  }

  const onSearchResultPageChange = (page) => {
    setSearchResultFilter({
      ...searchResultFilter,
      page: page,
    })
    setSearchResultPagination({
      ...searchResultPagination,
      currentPage: page,
    })
  }

  return {
    paginationFilter,
    setPaginationFilter,
    searchFilter,
    setSearchFilter,
    onPageChange,
    loading,
    listData,
    spotlightData,
    keyword,
    setKeyword,
    searchResultFilter,
    setSearchResultFilter,
    searchResultPagination,
    onSearchResultPageChange,
    searchResultData,
    listSpotlight,
  }
}

export default useNewsData
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Detail from './detail/detail';
import List from './list/list';
import { Helmet } from 'react-helmet-async';

function NewsAndUpdate() {

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (id) {
    return <Detail />
  } else {
    return (
      <>
        <Helmet>
          <title>Update Terbaru | Oceaneyes Indonesia</title>
        </Helmet>
        <List />
      </>
    )
  }
}

export default NewsAndUpdate
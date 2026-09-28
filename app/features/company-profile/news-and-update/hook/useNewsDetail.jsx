import { useEffect, useState } from "react"
import { getDetailArticle } from "../../../../service/article/api";

function useNewsDTL({ id }) {

  const [articleDTL, setArticleDTL] = useState({})
  const [loading, setLoading] = useState(false);

  const fetchArticleDTL = async() => {
    setLoading(true)
    try {
      const response = await getDetailArticle(id)
      if(response.data) {
        setArticleDTL(response.data);
        setLoading(false);
      }      
    } catch (error) {
      console.error(`Error fetching article detail`, error)
    }
  }

  useEffect(() => {
    if(id) {
      fetchArticleDTL()
    }
  }, [id])

  return {
    articleDTL,
    loading,
  }
}

export default useNewsDTL;
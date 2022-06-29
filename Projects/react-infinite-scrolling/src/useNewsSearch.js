import { useEffect, useState} from 'react'
import axios from 'axios'

export default function useNewsSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [news, setNews] = useState([])
  const [hasMore, setHasMore] = useState(false)


  const country = 'in'
  const category = 'sports'
  const apiKey = "6a1d4f2afd3b4379bd04f56e72a8bb6d"
  
  useEffect(() => {
    setNews([])
  }, [query])

  useEffect(() => {
  let cancel
  setLoading(true)
  setError(false)

  axios({
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines`,
      params: {query: query, pageNumber: pageNumber, country: country, category: category, apiKey: apiKey},
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setNews(prevNews => [...new Set([...prevNews, ...res.data.articles.map(n => n.title)])])
        setHasMore(res.data.articles.length > 0)
      setLoading(false)
        console.log(news);
    })
      .catch(e => {
        if(axios.isCancel(e)) return
        setError(true)
      })

    return () => cancel()
  }, [query, pageNumber])
  return { loading, error, news, hasMore }
}

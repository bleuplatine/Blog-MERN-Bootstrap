import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController()

    fetch(url, { signal: abortCont.signal })
      .then(res => {
        console.log(res);
        if (!res.ok) {
          throw new Error('Could not fetch the data')
        }
        return res.json()
      })
      .then((data) => {
        setIsLoading(false)
        setError(null)
        setData(data)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsLoading(false)
          setError(err.message)
        }
      })

    return () => abortCont.abort()

  }, [url]);

  return { data, isLoading, error }

}

export default useFetch

'use client'

import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string | URL) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(url)
      .then(response => {
        if (!response.ok) { 
          // error coming back from server
          throw Error('could not fetch the data for that resource');
        }
        console.log(`useFetch data :${JSON.stringify(response.json())}`)
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      })
  }, [url])

  return { data, isLoading, error };
}

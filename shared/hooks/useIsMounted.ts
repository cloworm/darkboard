import { useState, useEffect } from 'react'

const useIsMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    console.log('window', window)
    setIsMounted(() => true)
  }, [])

  return isMounted
}

export default useIsMounted

import { useEffect, useState } from "react";


export const useDebounse = (value:string,delay:number = 300):string => {
  const [debounse,setDebounse] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounse(value)
    },delay)
    return () => clearInterval(timeout)
  },[value])
  return debounse
}
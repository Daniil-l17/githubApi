import { useEffect, useState } from "react";


export function useDebounse(value:string,delay = 400): string{
  const [debounced,setdebounced] = useState(value)
  useEffect(() => {
    const hadler = setTimeout(() => setdebounced(value),delay)
    return () => clearTimeout(hadler)
  },[value])
  return debounced
}
import { useState, useEffect } from "react"
import { ANIMATION_TIME } from "../config";

type useMountType = {
  isOpened: boolean
}

export const useMount = ({isOpened}: useMountType) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    if(isOpened && !mounted) {
      setMounted(true);
    } else if (!isOpened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME)
    }
  }, [isOpened])

  return { mounted }
}
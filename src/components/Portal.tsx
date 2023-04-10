import { ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalInterface {
  children: ReactNode
}

export default function Portal({children}: PortalInterface) {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container)
  
    return () => {
      document.body.removeChild(container)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return createPortal(children, container);
}

import React, { ReactNode, useState, createContext, Dispatch, SetStateAction } from 'react';

interface CaptureContextInterface {
  capture: any
  setCapture: Dispatch<SetStateAction<any>>
}

export const CaptureContext = createContext<CaptureContextInterface>({
  capture: null,
  setCapture: () => {}
});

interface CaptureProviderInterface {
  children: ReactNode
};

const CaptureProvider = ({ children }: CaptureProviderInterface) => {
  const [capture, setCapture] = useState<any>(false);
  return (
    <CaptureContext.Provider value={{capture, setCapture}}>
      {children}
    </CaptureContext.Provider>
  );
}

export default CaptureProvider;
import { ReactNode, useState, createContext, Dispatch, SetStateAction } from 'react';

interface ModalContextInterface {
  isModalOpened: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalContextInterface>({
  isModalOpened: false,
  setModalOpen: () => {}
});

interface ModalProviderInterface {
  children: ReactNode
};

const ModalProvider = ({ children }: ModalProviderInterface) => {
  const [isModalOpened, setModalOpen] = useState<boolean>(false);
  return (
    <ModalContext.Provider value={{isModalOpened, setModalOpen}}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
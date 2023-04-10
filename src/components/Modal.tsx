import { ReactNode} from 'react';
import Portal from './Portal';
import ModalLayout from './ModalLayout';
import { useMount } from '../hooks/useMount';

export interface ModalInterface {
  children: ReactNode,
  onClose: () => void,
  isOpened: boolean
}

export default function Modal({ children, onClose, isOpened }: ModalInterface) {
  const { mounted } = useMount({ isOpened });
  if(!mounted) return null;

  return (
    <Portal>
      <ModalLayout onClose={onClose} isOpened={isOpened}>{children}</ModalLayout>
    </Portal>
  )
}

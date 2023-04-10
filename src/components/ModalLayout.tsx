import { useRef, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ModalInterface } from './Modal';
import { ANIMATION_TIME } from "../config";
import './ModalLayout.css';

const overlayAnimation = {
  enter: 'modal-animation-overlay-enter',
  enterActive: 'modal-animation-overlay-enter-active',
  exit: 'modal-animation-overlay-exit',
  exitActive: 'modal-animation-overlay-exit-active',
}

const contentAnimation = {
  enter: 'modal-animation-content-enter',
  enterActive: 'modal-animation-content-enter-active',
  exit: 'modal-animation-content-exit',
  exitActive: 'modal-animation-content-exit-active',
}

export default function ModalLayout({onClose, children, isOpened}: ModalInterface) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const [animationIn, setAnimationIn] = useState<boolean>(false);

  useEffect(() => {
    setAnimationIn(isOpened);
  }, [isOpened])

  return (
    <div className='modal-container' role='dialog'>
      <CSSTransition in={animationIn} nodeRef={overlayRef} timeout={ANIMATION_TIME} mountOnEnter unmountOnExit classNames={overlayAnimation}>
        <div ref={overlayRef} className='modal-overlay' role='button' tabIndex={0} onClick={onClose} />
      </CSSTransition>
      <CSSTransition in={animationIn} nodeRef={contentRef} timeout={ANIMATION_TIME} mountOnEnter unmountOnExit classNames={contentAnimation}>
        <div ref={contentRef} className='modal-content'>{children}</div>
      </CSSTransition>
    </div>
  )
}

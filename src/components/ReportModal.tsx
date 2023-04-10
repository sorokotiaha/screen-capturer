import { useContext, MouseEvent, useEffect, useState } from 'react'
import Modal from './Modal'
import { ModalContext } from '../contexts/ModalContext'
import { CaptureContext } from '../contexts/CaptureContext'
import './ReportModal.css';

export default function ReportModal() {
  const { isModalOpened, setModalOpen } = useContext(ModalContext);
  const { capture, setCapture } = useContext(CaptureContext);
  const [ reportImage, setReportImage] = useState('');

  useEffect(() => {
    setReportImage(capture)
  },[capture])

  const onHandleSend = (e:MouseEvent<HTMLElement>) => {
    e.preventDefault()
    // collect form data and screenshot image

    setModalOpen(false);
    setCapture(null)
  }

  return (
    <Modal onClose={() => setModalOpen(false)} isOpened={isModalOpened}>
      <form className='report-form'>
        Screen capture to send us:
        <div id="report-image">
          <img alt="Screen capt
          ure" src={reportImage} />
        </div>
        <button onClick={onHandleSend}>Send report</button>
      </form>
    </Modal>
  )
}

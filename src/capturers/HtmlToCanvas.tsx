import { useContext } from 'react';
import html2canvas from 'html2canvas';
import { CaptureContext } from '../contexts/CaptureContext';
import { ModalContext } from '../contexts/ModalContext';

export default function HtmlToCanvas() {
  const { setCapture } = useContext(CaptureContext);
  const { setModalOpen } = useContext(ModalContext);

  const handleCapture = ():void => {
    const captureElement = document.querySelector("#root") as HTMLElement;
    const options = {
      allowTaint: false
    }

    html2canvas(captureElement, options).then(canvas => {
      setCapture(canvas.toDataURL("image/png"));
      setModalOpen(true);
    });
  }

  return (
    <div>
      <h5>HTML to Canvas</h5>
      <button onClick={handleCapture}>Capture by html2canvas</button>
    </div>
  )
}

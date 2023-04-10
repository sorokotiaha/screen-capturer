import { useContext, useRef } from 'react'
import { CaptureContext } from '../contexts/CaptureContext';
import { ModalContext } from '../contexts/ModalContext';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 480,
  height: 270,
  facingMode: "user"
};

const WebcamComponent = () => {
  const webcamRef = useRef<Webcam|null>(null);
  const { setCapture } = useContext(CaptureContext);
  const { setModalOpen } = useContext(ModalContext);

  const handleCapture = ():void => {
    if(webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapture(imageSrc);
      setModalOpen(true);
    }
  }

  return (
    <div>
      <button onClick={handleCapture}>Capture photo</button>
      <div>
        <Webcam
          audio={false}
          width={480}
          height={270}
          screenshotFormat="image/jpeg"
          ref={webcamRef}
          videoConstraints={videoConstraints}
        />
      </div>
    </div>
  )
}

export default WebcamComponent;

import { useContext } from 'react';
import { CaptureContext } from '../contexts/CaptureContext';
import { ModalContext } from '../contexts/ModalContext';

export default function GetDisplayMedia() {
  const { setCapture } = useContext(CaptureContext);
  const { setModalOpen } = useContext(ModalContext);

  const captureScreenshot = async () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const screenshot = document.createElement("video") as HTMLVideoElement;

    try {
        const captureStream = await navigator.mediaDevices.getDisplayMedia();
        screenshot.srcObject = captureStream;
        if(context) {
          context && context.drawImage(screenshot as HTMLVideoElement, 0, 0, window.innerWidth, window.innerHeight);
        }
        const frame = canvas.toDataURL("image/png");
        captureStream.getTracks().forEach(track => track.stop());
        setCapture(frame);
        setModalOpen(true);
    } catch (err) {
        console.error("Error: " + err);
    }
  }

  return (
    <div className="phppot-container">
        {/* <p>This uses the WebRTC standard to take screenshot. WebRTC
            is popular and has support in all major modern browsers. It
            is used for audio, video communication. getDisplayMedia() is part of WebRTC and is used for
            screen sharing. Video is rendered and then page screenshot
            is captured from the video.
        </p> */}
        <video width="480" height="270" controls >
          <source src="/Videos/video.mp4" type="video/mp4"/>
        </video>
        {/* <button id="capture-screenshot" onClick={captureScreenshot}>Capture DisplayMedia Screenshot</button> */}
    </div>
  )
}

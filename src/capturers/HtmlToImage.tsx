import { useContext } from "react";
import { toPng, toSvg, toJpeg, toBlob, toCanvas } from 'html-to-image';
import { CaptureContext } from '../contexts/CaptureContext';
import { ModalContext } from '../contexts/ModalContext';

const filterElement = (node:any) => {
  const exclusionClasses = ['App-link'];
  return !exclusionClasses.some((classname) => node.classList?.contains(classname));
}

export default function DomToImage() {
  const { setCapture } = useContext(CaptureContext);
  const { setModalOpen } = useContext(ModalContext);

  const handleCapture = (format:string):void => {
    const captureElement = document.querySelector("#root") as HTMLElement;

    switch (format) {
      case 'png':
        toPng(captureElement)
          .then(function (dataUrl) {
              // var img = new Image();
              // img.src = dataUrl;
              // document.body.appendChild(img);
              setCapture(dataUrl);
              setModalOpen(true);
          })
          .catch(function (error) {
              console.error('oops, something went wrong!', error);
          });
        break;
      case 'jpeg':
        toJpeg(captureElement, { quality: 0.95 })
          .then(function (dataUrl) {
              // var link = document.createElement('a');
              // link.download = 'my-image-name.jpeg';
              // link.href = dataUrl;
              // link.click();
              setCapture(dataUrl);
              setModalOpen(true);
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
        break;
      case 'svg':
        toSvg(captureElement, {filter: filterElement})
          .then(function (dataUrl) {
              setCapture(dataUrl);
              setModalOpen(true);
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
        break;
      case 'canvas':
        toCanvas(captureElement)
          .then(function (canvas) {
            setCapture(canvas.toDataURL("image/png"));
            setModalOpen(true);
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
        break;
      default:
        break;
    }
    // FileSaver required
    // domtoimage.toBlob(captureElement)
    //   .then(function (blob) {
    //       window.saveAs(blob, 'my-node.png');
    //   });
  }

  return (
    <div>
      <h5>HTML to Image</h5>
      <button onClick={() => handleCapture('png')}>Capture by html-to-image to PNG</button>
      <button onClick={() => handleCapture('jpeg')}>Capture by html-to-image to JPEG (95% quality)</button>
      <button onClick={() => handleCapture('svg')}>Capture by html-to-image to SVG (exclude .App-link elements)</button>
      <button onClick={() => handleCapture('canvas')}>Capture by html-to-image to canvas</button>
    </div>
  );
}

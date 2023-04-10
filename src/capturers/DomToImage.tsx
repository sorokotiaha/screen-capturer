import { useContext } from "react";
import domtoimage from 'dom-to-image';
import { CaptureContext } from '../contexts/CaptureContext';
import { ModalContext } from '../contexts/ModalContext';

const filterElement = (node:any) => {
  return (node.tagName !== 'CODE');
}

export default function DomToImage() {
  const { setCapture } = useContext(CaptureContext);
  const { setModalOpen } = useContext(ModalContext);

  const handleCapture = (format:string):void => {
    const captureElement = document.querySelector("#root") as HTMLElement;

    switch (format) {
      case 'png':
        domtoimage.toPng(captureElement)
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
        domtoimage.toJpeg(captureElement, { quality: 0.95 })
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
        domtoimage.toSvg(captureElement, {filter: filterElement})
          .then(function (dataUrl) {
              setCapture(dataUrl);
              setModalOpen(true);
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
        break;
      default:
        break;
    }

    // domtoimage.toBlob(captureElement)
    //   .then(function (blob) {
    //       window.saveAs(blob, 'my-node.png');
    //   });
  }

  return (
    <div>
      <button onClick={() => handleCapture('png')}>Capture by dom-to-image to PNG</button>
      <button onClick={() => handleCapture('jpeg')}>Capture by dom-to-image to JPEG (95% quality)</button>
      <button onClick={() => handleCapture('svg')}>Capture by dom-to-image to SVG (exclude code tag)</button>
    </div>
  );
}

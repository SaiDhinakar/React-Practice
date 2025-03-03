import { useState } from "react";
import Loading from "./Loading";

const QrCode = () => {
  const [img, SetImg] = useState("");
  const [loading, Setloading] = useState(false);
  const [qrData, SetQrData] = useState("Scan me!");
  const [qrSize, SetQrSize] = useState("150");
  function generateQR() {
    Setloading(true);
    SetImg("");
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setTimeout(() => {
        SetImg(url);
        Setloading(false);
      }, 2000);
      
    } catch (error) {
      console.log("Error generating QR code:", error);
      Setloading(false);
    } 
  }
  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.removeChild(link);
      })
      .catch((error)=>{
        console.log("Error downloading QR code", error);
      });
  }
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {img && <img src={img} className="qr-code-image" />}
      {loading && <Loading />}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
        </label>
        <input
          type="text"
          id="dataInput"
          value={qrData}
          onChange={(e) => SetQrData(e.target.value)}
        />
        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g., 150):
        </label>
        <input
          type="text"
          id="sizeInput"
          value={qrSize}
          onChange={(e) => SetQrSize(e.target.value)}
        />
        <button
          className="generate-qrcode"
          disabled={loading}
          onClick={generateQR}
        >
          Generate QR Code
        </button>
        <button className="download-qrcode" onClick={downloadQR}>
          Download QR Code
        </button>
      </div>
    </div>
  );
};

export default QrCode;

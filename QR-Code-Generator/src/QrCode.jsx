const QrCode = () => {
    function generateQR(){
        alert('generate');
    }
    function downloadQR(name){
        alert('download'+name);
    }
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      <img src="#" className="qr-code-image" />
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
        </label>
        <input type="text" id="dataInput" />
        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g., 150):
        </label>
        <input type="text" id="sizeInput" />
        <button className="generate-qrcode" onClick={generateQR}>Generate QR Code</button>
        <button className="download-qrcode" onClick={()=>downloadQR('Sai')}>Download QR Code</button>
      </div>
    </div>
  );
};

export default QrCode;

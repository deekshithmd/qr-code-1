import React, { useState } from "react";
import QRCODE from "qrcode";

export const QrCode = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const generateQrCode = () => {
    QRCODE.toDataURL(
      url,
      {
        width: 200,
        margin: 2,
        color: {
          dark: "#335383ff",
          light: "#eeeeeff",
        },
      },
      (err, url) => {
        if (err) {
          console.log("error", err);
        }
        console.log(url);
        setQr(url);
      }
    );
  };
  return (
    <div>
      <h3>QR Code Generator</h3>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={generateQrCode}>Generate</button>
      {qr && (
        <>
          <img src={qr} alt="qrcode" />
          <button href={qr} download="qrcode.png">Download</button>
        </>
      )}
    </div>
  );
};

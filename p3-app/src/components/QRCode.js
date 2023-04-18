import { Buffer } from 'buffer';
import QRCode from 'qrcode';
import React, { useEffect, useState } from 'react';

export const QRCodeImage = ({
  data
}) => {
  const [qrcodePng, setQrcodePng] = useState('');

  if(!data) {
    data = "mock data"
  }

  useEffect(() => {
    QRCode.toString(data, {
      errorCorrectionLevel: 'H',
      type: 'svg'
    }, (err, pngString) => {
      if (err) throw err;
      setQrcodePng(pngString);
    });
  }, []);

  const base64QrCodePng = Buffer.from(qrcodePng).toString('base64');
  return (
    <img src={`data:image/svg+xml;base64,${base64QrCodePng}`} alt="QR Code"/>
  );
}
  
import QRCode from 'qrcode';
import React, { useEffect, useState } from 'react';

export const QRCodeImage = async ({
  data
}) => {
  const [qrcodePng, setQrcodePng] = useState('');

  useEffect(() => {
    QRCode.toString(data, {
      errorCorrectionLevel: 'H',
      type: 'svg'
    }, (err, pngString) => {
      if (err) throw err;
      console.log('png data: ', pngString);
      setQrcodePng(pngString);
    });
  }, []);

  return (
    <img src={qrcodePng} alt="QR Code"/>
  );
}
  
import React from 'react'
import QrReader from 'react-qr-scanner'

const previewStyle = {
    height: 240,
    width: 320,
  }

export const QRScanner = () => {
    const handleScan = (data) => {
        console.log('scanned data: ', data);
    }
    return(
        <div>
        <QrReader
            delay={20}
            style={previewStyle}
            onScan={handleScan}
            />
    </div>
  );
}
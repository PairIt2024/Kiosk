import React, { useState, useEffect } from "react";

export default function QRCode({ latitude, longitude }) {
    const [qrCode, setQrCode] = useState("");

    // executes when latitude or longitude changes
    useEffect(() => {
        const fetchQRCode = async () => {
            if (!latitude || !longitude) { // ensure lat and lng not null
                console.error("Latitude and longitude are necessary");
                return;
            }

            // request to fetch QR code from server
            const url = `http://localhost:5001/qrCode/${latitude}/${longitude}`;
            try {
                const response = await fetch(url, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('QR Code:', data);
                setQrCode(data.qrCode);
            }
            catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchQRCode();
    }, [latitude, longitude]);

    return (
        <div>
            {qrCode && <img src={qrCode} alt="QR Code" />}
        </div>
    );
}
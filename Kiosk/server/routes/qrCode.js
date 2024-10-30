import express from "express";
import qrcode from "qrcode";


const router = express.Router();

router.get("/:latitude/:longitude", async (req, res) => {
    try {
        console.log("GET /:latitude/:longitude");
        const lat = req.params.latitude;
        const lng = req.params.longitude;
        let google_maps_url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

        let qrData = await qrcode.toDataURL(google_maps_url); // Generates QR code as data URL
        if (qrData == null) {
            return res.status(404).json({ message: "Invalid URL to create QR code" });
        }

        return res.json({ qrCode: qrData });
    }
    catch (err) {
        console.error("Error creating qr code:", err);
        res.status(500).json({ message: "Server error." });
    }
});

export default router;
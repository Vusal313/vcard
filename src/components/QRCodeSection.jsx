import React from "react";
import QRCode from "qrcode.react";

export default function QRCodeSection({ user }) {
  // vCard format for QR code
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:${user.lastName};${user.firstName}
FN:${user.firstName} ${user.lastName}
TITLE:${user.title}
TEL;TYPE=WORK,VOICE:${user.phone}
EMAIL:${user.email}
URL:${user.website}
ADR;TYPE=WORK:;;${user.address};;;;
END:VCARD
`.trim();

  return (
    <div className="qr-code-section">
      <h3>Scan my vCard</h3>
      <QRCode value={vCardData} size={160} />
    </div>
  );
}
